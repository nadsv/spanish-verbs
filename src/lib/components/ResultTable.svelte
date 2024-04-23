<script>
	import { Table, TableBody, TableBodyCell, TableBodyRow } from 'flowbite-svelte';
	import { personsList, tenseName }  from './helpers';
	export let cnj;
</script>

	
<Table striped={true} shadow >
	<TableBody>
		<TableBodyRow  class="!bg-primary-600">
				<TableBodyCell class="uppercase text-center text-white px-3 py-2">tense</TableBodyCell>
				{#each Object.entries(personsList) as [number, name]}
					<TableBodyCell class="uppercase text-center text-white px-3 py-2">{name}</TableBodyCell>
				{/each}
		</TableBodyRow>
		{#each Object.entries(cnj) as [tense, persons]}
			<TableBodyRow>
				<TableBodyCell class="bg-primary-200 px-3 py-1"><span class="font-small">{tenseName(tense)}</span></TableBodyCell>
				{#each Object.entries(persons) as [number, name]}
					<TableBodyCell class="text-center px-3 py-1"><span class="font-small">{name}</span></TableBodyCell>
				{/each}
			</TableBodyRow>
		{/each}
	</TableBody>
</Table>


<style>
@media (max-width: 1200px) { 
	.font-small {
		font-size: 11px !important;
	}
}	
</style>