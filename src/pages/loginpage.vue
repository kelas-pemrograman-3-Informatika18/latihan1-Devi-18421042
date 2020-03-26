<template>
  <q-page class="bg-blue-3">
    <div class="row">
      <q-card class="fixed-center col-md-4 col-xs-12 bg-white" flat>
   <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="name"
        label="Username *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'wajib di isi']"
      />

      <q-input
        filled
        type="password"
        v-model="password"
        label="Your Password *"
        lazy-rules
        :rules="[
          val => val && val.length > 0 || 'wajib di isi',
        ]"
      />

      <div>
        <q-btn label="Login" type="Login" color="blue"/>
        <q-btn label="Reset" type="reset" color="black" flat class="q-ml-sm" />
        <q-btn to="registerr" label="register" type="register" color="blue" />
      </div>
    </q-form>
      </q-card>
    </div>
  </q-page>
</template>
<script>
export default {
  data () {
    return {
      name: null,
      password: null

    }
  },
  methods: {
    onSubmit () {
      if (this.name === 'devi' && this.password === '18421042') {
        this.$q.notify({
          type: 'positive',
          message: 'selamat login berhasil'
        })
        this.$$router.push('/home')
      } else {
        this.$q.notify({
          type: 'negative',
          message: 'gagal login, username / password salah'
        })
      }
    },
    onReset () {
      console.log('fungsi reset')
    },
    onRegister () {
      console.log('fungsi register')
    }
  }
}
</script>
