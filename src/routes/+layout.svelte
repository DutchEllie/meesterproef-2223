<script lang="ts">
	import '../app.css';
  import { signIn, signOut } from "@auth/sveltekit/client"
	import { page } from '$app/stores';

	console.log("page", $page.data.session);
</script>

<h1>SvelteKit Auth Example</h1>
<p>
  {#if $page.data.session}
    {#if $page.data.session.user?.image}
      <span
        style="background-image: url('{$page.data.session.user.image}')"
        class="avatar"
      />
    {/if}
    <span class="signedInText">
      <small>Signed in as</small><br />
      <strong>{$page.data.session.user?.email ?? "User"}</strong>
    </span>
    <button on:click={() => signOut()} class="button">Sign out</button>
  {:else}
    <span class="notSignedInText">You are not signed in</span>
    <button on:click={() => signIn("credentials", {
			redirect: false,
			email: "test1111@cringe.zip",
			password: "test1111"
		})}>Sign In with GitHub</button>
  {/if}
</p>

<slot />