<template>
  <div class="register">
    <div class="container-fluid w-auto vh-100 bg-light">
      <div class="row vh-100">
        <!-- col-7 form-->
        <div class="col-lg-6 m-0 p-0 align-self-center">
          <div class="row p-0 m-auto justify-content-center">
            <div class="col-md-10">
              <form class="form-inline"  @submit.prevent="Register()">
                <div class="row">
                  <!-- name -->
                  <div class="row mb-3">
                    <!-- الاسم الاول -->
                    <div class="col-md-6">
                      <label class="mb-1 text-purple" for="fname">full_name</label>
                      <div class="input-group mb-2 mr-sm-2">
                        <input type="text" class="form-control" v-model="full_name" id="fname" />
                      </div>
                    </div>
                  </div>
                  <!-- email -->
                  <div class="row">
                    <div class="col-md-12 mb-3">
                      <label class="mb-1 text-purple" for="email">email</label>
                      <div class="input-group mb-2 mr-sm-2">
                        <input type="email" v-model="email" class="form-control" id="email" />
                      </div>
                    </div>
                  </div>
                  <!-- password -->
                  <div class="row">
                    <!-- كلمة المرور -->
                    <div class="col-md-6 mb-3">
                      <label class="mb-1 text-purple" for="password">password</label>
                      <div class="input-group mb-2 mr-sm-2">
                        <input
                          type="password"
                          v-model="password"
                          class="form-control"
                          id="password"
                        />
                      </div>
                    </div>
                    <!-- تاكيد كلمة المرور -->
                    <div class="col-md-6">
                      <label class="mb-1 text-purple" for="confirmPass"
                        >password_confirmation</label
                      >
                      <div class="input-group mb-2 mr-sm-2">
                        <input
                          type="password"
                          v-model="password_confirmation"
                          class="form-control"
                          id="confirmPass"
                        />
                      </div>
                    </div>
                  </div>
                  <!-- phone -->
                  <div class="row">
                    <div class="col-md-12 mb-3">
                      <label class="mb-1 text-purple" for="phone">phone</label>
                      <div class="input-group mb-2 mr-sm-2">
                        <input type="text" v-model="phone" class="form-control" id="phone" />
                      </div>
                    </div>
                  </div>
                  <!-- phone_code -->
                  <div class="row">
                    <div class="col-md-12 mb-3">
                      <label class="mb-1 text-purple" for="phone_code">phone_code</label>
                      <div class="input-group mb-2 mr-sm-2">
                        <input
                          type="text"
                          v-model="phone_code"
                          class="form-control"
                          id="phone_code"
                        />
                      </div>
                    </div>
                  </div>
                  <!-- انشاء حساب -->
                  <div class="d-flex justify-content-end">
                    <div class="col-md-4 justify-content-start">
                      <button style="width: 100%" class="btn text-white">إنشاء حساب</button>
                      <div class="text-center mt-lg-2">
                        <span class="fs-10 fw-bold">Have an account? login</span>
                        <button
                          class="btn text-purple fs-10 fw-bold cairo"
                          :to="{ name: 'login' }"
                        >
                          تسجيل دخول
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <!-- col-5 img -->
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
      full_name: '',
      email: '',
      password: '',
      password_confirmation: '',
      phone: '',
      phone_code: ''
    }
  },
  // mounted() {
  //   let user = localStorage.getItem('user')
  //   if (user) {
  //     this.$router.push({ name: 'client' })
  //   }
  // },
  methods: {
    async Register() {
      const credentaials = {
        full_name:this.full_name,
        email:this.email,
        password:this.password,
        password_confirmation: this.password_confirmation ,
        phone: this.phone,
        phone_code: this.phone_code,
      }
      console.log('form validated Succesfuly')
      await axios
        .post(`http://lawyer.phpv8.aait-d.com/api/client_web/register`, credentaials, {})
        .then((res) => {
          console.log(res)
          localStorage.setItem('token', res.data.data.token)
          localStorage.setItem('user', JSON.stringify(res.data))
          setAuthHeader(res.data.token)
          this.$router.push({ name: 'client' })
        })
        .catch((err) => {
          console.log(err.response)
          alert(err.response.data.message)
          // this.$router.push({ name: 'servererror' })
        })
    }
  }
}
</script>

<style scoped>
/*col-5 bg-img text */
.containerr {
  position: relative;
  font-family: Arial;
}
.containerr img {
  object-fit: fill;
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
.input-group-text {
  display: flex;
  align-items: center;
  padding: 0rem 0.75rem !important;
  font-size: 2rem;
  font-weight: 400;
  line-height: 1.5;
  color: #433472;
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
