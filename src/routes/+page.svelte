<div class="header"><h1>CodeShelf</h1><a href="/"><img src="logo.png" alt="logo"></a></div>
<div class="hero">
    <div class="hero-text">
        <h1>CodeShelf</h1>
        <p>Syntaxe a rychlost</p>
    </div>
</div>

<div class="container margin">
    <div class="content">
        <div class="left">
            <h2>Proč se mám učit programovaní?</h2>
            <ul>
                <li>Chápání digitálního světa</li>
                <li>Změna přemýšlení o tom jak fungují weby, aplikace, ...</li>
                <li>Získáš schopnost řešení složitých problémů z vyššího pohledu</li>
            </ul>
        </div>
        <div class="right">
            <h2>K čemu mi ta znalost je?</h2>
            <ul>
                <li>Můžeš si vytvářet vlastní aplikace za které nemusíš platit</li>
                <li>Programování lze použít jako nástroj pro osobní účely</li>
                <li>Zaměstnavatelé pořád shánějí programátory</li>
            </ul>
        </div>
    </div>

    <div class="center margin">
        <h1>Programovací jazyky</h1>
    </div>

    <div class="programming">
        <div class="left">
            <h2>Vysvětlení</h2>
            <ul>
                <li>Nástroj pro vytváření algoritmů neboli programů, díky nimž mohou počítače provádět různé operace</li>
                <li>Programovacím jazykem formuluje programátor řešení daného problému, podle kterého následně počítač postupuje</li>
                <li>Programovací jazyk je vlastně soubor pravidel pro zápis algoritmů, odborně řečeno se jedná o formální jazyk</li>
            </ul>
        </div>
        <div class="right">
            <h2>Dělení</h2>
            <div class="right-container">
                <ul>Procedurální (imperativní)
                    <ul>
                        <li>Strukturované (např. C a BASIC)</li>
                        <li>Objektově orientované (např. Java)</li>
                    </ul>
                </ul>
                <ul>Neprocedurální (deklarativní)
                    <ul>
                        <li>Funkcionální</li>
                        <li>Logické</li>
                    </ul>
                </ul>
            </div>
        </div>
    </div>
</div>

<!-- <div class="content">
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
    </div> -->

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
        width: calc((100vw - 5rem) / 2);
        text-align: center;
    }

    .programming > div {
        width: calc((100vw - 5rem) / 2);
    }

    .programming {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }

    .programming .right {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .programming .left {
        padding-left: 2rem;
    }

    .programming .left ul {
        list-style: disc;
    }

    .right-container {
        display: flex;
        flex-direction: row;
        gap: 2rem;
    }

    .right-container ul {
        list-style: disc;
    }

    .content {
        margin-inline: 2rem;
        /* margin-top: 2rem; */
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }

    .margin {
        margin-top: 2rem;
    }

    .center {
        margin-top: 1rem;
        width: calc(100vw - 6rem);
        text-align: center;
    }

    ul {
        list-style: none;
    }
    ul li {
        color: #b6b6b6;
    }

    .hero {
        background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://media.discordapp.net/attachments/1014890487146106881/1165004562088865843/IMG_4399.jpg");
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

    /* .right {
        width: 20vw;
    } */

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

        .programming {
            flex-direction: column;
            align-items: center;
        }
        .programming > div {
            width: 100vw;
            padding: 1rem;
        }

        .programming .left h2 {
            text-align: center;
        }

        .center {
            width: 100vw;
        }

        .right-container {
            flex-direction: column;
        }
	}
</style>