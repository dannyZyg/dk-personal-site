---
title: 'On learning Tidal Cycles and SuperCollider'
description: 'My experiences learning Tidal Cycles and SuperCollider'
pubDate: 'Sep 08 2023'
heroImage: '/supercollider-logo.svg'
---

My first exposure to the music programming language and environment
SuperCollider was after listening to Tape's 2008 album *Luminarium*. In an
interview with the band, which now looks to be gone from the internet, I
distinctly remember reading that one of the members processed the acoustic
sounds with a program called SuperCollider. I was beyond excited to discover
that this was a free program I could download from the internet, but after
booting it up for the first time I was met with a blank white text editor and
the only way I knew how to react at the time was 'WTF!' [^1]. Only a year or two later
I would end up learning some Max programming at Macquarie Uni, which too seemed impossible, but text
programming at this stage was a step too far.

In case you aren't familiar with either Tidal Cycles or SuperCollider, they are
both (at the very least) programming languages for algorithmic composition:
- **Tidal Cycles**: *"Live coding music with Algorithmic patterns"*
- **SuperCollider**: *"A platform for audio synthesis and algorithmic composition, used by musicians, artists and researchers working with sound"*

## First cycles with Tidal

Fast forward to the lockdowns of 2020/2021 and I've already been programming
for a few years at this point. Somehow I remembered an interesting musical
movement/process called live coding (also known as algorave) - I had first
heard about this in London but had kind of ignored it due to a lack of real
interest in electronic music [^2] (at least in relation to the *rave* in
*algorave*). I had started mucking around with music again, getting really into
electronic music in a way that I never had before, yet was getting bored and
frustrated with typical Digital Audio Workstations. After some initial research
online I decided that Tidal Cycles seemed like a popular choice with a nice
community so I set off on learning the basics.

Two things struck me in this time:
1) I was kicking myself for having not engaged with this more while in London - the
Tidal Cycles creator Alex McLean had even completed his PhD at Goldsmiths in the
department that I was studying in there.
2) As I will discuss, SuperCollider had once again reared its head but this time I had some
programming skills, and could hopefully get past the blank screen.

