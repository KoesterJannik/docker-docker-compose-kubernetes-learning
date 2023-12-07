<script lang="ts">
  import { onMount } from "svelte";
  let data: any = [];
  const URL = import.meta.env.VITE_PUBLIC_BACKEND_URL;
  console.log(URL);
  async function getAllTodos() {
    console.log("Getting all todos");
    const res = await fetch(URL);
    const json = await res.json();
    console.log(json);
    data = json;
  }
  async function createTodo() {
    console.log(newTodo);
    await fetch(`${URL}/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: newTodo }),
    });
    newTodo = "";
    await getAllTodos();
  }
  async function deleteTodoById(id: string) {
    console.log(id);
    await fetch(`${URL}/todos/${id}`, {
      method: "DELETE",
    });
    await getAllTodos();
  }
  onMount(async () => {
    await getAllTodos();
  });
  let newTodo = "";
</script>

<ul>
  {#each data as todo}
    <li>
      {todo.name}

      <button on:click={() => deleteTodoById(todo._id)}>Delete</button>
    </li>
  {/each}
</ul>

<form on:submit|preventDefault={createTodo}>
  <input required type="text" placeholder="New Todo" bind:value={newTodo} />
  <input type="submit" value="Add Todo" required />
</form>
