<script>
	import logo from '$lib/images/logo-no-background.svg';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
</script>

<header>
	<Navbar let:hidden let:toggle class="bg-primary-200">
		<NavBrand href="/" >
		  <img src="{logo}" alt="VerbosVerbs" class="corner"/>
		</NavBrand>
		<NavHamburger on:click={toggle} />
		<NavUl {hidden} >
		  <NavLi href="/" active={true} class="font-bold text-primary-500">Home</NavLi>
		  <NavLi href="/about" class="font-bold text-primary-500">About</NavLi>
		  <NavLi href="/sverdle" class="font-bold text-primary-500">sverdle</NavLi>
		</NavUl>
	</Navbar>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}
	.corner {
		width: 12em;
	}
</style>