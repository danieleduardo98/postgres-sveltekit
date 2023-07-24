<script>
    export let data;

    let product = {
        price: null,
    }
</script>

<h1>Products</h1>

<form class = "p-6 border">
    <div class=" flex flex-col">
        <label>Products Name</label>
        <input type="text" class="border" bind:value={product.price} />
    </div>
</form>

<pre>{JSON.stringify(data, null, 2)}</pre>