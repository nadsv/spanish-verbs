<script>
	import ResultTable from '$lib/components/ResultTable.svelte';
	import VerbForm from '$lib/components/VerbForm.svelte';
	import { upright } from '../stores/stores';
	import { personsList, tenseNames, conjunctions }  from '$lib/helpers'; 

	let cnj = null;
	let verb = '';
	let rows =  tenseNames;
	let columns = personsList;

    function handleResult(event) {
		verb = event.detail.verb;
		cnj = conjunctions(verb, $upright);							
	}

	function handleTranspose() {
		cnj = conjunctions(verb, $upright);
		rows =  $upright? tenseNames : personsList;
	    columns = $upright? personsList : tenseNames;
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
			<ResultTable {cnj} {rows} {columns} on:transpose={handleTranspose}></ResultTable>
	 	{/if}
	</div>
</section>

<style>
</style>
