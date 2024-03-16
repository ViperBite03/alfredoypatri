<script lang="ts">
</script>

<style lang="scss">
  .cover {
    position: relative;
    height: 100dvh;
    width: 100%;

    background: no-repeat url('/foto.jpeg');
    background-size: cover;
    background-position-y: 50%;
    background-position-x: center;

    .flor1 {
      position: absolute;
      height: 215px;
      width: 245px;

      background: no-repeat url('/flor.png');
      background-size: cover;

      background-position-x: -104px;
      background-position-y: -50px;
    }

    .flor2 {
      position: absolute;
      height: 170px;
      width: 245px;
      right: 0;
      bottom: 0;
      overflow: hidden;

      img {
        height: 215px;
        transform: rotate(345deg);
      }
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
      }
    }
  }
</style>

<div class="cover">
  <div class="flor1" />
  <div class="flor2">
    <img src="flor.png" alt="" />
  </div>
  <div class="band">
    <img src="EmptyHeart.svg" alt="" class="heart" />
  </div>
</div>
