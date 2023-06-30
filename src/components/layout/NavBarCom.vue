<template>
  <div class="row">
    <nav class="navbar navbar-expand-lg bg-transparent d-flex justify-content-center">
      <div class="container py-3">
        <a href="#" class="site-name">
          <router-link :to="{ name: 'home' }">
            <img src="../../assets/images/logo.png" alt="logo" loading="lazy" />
          </router-link>
        </a>
        <div>
          <div class="d-flex align-items-center">
            <div v-if="user">
              <img
                :src="user.image"
                width="40"
                height="40"
                class="rounded-circle"
                alt="personal"
              />&nbsp; &nbsp;
              <span class="text-yellow">{{ user.full_name }}</span>
            </div>
            &nbsp; &nbsp;&nbsp; &nbsp;
            <div v-if="!user">
              <a href="#" class="text-yellow">Create Account</a>&nbsp; &nbsp;
              <router-link class="text-decoration-none text-yellow" :to="{ name: 'login' }"
                >Login</router-link
              >
              &nbsp;&nbsp;
            </div>
            <button type="button" class="btn-bars">
              <FontAwesome :icon="['fas', 'bars']" class="text-yellow" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  </div>
  <div class="naavbar">
    <div class="naavbar-collapse">
      <span class="btn-close">
        <FontAwesome :icon="['fas', 'xmark']" class="text-yellow" />
      </span>
      <ul class="naavbar-nav">
        <li class="nav-item">
          <a href="#" class="nav-link">Home</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">About Us</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">Services</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">Blogs</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">Contact Us</a>
        </li>
      </ul>
      <!-- <p class="nav-para">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt minima totam rem ullam
        optio sit officia velit eum numquam saepe. Voluptatum possimus suscipit quaerat minima est
        impedit deleniti odio in?
      </p> -->
    </div>
  </div>
  <!-- header -->

  <!-- end of header -->
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      user: []
    }
  },
  mounted() {
    this.user = localStorage.getItem('user')
    // console.log(this.user)
    // console.log('user', this.use)

    this.sideBar()
    this.fetchclient()
  },
  methods: {
    sideBar() {
      const showBtn = document.querySelector('.btn-bars'),
        closeBtn = document.querySelector('.btn-close'),
        navMenu = document.querySelector('.naavbar-collapse')
      showBtn.addEventListener('click', () => {
        navMenu.classList.add('showMenu')
      })
      closeBtn.addEventListener('click', () => {
        navMenu.classList.remove('showMenu')
      })
    },
    async fetchclient() {
      const token = localStorage.getItem('token')
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }

      await axios
        .get('http://lawyer.phpv8.aait-d.com/api/client_web/profile', config)
        .then((res) => {
          this.user = res.data.data
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,400;0,500;0,600;0,800;0,900;1,500;1,600;1,700&family=Quicksand:wght@500;600&display=swap');

/* ==== Base ===== */
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Quicksand', sans-serif;
}
body {
  line-height: 1.3;
}
ul li {
  list-style-type: none;
}
button {
  outline: 0;
  cursor: pointer;
}
a {
  text-decoration: none;
  color: #000;
}
/* ==== end of Base ===== */

/* ==== naavbar ==== */
.naavbar {
  color: #fff;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 999;
}
.btn-bars {
  background-color: transparent;
  color: #c8a45d;
  height: 40px;
  width: 40px;
  border: 1px solid #c8a45d;
  display: flex;
  padding: 0.6rem 0.9rem;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  margin: 0rem 2rem 0 0;
  transition: all 0.4s ease;
}
.btn-bars span {
  font-size: 1.6rem;
  color: #fff;
}

.btn-bars:hover {
  color: #fff;
}
.naavbar-collapse {
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  background-color: #181e3c;
  /* width: 280px; */
  background-image: url('../../assets/images/Mask-group.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  padding: 1.6rem;
  transform: translateX(100%);
  transition: all 0.5s ease;
}

.btn-close {
  background-color: transparent;
  display: block;
  width: 33px;
  height: 33px;
  color: #c8a45d !important;
  border: 1px solid #c8a45d;
  font-size: 1rem;
  display: flex;
  align-items: center;
  margin-left: auto;
  justify-content: center;
  border-radius: 100%;
  cursor: pointer;
  transition: color 0.5s ease;
}

.btn-close:hover {
  color: #c8a45d;
}
.naavbar-nav {
  margin: 4rem 0;
}
.nav-item {
  margin: 1.4rem 0;
}
.nav-link {
  color: #fff;
  font-family: 'Fira Sans', sans-serif;
  font-size: 1.3rem;
  transition: color 0.5s ease;
}
.nav-link:hover {
  color: #c8a45d;
}
.nav-para {
  line-height: 1.6;
  font-size: 0.9rem;
  opacity: 0.7;
  font-weight: 300;
}

/* === show menu ===  */
.showMenu {
  transform: translateX(0);
}

/* ===  main === */
</style>
