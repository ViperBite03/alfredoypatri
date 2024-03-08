<script lang="ts">
  import Checkbox from '../Checkbox.svelte'

  const alergias = {
    Huevos: false,
    Pescado: false,
    Marisco: false,
    Gluten: false,
    'Frutos secos': false,
  }

  let activas: string
  let otrosInput: string = ''
  let activasDef: string

  $: activas = Object.keys(alergias)
    .filter((alergia: string) => alergias[alergia])
    .toString()

  $: activasDef = activas + ',' + otrosInput
</script>

<style lang="scss">
  .form {
    margin: 50px 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;

    .text {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;
      margin-bottom: 20px;

      h2 {
        font-size: 25px;
        font-weight: bold;
      }

      .line {
        height: 1px;
        width: 125px;
        background-color: black;
      }

      span {
        text-align: center;
        font-size: 18px;
      }
    }

    .confirmation {
      width: 300px;
      margin: 10px;

      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;

      .CC {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        gap: 15px;
      }
    }

    .alergies {
      display: flex;
      flex-direction: column;
      width: 300px;

      gap: 10px;
    }

    .send {
      background-color: rgba(0, 0, 0, 0.25);
      padding: 5px;
      width: 75px;
      border-radius: 5px;
      color: white;
      margin-top: -20px;
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
      <div class="text">
        <h2>Vienes, no?</h2>
        <div class="line" />
        <span class="c-text">Contaremos con servicio de autobuses, por lo que rogamos confirmación de asistencia y transporte.</span>
      </div>

      <input type="text" placeholder="Nombre y apellidos" name="nombre" />
      <div class="CC">
        <label><Checkbox name="vengo" class="checkbox" /> Vengo</label>
        <label><Checkbox name="transporte" /> Necesito transporte</label>
      </div>
    </div>

    <div class="alergies">
      <div class="text">
        <h2>Alergias e intolerancias</h2>
        <div class="line" />
      </div>

      {#each Object.keys(alergias) as alergia}
        <label><Checkbox bind:value={alergias[alergia]} class="checkbox" /> {alergia}</label>
      {/each}
      <input type="text" placeholder="Otros..." bind:value={otrosInput} />
      <input type="text" bind:value={activasDef} class="invisible" name="alergias" style="display: none" />
    </div>

    <button class="send" type="submit">Enviar</button>
  </form>
</div>
