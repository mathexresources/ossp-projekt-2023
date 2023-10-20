<script lang="ts">
	import CodeDescription from "$lib/components/CodeDescription.svelte";
import CodePiece from "$lib/components/CodePiece.svelte";
    let names = ["dataTypes", "array", "ifStatement", "forLoops", "functions"];
</script>
<div class="header"><h1>Settings</h1><img src="logo.png" alt="logo"></div>

{#each names as name}
    <div class="container">
        <div class="left">
            <CodeDescription section="{name}" />
        </div>
        <div class="right">
            <CodePiece section={name} />
        </div>
    </div>
    <hr>
{/each}

<style>
    .header {
        position: fixed;
        background: #1c1c1c;
        padding: 1rem;
        text-align: center;
        margin: 0;
        width: calc(100vw - 5rem);
        top: 0;
        left: 5rem;
        z-index: 9;
        /* margin-bottom: 10rem; */
    }

    .header img {
        width: 10rem;
        position: fixed;
        right: 0.75rem;
        top: 0.75rem;
    }

    @media only screen and (max-width: 600px) {
        .header img {
            position: relative;
            display: block;
            right: inherit;
            top: inherit;
        }
		.header {
            width: 100vw;
            /* margin-bottom: 5rem; */
            left: 0;
            top: 0;
            display: flex;
            justify-content: space-between;
            flex-direction: row;
        }
	}
</style>

<!-- <style>
    .container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    @media only screen and (max-width: 600px) {
		.container {
            flex-direction: column;
        }

        /* code {
            font-size: 10px;
        } */
	}
</style> -->
<!-- <h1>{window.localStorage.getItem('language')}</h1> -->