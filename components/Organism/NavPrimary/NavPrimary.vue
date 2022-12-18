<script src="./NavPrimary.ts" lang="ts" />
<template>
	<div class="flex justify-center">
		<span
			ref="selectedLine"
			class="bg-black-lacquer w-[0] h-[.6rem] absolute left-0 transition-[width,left] ease-out duration-300"
		></span>
		<ul class="flex gap-sm">
			<li v-for="(item, index) in items" :key="index" ref="navItem" class="list-none">
				<NuxtLink :to="item.to" @click="activeIndex = index">
					<AtomTextNav class="pt-2xs capitalize">
						{{ item.title }}
					</AtomTextNav>
				</NuxtLink>
			</li>
		</ul>
	</div>
</template>
