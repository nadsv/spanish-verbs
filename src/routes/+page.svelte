<script>
	import ResultTable from '$lib/components/ResultTable.svelte';
	import VerbForm from '$lib/components/VerbForm.svelte';

	let cnj = null;
	let verb = '';

    function handleResult(event) {
		cnj = event.detail.result;	
		verb = event.detail.verb;					
	}
	
</script>

<svelte:head>
	<title>VerbosVebs</title>
	<meta name="description" content="Find all the conjunctions of Spanish verbs" />
</svelte:head>

<section>
	<VerbForm on:result={handleResult}></VerbForm>
	<div class="mt-3">
		{#if cnj}
			<h1 class="uppercase">{verb}</h1>
			<ResultTable cnj={cnj} />
	 	{/if}
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

</style>
