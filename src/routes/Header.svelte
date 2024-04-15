<script>
	import logo from '$lib/images/svelte-logo.svg';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Toast } from 'flowbite-svelte';
</script>

<header>
	<Navbar let:hidden let:toggle color="primary">
		<NavBrand href="/" >
		  <img src="{logo}" alt="VerbosVerbs" class="corner"/>
		  <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-red-800">VerbosVerbs</span>
		</NavBrand>
		<NavHamburger on:click={toggle} />
		<NavUl {hidden}>
		  <NavLi href="/" active={true}>Home</NavLi>
		  <NavLi href="/about">About</NavLi>
		  <NavLi href="/sverdle">sverdle</NavLi>
		</NavUl>
	</Navbar>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}
	.corner {
		width: 3em;
		height: 3em;
	}
</style>