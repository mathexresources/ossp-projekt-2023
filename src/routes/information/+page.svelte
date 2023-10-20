<div class="header"><h1>Information</h1><img src="logo.png" alt="logo"></div>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut exercitationem molestiae unde consectetur ipsam ut, aspernatur maiores eaque. Officia soluta illo magni facilis maxime voluptate ratione consequuntur sint rem? Ipsa atque enim nemo vero rerum neque est, facere illo voluptate ratione, sed consectetur sapiente nisi placeat aspernatur sint, saepe cupiditate possimus illum minima perspiciatis. Soluta libero laborum adipisci ipsam suscipit. Tenetur, itaque ducimus repudiandae quidem quae consequatur commodi et dolore, praesentium beatae aperiam quas incidunt. Minima, fuga neque nemo ipsa suscipit animi quisquam, quis illo rem iste hic error repellendus, ut dolores vitae facilis tempore explicabo ipsam adipisci modi aliquam? Molestias tenetur voluptatum laudantium, odio beatae ipsam, omnis iusto tempore, iste minima voluptates vitae. Ad explicabo necessitatibus aliquid doloribus, dolor qui totam accusamus labore itaque blanditiis aspernatur illum facere, nulla et incidunt amet? Quia, recusandae officia libero deserunt dolores maiores? Rerum reiciendis obcaecati beatae dicta et vel iusto magnam ut impedit, explicabo doloremque sit natus veniam, adipisci eos fuga neque maiores enim delectus illum? Nobis dicta facilis at ipsum quam ipsam nisi perferendis in, enim esse rerum, amet soluta praesentium dolor ex. Neque ab officia consequatur et, dignissimos inventore eos dolorum laudantium ratione quas dolorem necessitatibus delectus autem! Provident, delectus?</p>

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