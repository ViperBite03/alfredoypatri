<script lang="ts">
  import Form from '@/components/boda/Form.svelte'
  import Cover from '@/components/boda/Cover.svelte'
  import Title from '@/components/boda/Title.svelte'
  import Modal from '@/components/boda/Modal.svelte'

  import { onMount } from 'svelte'

  let HTMLTitle: HTMLElement
  let HTMLFlor: HTMLElement
  let modal: boolean

  function scrollYATasaDeProgreso() {
    // Altura total del contenido del documento
    var alturaDocumento = document.documentElement.scrollHeight
    // Altura visible de la ventana
    var alturaVentana = window.innerHeight
    // Máximo valor de scrollY posible para que el fondo de la página esté justo en la parte inferior de la ventana
    var maxScrollY = alturaDocumento - alturaVentana

    // Obtener el valor actual de scrollY
    var valorActualScrollY = window.scrollY

    // Calcular la tasa de progreso como un número entre 0 y 1
    var tasaDeProgreso = 0.8 - valorActualScrollY / maxScrollY

    // Asegurar que la tasa de progreso esté siempre entre 0 y 1
    tasaDeProgreso = Math.min(Math.max(tasaDeProgreso, 0), 0.8)

    return tasaDeProgreso
  }

  onMount(() => {
    document.addEventListener('scroll', () => {
      if (HTMLTitle) HTMLTitle.style.filter = `brightness(${1 - (window.scrollY - 300) / 500})`
      if (HTMLFlor) HTMLFlor.style.filter = `brightness(${scrollYATasaDeProgreso()})`
    })
  })
</script>

<style lang="scss">
  .screen {
    position: relative;
    width: 100%;

    .flor2 {
      height: 170px;
      right: 0;
      bottom: 0;
      overflow: hidden;

      position: fixed;
      width: 245px;
      z-index: 1;

      img {
        height: 215px;
        transform: rotate(345deg);
      }
    }

    h1 {
      font-family: 'Arsenica Trial', sans-serif;
      width: 100%;
      font-size: 35px;
      text-align: center;
      color: white;

      position: sticky;
      margin-top: -50dvh;
      margin-bottom: calc(50dvh - 27px);
      top: 15px;

      z-index: 4;
    }

    .container {
      position: relative;
      padding-bottom: 50px;
      z-index: 2;

      .tlf {
        width: 300px;
        display: flex;
        justify-content: space-between;

        position: absolute;
        right: 0;
        left: 0;
        margin: auto;

        text-decoration: underline;

        img {
          height: 18px;
          opacity: 0.8;
        }
      }
    }
  }
</style>

<div class="screen">
  <div class="flor2" bind:this={HTMLFlor}>
    <img src="flor.png" alt="" />
  </div>

  <Cover />

  <h1 bind:this={HTMLTitle}>Alfredo & Patricia</h1>

  <Title />
  <div class="container">
    <Form bind:modal />
    <div class="tlf">
      <a href="https://wa.me/651838390">Patricia: 651 838 390</a>
      <img src="Whatsapp.svg" alt="" />
      <a href="https://wa.me/635254794" style="background-color: white;">Alfredo: 635 254 794</a>
    </div>
  </div>

  <Modal bind:open={modal} padding="20px">
    <div slot="modal-header">
      <h2>Respuesta enviada</h2>
    </div>

    ¡Te esperamos allí!
  </Modal>
</div>
