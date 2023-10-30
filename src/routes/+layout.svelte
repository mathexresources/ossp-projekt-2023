<script lang="ts">
	// export const prerender = true;
</script>

<nav class="navbar">
    <ul class="navbar-nav">
      <li class="logo">
        <a href="/" class="nav-link">
          <span class="link-text logo-text">CodeShelf</span>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="angle-double-right"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            class="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
          >
            <g class="fa-group">
              <path
                fill="currentColor"
                d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                class="fa-secondary"
              ></path>
              <path
                fill="currentColor"
                d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                class="fa-primary"
              ></path>
            </g>
          </svg>
        </a>
      </li>

      <li class="nav-item">
        <a href="/syntaxes" class="nav-link">
			<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
			<path stroke="currentColor" class="fa-primary" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"/>
			</svg>
          <span class="link-text">Syntaxes</span>
        </a>
      </li>

      <!-- <li class="nav-item">
        <a href="/information" class="nav-link">
			<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
				<path stroke="currentColor" class="fa-primary" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9h2v5m-2 0h4M9.408 5.5h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
			</svg>
          <span class="link-text">Information</span>
        </a>
      </li> -->

      <li class="nav-item">
        <a href="/settings" class="nav-link">
          	<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
				<path stroke="currentColor" class="fa-primary" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.75 4H19M7.75 4a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 4h2.25m13.5 6H19m-2.25 0a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 10h11.25m-4.5 6H19M7.75 16a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 16h2.25"/>
			</svg>
          <span class="link-text">Settings</span>
        </a>
      </li>
    </ul>
  </nav>

<svelte:head>
	<script src="https://kit.fontawesome.com/c353f0f248.js" crossorigin="anonymous"></script>
</svelte:head>

<main>
	<slot />
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
	:global(:root) {
		font-size: 16px;
		font-family: 'Open Sans';
		--text-primary: #ececec;
		--text-secondary: #b6b6b6;
		--bg-primary: #23232e;
		--bg-secondary: #141418;
		--transition-speed: 600ms;
	}

	:global(*) {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	:global(body) {
		background: var(--bg-primary);
		color: var(--text-primary);
	}

	:global(p) {
		color: var(--text-secondary);
	}

	main {
		margin-left: 5rem;
		margin-top: 5rem;
		padding: 1rem;
		font-size: 1.25rem;
	}

	.navbar {
		width: 5rem;
		height: 100vh;
		position: fixed;
		background-color: var(--bg-secondary);
		transition: width 200ms ease;
		z-index: 10;
	}

	.navbar-nav {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100%;
	}

	.nav-item {
		width: 100%;
	}

	.nav-item:last-child {
		margin-top: auto;
	}

	.nav-link {
		display: flex;
		align-items: center;
		height: 5rem;
		color: var(--text-primary);
		text-decoration: none;
		filter: grayscale(100%) opacity(0.7);
		transition: var(--transition-speed);
	}

	.nav-link:hover {
		filter: grayscale(0%) opacity(1);
		background: var(--bg-secondary);
		color: var(--text-secondary);
	}

	.link-text {
		display: none;
		margin-left: 1rem;
	}

	.nav-link svg {
		width: 2rem;
		min-width: 2rem;
		margin: 0 1.5rem;
	}

	.fa-primary {
		color: #3885d1;
		/* fill: #ff7eee; */
	}

	.fa-secondary {
		color: #2f72b5;
		/* fill: #df49a6; */
	}

	.fa-primary,
	.fa-secondary {
		transition: var(--transition-speed);
	}

	.logo {
		font-weight: bold;
		text-transform: uppercase;
		margin-bottom: 1rem;
		text-align: center;
		color: var(--text-secondary);
		background: var(--bg-secondary);
		font-size: 1.25rem;
		letter-spacing: 0.3ch;
		width: 100%;
	}

	.logo svg {
		transform: rotate(0deg);
		transition: var(--transition-speed);
	}

	.logo-text {
		display: inline;
		position: absolute;
		left: -999px;
		transition: var(--transition-speed);
	}

	.navbar:hover .logo svg {
		transform: rotate(-180deg);
	}

	/* Small screens */
	@media only screen and (max-width: 600px) {
		.navbar {
			bottom: 0;
			width: 100vw;
			height: 5rem;
		}

		.logo {
			display: none;
		}

		.navbar-nav {
			flex-direction: row;
		}

		.nav-link {
			justify-content: center;
		}

		main {
			margin: 0;
			margin-top: 5rem;
			margin-bottom: 5rem;
		}
	}

	/* Large screens */
	@media only screen and (min-width: 600px) {
		.navbar {
			top: 0;
			width: 5rem;
			height: 100vh;
		}

		.navbar:hover {
			width: 16rem;
		}

		.navbar:hover .link-text {
			display: inline;
		}

		.navbar:hover .logo svg {
			margin-left: 11rem;
		}

		.navbar:hover .logo-text {
			left: 0px;
		}

		main {
			margin-bottom: 5rem;
		}
	}
/* 
	.dark {
		--text-primary: #b6b6b6;
		--text-secondary: #ececec;
		--bg-primary: #23232e;
		--bg-secondary: #141418;
	}

	.light {
		--text-primary: #1f1f1f;
		--text-secondary: #000000;
		--bg-primary: #ffffff;
		--bg-secondary: #e4e4e4;
	}

	.solar {
		--text-primary: #576e75;
		--text-secondary: #35535c;
		--bg-primary: #fdf6e3;
		--bg-secondary: #f5e5b8;
	}

	.theme-icon {
		display: none;
	}

	.dark #darkIcon {
		display: block;
	}

	.light #lightIcon {
		display: block;
	}

	.solar #solarIcon {
		display: block;
	} */
</style>
