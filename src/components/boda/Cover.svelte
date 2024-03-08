<script lang="ts">
</script>

<style lang="scss">
  .cover {
    height: 100dvh;
    width: 100%;

    .band {
      height: fit-content;
      width: 100%;

      position: absolute;
      top: calc(50dvh - 35px);

      display: flex;
      justify-content: center;

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
  </div>
  <img src="ALFREDO & PATRICIA.png" alt="" class="bg" />
</div>
