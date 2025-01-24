<script>
  // options: array with objects: { label, property }
	let { options, selected = $bindable() } = $props();
</script>

<div class="controls">
  <p>Sort by</p>
	{#each options as { label, property } (property)}
		<button
			class:is-active={property === selected}
			onclick={() => (selected = property)}
		>
			{label}
		</button>
	{/each}
</div>

<style>
	.controls {
		display: flex;
		justify-content: center;
    align-items: center;
		gap: 1rem;
		width: 100%;
		padding: 1rem 0;
    background: black;
	}
  
  p {
    color: white;
    font-family: 'Gill Sans';
  }

	button {
		padding: 0.5rem;
		color: white;
    font-family: 'Gill Sans';
		background: black;
		border: 1px solid white;
		cursor: pointer;
    transition: all, 0.4s;
	}

	button:hover, button.is-active {
		color: black;
		background: white;
	}
</style>
