<script src="./GlowBall.ts" lang="ts"></script>
<template>
	<div class="relative w-[7rem] md:w-[15rem] aspect-1">
		<div
			class="absolute overflow-hidden bg-blue-light-house rounded-[50%] z-10 transition-[inset, background-color] ease-out duration-300"
			:class="isActive ? 'inset-4xs md:inset-2xs bg-blue-cornflower' : 'inset-[0]'"
		>
			<div class="p-2xs w-full h-full">
				<slot />
			</div>
		</div>
		<div class="absolute inset-[0] animate-rotate">
			<span
				class="absolute inset-[0] rounded-[50%] bg-gradient-to-r from-blue-neon via-blue-green-neon to-green-neon blur-[.5rem] transition-[inset] opacity-1 ease-out duration-300"
				:class="!isActive && 'inset-[5rem]'"
			></span>
			<span
				class="absolute inset-[0] rounded-[50%] bg-gradient-to-r from-blue-neon via-blue-green-neon to-green-neon blur-[1rem] transition-[inset] opacity-1 ease-out duration-300"
				:class="!isActive && 'inset-[5rem]'"
			></span>
			<span
				class="absolute inset-[0] rounded-[50%] bg-gradient-to-r from-blue-neon via-blue-green-neon to-green-neon transition-[inset] opacity-1 ease-out duration-300"
				:class="!isActive && 'inset-[5rem]'"
			></span>
		</div>
	</div>
</template>
