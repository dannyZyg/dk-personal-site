<template>
  <Layout>
    <h1>{{ $page.metadata.siteName }}</h1>
    <div class="content">
      <p>I am a {{ $page.metadata.siteDescription }} from Sydney.</p>
      <p>You can find me at the creative technology studio
        <a class="ext-link" href="https://s1t2.com.au" target="#">S1T2</a>
          where I build scalable applications, figure out nice dev-opsy workflows
          and try to improve existing code. I also lend a hand in
          creative coding and audio programming from time to time.
      </p>
      <p> My background is in music and audio engineering.
          I've spent the last decade trying to get closer to the machine in my
          creative pursuits.
          The logical conclusion was programming.
      </p>
      <p>I am passionate about linux, vim, open source, privacy and tin foil hat designs.</p>
      <p>I have started 
      <a href="https://www.s1t2.com.au/blog/experiential/interactive-audio-future" target="#">writing</a>
      about my experience and I plan to do this more and more!</p>
      <div>Diligently learning Japanese with the
        <a class="ext-link" href="https://www.youtube.com/user/MATTvsJapan"
        target="#"> Mass Immersion Approach</a>.
        <br>
        <div class="suck" @mouseover="mouseOver" @mouseleave="mouseLeave">
          <a href="https://www.youtube.com/watch?v=Qmfipv-H4_o" target="#">{{suck}}</a>
        </div>
      </div>
      <div class="contact">
      Say hello -->> dannykeig (AT) fastmail (dot) com
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</page-query>

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

h1 {
  text-align: center;  
}

.content {
  font-size: 19px;
  text-align: center;  
  margin-bottom: 20px;
}

.suck {
  margin-top: 20px;
  margin-bottom: 20px;
}

</style>
