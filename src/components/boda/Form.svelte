<script lang="ts">
  import Checkbox from '../Checkbox.svelte'
  export let modal: boolean = false

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

  let nameValue: string
  let asisto: boolean = false
  let transporte: boolean = false
  let mezclaValue: string = ''

  const canSend = async () => {
    if (!nameValue) return false

    await fetch('/api/guest', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nombre: nameValue,
        asisto: asisto ? 'si' : 'no',
        transporte: transporte ? 'si' : 'no',
        alergias: activasAlergia ? activasAlergia : '---',
        alcohol: activasBebida ? activasBebida : '---',
        mezcla: mezclaValue ? mezclaValue : '---',
      }),
    })

    modal = true
  }

  $: activasAlergia = Object.keys(alergias)
    .filter((alergia: string) => alergias[alergia])
    .concat([otrosAlergia])
    .toString()

  $: activasBebida = Object.keys(bebidas)
    .filter((bebida: string) => bebidas[bebida])
    .concat([otrosBebida])
    .toString()
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

    .pack {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 18px;
    }

    .pre-boda,
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
  }
</style>

<form class="form" on:submit|preventDefault={canSend}>
  <div class="pre-boda">
    <div class="text">
      <h2>¡PREBODA!</h2>
      <div class="line" />
      <span class="a-text">
        Para ir calentando y entrando en el ambiente, haremos un picoteo el viernes 12 en la casa Rural La Cañada, en Fresno el Viejo.
      </span>
      <span class="a-text">¡Os esperamos allí a las 18.00h!</span>
    </div>
  </div>

  <div class="confirmation">
    <div class="text">
      <h2>y por fin... ¡LLEGÓ EL DÍA!</h2>
      <div class="line" />
      <span class="c-text">Contaremos con servicio de autobuses, por lo que rogamos confirmación de asistencia y transporte.</span>
    </div>

    <input type="text" placeholder="Nombre y apellidos" bind:value={nameValue} name="nombre" required />
    <div class="CC">
      <div class="pack">
        <Checkbox name="asisto" bind:value={asisto} />
        <span>Asisto</span>
      </div>
      <div class="pack">
        <Checkbox name="transporte" bind:value={transporte} />
        <span> Necesito transporte</span>
      </div>
    </div>
  </div>

  <div class="alergies">
    <div class="text">
      <h2>Alergias e intolerancias</h2>
      <div class="line" />
    </div>

    {#each Object.keys(alergias) as alergia}
      <div class="pack">
        <Checkbox bind:value={alergias[alergia]} />
        <span>{alergia}</span>
      </div>
    {/each}
    <input type="text" placeholder="Otros..." bind:value={otrosAlergia} />
  </div>

  <div class="bebidas">
    <div class="text">
      <h2>¡Que el ritmo no pare!</h2>
      <div class="line" />
      <span class="b-text">
        Después de la barra libre en El Ventorro, continuaremos la fiesta hasta que el cuerpo aguante en la Casa Rural de Fresno el Viejo!</span
      >
      <span class="b-text"> Para ello necesitamos que nos confirméis también si venís y qué bebéis para que que no falte de nada!</span>
    </div>

    {#each Object.keys(bebidas) as bebida}
      <div class="pack">
        <Checkbox bind:value={bebidas[bebida]} />
        <span> {bebida}</span>
      </div>
    {/each}
    <input type="text" placeholder="Otros..." bind:value={otrosBebida} />
    <input type="text" placeholder="Mezcla" name="mezcla" bind:value={mezclaValue} />
  </div>

  <button class="send" type="submit">Enviar</button>
</form>
