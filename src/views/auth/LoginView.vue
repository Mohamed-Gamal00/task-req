<template>
  <div class="login">
    <div class="container-fluid w-auto bg-light">
      <div class="row">
        <!-- col-6 form-->
        <div class="col-lg-6 m-0 p-0 align-self-center">
          <div class="row p-0 m-auto justify-content-center">
            <div class="col-md-10">
              <div class="mb-5">
                <h1 class="text-purple fw-bold900">hello,</h1>
                <p class="text-purple">welcome back.</p>
              </div>
              <form class="form-inline" @submit.prevent="clientLogin">
                <div class="row justify-content-center">
                  <div class="col-md-10 mt-lg-4 mb-lg-4">
                    <div class="row">
                      <!-- phone-->
                      <div class="col-md-12 mb-3">
                        <label for="validationustomUsername">Phone</label>
                        <div class="input-group">
                          <div class="input-group-prepend">
                            <span
                              class="input-group-text"
                              id="inputGroupPrepend"
                              style="padding: 0.9rem"
                            >
                              <FontAwesome class="ms-2 fs-16" icon="phone-volume" />
                            </span>
                          </div>
                          <input
                            type="text"
                            class="form-control"
                            id="validationustomUsername"
                            placeholder="Username"
                            aria-describedby="inputGroupPrepend"
                            v-model="phone"
                          />
                          <div class="invalid-feedback">Please choose a username.</div>
                        </div>
                      </div>
                      <!-- phone_code -->
                      <div class="col-md-12 mb-3">
                        <label for="validationCustomUsernam">phone_code</label>
                        <div class="input-group">
                          <div class="input-group-prepend">
                            <span
                              class="input-group-text"
                              id="inputGroupPrepend"
                              style="padding: 0.9rem"
                            >
                              <FontAwesome class="ms-2 fs-16" icon="phone-volume" />
                            </span>
                          </div>
                          <input
                            type="text"
                            class="form-control"
                            id="validationCustomUsernam"
                            placeholder="phone_code"
                            aria-describedby="inputGroupPrepend"
                            v-model="phone_code"
                          />
                          <div class="invalid-feedback">Please choose a username.</div>
                        </div>
                      </div>
                      <!-- password -->
                      <div class="col-md-12 mb-3">
                        <label for="validationCustomUsername">password</label>
                        <div class="input-group">
                          <div class="input-group-prepend">
                            <span
                              class="input-group-text"
                              id="inputGroupPrepend"
                              style="padding: 0.9rem"
                            >
                              <FontAwesome class="ms-2 fs-16" icon="lock" />
                            </span>
                          </div>
                          <input
                            type="text"
                            class="form-control"
                            id="validationCustomUsername"
                            placeholder="password"
                            aria-describedby="inputGroupPrepend"
                            v-model="password"
                          />
                        </div>
                      </div>
                      <!-- login -->
                      <div class="d-flex justify-content-end">
                        <div class="col-md-12 justify-content-center text-center">
                          <button type="submit" style="width: 100%" class="btn bg-dark text-yellow">
                            login
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <!-- col-6 img -->
        <div class="col-lg-6 containerr bg-black m-0 p-0">
          <div class="containerr">
            <img src="@/assets/images/login.png" class="vh-100" alt="Nature" style="width: 100%" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import setAuthHeader from '@/utils/setAuthHeader'
import axios from 'axios'
export default {
  name: 'LoginCom',
  data() {
    return {
      phone: '',
      phone_code: '',
      password: ''
    }
  },
  mounted() {
    let user = localStorage.getItem('user')
    if (user) {
      this.$router.push({ name: 'client' })
    }
  },
  methods: {
    async clientLogin() {
      const credentaials = {
        phone: this.phone,
        phone_code: this.phone_code,
        password: this.password
      }
      console.log('form validated Succesfuly')
      await axios
        .post(`http://lawyer.phpv8.aait-d.com/api/client_web/login`, credentaials, {})
        .then((res) => {
          console.log(res)
          localStorage.setItem('token', res.data.data.token)
          localStorage.setItem('user', JSON.stringify(res.data))
          setAuthHeader(res.data.token)
          this.$router.push({ name: 'client' })
        })
        .catch((err) => {
          console.log(err)
          // this.$router.push({ name: 'servererror' })
        })
    }
  }
}
</script>

<style scoped>
.input-group-text[data-v-409777eb] {
  border-bottom-right-radius: 0px !important;
  border-top-right-radius: 0px !important;
}
.login {
  direction: ltr;
  overflow: hidden;
}
/*col-5 bg-img text */
.containerr {
  position: relative;
  font-family: Arial;
}
.containerr img {
  object-fit: fill;
  opacity: 100%;
}
.text-block {
  position: absolute;
  bottom: 60px;
  /* background-color: black; */
  color: white;
  padding-left: 20px;
  padding-right: 20px;
}
/* col-8 input forms */
@media only screen and (max-width: 600px) {
  .containerr {
    display: none;
  }
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* icon */
.form-control:focus {
  color: var(--bs-body-color);
  background-color: var(--bs-body-bg);
  border-color: #20212259;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(0, 0, 0, 0);
}
.input-group-text {
  display: flex;
  align-items: center;
  padding: 0rem 0.75rem;
  font-size: 2rem;
  font-weight: 400;
  line-height: 1.5;
  color: #c8a45d;
  text-align: center;
  white-space: nowrap;
  background-color: #ffffff;
  border: 1px solid #c9c9c9;
  border-radius: 0rem;
  border-bottom-right-radius: 7px !important;
  border-top-right-radius: 7px !important;
}
/* Firefox */
input[type='number'] {
  -moz-appearance: textfield;
}
</style>
