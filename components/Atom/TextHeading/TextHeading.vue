<script lang="ts" src="./TextHeading.ts" />
<template>
	<div>
		<component
			:is="tag"
			v-if="type === 'SECTION'"
			class="uppercase text-black-lacquer font-light text-base tracking-wide"
		>
			<slot />
		</component>
		<component :is="tag" v-if="type === 'H3'" class="text-black-lacquer font-bold text-lg">
			<slot />
		</component>
	</div>
</template>
