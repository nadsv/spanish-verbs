<script>
	import ResultTable from '$lib/components/ResultTable.svelte';
	import VerbForm from '$lib/components/VerbForm.svelte';

	let cnj = null;

    function handleResult(event) {
		cnj = event.detail.result;					
	}
	
</script>

<svelte:head>
	<title>VerbosVebs</title>
	<meta name="description" content="Find all the conjunctions of Spanish verbs" />
</svelte:head>

<section>
	<VerbForm on:result={handleResult}></VerbForm>
	<div class="mt-6">
		{#if cnj}
			<ResultTable cnj={cnj} />
	 	{/if}
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

</style>
