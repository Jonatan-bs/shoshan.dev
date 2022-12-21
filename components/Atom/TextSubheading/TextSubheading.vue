<script lang="ts" src="./TextSubheading.ts" />
<template>
	<component
		:is="tag"
		class="italic font-light text-base tracking-wide"
		:class="[
			size === 'DEFAULT' && 'text-lg',
			size === 'SMALL' && 'text-base',
			color === 'DEFAULT' && 'text-black-lacquer',
			color === 'LIGHT' && 'text-grey-robo-master',
		]"
	>
		<slot />
	</component>
</template>
