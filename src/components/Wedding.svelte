<script lang="ts">
  import Confirmation from '@/components/boda/Confirmation.svelte'
  import Alergies from '@/components/boda/Alergies.svelte'
  import Cover from '@/components/boda/Cover.svelte'
  import Title from '@/components/boda/Title.svelte'

  import { onMount } from 'svelte'

  let HTMLFlor: HTMLElement

  onMount(() => {
    document.addEventListener('scroll', () => {
      if (HTMLFlor) HTMLFlor.style.filter = `brightness(${1 - window.scrollY / 300})`
      console.log(window.scrollY)
    })
  })
</script>

<style lang="scss">
  .screen {
    position: relative;
    height: 100dvh;
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
  }
</style>

<div class="screen">
  <img src="flor.png" alt="" class="flor1" />
  <img src="flor.png" alt="" class="flor2" bind:this={HTMLFlor} />

  <Cover />
  <Title />
  <Confirmation />
  <Alergies />
</div>
