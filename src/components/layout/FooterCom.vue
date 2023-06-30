<template>
  <div class="container-fluid mt-5" style="background: #181e3c; direction: ltr">
    <div class="row d-flex justify-content-center">
      <div class="col-md-12">
        <div class="row">
          <footer>
            <!-- Footer Start -->
            <div class="text-white" style="margin-top: 6rem">
              <div class="container-fluid">
                <div class="row d-flex justify-content-lg-around">
                  <!--task-->
                  <div class="col-md-6 col-lg-2 text-center text-lg-start">
                    <div style="position: relative; bottom: 30px">
                      <span class=""> <img src="../../assets/images/logo.png" alt="lb" /></span>
                    </div>
                  </div>

                  <!-- أقسام الموقع -->
                  <div class="col-md-6 col-lg-2">
                    <router-link class="btn_btn_link text-decoration-none" :to="{ name: 'home' }"
                      >Home</router-link
                    >
                    <router-link class="btn_btn_link text-decoration-none" :to="{ name: 'home' }"
                      >About Us</router-link
                    >
                    <router-link class="btn_btn_link text-decoration-none" :to="{ name: 'home' }"
                      >Services</router-link
                    >
                    <router-link class="btn_btn_link text-decoration-none" :to="{ name: 'home' }">
                      Blogs
                    </router-link>
                  </div>
                  <!-- تواصل معنا -->
                  <div class="col-md-6 col-lg-2 text-center text-lg-start">
                    <div
                      class="card border-0 rounded-5"
                      style="width: 100%; background-color: transparent"
                    >
                      <div class="card-body text-white">
                        <div>
                          <p class="card-title fs-16 mb-0">
                            <FontAwesome class="ms-2 fs-16" icon="phone-volume" />
                            Phone Number
                          </p>
                          <p class="card-text fs-14" style="color: #c2c2c2 !important">
                            01085279412
                          </p>
                        </div>
                        <div>
                          <p class="card-title fs-16 mb-0">
                            <FontAwesome class="ms-2 fs-2" :icon="['far', 'envelope']" />Email
                            Address
                          </p>
                          <p class="card-text fs-14 p-0" style="color: #c2c2c2 !important">
                            example58@gmail.com
                          </p>
                        </div>
                        <div>
                          <p class="card-title fs-16 mb-0">
                            <FontAwesome class="ms-2 fs-16" icon="location-dot" />
                            Address
                          </p>
                          <p class="card-text fs-14" style="color: #c2c2c2 !important">
                            467 Davidson ave, Los Angeles CA 95716
                          </p>
                        </div>
                        <div>
                          <p class="card-title fs-16 mb-0">
                            <FontAwesome class="ms-2 fs-16" icon="location-dot" />
                            Work Time
                          </p>
                          <p class="card-text fs-14 m-0 p-0" style="color: #c2c2c2 !important">
                            Days : Sunday - Thursday
                          </p>
                          <p class="card-text fs-14 m-0 p-0" style="color: #c2c2c2 !important">
                            Time : 09:00 AM - 05:00 PM
                          </p>
                        </div>
                      </div>
                    </div>

                    <!-- <p>سياسة الخصوصية</p>
                    <p>الشروط والاحكام</p> -->
                  </div>
                  <!-- التحميل -->
                  <div class="col-md-6 text-center text-lg-start col-lg-4">
                    <!-- google app store -->
                    <p>Download Application:</p>
                    <div class="">
                      <!-- Google Play button -->
                      <a
                        class="market-btn google-btn"
                        href="links.google_play"
                        target="blank"
                        role="button"
                      >
                        <span class="market-button-subtitle">GET IT ON</span>
                        <span class="market-button-title">Google Play</span>
                      </a>
                      <!-- App Store button -->
                      <a
                        class="market-btn apple-btn"
                        href="links.app_store"
                        target="blank"
                        role="button"
                        style="width: 160.72px"
                      >
                        <span class="market-button-subtitle">Download on the</span>
                        <span class="market-button-title">App Store</span>
                      </a>
                    </div>
                  </div>
                  <div class="container">
                    <div class="row d-flex" style="align-items: baseline">
                      <div class="col-md-6">
                        <div class="d-flex justify-content-center pt-3 mt-5">
                          <a
                            class="btnn btn-outline-light btn-social m-2"
                            target="_blank"
                            aria-label="facebook"
                            ><FontAwesome :icon="['fab', 'facebook']"
                          /></a>
                          <a
                            class="btnn btn-outline-light btn-social m-2"
                            target="_blank"
                            aria-label="Twitter"
                            ><FontAwesome :icon="['fab', 'twitter']"
                          /></a>
                          <a
                            class="btnn btn-outline-light btn-social m-2"
                            target="_blank"
                            aria-label="linkedin"
                            ><FontAwesome :icon="['fab', 'linkedin']"
                          /></a>
                        </div>
                      </div>
                      <div class="col-md-6 text-center">
                        <a target="_blank" aria-label="Contact">Contact us</a>
                        <a target="_blank" aria-label="Terms">Terms of Use</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="container mt-3 mt-lg-4">
                <div class="row">
                  <div class="col-md-12 fs-14 text-center mb-3 mb-md-0">
                    2023 &copy;Lawyer • Designed by Alalamyia
                  </div>
                </div>
              </div>
            </div>
            <!-- Footer End -->
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
a[data-v-8838cd3c],
p[data-v-8838cd3c] {
  color: #ffffff !important;
}
a,
p {
  color: #ffffff !important;
}
:root {
  --primary: #2380be;
  --light: #05121b;
  --dark: #0e2e50;
}
.btnn.btn-social {
  background-color: #697e95;
  width: 24px;
  height: 24px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgb(0 0 0 / 10%) !important;
  transition: 0.5s;
}

