<script>
	import asics from '$lib/assets/Img.png';
	import beans from '$lib/assets/art.png';
	import eye from '$lib/assets/beans.png';
	import art from '$lib/assets/eye.png';
	import shoe from '$lib/assets/shoe.webp';
</script>

<section class="boxed">
	<h2>Submitted Challenges</h2>
</section>

<section class="boxed">
	<article class="challenge-block">
		<figure>
			<img src={eye} alt="" />
			<div class="overlay">
				<h4>Idolish drawing</h4>
				<p>Sundous</p>
			</div>
		</figure>
	</article>
	<article class="challenge-block">
		<figure>
			<img src={eye} alt="" />
			<div class="overlay">
				<h4>Idolish drawing</h4>
				<p>Sundous</p>
			</div>
		</figure>
	</article>
	<article class="challenge-block">
		<figure>
			<img src={eye} alt="" />
			<div class="overlay">
				<h4>Idolish drawing</h4>
				<p>Sundous</p>
			</div>
		</figure>
	</article>
</section>
<section class="boxed">
	<article class="challenge-block">
		<figure>
			<img src={eye} alt="" />
			<div class="overlay">
				<h4>Idolish drawing</h4>
				<p>Sundous</p>
			</div>
		</figure>
	</article>
	<article class="challenge-block">
		<figure>
			<img src={eye} alt="" />
			<div class="overlay">
				<h4>Idolish drawing</h4>
				<p>Sundous</p>
			</div>
		</figure>
	</article>
	<article class="challenge-block">
		<figure>
			<img src={eye} alt="" />
			<div class="overlay">
				<h4>Idolish drawing</h4>
				<p>Sundous</p>
			</div>
		</figure>
	</article>
</section>
<section class="boxed">
	<article class="challenge-block">
		<figure>
			<img src={eye} alt="" />
			<div class="overlay">
				<h4>Idolish drawing</h4>
				<p>Sundous</p>
			</div>
		</figure>
	</article>
	<article class="challenge-block">
		<figure>
			<img src={eye} alt="" />
			<div class="overlay">
				<h4>Idolish drawing</h4>
				<p>Sundous</p>
			</div>
		</figure>
	</article>
	<article class="challenge-block">
		<figure>
			<img src={eye} alt="" />
			<div class="overlay">
				<h4>Idolish drawing</h4>
				<p>Sundous</p>
			</div>
		</figure>
	</article>
</section>
<section class="boxed">
	<a href="#" class="laadMeer">Load more challenges</a>
</section>

<style>
	.boxed:last-child {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.boxed:last-child > a {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding: 15px 20px;
		gap: 8px;

		background: white;
		border: 1px solid #000000;
		/* Shadow (XS) */

		font-family: 'Open Sans';
		font-style: normal;
		font-weight: 700;
		font-size: 19.2px;
		line-height: 22px;
		/* identical to box height, or 115% */

		text-transform: capitalize;

		color: black;
	}

	.boxed:last-child > a:hover {
		background: #d9d9d9;
	}
	em {
		font-size: 0.8em;
		color: #73738c;
	}

	.group {
		padding: 1em;
		gap: 0.5em;
		display: flex;
		flex-direction: column;
	}

	.detail {
		gap: 0.5em;
	}

	caption {
		color: #6e98ff;
		font-weight: 600;
		font-size: 0.75em;
	}

	section:first-of-type > article:first-of-type > .container > a {
		padding: 1em;
		border: 0.1875em solid black;
		background-color: white;
		width: 12em;
		text-decoration: none;
		color: black;
		text-align: center;
	}

	.main-container {
		display: flex;
		gap: 0.5em;
	}

	.side-container {
		display: flex;
		flex-direction: column;
		gap: 0.5em;
	}

	.group > p {
		margin-bottom: 1em;
	}

	.container a {
		width: 100%;
		padding: 0.5em;
		gap: 0.5em;
	}

	.container a {
		margin-top: 8px;
	}

	.boxed:first-of-type {
		margin-top: 4em;
	}

	.boxed > h2,
	.boxed > p {
		width: 100%;
	}

	h3 {
		order: -1;
	}

	.boxed {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		flex-direction: row;
		gap: 1em;
	}

	.boxed article {
		flex: 1 1 30%;
	}

	a.laadMeer {
		padding: 1em;
		background-color: slategray;
		text-decoration: none;
		color: black;
		text-align: center;
		justify-content: center;
	}

	a.enroll {
		padding: 1em;
		background-color: black;
		width: 100%;
		text-decoration: none;
		color: white;
		text-align: center;
	}

	.boxed:first-of-type
		> .group
		> .container
		> a.meerInformatie:first-of-type
		+ a.enroll:first-of-type {
		padding: 1em;
		border: 0.1875em solid black;
		background-color: white;
		width: 50%;
		text-decoration: none;
		color: black;
		text-align: center;
	}

	article figure img {
		background: gray;
		width: 100%;
		display: block;
	}

	article {
		background-color: white;
		box-shadow: 0px 0.4px 8px rgba(0, 0, 0, 0.1);
	}

	article figure {
		position: relative;
	}

	figcaption {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.deelnemers {
		position: absolute;
		top: 1em;
		left: 1em;
		padding: 0.5em;
		background: white;
		font-size: 1em;
		display: flex;
		flex-direction: row;
		gap: 0.5em;
		box-shadow: 0px 0.4px 8px rgba(0, 0, 0, 0.1);
	}

	.sponsorLogo {
		position: absolute;
		top: 1em;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding: 0px;
		gap: 8px;
		color: white;

		font-style: normal;
		font-weight: 400;
		font-size: 12px;
		line-height: 14px;
	}

	.bookmark {
		position: absolute;
		top: 1em;
		right: 1em;
		padding: 0.5em;
		background: white;
		font-size: 1em;
		display: flex;
		flex-direction: row;
		gap: 0.5em;
		box-shadow: 0px 0.4px 8px rgba(0, 0, 0, 0.1);
	}

	/* tekst in de challenge blokken */
	.challenge-block {
		position: relative;
	}

	.challenge-block figure {
		position: relative;
	}

	.challenge-block .overlay {
		position: absolute;
		bottom: 0;
		left: 0;
		padding: 10px;
		color: white;
		width: 100%;
	}

	.challenge-block .overlay h4,
	.challenge-block .overlay p {
		margin: 0;
		text-shadow: 0 0 3px black;
	}

	/* einde tekst in de challenge blokken */

	@media (max-width: 750px) {
		.boxed {
			display: flex;
			flex-direction: column;
			align-items: center;
			max-width: unset;
			margin: 0 0.5em;
		}

		.boxed:nth-child(2) {
			display: none;
		}

		.boxed:first-of-type {
			margin-top: 1em;
		}
		.challenge-block {
			margin-bottom: 0.5em;
			width: 100%;
		}
	}

	.challenge-block {
		height: 100%;
		background-color: #edf2f2;
		box-shadow: none;
	}
</style>
