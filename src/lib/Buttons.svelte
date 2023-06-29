<script lang="ts">
    export let variant:
    "primary" |
    "start-yellow" |	
    "start-blue" |
    "start-grey" |
    "details" |
    "view-yellow" |
    "view-grey" |
    "view-challenge" |
    "edit" |
    "left" |
    "right" |
    "up" |
    "yes" |
    "no" |
    "savexit" |
    "skipcancel";


	export let handleClick = () => {};
	export let href: string = '';

	export let size: 'small' | 'medium' | 'large' | 'full-width' | 'none' = 'none';
	export let hasIcon: boolean = false;
</script>

{#if href != ''}
	<a class="{variant} size-{size} icon-{hasIcon}" {href}><slot /></a>
{:else}
	<button class="{variant} size-{size} icon-{hasIcon}" on:click={handleClick}><slot /></button>
{/if}

<style>
	.size-small {
		font-size: 1rem;
		padding: 8px 21px !important;
	}

	.size-full-width {
		width: 100%;
		font-size: 1rem;
		padding: 8px 21px !important;
		justify-content: center;
	}

	.icon-true {
		display: inline-flex;
		align-items: center;
		gap: 6px;
	}

	.size-medium {
		font-size: 1rem;
		padding: 8px 42px;
	}

button{
  background-color: var(--blue-button);
  color: var(--white);
  font-family: var(--font-family);
  font-size: 1.2rem;
  padding: 1rem;
  font-weight: 700;
  outline: none;
  border: none;
  cursor: pointer;
}

	.size-large {
		font-size: 1.2rem !important;
		padding: 1.5rem !important;
	}

  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }



button:hover{
  background-color: var(--theme-secondary);
}

.start-yellow,
.primary {
  background-color: var(--theme-color);
  color: var(--black);
}

