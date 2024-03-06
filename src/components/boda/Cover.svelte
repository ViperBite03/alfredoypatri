<script lang="ts">
</script>

<style lang="scss">
  .cover {
    position: static;
    height: 100dvh;
    width: 100%;
    overflow: hidden;

    .band {
      height: fit-content;
      width: 100%;

      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;
      padding-bottom: 37.5px;

      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;

      .title {
        font-family: 'Arsenica Trial', sans-serif;
        font-size: 35px;
        opacity: 0;
      }

      .heart {
        height: 35px;
      }
    }

    .bg {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }
</style>

<div class="cover">
  <div class="band">
    <img src="Heart.svg" alt="" class="heart" />
    <div class="title">Alfredo & Patricia</div>
  </div>
  <img src="ALFREDO & PATRICIA.png" alt="" class="bg" />
</div>
