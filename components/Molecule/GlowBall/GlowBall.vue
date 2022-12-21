<script src="./GlowBall.ts" lang="ts"></script>
<template>
	<div class="relative w-[15rem] aspect-1">
		<div
			class="absolute overflow-hidden bg-grey-robo-master rounded-[50%] z-10 transition-[inset, background-color] ease-out duration-300"
			:class="isActive ? 'inset-2xs bg-blue-cornflower' : 'inset-[0]'"
		>
			<div class="p-2xs w-full h-full">
				<slot />
			</div>
		</div>
		<div class="absolute inset-[0] animate-rotate">
			<span
				class="absolute inset-[0] rounded-[50%] bg-gradient-to-r from-[#00b2ff] via-[#00ffbb] to-[#6bff6b] blur-[.5rem] transition-[opacity] ease-out duration-300"
				:class="!isActive && 'opacity-0'"
			></span>
			<span
				class="absolute inset-[0] rounded-[50%] bg-gradient-to-r from-[#00b2ff] via-[#00ffbb] to-[#6bff6b] blur-[1rem] transition-[opacity] ease-out duration-300"
				:class="!isActive && 'opacity-0'"
			></span>
			<span
				class="absolute inset-[0] rounded-[50%] bg-gradient-to-r from-[#00b2ff] via-[#00ffbb] to-[#6bff6b] transition-[opacity] ease-out duration-300"
				:class="!isActive && 'opacity-0'"
			></span>
		</div>
	</div>
</template>
