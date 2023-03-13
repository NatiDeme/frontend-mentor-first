<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <img src="../assets/image-qr-code.png" alt="qr" />
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
