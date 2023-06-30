<script>
import NavBarCom from '../../components/layout/NavBarCom.vue'
import CounterCom from '../../components/counter/CounterCom.vue'
import SectionTwo from './SectionTwo.vue'
import SliderCom from './SliderCom.vue'
export default {
  name: 'HomeCom',
  components: {
    NavBarCom,
    SectionTwo,
    CounterCom,
    SliderCom
  }
}
// import ContactCom from '@/components/contact/ContactCom.vue'
// import AboutCom from '@/components/about/AboutCom.vue'
// import ArticlesCom from '@/components/articles/ArticlesCom.vue'
// import ServicesCom from '@/components/services/ServicesCom.vue'
</script>
<template>
  <div id="home">
    <NavBarCom />
    <!-- header -->
    <section class="main">
      <div class="header-wrapper">
        <div class="row">
          <div class="col-md-6">
            <h1 class="text-white">
              Expert <span class="text-yellow">Advisory legal</span> Service
            </h1>
            <p class="text-white my-3">
              The firm was established in 1990 in Kolkata, India as an Intellectual Property Law
              Firm.
            </p>
            <div class="header-links">
              <a href="#">Contact us</a>
              <a href="#">Explore More</a>
            </div>
          </div>
          <div class="col-md-6"></div>
        </div>
      </div>
    </section>
  </div>
  <!-- content -->
  <section class="container-section">
    <Section-Two />
    <CounterCom />
    <SliderCom />
  </section>
</template>

<style scoped>
#home {
  background-image: url('../../assets/images/bg-img.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.main {
  height: 88vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.header-wrapper {
  padding: 0 1.6rem;
  width: 90%;
}
.header-wrapper h3 {
  font-family: 'Fira Sans', sans-serif;
  letter-spacing: 2px;
  opacity: 0.6;
}
.site-name {
  position: fixed;
  top: 1.6rem;
  left: 1.6rem;
  font-family: 'Fira Sans', sans-serif;
  font-size: 2.2rem;
  font-weight: 500;
}
.site-name span {
  color: #c8a45d;
}
.header-links {
  display: flex;
}
.header-links a {
  color: #000;
  font-weight: bold;
  padding: 0.8rem 2rem;
  font-size: 0.9rem;
  transition: all 0.5s ease;
  margin: 1rem 1rem 1rem 0;
}

.header-links a:nth-child(1) {
  background-color: #c8a45d;
  border-radius: 5px;
}
.header-links a:nth-child(2) {
  color: #000;
  font-weight: bold;
  padding: 0.8rem 0rem;
  /* padding: 0.8rem 1rem; */
  font-size: 0.9rem;
  transition: all 0.5s ease;
  /* margin: 1rem 1rem 1rem 0; */
}
.header-links a:nth-child(2) {
  color: #c8a45d;
  border-bottom: 1px solid #c8a45d;
}
@media screen and (max-width: 400px) {
  .site-name {
    font-size: 1.8rem;
  }
  .btn-bars {
    padding: 0 0.5rem;
  }
  .naavbar-close {
    width: 100%;
  }
  .naavbar-nav {
    margin: 2rem 0;
  }
  .header-wrapper h3 {
    font-size: 0.9rem;
    text-align: center;
  }
  /* .header-wrapper h1 {
    text-align: center;
    font-weight: 500;
    font-size: 1.6rem;
    width: 100%;
  } */
  .header-links {
    flex-direction: column;
  }
  .header-links a {
    font-size: 0.8rem;
    margin: 0.3rem;
    text-align: center;
  }
}
@media screen and (min-width: 992px) {
  .header-wrapper {
    padding-left: 5rem;
  }
  .header-wrapper h1 {
    font-size: 56px;
    font-weight: 700;
    width: 100%;
    font-family: 'Almarai';
  }
  .container-section {
    position: relative;
    bottom: 38px;
    background-color: white;
    border-top-right-radius: 40px;
    border-top-left-radius: 40px;
  }
}
</style>
