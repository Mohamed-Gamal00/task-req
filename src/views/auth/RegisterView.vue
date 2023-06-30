<template>
  <div class="register">
    <div class="container-fluid w-auto vh-100 bg-light">
      <div class="row vh-100">
        <!-- col-7 form-->
        <div class="col-lg-6 m-0 p-0 align-self-center">
          <div class="row p-0 m-auto justify-content-center">
            <div class="col-md-10">
              <form class="form-inline">
                <div class="row">
                  <!-- name -->
                  <div class="row mb-3">
                    <!-- الاسم الاول -->
                    <div class="col-md-6">
                      <label class="mb-1 text-purple" for="fname">full_name</label>
                      <div class="input-group mb-2 mr-sm-2">
                        <div class="input-group-prepend">
                          <div class="input-group-text">
                            <FontAwesome icon="user" class="fe-16" />
                          </div>
                        </div>
                        <input type="text" class="form-control" id="fname" />
                      </div>
                    </div>
                  </div>
                  <!-- email -->
                  <div class="row">
                    <div class="col-md-12 mb-3">
                      <label class="mb-1 text-purple" for="email">email</label>
                      <div class="input-group mb-2 mr-sm-2">
                        <div class="input-group-prepend">
                          <div class="input-group-text">
                            <FontAwesome icon="envelope" class="fe-16" />
                          </div>
                        </div>
                        <input type="email" class="form-control" id="email" />
                      </div>
                    </div>
                  </div>
                  <!-- password -->
                  <div class="row">
                    <!-- كلمة المرور -->
                    <div class="col-md-6 mb-3">
                      <label class="mb-1 text-purple" for="password">password</label>
                      <div class="input-group mb-2 mr-sm-2">
                        <div class="input-group-prepend">
                          <div class="input-group-text">
                            <FontAwesome icon="lock" class="fe-16" />
                          </div>
                        </div>
                        <input type="password" class="form-control" id="password" />
                      </div>
                    </div>
                    <!-- تاكيد كلمة المرور -->
                    <div class="col-md-6">
                      <label class="mb-1 text-purple" for="confirmPass"
                        >password_confirmation</label
                      >
                      <div class="input-group mb-2 mr-sm-2">
                        <div class="input-group-prepend">
                          <div class="input-group-text">
                            <FontAwesome icon="lock" class="fe-16" />
                          </div>
                        </div>
                        <input type="password" class="form-control" id="confirmPass" />
                      </div>
                    </div>
                  </div>
                  <!-- phone -->
                  <div class="row">
                    <div class="col-md-12 mb-3">
                      <label class="mb-1 text-purple" for="email">phone</label>
                      <div class="input-group mb-2 mr-sm-2">
                        <div class="input-group-prepend">
                          <div class="input-group-text">
                            <FontAwesome icon="phone" class="fe-16" />
                          </div>
                        </div>
                        <input type="text" class="form-control" id="email" />
                      </div>
                    </div>
                  </div>
                  <!-- انشاء حساب -->
                  <div class="d-flex justify-content-end">
                    <div class="col-md-4 justify-content-start">
                      <button style="width: 100%" class="btn text-white">إنشاء حساب</button>
                      <div class="text-center mt-lg-2">
                        <span class="fs-10 fw-bold">بالفعل تمتلك حساب؟</span>
                        <router-link
                          class="bg-white text-purple fs-10 fw-bold cairo"
                          :to="{ name: 'login' }"
                        >
                          تسجيل دخول
                        </router-link>
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
export default {
  name: 'RegistrationCom'
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
