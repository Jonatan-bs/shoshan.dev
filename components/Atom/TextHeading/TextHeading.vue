<script lang="ts" src="./TextHeading.ts" />
<template>
	<component
		:is="tag"
		v-if="type === 'SECTION'"
		class="uppercase text-black-lacquer font-light text-base tracking-wide"
	>
		<slot />
	</component>
</template>
