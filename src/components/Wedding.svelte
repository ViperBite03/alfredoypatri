<script lang="ts">
  import Forms from '@/components/boda/Forms.svelte'
  import Cover from '@/components/boda/Cover.svelte'
  import Title from '@/components/boda/Title.svelte'

  import { onMount } from 'svelte'

  let HTMLFlor: HTMLElement
  let HTMLTitle: HTMLElement

  onMount(() => {
    document.addEventListener('scroll', () => {
      let scrollMath = 1 - window.scrollY / 300

      if (HTMLTitle) HTMLTitle.style.filter = `brightness(${1 - (window.scrollY - 300) / 500})`
      if (HTMLFlor && scrollMath >= 0.3) {
        HTMLFlor.style.filter = `brightness(${scrollMath})`
      }
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
      position: fixed;
      height: 215px;
      right: -135px;
      bottom: -50px;
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
  <img src="flor.png" alt="" class="flor2" bind:this={HTMLFlor} />

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
