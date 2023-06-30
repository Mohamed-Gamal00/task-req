<template>
  <div>
    <!-- text and image -->
    <div class="container-fluid">
      <div class="row d-flex justify-content-center">
        <div class="col-md-10 mt-5">
          <div class="row Section-two align-items-center justify-content-around mb-2">
            <div class="col-lg-6 text-center mt-sm-4 text-lg-start">
              <img
                class="img-fluid rounded-3"
                src="@/assets/images/home-img.png"
                alt="img"
                width="460"
                height="460"
                format="webp"
                loading="lazy"
              />
            </div>
            <div class="col-lg-6 fw-bold mt-4 mt-md-0 align-middle text-center text-lg-start">
              <h2 class="mb-0 fw-bold" style="font-weight: 900 !important">
                <span class="text-yellow">Law Solutions</span>
              </h2>
              <h2 class="mb-4 fw-bold" style="font-weight: 900 !important">
                to solve your problems
              </h2>
              <p class="fs-14">
                The firm was established in 1990 in Kolkata, India as an Intellectual Property Law
                Firm.
              </p>
              <p class="fs-14">
                Our exposure to the complexities in ambit of Intellectual Property Law gave us the
                impetus and spiration to diversify into other streams.
              </p>
              <!-- google app store -->
              <div class="my-5">
                <router-link
                  :to="{ name: 'home' }"
                  class="fw-bold text-yellow"
                  style="padding-top: 0.5rem !important; padding-bottom: 0.8rem !important"
                  >Read More
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
@media screen and (min-width: 992px) {
  .Section-two h2 {
    width: 100%;
    font-family: 'Almarai';
  }
}
</style>
