<script lang="ts">
	export let user: {
		firstName: string;
		lastName: string;
		location: string;
		userImage: string;
		education: string;
	} = {
		firstName: 'Sundous',
		lastName: 'Kanaan',
		location: 'Japan',
		userImage: '/fire-emoji.svg',
		education: 'Communication and Multimedia Design'
	};
</script>

<div class="usercard">
	<ul>
	<li><img src={user.userImage} alt="{user.firstName} {user.lastName} profile image" /></li>
	<li><p class="location">{user.location}</p></li>
	<li><h3>Skills</h3></li>
</ul>
<ul>
<li><h3>{user.firstName} {user.lastName}</h3></li>
<li><p class="education">{user.education}</p></li>
</ul>
</div>

<style>
	.usercard {
		width: 100%;
		height: 100%;
		border-radius: 2px;
		box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
		padding: 1em;
		margin: 0 0 2em 0;
		background-color: #BAE4E8;
        grid-area: 2/2/3/-2;
		display: grid;
		grid-template-columns: 30% 70%;
	}
img{
	width: 80%;
	object-fit: cover;
	object-position: center;
}

	.location::before {
    content: "\f044";
    font-family: "Font Awesome 5 Free";
    position: relative;
    transform: translateY(-50%);
	margin-right: .5em;
  }

  .location{
	margin-top: .5em;
  }

  .education{
	font-size: .8em;			
  }

  li h3{
	margin-top: .5em;
  }

    @media (min-width: 1200px){
        .usercard{
            grid-area: 2/2/3/3;
        }
    }
</style>