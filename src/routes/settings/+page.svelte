<script lang="ts">
	import language from '$lib/language';

	$: value = window.localStorage.getItem('language');
</script>

<div class="header">
	<h1>Nastavení</h1>
	<a href="/"><img src="logo.png" alt="logo" /></a>
</div>

<h2>Programovací jazyk</h2>
<div class="container">
	<div class="select">
		<select name="language" bind:value id="lang">
			<option value="python">Python</option>
			<option value="php">PHP</option>
			<option value="cpp">C++</option>
			<option value="cs">C#</option>
			<option value="js">JavaScript</option>
			<option value="ts">TypeScript</option>
			<option value="ruby">Ruby</option>
			<option value="go">GoLang</option>
			<option value="java">Java</option>
		</select>
	</div>
</div>
<button
	on:click={() =>
		window.localStorage.setItem('language', typeof value == 'string' ? value : 'python')}
	>Save</button
>

<style>
    :root {
        --gray: #34495e;
        --darkgray: #2c3e50;
    }
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

    .container {
        margin-top: 1rem;
    }

	.header img {
		width: 10rem;
		position: fixed;
		right: 0.75rem;
		top: 0.75rem;
	}

	h2 {
		font-size: xxx-large;
	}

	select {
		/* Reset Select */
		appearance: none;
		outline: 10px red;
		border: 0;
		box-shadow: none;
		/* Personalize */
		flex: 1;
		padding: 0 1em;
		color: #fff;
		background-color: var(--darkgray);
		background-image: none;
		cursor: pointer;
	}
	/* Remove IE arrow */
	select::-ms-expand {
		display: none;
	}
	/* Custom Select wrapper */
	.select {
		position: relative;
		display: flex;
		width: 20em;
		height: 3em;
		border-radius: 0.25em;
		overflow: hidden;
	}
	/* Arrow */
	.select::after {
		content: '>';
		position: absolute;
		top: 0;
		right: 0;
		padding: 1em;
		background-color: #34495e;
		transition: 0.25s all ease;
		pointer-events: none;
	}

    button {
        background: var(--darkgray);
        color: white;
        border: 0;
        width: 20em;
        height: 3em;
        border-radius: 5px;
        margin: 1rem
    }

    button:hover {
        cursor: pointer;
        background: var(--gray);
    }

	/* Transition */
	.select:hover::after {
		color: #f39c12;
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
