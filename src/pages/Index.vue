<template>
  <Layout>
    <h1>{{ $page.metadata.siteName }}</h1>
    <div class="content">
      <p>I am a {{ $page.metadata.siteDescription }} from Sydney, currently working as a full stack developer at
        <a class="ext-link" href="https://goodpairdays.com/invite/CHILI216342/" target="#">Good Pair Days</a>.
        Or is it fullstack, or full-stack...?
      </p>
      <p> My background is in music and audio engineering.
          I've spent the last decade trying to get closer to the machine in my
          creative pursuits.
          The logical conclusion was programming.
      </p>
      <p>I am passionate about linux, (neo)vim, free and open source software, privacy and tin foil hat designs.</p>
      <p>I also appreciate meditation, cooking and getting into nature.</p>
      <p>I have started
      <a href="https://www.s1t2.com.au/blog/experiential/interactive-audio-future" target="#">writing</a>
      about my experience and I plan to do this more and more!</p>
      <div>Slowly learning Japanese...
        <div class="suck" @mouseover="mouseOver" @mouseleave="mouseLeave">
          <a href="" target="#">{{suck}}</a>
        </div>
      </div>
      <div class="contact">
      Say hello -->> hello (AT) dannykeig (dot) com
      </div>

      <!-- List posts -->
      <div class="posts">
        <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
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

  posts: allPost(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        date (format: "D. MMMM YYYY")
        path
        tags {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>

<script>

import PostCard from '~/components/PostCard.vue'

export default {
  components: {
    PostCard
  },
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
