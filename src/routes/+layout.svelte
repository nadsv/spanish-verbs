<script>
	import '../app.pcss';
	import Header from '../lib/components/Header.svelte';
	import './styles.css';
</script>

<div class="app">
	<Header></Header>

	<main>
		<slot></slot>
	</main>

	<footer class="bg-primary-100 text-primary-500">
		<p>spanish verbs are hard</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 73rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}
	
	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
