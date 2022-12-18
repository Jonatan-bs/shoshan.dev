<script src="./index.page.ts" lang="ts" />
<template>
	<div class="container">
		<div class="absolute top-[0] left-[0] w-full flex justify-center">
			<OrganismNavPrimary :items="navItems" />
		</div>
		<div class="h-screen w-full flex items-center justify-center">
			<OrganismLogo />
		</div>
		<div class="main-grid"></div>
	</div>
</template>
