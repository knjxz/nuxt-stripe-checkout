<template>
  <section class="container">
    <div>
      <h1>Nuxt Stripe Checkout</h1>
      <br>
      <button id="checkout-button" role="link" class="btn btn-primary">PAGAR</button>
      <div id="error-message"></div>
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
</style>
