<template>
  <Layout>
    <h2>Developer // Technologist</h2>
    <p>I am a developer and technologist from Sydney.</p>
    <p>You can find me at the creative sudio
      <a class="ext-link" href="https://s1t2.com.au" target="_blank">S1T2</a>
        where I work on
        scaling applications, figuring out nice dev-opsy workflows
        and generally trying to make useful things that work. I also lend a hand in
        creative coding and audio programming.
    </p>
    <p> My background is in music and audio engineering.
        I've spent the last decade trying to get closer to the machine in my
        creative pursuits.
        The logical conclusion was programming.
    </p>
    <p>I am passionate about linux, open source, privacy and tin foil hat designs.</p>
    <p>Vim wizard in training.</p>
    <p>Diligently learning Japanese with the
      <a class="ext-link" href="https://www.youtube.com/user/MATTvsJapan"
      target="_blank"> Mass Immersion Approach</a>.
      <div class="suck" @mouseover="mouseOver" @mouseleave="mouseLeave">
        <a href="https://www.youtube.com/watch?v=Qmfipv-H4_o"
        target="_blank">{{suck}}</a>
      </div>
    </p>
  </Layout>
</template>

<script>
export default {
  data()
  {
    return {
      suck: "下手なんですけど。",
    }
  },
  methods: {
    mouseOver()
    {
      this.suck = "I still suck though..."
    },
    mouseLeave()
    {
      this.suck = "下手なんですけど。"
    }
  }
}
</script>

<style>
</style>
