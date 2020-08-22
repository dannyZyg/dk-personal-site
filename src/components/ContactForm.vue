<template>
  <div class="card">
    <form id="app" @submit.prevent="submit">
      <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
        <label class="form__label">Name</label>
        <input class="form__input" v-model.trim="$v.name.$model" placeholder="Your name"/>
        <div class="error" v-if="!$v.name.required">
          Field is required
        </div>
        <div class="error" v-if="!$v.name.minLength">
          Name must have at least {{$v.name.$params.minLength.min}} letters.
        </div>
      </div>

      <div class="form-group" :class="{ 'form-group--error': $v.message.$error }">
        <label class="form__label">Message</label>
        <input class="form__input" v-model.trim="$v.message.$model" placeholder="Message"/>
        <div class="error" v-if="!$v.message.required">
          Field is required
        </div>
        <div class="error" v-if="!$v.message.minLength">
          Message must have at least {{$v.name.$params.minLength.min}} letters.
        </div>
      </div>

      <input type="submit">
    </form>
    {{ submitStatus }}
  </div>
</template>

<script>

import { required, minLength, between } from 'vuelidate/lib/validators'

export default {
  name: 'ContactForm',
  data () {
    return {
      name: null,
      message: null,
      email: null,
      submitStatus: null
    }
  },
  methods: {
    onClick () {
      this.message = 'Here you go :)'
    },
    submit() {
      console.log('submit!')
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        console.log('submitting')
        // do your submit logic here
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
        }, 500)
      }
    }
  },
  validations: {
    name: {
      required,
      minLength: minLength(3)
    },
    message: {
      required,
      minLength: minLength(3)
    }
  }
}
</script>

<style>
.error {
  color: red;
}
.form-group--error input {
  border-color: red; 
}
</style>
