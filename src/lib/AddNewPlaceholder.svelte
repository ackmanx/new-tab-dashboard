<script lang="ts">
  import AddIcon from './add-icon.png'

  function handleClick() {
    console.log(777, 'click')
  }
</script>

<section on:click={handleClick}>
  <img src={AddIcon} alt="add card icon" />
</section>

<style>
  section {
    background-color: rgba(255, 255, 255, 0.09);
    padding: 16px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    cursor: pointer;
  }

  section:hover {
    border: 1px solid #ffffffde;
    box-sizing: border-box;
  }

  img {
    width: 50px;
  }
</style>
