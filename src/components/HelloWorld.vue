<template>
  <div class="hello">
    <div class="card">
      <img src="../assets/image-qr-code.png" alt="qr" class="image" />
      <p id="headline">Improve your front-end skills by building projects</p>
      <p id="paragraph">
        scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
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
<style scoped>
@media (max-width: 600px) {
  .hello {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .image {
    height: 18rem;
    width: 18rem;
    margin-top: 1rem;
  }
  .card {
    background-color: white;
    width: 20rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 15px;
    text-align: center;
    margin-top: 5rem;
  }
  #headline {
    font-size: 1.3rem;
    font-weight: 700;
    padding-left: 1rem;
    padding-right: 1rem;
    color: hsl(218, 44%, 22%);
  }
  #paragraph {
    font-weight: 400;
    font-size: medium;
    padding-left: 0.8rem;
    padding-right: 0.8rem;
    margin-top: 1px;
    color: hsl(220, 15%, 55%);
  }
}
.image {
  border-radius: 8px;
}
</style>
