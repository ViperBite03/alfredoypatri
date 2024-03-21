<script lang="ts">
  import { onMount } from 'svelte'

  export let open: boolean = false
  export let maxWidth: number = 500
  export let id: string = ''
  export let padding: string = ''

  const close = () => (open = false)

  let bodyOverflow

  onMount(() => {
    bodyOverflow = () => (document.body.style.overflowY = open ? 'hidden' : 'auto')
  })

  $: {
    open
    if (bodyOverflow) bodyOverflow()
  }
</script>

<style lang="scss">
  @import url('https://fonts.cdnfonts.com/css/sunday-personal-use');
  @import '../../sass/mixins.scss';
  $headerHeight: 50px;

  .modal-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100dvh;

    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;

    .modal-background {
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.7);
      z-index: -1;
    }

    .modal {
      background-color: white;
      height: fit-content;
      width: 100%;
      max-height: calc(100dvh - 40px);
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      overflow: hidden;

      @include notDesktop {
        margin: 0 25px;
      }

      .modal-header {
        position: relative;
        min-height: $headerHeight;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        flex-shrink: 0;
      }

      .modal-content {
        min-height: fit-content;
        max-height: calc(100dvh - $headerHeight - 40px);
        overflow-y: auto;

        display: flex;
        justify-content: center;
        font-size: 35px;
        margin-bottom: 25px;
        padding-top: 5px !important;

        font-family: 'Arsenica Trial', sans-serif;
      }
    }
  }
</style>

{#if open}
  <div class="modal-container" {id}>
    <button class="modal-background" on:click={close} />
    <div class="modal" style="max-width: {maxWidth}px">
      <div class="modal-header">
        <slot name="modal-header" />
      </div>

      <div class="modal-content" style="padding: {padding}">
        <slot />
      </div>
    </div>
  </div>
{/if}