I got started with Tidal by watching Alex McLean's excellent [Tidal
Club](https://youtube.com/playlist?list=PL2lW1zNIIwj3bDkh-Y3LUGDuRcoUigoDs&si=Sx3K0kaS2kBcUIDJ)
tutorials. From there it has been a combo of reading the docs, playing around with Tidal, revisiting the videos
as I forget things and spending a bit of time in the Tidal Cycles discord and forum to get tips.

For vim users there is even a fantastic
[plugin](https://github.com/tidalcycles/vim-tidal), and assuming you have
SuperCollider (and SuperDirt) loaded up, it will startup Tidal itself and send
the first messages to SC when you evaluate the first chunk of code in a `.tidal`
file.

One interesting outcome of learning Tidal is that it has made me curious about
the underlying technologies, both SuperCollider (the default sound engine) and
Haskell (the language that Tidal itself is written in). Perhaps a huge
distraction from the goal of making music, I started to identify and grok the
functional style of the Tidal language and syntax, and felt a strong desire to
gel more with this style of coding. I distinctly remember a moment a few months
ago where I finally understood the difference between Tidal's `#` and `$` as
well as getting structure and values from left and right with `|<`, `<|`, `>|`
and `|>`. All of these are confusing at first, but with time you start to adopt
these concepts. My experience with Haskell is still very limited, but I get a
real sense of how it has informed Tidal, and chaining functions together to
make musical patterns probably feels like second nature to someone who has more
Haskell know-how.

As for SuperCollider, its worth noting that it doesn't even need to be used
with Tidal Cycles at all. Tidal after all is just a language for generating patters.
These patterns can be sent anywhere (over Open Sound Control) to control just
about anything, be it a DAW, a modular synth or a Max patch. SuperCollider (and
the suggested Quark SuperDirt) is just there as a default sound source, with
synths, samplers and MIDI handling at the ready.

Some fun things to do in Tidal Cycles:

- Sequence an external synth over MIDI
- Play around with the relatively new Ableton Link support in Tidal
- Write your first SynthDef in SC and get sound going from Tidal (there is a great tutorial as part of Tidal Club)
- Try `jux rev` on just about anything - juxtaposes a reversed version of the pattern on the opposite L/R channel

### Moving past SuperCollider's blank page

As with wanting to know more about Haskell, I also wanted to know more about
SuperCollider. This, I will say, has been much more difficult and time consuming than
learning Tidal. While Tidal Cycles is a relatively small music-focused syntax,
SuperCollider is a *huge* language. Sure, it does music, but it also does
general purpose programming stuff in the sense that you can do things with
string manipulation, iteration, branching and even file handling. Instead of
the concise functional style of Tidal, SuperCollider is an Object Oriented
beast which requires you to study documentation for different classes and their
methods. This however is not a complaint, I actually love the interactive
documentation in the SuperCollider IDE in which you can evaluate snippets of
code as you are learning about various classes.

I won't go too much more into what SC is and what it can do, but instead I'll
focus on how I've attempted to learn it thus far.

The obvious place to start with SuperCollider is [Eli
Fieldsteel's](https://www.youtube.com/@elifieldsteel) absolutely incredible
video tutorials. Most of these seem to have been recorded for his classes at
University of Illinois which he (and the university) have generously offered up
on YouTube. Not that I've been through all of them, but I've learned heaps from
following the lectures and actually doing the homework he sets for each class.
Eli Fieldsteel has a new book arriving later in the year which sounds great
too - I will no doubt read that also! Without Eli's videos on YouTube I don't
think I would have made it that deep into SuperCollider on my own.

I've also read the wonderful SuperCollider book which provides a
different approach and is perhaps better suited to someone who has a little bit
of SC under their belt - I've found that I gain more from it with time as I
revisit it.

Another big source of inspiration and education has been Nathan Ho's
[blog](https://nathan.ho.name/) and [SynthDef
channel](https://www.youtube.com/@synth_def/). In the SynthDef videos you get
to sit back and watch a very experienced SC user creating music, commenting the
code as he goes. I wish there was more content like this within the
SuperCollider community, as initially it was difficult to even find enough
evidence to suggest that SuperCollider was worth learning!

Finally, there are the built in tutorials within the SuperCollider IDE's
documentation. I've not worked through many of these but I'm thinking it could
be a good way to cement some of the fundamentals.

It has taken a long while to get used to the syntax in SC - it's just a bit
*strange*, or at least its not one I had really been exposed to before (having
been based on the Smalltalk language). One final note on my experience of using
SuperCollider is that I'm pretty desperate to get back to editing in Neovim. I
haven't taken enough time to setup all the tooling to get it hooked up (most of
it is ready and available). Mads Kjeldgaard has some [blog
posts](https://madskjeldgaard.dk/posts/neovim-as-sc-ide/) about this. One
exception is the relatively new development happening on the SuperCollider
Language Server Protocol which is not yet Neovim compatible. Exciting
developments ahead!

### What next?

So where does this leave me now? How far have I got and where will I go?

- Tidal Cycles is an incredible language for creating musical patterns. I still
suck at it but I have moments where I write a very succinct piece of code that
creates something really interesting and unpredictable, and I think 'I would
never have made this in Ableton'. That is really its strength to me, after all
it is geared towards live performance so there is a sense of immediacy to it.
- I find sound design a bit frustrating in Tidal Cycles - this has been the
driving force behind me picking up SC. I struggle to make the built in synths
sound dynamic and less rigid and wooden. I want them to breathe and modulate.
I'm sure this is possible with more practice and skill, but using SuperDirt
just makes me want to pop over to SuperCollider and build my own sound sources.
I even considered just using VSTs in Ableton (controlled by Tidal), but decided
that I'd like to stay fully text based.
- I feel like going all in on SuperCollider! Sure, its a weird language, its
not as terse and elegant as Tidal Cycles, its a lot more complex, but its
really, really powerful. I'm constantly finding snippets of SuperCollider code
that do *crazy* things. As someone who is less interested in performing live
these days, supercollider has a lot more appeal - I can take my time when
writing code and can accept more verbosity and complexity in return for greater
control in the sound design. It also opens up a lot of opportunities for sound
installations due to it not requiring human input like Tidal.
- There is still a place in my heart for
[Max](https://cycling74.com/products/max) as that was my first introduction to
any sort of programming. I'm kinda keen to stick to the type of coding I can do
all on a keyboard (less clicking around) but there are some really exciting
developments over at Cycling74 with things like RNBO!
- After spending some solid time with SuperCollider I may loop back to Tidal
Cycles and find that along with some custom synths in SuperCollider, it is the
perfect combo of quick, expressive language from Tidal paired with careful
sound design using SC.

This was not meant to be a Tidal vs SC shootout, but comparing them does make
me think about the kind of music that I want to make, and what tool is going to
be the right one for the job. Now, if only I could program these damn things better...

---

[^1]: Other 'WTF!' moments include opening a blank Max patcher for the first time and wondering how a bunch of seemingly unmusical 'objects'
could make sound.

[^2]: I liked a small subset of electronic music, and electronic music that had
been brought into the context of live bands, but I certainly did not *get*
things like techno, house or UK garage.
