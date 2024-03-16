<script lang="ts">
  import Forms from '@/components/boda/Forms.svelte'
  import Cover from '@/components/boda/Cover.svelte'
  import Title from '@/components/boda/Title.svelte'

  import { onMount } from 'svelte'
  let HTMLTitle: HTMLElement

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

    .flor1 {
      position: absolute;
      height: 215px;
      left: -135px;
      top: -50px;
    }

    .flor2 {
      position: absolute;
      height: 215px;
      right: -135px;
      top: calc(100dvh - 165px);
      transform: rotate(345deg);
    }

    .flor3 {
      position: absolute;
      height: 215px;
      right: -135px;
      bottom: -50px;
      filter: brightness(0.8);
      transform: rotate(345deg);
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
      }
    }
  }
</style>

<div class="screen">
  <img src="flor.png" alt="" class="flor1" />
  <img src="flor.png" alt="" class="flor2" />
  <img src="flor.png" alt="" class="flor3" />

  <Cover />

  <h1 bind:this={HTMLTitle}>Alfredo & Patricia</h1>

  <Title />
  <div class="container">
    <Forms />
    <div class="tlf">
      <span>Patricia: 651838390</span>
      <span>Alfredo: 635254794</span>
    </div>
  </div>
</div>
