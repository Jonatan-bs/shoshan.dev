<script src="./BaseList.ts" lang="ts"></script>
<template>
	<ul class="flex flex-wrap">
		<li v-for="(item, index) in items" :key="index">
			<AtomTextSubheading size="SMALL" color="LIGHT">
				{{ item
				}}<span
					v-if="items.length && index !== items.length - 1"
					class="inline-block px-3xs"
					>|</span
				>
			</AtomTextSubheading>
		</li>
	</ul>
</template>
