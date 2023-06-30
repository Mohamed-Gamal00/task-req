<template>
  <div>
    <ClientCom />
    <router-view></router-view>
  </div>
</template>

<script>
import ClientCom from '../../components/profile/ClientCom.vue'
export default {
  components: {
    ClientCom
  }
}
</script>

<style lang="scss" scoped></style>
