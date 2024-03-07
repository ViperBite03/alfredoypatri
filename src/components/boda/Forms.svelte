<script lang="ts">
  const alergias = {
    Huevos: false,
    Pescado: false,
    Marisco: false,
    Gluten: false,
    'Frutos secos': false,
  }
</script>

<style lang="scss">
  .forms {
    width: 100%;
    height: 500dvh;
    margin-bottom: 50px;

    display: flex;
    flex-direction: column;
    align-items: center;

    .confirmation {
      height: fit-content;
      width: 250px;
      margin: 10px;

      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;

      .checkbox {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
      }
    }
    .send {
      background-color: rgba(0, 0, 0, 0.25);
      padding: 5px;
      width: 75px;
      border-radius: 5px;
      color: white;
      margin-top: 10px;
      transition: 0.3s ease;

      &:hover {
        background-color: rgba(0, 0, 0, 0.5);
        transition: 0.3s ease;
      }
    }
  }
</style>

<div class="forms">
  <form class="form" action="https://formspree.io/f/xeqyzaok" method="POST">
    <div class="confirmation">
      <input type="text" placeholder="Nombre y apellidos" class="text" name="nombre" />
      <div class="checkbox">
        <label><input type="checkbox" name="vengo" /> Vengo</label>
        <label><input type="checkbox" name="transporte" /> Necesito transporte</label>
      </div>
    </div>
    <div class="alergies">
      {#each Object.keys(alergias) as alergia}
        <label><input type="checkbox" bind:checked={alergias[alergia]} /> {alergia}</label>
      {/each}
      <input type="text" placeholder="Otros..." class="text" />
    </div>
    <button class="send" type="submit">Enviar</button>
  </form>
</div>
