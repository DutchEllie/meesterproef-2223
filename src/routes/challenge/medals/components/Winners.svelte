<span>
	<label for="firstplace">
		<p>First</p>
		<span class="image">
			<img src="/medal1.svg" alt="First place" />
		</span>
		<input type="radio" id="firstplace" name="medales" />
	</label>

	<label for="secondplace">
		<p>Second</p>
		<span class="image">
			<img src="/medal2.svg" alt="Second place" />
		</span>
		<input type="radio" id="secondplace" name="medales" />
	</label>

	<label for="thirdplace">
		<p>Third</p>
		<span class="image">
			<img src="/medal3.svg" alt="Third place" />
		</span>
		<input type="radio" id="thirdplace" name="medales" />
	</label>

	<label for="noplace">
		<p>None</p>
		<span class="image">
			<img src="/medal4.svg" alt="no place" />
		</span>
		<input type="radio" id="noplace" name="medales" checked/>
	</label>
</span>

<style>
	span {
		width: 100%;
		height: 100%;
		
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	label {
		width: calc(100% / 4.5);
		height: 100%;
		background-color: #fef3cd;
		box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: stretch;
		padding: 1em;
		gap: .5em;
	}

	label p {
		height: fit-content;
		text-align: center;
	}

	input[type='radio'] {
		position: absolute;
		transform: scale(0);
	}

	label:focus-within {
		border: 5px solid #18cc18;
		background-color: #9efb9e;
	}
	label:has(input:checked) {
		border: 5px solid #18cc18;
		background-color: #9efb9e;
	}

	.image {
		display: flex;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	img {
		height: 100%;
		object-fit: cover;
		object-position: center;
	}
</style>
