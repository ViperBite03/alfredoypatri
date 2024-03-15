<script lang="ts">
  import { onMount } from 'svelte'

  let HTMLTitle: HTMLElement

  onMount(() => {
    document.addEventListener('scroll', () => {
      if (HTMLTitle) {
        let shadow =
          window.scrollY > window.screen.height
            ? (HTMLTitle.style.boxShadow = `2px 0 10px 0 rgba(0, 0, 0, 0.2)`)
            : (HTMLTitle.style.boxShadow = `2px 0 10px 0 rgba(0, 0, 0, 0)`)
      }
    })
  })
</script>

<style lang="scss">
  @import url('https://fonts.cdnfonts.com/css/arsenica-trial');

  .title {
    width: 100%;
    height: fit-content;
    position: sticky;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    background-color: white;
    margin-top: -15px;
    padding-bottom: 15px;
    padding-top: 25px;
    top: -25px;

    transition: 0.3s ease;
    z-index: 3;

    .initials {
      font-family: 'Arsenica Trial', sans-serif;
      font-size: 60px;
      opacity: 0.2;

      height: fit-content;
    }
  }
</style>

<div class="title" bind:this={HTMLTitle}>
  <div class="initials">A&P</div>
  <div class="date">13 de julio 2024</div>
</div>
