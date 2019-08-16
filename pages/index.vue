<template>
  <section class="container">
    <div>
      <div class="d-flex justify-content-center">
            <img src="https://res.cloudinary.com/upcare-online/image/upload/v1548339178/Imagens/upcare_logo.png" alt="Responsive image">
      </div>
      <br>
      <div class="d-flex justify-content-center">
            <img src="https://res.cloudinary.com/upcare-online/image/upload/v1565915921/Imagens/indicacao-bem-sucedida.png" alt="Responsive image">
      </div>
      <h2>Taxa de indicação bem sucedida</h2>
      <br>
      <button id="checkout-button" role="link" class="btn btn-primary btn-lg">FAZER PAGAMENTO <i class="fas fa-chevron-right"></i></button>
      <div id="error-message"></div>
      <br>
      </div>
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style>
.container
{
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

img {
  width: 150px;
  height: auto;
  padding-top: 3%;
  padding-bottom: 3%;
}

</style>
