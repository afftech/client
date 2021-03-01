<template>
  <div>
    <h1>Register</h1>
    <input type="email" name="email" v-model="email" placeholder="email" />
    <input
      type="password"
      name="password"
      v-model="password"
      placeholder="password"
    />
    <button @click="register">Register</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: 'sss',
      password: 'ddd '
    }
  },
  methods: {
    register () {
      console.log('Register burron was clicked')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
