<div class="header"><h1>CodeShelf</h1><a href="/"><img src="logo.png" alt="logo"></a></div>
<div class="hero">
    <div class="hero-text">
        <h1>CodeShelf</h1>
        <p>Syntaxe a rychlost</p>
    </div>
</div>

<div class="container">
    <div class="content">
        <div class="left">
            <h2>Čeho chceme dosáhnout?</h2>
            <ul>
                <li>vytořit Webovou stránku, která ulehčí práci zkušeným progamátorům, a přiblíží programování všem, kteří s ním chtěji začít</li>
                <li>ulehčit práci zkušeným progamátorům, kteří chějí rychle vyhledat specifickou informaci</li>
                <li>ukázat, že programování není složitá činnost jen pro vybrané lidi</li>
            </ul>
        </div>
        <div class="right">
            <h2>Co bude výstupem projektu?</h2>
            <ul>
                <li>webová stránka s rychlým přehledem syntaxe, jazyků a komponentů programovacích jazyků</li>
                <li>QR kody v IT učebnách pro zlehčení přístupnosti</li>
            </ul>
        </div>
    </div>

    <div class="content">
        <div class="left">
            <h2>Proč to děláme?</h2>
            <ul>
                <li>přiblíží programování široké veřejnosti</li>
                <li>ukázat, že programování není nic těžkého</li>
                <li>rozhled napříč 10 jazyky, které jsme vybrali jako ty nejpopulárnější</li>
            </ul>
        </div>

        <div class="right">
            <h2>Pro koho to děláme?</h2>
            <ul>
                <li>pro zkušené programátory</li>
                <li>pro začátečníky</li>
            </ul>
        </div>
    </div>
</div>

<style>
    :global(body), :global(html) {
        height: 100%;
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

    .header img {
        width: 10rem;
        position: fixed;
        right: 0.75rem;
        top: 0.75rem;
    }

    .content > div {
        width: calc((100vw - 20rem) / 2);
    }

    .content {
        margin-top: 2rem;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }

    ul {
        list-style: "~ ";
    }
    ul li {
        color: #b6b6b6;
    }

    .hero {
        background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("hero-image.jpg");
        height: 400px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
    }

    .hero-text {
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: xx-large;
        color: white;
    }

    .hero-text h1 {
        font-weight: bold;
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

        .content > div {
            width: 90%;
            margin-inline: 1rem;
            margin-top: 2rem;
        }

        .content {
            flex-direction: column;
            margin-top: 0;
        }
	}
</style>