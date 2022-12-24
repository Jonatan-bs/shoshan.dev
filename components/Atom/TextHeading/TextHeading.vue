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
		<component
			:is="tag"
			v-if="type === 'H1'"
			class="text-black-lacquer font-black text-lg md:text-xl"
		>
			<slot />
		</component>

		<component
			:is="tag"
			v-if="type === 'H2'"
			class="text-black-lacquer font-bold text-md md:text-lg"
		>
			<slot />
		</component>
	</div>
</template>
