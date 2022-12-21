<script src="./BaseList.ts" lang="ts"></script>
<template>
	<ul v-for="(item, index) in items" :key="index">
		<li v-if="item">
			<AtomTextSubheading size="SMALL" color="LIGHT">
				{{ item }}
				<span v-if="items.length && index !== items.length - 1"> | </span>
			</AtomTextSubheading>
		</li>
	</ul>
</template>
