<script lang="ts">
  export let value: boolean = false
</script>

<style lang="scss">
  .checkbox-custom {
    background: none;
    color: inherit;
    border: 1px solid black;
    height: 30px;
    width: 30px;
    border-radius: 5px;
    padding: 0;
    margin: 0;
    outline: inherit;
    cursor: pointer;

    &:checked {
      animation: beat 0.3s ease;
      background-color: aquamarine;

      &:after {
        content: '';
        position: absolute;
        top: 2px;
        left: 2px;
        width: 20px;
        height: 20px;
        //background-image: url('public/FilledHeart.svg');
        background-size: contain;
        background-repeat: no-repeat;
      }
    }

    @keyframes beat {
      0%,
      100% {
        transform: scale(1);
      }
      50% {
        transform: scale(0.9);
      }
    }
  }
</style>

<input type="checkbox" class="checkbox-custom" checked={value} on:click={() => (value = !value)} aria-label="checkbox" />
