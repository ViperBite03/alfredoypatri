<script lang="ts">
</script>

<style lang="scss">
  .confirmation {
    height: 100dvh;
    width: 100%;

    .form {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;

      .nombre {
        height: 35px;
        width: 250px;
        padding: 10px;
      }
    }
  }
</style>

<div class="confirmation">
  <div class="form">
    <input type="text" placeholder="Nombre y apellidos" class="nombre" />
    <label><input type="checkbox" /> Vengo</label>
    <label><input type="checkbox" /> Necesito transporte</label>
    <button class="send">Enviar</button>
  </div>
</div>
