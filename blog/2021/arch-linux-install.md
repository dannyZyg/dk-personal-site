---
title: Installing Arch Linux with full disk encryption (LUKS) while using LVM.
tags: [linux, tech-diary]
date: 2021-09-27
---

***
Lately I have been making an effort to keep some sort of tech journal where
I'll record things, usually bug fixes, in an attempt to save my future self
from having to solve the same problem more than once. I thought it wouldn't
hurt to publish these.
***


The following assumes you have booted into a fresh Arch ISO, perhaps connected
via SSH and have got yourself connected to the internet.

#### Preparing SSH

`ip link`
`ping archlinux.org`
`ip address | grep 192`

`systemctl status sshd`
`systemctl start sshd`

`passwd` to set a root password

on your machine
`ssh root@ip_address_of_booted_arch`

#### Synchronise the system clock

`timedatectl set-ntp true`

#### Update mirrorlist

1. Install reflector

	`pacman -Syy reflector`

2. Select mirrors based on your location, sorts them by speed.

	`reflector -c Australia -a 6 --sort rate --save /etc/pacman.d/mirrorlist`

	`pacman -Syy`

### Partitioning the disk

You need two partitions:
1. EFI partition
2. Installation partition for the LVM

*If installing linux on a mac, you should already have an EFI partition, so you
can skip that step. Just make note of this path and use it in the rest of the
installation.*

**For the rest of this guide I am going to use the placeholders {EFI_PATH} and {LVM_PATH} for your disk partitions.
For example, if your lvm partition is /dev/sda2, then use that in place of {LVM_PATH} everywhere in this guide.**


You will need to find the disk path you would like to use. This could be something like nvme, sda or vda.

Inspect the available disks with `lsblk`

`gdisk {YOUR DISK}`

Once in gdisk

Making the EFI partition
1. `n` for new partition
2. The first sector should be the default (press enter)
3. `+200M` for the last sector
4. `ef00` for the code of an EFI system partition

- *note: this is now your {EFI_PATH}*

Making the LVM partition
1. `n` for new partition
2. The first sector should be the default (press enter)
3. The last sector should be the default (press enter) - uses up remaining space.
4. `8e00` for the code of a LVM partition

- *note: this is now your {LVM_PATH}*

Type `w` and press enter to write these changes. Confirm with `Y`.

Inspect the partitions with `lsblk` once more and you should see your two new partitions.

### Encrypting the LVM partition

`cryptsetup luksFormat {LVM_PATH}`

Type `YES` to acknowledge that this will overwrite all the data on the disk.
Type in your passphrase



### Open the container

`cryptsetup open {LVM_PATH} cryptlvm`
enter pass

### create logical volumes

- create physical volume
	`pvcreate /dev/mapper/cryptlvm`

- create volume group
	`vgcreate vg1 /dev/mapper/cryptlvm`

- create logical volumes
	- root `lvcreate -L 40G vg1 -n root`
	- swap `lvcreate -L 8G vg1 -n swap`
	- home `lvcreate -l 100%FREE vg1 -n home`


`lsblk`

```
nvme0n1        259:0    0 476.9G  0 disk
├─nvme0n1p1    259:1    0   200M  0 part
└─nvme0n1p2    259:2    0 476.7G  0 part
  └─cryptlvm   254:0    0 476.7G  0 crypt
    ├─vg1-root 254:1    0    40G  0 lvm
    ├─vg1-swap 254:2    0     8G  0 lvm
    └─vg1-home 254:3    0 428.7G  0 lvm
```

### Format partitions

remember vg1 is the volume group created before!

`mkfs.fat -F32 /dev/{EFI_PATH}`

`mkfs.ext4 /dev/vg1/root`

`mkfs.ext4 /dev/vg1/home`

`mkswap /dev/vg1/swap`


### Mount the partitions

`mount /dev/vg1/root /mnt`

`mkdir /mnt/home`
`mount /dev/vg1/home /mnt/home`

`mkdir /mnt/boot`
`mount /dev/{EFI_PATH} /mnt/boot`


### Activate swap

`swapon /dev/vg1/swap`

