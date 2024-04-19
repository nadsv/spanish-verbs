<script lang="ts">
	import { Input, Label, Button } from 'flowbite-svelte';
	import { conjunctions }  from './helpers';
	import { createEventDispatcher } from 'svelte';

	let verb = 'ser';

	const dispatch = createEventDispatcher();

	function findConjunctions() {
		dispatch('result', {
			result: conjunctions(verb),
			verb: verb
		});
	}

	function keyDown(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			findConjunctions();
		}
	}

</script>

<div class="wrapper flex w-full gap-x-3 items-center">
	<Label for="first_name" class="mb-2">Infinitive</Label>
	<Input type="text" id="infinitive" bind:value={verb} required on:keydown={keyDown}/>
	<Button class="bg-primary-500" on:click={findConjunctions}>FIND</Button>
</div>

<style>
	.wrapper {
		width: 300px;
		margin: 0 auto;
	}
</style>