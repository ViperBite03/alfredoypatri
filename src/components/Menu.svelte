<script lang="ts">
  let open: boolean = false
</script>

<style lang="scss">
  nav {
    position: sticky;
    width: 100%;
    top: 0;
    z-index: 99;

    .navbar {
      position: relative;
      width: 100%;

      .hamburger-lines {
        display: block;
        height: 26px;
        width: 32px;
        position: absolute;
        top: 17px;
        right: 20px;
        z-index: 2;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .line {
          display: block;
          height: 4px;
          width: 100%;
          border-radius: 10px;
          background: #ffffff;
        }

        .line1 {
          transform-origin: 0% 0%;
          transition: transform 0.4s ease-in-out;
        }

        .line2 {
          transition: transform 0.2s ease-in-out;
        }

        .line3 {
          transform-origin: 0% 100%;
          transition: transform 0.4s ease-in-out;
        }
      }

      &.active {
        .line1 {
          transform: rotate(45deg);
        }

        .line2 {
          transform: scaleY(0);
        }

        .line3 {
          transform: rotate(-45deg);
        }

        .menu-items {
          transform: translateX(0);
        }
      }

      .menu-items {
        position: absolute;
        transition: 0.3s ease;

        padding-top: 100px;
        padding-right: 30px;
        right: 0;
        height: 100dvh;
        width: 100%;
        max-width: 350px;

        background-color: rgba(0, 0, 0, 0.25);
        transform: translateX(100%);

        display: flex;
        flex-direction: column;
        text-align: end;

        a {
          text-decoration: none;
          color: #ffffff;
          font-weight: 500;
          font-size: 1.2rem;
        }

        li {
          padding: 20px 0;
          list-style: none;
        }
      }
    }
  }
</style>

<nav>
  <div class="navbar" class:active={open}>
    <button class="hamburger-lines" on:click={() => (open = !open)}>
      <span class="line line1" />
      <span class="line line2" />
      <span class="line line3" />
    </button>
    <div class="menu-items">
      <li><a href="/">Confirmación de asistencia</a></li>
      <li><a href="/">Alergias</a></li>
    </div>
  </div>
</nav>
