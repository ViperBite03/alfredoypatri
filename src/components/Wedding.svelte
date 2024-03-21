<script lang="ts">
  import Form from '@/components/boda/Form.svelte'
  import Cover from '@/components/boda/Cover.svelte'
  import Title from '@/components/boda/Title.svelte'
  import Modal from '@/components/boda/Modal.svelte'

  import { onMount } from 'svelte'

  let HTMLTitle: HTMLElement
  let modal: boolean

  onMount(() => {
    document.addEventListener('scroll', () => {
      if (HTMLTitle) HTMLTitle.style.filter = `brightness(${1 - (window.scrollY - 300) / 500})`
    })
  })
</script>

<style lang="scss">
  .screen {
    position: relative;
    width: 100%;

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
  <Cover />

  <h1 bind:this={HTMLTitle}>Alfredo & Patricia</h1>

  <Title />
  <div class="container">
    <Form bind:modal />
    <div class="tlf">
      <a href="https://wa.me/651838390">Patricia: 651 838 390</a>
      <img src="Whatsapp.svg" alt="" />
      <a href="https://wa.me/635254794">Alfredo: 635 254 794</a>
    </div>
  </div>

  <Modal bind:open={modal} padding="20px">
    <div slot="modal-header">
      <h2>Respuesta enviada</h2>
    </div>

    ¡Te esperamos allí!
  </Modal>
</div>
