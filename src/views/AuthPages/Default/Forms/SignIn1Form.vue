<template>
  <ValidationObserver ref="form" v-slot="{ handleSubmit }">
    <form class="mt-4" novalidate @submit.prevent="handleSubmit(onSubmit)">
      <b-form-group label="Username" label-for="email1">
        <b-form-input id="email1" type="text" v-model="user.email"></b-form-input>
      </b-form-group>
      <ValidationProvider vid="password" name="Password" rules="required" v-slot="{ errors }">
        <div class="form-group">
          <label for="passwordInput">Password</label>
          <router-link to="/auth/password-reset1" class="float-right">
            Forgot password?
          </router-link>
          <input type="password"  :class="'form-control mb-0' +(errors.length > 0 ? ' is-invalid' : '')"
                 id="passwordInput"
                 v-model="user.password" placeholder="Password" required>
          <div class="invalid-feedback">
            <span>{{ errors[0] }}</span>
          </div>
        </div>
      </ValidationProvider>
      <div class="d-inline-block w-100">
        <button type="submit" class="btn btn-primary float-right">Sign in</button>
      </div>
    </form>
  </ValidationObserver>
</template>

<script>
import { mapGetters } from 'vuex'
import auth from '../../../../services/auth'

export default {
  name: 'SignIn1Form',
  props: ['formType', 'email', 'password'],
  data: () => ({
    user: {
      email: '',
      password: ''
    }
  }),
  mounted () {
    this.user.email = 'demdem'
    this.user.password = '12345'
  },
  computed: {
    ...mapGetters({
      stateUsers: 'Setting/usersState'
    })
  },
  methods: {
    onSubmit () {
      this.login()
    },
    login () {
      auth.login({ username: this.user.email, password: this.user.password }).then(response => {
        if (response.status) {
          this.$router.push({ path: '/' })
        } else if (response.data.errors.length > 0) {
          this.$refs.form.setErrors(response.data.errors)
        }
      }).finally(() => { this.loading = false })
    }
  }
}
</script>
