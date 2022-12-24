<script lang="ts" src="./TextBase.ts" />
<template>
	<component
		:is="tag"
		v-if="type === 'DEFAULT'"
		class="text-grey-robo-master font-normal text-sm md:text-base"
	>
		<slot />
	</component>
</template>
