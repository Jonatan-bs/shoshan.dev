<script src="./default.layout.ts" lang="ts"></script>
<template>
	<div>
		<div class="fixed top-[0] left-[0] w-full flex justify-center">
			<OrganismNavPrimary :items="navItems" />
		</div>
		<slot />
	</div>
</template>
