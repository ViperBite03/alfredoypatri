<script lang="ts">
  import Checkbox from '../Checkbox.svelte'

  const alergias = {
    Huevos: false,
    Pescado: false,
    Marisco: false,
    Gluten: false,
    'Frutos secos': false,
  }

  const bebidas = {
    Seegrams: false,
    Tanqueray: false,
    Barceló: false,
    Brugal: false,
    Ballantines: false,
    ' J&B': false,
  }

  let activasAlergia: string = ''
  let activasBebida: string = ''
  let otrosAlergia: string = ''
  let otrosBebida: string = ''
  let activasDefAlergia: string = ''
  let activasDefBebida: string = ''
  let nameValue: string
  let transporte: boolean = false
  let asisto: boolean = false

  const canSend = async () => {
    console.log(JSON.stringify({}))
    if (!nameValue) return false

    const response = await fetch('/api/guest', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nombre: nameValue,
        asisto: asisto ? 'si' : 'no',
        transporte: transporte ? 'si' : 'no',
        alergias: activasDefAlergia,
        alcohol: activasDefBebida,
      }),
    })
  }

  $: activasAlergia = Object.keys(alergias)
    .filter((alergia: string) => alergias[alergia])
    .toString()

  $: if (activasAlergia) activasDefAlergia = activasAlergia + ',' + otrosAlergia

  $: activasBebida = Object.keys(bebidas)
    .filter((bebida: string) => bebidas[bebida])
    .toString()

  $: if (activasBebida) activasDefBebida = activasBebida + ',' + otrosBebida
</script>

<style lang="scss">
  .form {
    margin: 50px 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 45px;

    z-index: 3;

    .text {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;
      width: 100%;
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

    .confirmation,
    .alergies,
    .bebidas {
      width: 300px;
      display: flex;
      flex-direction: column;
    }

    .confirmation {
      margin: 10px;

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
      gap: 10px;
    }

    .bebidas {
      gap: 10px;
    }

    .send {
      background-color: rgb(160, 160, 160);
      padding: 5px;
      height: 35px;
      width: 100px;
      border-radius: 5px;
      color: white;
      margin-top: -20px;
      font-size: 20px;
      transition: 0.3s ease;

      &:hover {
        background-color: rgb(100, 100, 100);
        transition: 0.3s ease;
      }
    }

    .error {
      font-size: 13px;
      color: red;
      width: 100%;
      text-align: left;
    }
  }
</style>

<div class="forms">
  <form class="form">
    <div class="confirmation">
      <div class="text">
        <h2>Vienes, no?</h2>
        <div class="line" />
        <span class="c-text">Contaremos con servicio de autobuses, por lo que rogamos confirmación de asistencia y transporte.</span>
      </div>

      <input type="text" placeholder="Nombre y apellidos" bind:value={nameValue} name="nombre" required />
      <div class="CC">
        <div><Checkbox name="asisto" bind:value={asisto} /> Asisto</div>
        <div><Checkbox name="transporte" bind:value={transporte} /> Necesito transporte</div>
      </div>
      {#if !canSend}
        <span class="error">*Tienes que poner tu nombre y asistencia</span>
      {/if}
    </div>

    <div class="alergies">
      <div class="text">
        <h2>Alergias e intolerancias</h2>
        <div class="line" />
      </div>

      {#each Object.keys(alergias) as alergia}
        <div><Checkbox bind:value={alergias[alergia]} /> {alergia}</div>
      {/each}
      <input type="text" placeholder="Otros..." bind:value={otrosAlergia} />
      <input type="text" bind:value={activasDefAlergia} name="alergias" class="invisible" style="display: none" />
    </div>

    <div class="bebidas">
      <div class="text">
        <h2>Bebida</h2>
        <div class="line" />
        <span class="b-text"> Después continuaremos la fiesta hasta que el cuerpo aguante en la Casa Rural de Fresno el Viejo!</span>
        <span class="b-text"> Para ello necesitamos que nos confirméis también si venís y qué bebéis para que que no falte de nada!</span>
      </div>

      {#each Object.keys(bebidas) as bebida}
        <div><Checkbox bind:value={bebidas[bebida]} /> {bebida}</div>
      {/each}
      <input type="text" placeholder="Otros..." bind:value={otrosBebida} />
      <input type="text" bind:value={activasDefBebida} name="alcohol" class="invisible" style="display: none" />
      <input type="text" placeholder="Mezcla" name="mezcla" />
    </div>

    <button class="send" on:click={canSend}>Enviar</button>
  </form>
</div>
