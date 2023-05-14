<script lang="ts">
  import AddNewPlaceholder from './lib/AddNewPlaceholder.svelte'
</script>

<main>
  <section>
    <h2>Pull Requests</h2>
    <ul>
      <li><a href="">All of Mine</a></li>
      <li><a href="">Frontend (UI, Prefix, ABP)</a></li>
      <li><a href="">Slingshot UI</a></li>
    </ul>
  </section>
  <AddNewPlaceholder />
</main>

<style>
  section {
    background-color: rgba(255, 255, 255, 0.09);
    padding: 16px;
    border-radius: 10px;
    margin-bottom: 16px;
  }

  a {
    width: 100%;
    padding: 8px;
    display: inline-block;
  }

  a:hover {
    background-color: #242424;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  li {
    font-size: 16px;
  }
</style>
