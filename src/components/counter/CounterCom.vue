<script>
import Vue3autocounter from 'vue3-autocounter'
export default {
  name: 'HomeCom',
  components: {
    Vue3autocounter
  }
}
</script>
<template>
  <div class="container-fluid mt-lg-5 py-lg-5">
    <div class="row d-flex justify-content-center">
      <div class="col-md-10">
        <div class="row justify-content-around">
          <div
            class="col-md-3 my-2 my-md-0 d-flex justify-content-center rounded-circle item-css"
            v-for="i in 4"
            :key="i"
          >
            <div class="counter">
              <div class="counter__list">
                <div class="counter__item">
                  <span id="value">
                    <Vue3autocounter
                      class="counter mt-4"
                      ref="counter"
                      :startAmount="0"
                      prefix="+"
                      :endAmount="500"
                      :duration="3"
                      separator=","
                      decimalSeparator="."
                      :autoinit="true"
                    />
                  </span>
                  <p class="fs-6 text-center">Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- content -->
  <section></section>
</template>

<style scoped>
/* .item-css {
  border: 1px dashed #c8a45d;
} */
/* .offset {
  height: 1500px;
  text-align: center;
} */

/* == end ====================== */
.counter {
  /* padding: 50px 0; */
  /* background-color: #333; */
}

.counter__list {
  margin: 0 auto;
  max-width: 800px;
  display: flex;
  justify-content: space-between;
  gap: 15px;
}

.counter__item {
  padding: 20px 5px;
  display: flex;
  flex-direction: column;
  height: 200px;
  width: 200px;
  border: 2px dashed #c8a45d;
  border-radius: 100%;
  font-size: 16px;
  text-align: center;
}

.counter__item span {
  display: inline-block;
  /* margin-bottom: 10px; */
  font-size: 50px;
  font-weight: 600;
}
</style>
