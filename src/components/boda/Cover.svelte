<script lang="ts">
</script>

<style lang="scss">
  .cover {
    position: relative;
    height: 100dvh;
    width: 100%;

    .fondo {
      position: absolute;
      height: 100%;
      width: 100%;
      z-index: -1;

      background: no-repeat url('/foto.png');
      background-size: cover;
      background-position-y: 50%;
      background-position-x: center;

      filter: brightness(0.6);
    }

    .flor1 {
      height: 215px;

      background: no-repeat url('/flor.png');
      background-size: cover;

      background-position-x: -104px;
      background-position-y: -50px;

      position: absolute;
      width: 245px;
      z-index: 4;

      filter: brightness(0.8);
    }

    .band {
      height: fit-content;
      width: 100%;

      position: absolute;
      top: calc(50dvh - 35px);

      display: flex;
      justify-content: center;

      .heart {
        height: 35px;
        z-index: 4;
      }
    }
  }
</style>

<div class="cover">
  <div class="flor1" />
  <div class="fondo" />

  <div class="band">
    <img src="EmptyHeart.svg" alt="" class="heart" />
  </div>
</div>
