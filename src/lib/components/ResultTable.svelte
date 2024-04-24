<script>
	import { Table, TableBody, TableBodyCell, TableBodyRow, Button } from 'flowbite-svelte';
	import { formatName }  from '../helpers';
	import { upright } from '../../stores/stores';
	import { createEventDispatcher } from 'svelte';
	export let cnj;
	export let rows;
	export let columns;

	const dispatch = createEventDispatcher();

	function Transpose() {
		upright.update((value) => !value);
		dispatch('transpose');
	}
</script>

	
<Table striped={true} shadow >
	<TableBody>
		<TableBodyRow  class="!bg-primary-600">
			<TableBodyCell class="uppercase text-center text-white px-3 py-2">
				<Button class="bg-primary-500" pill size="xs" on:click={Transpose}>TRANSPONSE</Button>
			</TableBodyCell>
			{#each columns as title}
				<TableBodyCell class="uppercase text-center text-white px-3 py-2"><span class="cell-wrap">{formatName(title)}</span></TableBodyCell>
			{/each}
	</TableBodyRow>
	{#each rows as row}
		<TableBodyRow>
			<TableBodyCell class="uppercase bg-primary-200 px-3 py-1"><span class="font-small">{formatName(row)}</span></TableBodyCell>
			{#each Object.entries(cnj[row]) as [key, name]}
				<TableBodyCell class="text-center px-3 py-1"><span class="font-small">{name}</span></TableBodyCell>
			{/each}
		</TableBodyRow>
	{/each}
	</TableBody>
</Table>


<style>
	.cell-wrap {
		white-space: pre-wrap;
	}
@media (max-width: 1200px) { 
	.font-small {
		font-size: 11px !important;
	}
}	
</style>