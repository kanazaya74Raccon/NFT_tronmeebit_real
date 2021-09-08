<template>
  <ScrollTopComponent>
    <a class="btn btn-light">
      <i class="fas" style="font-size: 24px">
        <img src="../assets/arrow-up.png" width="15px" height="8px" />
      </i>
      <!-- <font-awesome-icon :icon="['']" size="3x" /> -->
    </a>
  </ScrollTopComponent>
</template>

<script>
import ScrollTopComponent from "./ScrollTopComponent";
export default {
  components: {
    ScrollTopComponent,
  },
};
</script>

<style>
.btn {
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.55);
  padding-top: 27px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 5px;
}
</style>