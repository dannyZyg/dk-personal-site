<template>
  <div class="layout">
  <link href="https://fonts.googleapis.com/css2?family=Nunito&display=swap" rel="stylesheet">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Me</g-link>
        <g-link class="nav__link" to="/contact">You</g-link>
        <g-link class="nav__link" to="/experiments/">Experiments</g-link>
      </nav>
    </header>
    <slot/>
    <div class="footer">
      <div class="footer-link" >
        <a href="https://github.com/dannyZyg" title="GitHub" class="icon-link ext-link" target="_blank">
          <i class="fas fa-code-branch"></i>
        </a>
      </div>

      <div class="footer-link" >
        <a href="https://github.com/dannyZyg" title="LinkedIn" class="icon-link ext-link" target="_blank">
          <i class="fab fa-linkedin"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  data()
  {
    return {
      footerLinks: {
        github: {
          title: 'GitHub',
          text: 'code',
          link: 'https://github.com/dannyZyg',
          icon: 'fas fa-code-branch'
        },
        linkedin: {
          title: 'LinkedIn',
          text: 'connect',
          link: 'https://github.com/dannyZyg',
          icon: 'fab fa-linkedin'
        }
      }
    }
  }
}

</script>

<style>

:root {
  --highlight: #98fb98;
  --text-col: #fffacd;
  --link-hover: #52bcc7;
}

body {
  text-align: center;
  font-family: 'Nunito', sans-serif;
  background: #333333;
  color: var(--text-col);
  margin:0;
  padding:0;
  line-height: 1.5;
}

/* div { */
/*   border: 0.1rem solid; */
/*   border-color: yellow; */
/* } */

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}

.footer {
  text-align: center;
}

.footer-link {
  line-height: 1.0;
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  /* margin: 0.5rem; */
  margin:0px auto

}

.icon-link {
}

a {
  color: var(--highlight);
  text-decoration: none;
}

a:hover {
  color: var(--link-hover);
}

</style>
