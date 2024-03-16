<script lang="ts">
  export let value: boolean = false
  export let name: string = ''
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

      &:after {
        content: '';
        position: absolute;
        width: 14px;
        height: 14px;
        background: no-repeat url('public/FilledHeart.svg');
        background-size: contain;
        margin-right: 2px;
        margin-bottom: 1px;
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

<input type="checkbox" class="checkbox-custom" checked={value} on:click={() => (value = !value)} aria-label="checkbox" {name} />
