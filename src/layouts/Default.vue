<template>
  <div class="layout">
    <slot/>
    <div v-for="icon in footerLinks" :key="icon.title" class="footer">
      <div class="footer-link" >
        <a :href="icon.link" :title="icon.title" class="icon-link ext-link" target="_blank">
          <font-awesome-icon :icon="[icon.faPrefix, icon.faIcon]" />
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
      footerLinks: [
        {
          title: 'GitHub',
          link: 'https://github.com/dannyZyg',
          faPrefix: 'fab',
          faIcon: 'github'
        },
        {
          title: 'LinkedIn',
          link: 'https://www.linkedin.com/in/danny-keig-3ab06a1b6/',
          faPrefix: 'fab',
          faIcon: 'linkedin'
        }
      ]
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
  margin: 60px auto;
  margin-bottom: 60px;
  padding-left: 20px;
  padding-right: 20px;
}

.nav__link {
  margin-left: 20px;
}

.footer {
  text-align: center;
  display: inline-flex;
  flex: row;
  width: 70px;
}

.icon-link {
  text-align: center;

}

.footer-link {
  line-height: 1.0;
  font-size: 30px;
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  /* margin: 0.5rem; */
  margin:0px auto

}

a {
  color: var(--highlight);
  text-decoration: none;
}

a:hover {
  color: var(--link-hover);
}

</style>
