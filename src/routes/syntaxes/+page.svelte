<script lang="ts">
	import CodeDescription from "$lib/components/CodeDescription.svelte";
import CodePiece from "$lib/components/CodePiece.svelte";
    let names = ["ifStatement", "forLoops", "array"];
</script>
<h1>Code Syntaxes</h1>
<!-- <div class="margin"></div> -->
{#each names as name}
    <div class="container">
        <div class="left">
            <!-- <h2>{section.header}</h2>
            <p>
                {section.body}
            </p> -->
            <CodeDescription section="{name}" />
        </div>
        <div class="right">
            <CodePiece section={name} />
        </div>
    </div>
    <hr>
{/each}

<style>
    h1 {
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

    hr {
        border: 1px rgb(67, 67, 67) solid;
        margin-block: 1rem;
    }

    @media only screen and (max-width: 600px) {
		h1 {
            width: 100vw;
            /* margin-bottom: 5rem; */
            left: 0;
            top: 0;
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