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
        label="Nama *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'wajib di isi']"
      />

      <q-input
        filled
        type="int"
        v-model="NPM"
        label="NPM *"
        lazy-rules
        :rules="[
          val => val && val.length > 0 || 'wajib di isi',
        ]"
      />
      <q-input outlined v-model="gmail" label="gmail" lazy-rules
        :rules="[
          val => val && val.length > 0 || 'wajib di isi',
        ]"/>
      <div class="q-px-sm">
      Pilih Prodi: <strong>{{ shape }}</strong>
    </div>
      <div class="q-pa-md">
    <div class="q-gutter-sm">
      <q-radio v-model="prodi" val="if" label="Informatika" />
      <q-radio v-model="prodi" val="si" label="Sistem Informasi" />
      <q-radio v-model="prodi" val="ilkom" label="Ilmu Komunikasi" />
      <q-radio v-model="prodi" val="hukum" label="Hukum" />
    </div>

  </div>

      <q-toggle v-model="accept" label="data sudah benar" />

      <div>
        <q-btn to="/" label="Submit" type="submit" color="red"/>
        <q-btn to="registerr" label="Reset" type="reset" color="red" flat class="q-ml-sm" />
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
      NPM: null,
      prodi: null,
      gmail: '',

      accept: false
    }
  },
  methods: {
    onSubmit () {
      console.log('fungsi submit')
    },
    onReset () {
      console.log('fungsi reset')
    }
  }
}
</script>
