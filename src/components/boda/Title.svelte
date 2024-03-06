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

    padding: 25px;
    top: 15px;
    gap: 10px;

    .name,
    .initials {
      font-family: 'Arsenica Trial', sans-serif;
    }

    .name {
      font-size: 35px;
      color: black;
    }

    .initials {
      position: absolute;
      font-size: 60px;
      opacity: 0.2;

      height: fit-content;
      top: 10px;

      text-align: center;
    }
  }
</style>

<div class="title">
  <div class="name">Alfredo & Patricia</div>
  <div class="initials">A&P</div>
  <div class="date">13 de julio 2024</div>
</div>