.start-yellow:hover{
  background-color: var(--primary-600);


.secondary {
	background-color: #21bde5;
  	color: #000000;
}

.start-blue {
  background-color: var(--blue-button);
  color: var(--white);
}

.start-grey{
  background-color: var(--neutral-500);
  color: var(--black);
}

.start-grey:hover{
  background-color: var(--neutral-500);
}

.details{
  background-color: var(--primary-500);
  color: var(--black);
  width: 8rem;
	height: 4rem;
}

.details:hover{
  background-color: var(--primary-600);
}

.view-yellow{
  background-color: var(--primary-500);
  color: var(--black);
}

.view-yellow:hover{
  background-color: var(--primary-600);
}

.view-grey{
  background-color: var(--neutral-600);
  color: var(--black);
  width: 10rem;
	height: 4rem;
}

.start-grey:hover {
	background-color: #a09f9a;
}

.view-challenge {
    background-color: var(--primary-500);
    color: var(--black);
    position: relative;
    width: 22rem;
		height: 4rem;
    padding-right: 2rem;
  }

	button, a {
		background-color: #21bde5;
		color: #fff;
		font-size: 1.2rem;
		padding: 1rem;
		font-weight: 700;
		outline: none;
		border: none;
		cursor: pointer;
	}

.view-challenge:hover{
  background-color: var(--primary-600);
}

.edit{
  width: 22rem;
	height: 4rem;
  position: relative;
  padding-right: 2rem;
}
	button:hover, a:hover {
		background-color: #32a5c3;
	}

	.start-yellow,
	.primary {
		background-color: #f7ce46;
		color: #000000;
	}

	.start-yellow:hover {
		background-color: #e1b114;
	}

.left{
  width: 5rem;
  height: 5rem;
  position: relative;
  background-color: var(--white);
  color: var(--black);
  border: 1px solid var(--black);
}

	.start-grey {
		background-color: #b1afa9;
		color: #000000;
		cursor: pointer;
	}

	.details {
		background-color: #f7ce46;
		color: #000000;
		min-width: 8rem;
		height: 4rem;
	}

	.details:hover {
		background-color: #e1b114;
	}

.right{
  width: 5rem;
  height: 5rem;
  position: relative;
  background-color: var(--white);
  color: var(--black);
  border: 1px solid var(--black);
}
	.view-yellow {
		background-color: #f7ce46;
		color: #000000;
		min-width: 10rem;
		height: 4rem;
	}

	.view-yellow:hover {
		background-color: #e1b114;
	}

.right:hover{
  background-color: var(--neutral-300);
}

.up{
  width: 5rem;
  height: 5rem;
  position: relative;
  background-color: var(--white);
  color: var(--black);
  border: 1px solid var(--black);
  position: fixed;
  top: 80%;
  right: 5%;
  z-index: 100;
}

.up::after {
    content: "\f062";
    font-family: "Font Awesome 5 Free";
    position: absolute;
    right: 40%;
    top: 50%;
    transform: translateY(-50%);
  }

.up:hover{
  background-color: var(--neutral-300);
}

.yes{
  background-color: var(--accent-success-500);
  width: 10rem;
  height: 4rem;
  position: relative;
}

.yes:hover{
  background-color: var(--accent-success-700);
}

.yes::after {
    content: "\f00c";
    font-family: "Font Awesome 5 Free";
    position: absolute;
    right: 45%;
    top: 50%;
    transform: translateY(-50%);
  }

.no{
  background-color: var(--accent-danger-500);
  width: 10rem;
  height: 4rem;
  position: relative;
}

.no:hover{
  background-color: var(--accent-danger-700);
}
	.view-grey {
		background-color: #b1afa9;
		color: #000000;
		min-width: 10rem;
		height: 4rem;
	}

	.view-challenge {
		background-color: #f7ce46;
		color: #000000;
		width: 22rem;
		height: 4rem;
		position: relative;
		padding-right: 2rem;
	}

	.view-challenge::after {
		content: '\f06e';
		font-family: 'Font Awesome 5 Free';
		position: absolute;
		right: 10%;
		top: 50%;
		transform: translateY(-50%);
	}

	.view-challenge:hover {
		background-color: #e1b114;
	}

	.edit {
		width: 22rem;
		height: 4rem;
		position: relative;
		padding-right: 2rem;
	}

	.edit::after {
		content: '\f044';
		font-family: 'Font Awesome 5 Free';
		position: absolute;
		right: 10%;
		top: 50%;
		transform: translateY(-50%);
	}

	.left {
		width: 5rem;
		height: 5rem;
		position: relative;
		background-color: #ffffff;
		color: #000000;
		border: 1px solid #000000;
	}

.savexit{
  border: 5px solid var(--blue-button);
  background-color: var(--white);
  color: var(--black);
}

.skipcancel{
  border: none;
  color: var(--gray-font);
  background-color: var(--white);
  font-weight: lighter;
}

.skipcancel:hover{
  background-color: var(--white);
  color: var(--blue-button);
}
	.left:hover {
		background-color: #d8d7d4;
	}

	.left::after {
		content: '\f060';
		font-family: 'Font Awesome 5 Free';
		position: absolute;
		right: 40%;
		top: 50%;
		transform: translateY(-50%);
	}

	.right {
		width: 5rem;
		height: 5rem;
		position: relative;
		background-color: #ffffff;
		color: #000000;
		border: 1px solid #000000;
	}

	.right::after {
		content: '\f061';
		font-family: 'Font Awesome 5 Free';
		position: absolute;
		right: 40%;
		top: 50%;
		transform: translateY(-50%);
	}

	.right:hover {
		background-color: #d8d7d4;
	}

	.yes {
		background-color: #38d248;
		width: 10rem;
		height: 4rem;
		position: relative;
	}

	.yes:hover {
		background-color: #269560;
	}

	.yes::after {
		content: '\f00c';
		font-family: 'Font Awesome 5 Free';
		position: absolute;
		right: 40%;
		top: 50%;
		transform: translateY(-50%);
	}

	.no {
		background-color: #ff3939;
		width: 10rem;
		height: 4rem;
		position: relative;
	}

	.no:hover {
		background-color: #ad1f1f;
	}

	.no::after {
		content: '\f00d';
		font-family: 'Font Awesome 5 Free';
		position: absolute;
		right: 45%;
		top: 50%;
		transform: translateY(-50%);
	}
</style>