.btnn.btn-social:hover {
  background-color: #5ba1ab;
  color: black;
}
.btnn.btn-social:focus {
  background-color: #5ba1ab;
}

.btn_btn_link {
  display: block;
  margin-bottom: 10px;
  padding: 0;
  text-align: center;
  color: var(--light);
  font-weight: normal;
  transition: 0.3s;
  color: white;
}
.btn_btn_link:hover {
  letter-spacing: 0.5px;
  box-shadow: none;
  color: #0099ff;
}

.btn_btn_link::before {
  position: relative;
  content: '';
  font-family: 'Font Awesome 5 Free';
  font-weight: 900;
  margin-right: 10px;
}
/* contact-icon */
.contact-icon {
  background-color: #697e95;
  width: 24px;
  height: 24px;
  border-radius: 100%;
  border: 1px solid rgb(0 0 0 / 10%) !important;
  transition: 0.5s;
}
/* app store */
.market-btn {
  display: inline-block;
  padding: 0.3125rem 0.875rem;
  padding-left: 2.8125rem;
  -webkit-transition: border-color 0.25s ease-in-out, background-color 0.25s ease-in-out;
  transition: border-color 0.25s ease-in-out, background-color 0.25s ease-in-out;
  border: 1px solid #232c55;
  background-position: center left 0.75rem;
  background-color: #232c55;
  background-size: 1.5rem 1.5rem;
  background-repeat: no-repeat;
  text-decoration: none;
  margin: 2px 2px;
  transition: all 0.5s ease-in-out;
  border-radius: 12px;
}
.market-btn .market-button-title {
  display: block;
  color: #edf6fd;
  font-size: 1rem;
}
.market-btn .market-button-subtitle {
  display: block;
  margin-bottom: -0.25rem;
  color: #edf6fd;
  font-size: 0.75rem;
}
.apple-btn {
  /* background-image: url('@/assets/images/apple.png'); */

  background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAzMDUgMzA1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMDUgMzA1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCI+CjxnIGlkPSJYTUxJRF8yMjhfIj4KCTxwYXRoIGlkPSJYTUxJRF8yMjlfIiBkPSJNNDAuNzM4LDExMi4xMTljLTI1Ljc4NSw0NC43NDUtOS4zOTMsMTEyLjY0OCwxOS4xMjEsMTUzLjgyQzc0LjA5MiwyODYuNTIzLDg4LjUwMiwzMDUsMTA4LjIzOSwzMDUgICBjMC4zNzIsMCwwLjc0NS0wLjAwNywxLjEyNy0wLjAyMmM5LjI3My0wLjM3LDE1Ljk3NC0zLjIyNSwyMi40NTMtNS45ODRjNy4yNzQtMy4xLDE0Ljc5Ny02LjMwNSwyNi41OTctNi4zMDUgICBjMTEuMjI2LDAsMTguMzksMy4xMDEsMjUuMzE4LDYuMDk5YzYuODI4LDIuOTU0LDEzLjg2MSw2LjAxLDI0LjI1Myw1LjgxNWMyMi4yMzItMC40MTQsMzUuODgyLTIwLjM1Miw0Ny45MjUtMzcuOTQxICAgYzEyLjU2Ny0xOC4zNjUsMTguODcxLTM2LjE5NiwyMC45OTgtNDMuMDFsMC4wODYtMC4yNzFjMC40MDUtMS4yMTEtMC4xNjctMi41MzMtMS4zMjgtMy4wNjZjLTAuMDMyLTAuMDE1LTAuMTUtMC4wNjQtMC4xODMtMC4wNzggICBjLTMuOTE1LTEuNjAxLTM4LjI1Ny0xNi44MzYtMzguNjE4LTU4LjM2Yy0wLjMzNS0zMy43MzYsMjUuNzYzLTUxLjYwMSwzMC45OTctNTQuODM5bDAuMjQ0LTAuMTUyICAgYzAuNTY3LTAuMzY1LDAuOTYyLTAuOTQ0LDEuMDk2LTEuNjA2YzAuMTM0LTAuNjYxLTAuMDA2LTEuMzQ5LTAuMzg2LTEuOTA1Yy0xOC4wMTQtMjYuMzYyLTQ1LjYyNC0zMC4zMzUtNTYuNzQtMzAuODEzICAgYy0xLjYxMy0wLjE2MS0zLjI3OC0wLjI0Mi00Ljk1LTAuMjQyYy0xMy4wNTYsMC0yNS41NjMsNC45MzEtMzUuNjExLDguODkzYy02LjkzNiwyLjczNS0xMi45MjcsNS4wOTctMTcuMDU5LDUuMDk3ICAgYy00LjY0MywwLTEwLjY2OC0yLjM5MS0xNy42NDUtNS4xNTljLTkuMzMtMy43MDMtMTkuOTA1LTcuODk5LTMxLjEtNy44OTljLTAuMjY3LDAtMC41MywwLjAwMy0wLjc4OSwwLjAwOCAgIEM3OC44OTQsNzMuNjQzLDU0LjI5OCw4OC41MzUsNDAuNzM4LDExMi4xMTl6IiBmaWxsPSIjMmUyZTJlIi8+Cgk8cGF0aCBpZD0iWE1MSURfMjMwXyIgZD0iTTIxMi4xMDEsMC4wMDJjLTE1Ljc2MywwLjY0Mi0zNC42NzIsMTAuMzQ1LTQ1Ljk3NCwyMy41ODNjLTkuNjA1LDExLjEyNy0xOC45ODgsMjkuNjc5LTE2LjUxNiw0OC4zNzkgICBjMC4xNTUsMS4xNywxLjEwNywyLjA3MywyLjI4NCwyLjE2NGMxLjA2NCwwLjA4MywyLjE1LDAuMTI1LDMuMjMyLDAuMTI2YzE1LjQxMywwLDMyLjA0LTguNTI3LDQzLjM5NS0yMi4yNTcgICBjMTEuOTUxLTE0LjQ5OCwxNy45OTQtMzMuMTA0LDE2LjE2Ni00OS43N0MyMTQuNTQ0LDAuOTIxLDIxMy4zOTUtMC4wNDksMjEyLjEwMSwwLjAwMnoiIGZpbGw9IiMyZTJlMmUiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K);
}
.google-btn {
  /* background-image: url('@/assets/images/google-play.png'); */
  background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPHBvbHlnb24gc3R5bGU9ImZpbGw6IzVDREFERDsiIHBvaW50cz0iMjkuNTMsMCAyOS41MywyNTEuNTA5IDI5LjUzLDUxMiAyOTkuMDA0LDI1MS41MDkgIi8+Cjxwb2x5Z29uIHN0eWxlPSJmaWxsOiNCREVDQzQ7IiBwb2ludHM9IjM2OS4wNjcsMTgwLjU0NyAyNjIuMTc1LDExOS40NjcgMjkuNTMsMCAyOTkuMDA0LDI1MS41MDkgIi8+Cjxwb2x5Z29uIHN0eWxlPSJmaWxsOiNEQzY4QTE7IiBwb2ludHM9IjI5LjUzLDUxMiAyOS41Myw1MTIgMjYyLjE3NSwzODMuNTUxIDM2OS4wNjcsMzIyLjQ3IDI5OS4wMDQsMjUxLjUwOSAiLz4KPHBhdGggc3R5bGU9ImZpbGw6I0ZGQ0E5NjsiIGQ9Ik0zNjkuMDY3LDE4MC41NDdsLTcwLjA2Myw3MC45NjFsNzAuMDYzLDcwLjk2MWwxMDguNjg4LTYyLjg3N2M2LjI4OC0zLjU5Myw2LjI4OC0xMS42NzcsMC0xNS4yNyAgTDM2OS4wNjcsMTgwLjU0N3oiLz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==);
}
</style>
