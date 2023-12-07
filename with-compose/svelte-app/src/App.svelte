<script lang="ts">
  import { onMount } from "svelte";
  let data: any = [];
  onMount(async () => {
const URL = import.meta.env.VITE_PUBLIC_BACKEND_URL
    const res = await fetch(URL);
    const json = await res.json();
    data = json;
    console.log(json);
  });
</script>

Hello

<pre>
    {JSON.stringify(data, null, 2)}
</pre>
