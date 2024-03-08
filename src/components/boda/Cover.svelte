<script lang="ts">
</script>

<style lang="scss">
  .cover {
    height: 100dvh;
    width: 100%;

    .band {
      height: fit-content;
      width: 100%;

      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;
      padding-bottom: 37.5px;

      position: absolute;
      top: 35dvh;

      .title {
        font-family: 'Arsenica Trial', sans-serif;
        font-size: 35px;
        color: white;
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
    <img src="EmptyHeart.svg" alt="" class="heart" />
    <div class="title">Alfredo & Patricia</div>
  </div>
  <img src="ALFREDO & PATRICIA.png" alt="" class="bg" />
</div>