```
nvme0n1        259:0    0 476.9G  0 disk
├─nvme0n1p1    259:1    0   200M  0 part  /mnt/boot
└─nvme0n1p2    259:2    0 476.7G  0 part
  └─cryptlvm   254:0    0 476.7G  0 crypt
    ├─vg1-root 254:1    0    40G  0 lvm   /mnt
    ├─vg1-swap 254:2    0     8G  0 lvm   [SWAP]
    └─vg1-home 254:3    0 428.7G  0 lvm   /mnt/home
```

### Install base packages

*You could sub out `linux` for `linux-lts` for the long term support version.*

`pacstrap /mnt base linux linux-firmware vim intel-ucode lvm2`

### Generate filesystem table


`genfstab -U /mnt >> /mnt/etc/fstab`

*`-U will use the UUIDs when generating the table`*

Check that everything is mounted correctly
- /
- /boot
- /home
- swap
`cat /mnt/etc/fstab`


### Enter the arch install
`arch-chroot /mnt`

### Localisation

`timedatectl list-timezones | grep Sydney`

output: `Australia/Sydney`

`ln -sf /usr/share/zoneinfo/Australia/Sydney /etc/localtime`

sync hw clock to system clock
`hwclock --systohc`

`vim /etc/locale.gen`

search for the locale you'd like, in my case
`#en_AU.UTF-8 UTF-8`

uncomment the line:
`en_AU.UTF-8 UTF-8`

generate the locales
`locale-gen`

set the locale conf

`echo LANG=en_AU.UTF-8 >> /etc/locale.conf`

### Configure hostname

`vim /etc/hostname`

name the machine
`archlvm` save and quit

`vim /etc/hosts`

```
127.0.0.1	localhost
::1			localhost
127.0.0.1	archlvm.localdomain	archlvm
```

### set root pw

`passwd`

### Install additional packages

*If you installed `linux-lts` before, you should install `linux-lts-headers` here*
```
pacman -S grub efibootmgr networkmanager network-manager-applet wireless_tools wpa_supplicant dialog os-prober mtools dosfstools base-devel linux-headers git reflector bluez bluez-utils pulseaudio-bluetooth cups xdg-utils xdg-user-dirs openssh
```

### Modify init cpio conf file

`vim /etc/mkinitcpio.conf`

modify this line to add `encrypt` and `lvm2`
`HOOKS=(base udev autodetect modconf block filesystems keyboard fsck)`

becomes:
`HOOKS=(base udev autodetect modconf block encrypt lvm2 filesystems keyboard fsck)`

recreate init ram

*use `linux-lts` here if that's what you installed before*
`mkinitcpio -p linux`


### install grub

`grub-install --target=x86_64-efi --efi-directory=/boot --bootloader-id=GRUB`


Find the UUID of the lvm partition
`blkid`

```
/dev/nvme0n1p2: UUID="Your UUID" TYPE="crypto_LUKS" PARTLABEL="Linux LVM" PARTUUID="Your PARTUUID"
```

grap the UUID text

`vim /etc/default/grub`

`GRUB_CMDLINE_LINUX="cryptdevice=UUID=YOUR_UUID_HERE:cryptlvm root=/dev/vg1/root"`

*where cryptlvm is the name of the encrypted partition and root is the logical volume path of the root partition*

generate configuration file for grub

`grub-mkconfig -o /boot/grub/grub.cfg`

### Enable some services
- `systemctl enable NetworkManager`
- `systemctl enable bluetooth`
- `systemctl enable cups`

### Create a user

`useradd -mG wheel danny`

	- `-m` = create home dir
	- `-G` = belongs to the supplementary group `wheel`

Give a password
`passwd danny`

`EDITOR=vim visudo`

Find this line:
`# %wheel ALL=(ALL) ALL`

and uncomment:
`%wheel ALL=(ALL) ALL`

now every member of the wheel group will have sudo privileges


### Exit installation

`exit`
`umount -a`
`reboot`


### Moment of truth

If everything has gone according to plan you should now see the grub bootloader options pop up with `Arch Linux`.

Selecting this will prompt you to decrypt the volume after which you should be presented with a login prompt!


`nmtui`

navigate to `Activate a connection`


### Install graphics drivers

`sudo pacman -S xf86-video-intel` different for amd or nvidia
