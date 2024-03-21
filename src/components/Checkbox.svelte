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
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='128' height='128' viewBox='0 0 220 300'%3E%3Cpath fill='%23000' d='M240 98a57.63 57.63 0 0 1-17 41l-89.3 90.62a8 8 0 0 1-11.4 0L33 139a58 58 0 0 1 82-82.1l13 12.15l13.09-12.19A58 58 0 0 1 240 98'/%3E%3C/svg%3E");
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
