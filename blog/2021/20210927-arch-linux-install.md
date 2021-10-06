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


#### Synchronise the system clock

`timedatectl set-ntp true`

#### Update mirrorlist

1. Install reflector

	`pacman -Syy reflector`

2. Select mirrors based on your location, sorts them by speed.

	`reflector -c Australia -a 6 --sort rate --save /etc/pacman.d/mirrorlist`

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
