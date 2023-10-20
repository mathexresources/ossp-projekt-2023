<script lang="ts">
    export let section: string;

    const filePromise = import(/* @vite-ignore */ `../materials/${section}.json`)
</script>

<div class="container">
</div>
{#await filePromise}
    <h1>Loading..</h1>
{:then sect} 
    <h2>{@html sect.header}</h2>
    <p>{@html sect.body}</p>
{/await}

<style>
    h2 {
        font-size: xxx-large;
        font-weight: bold;
    }

    /* @media only screen and (max-width: 600px) {
		.container {
            margin-top: 5rem;
            height: 1px;
            width: 1px;
        }
	} */
</style>
