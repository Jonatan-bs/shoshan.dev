<script src="./NavPrimary.ts" lang="ts" />
<template>
	<nav>
		<span
			ref="selectedLine"
			class="bg-blue-cornflower w-[0] h-[.3rem] md:h-[.6rem] absolute left-0 bottom-[0] sm:bottom-auto sm:top-[0] transition-[width,left] ease-out duration-300"
		></span>
		<ul class="flex gap-2xs md:gap-sm">
			<li v-for="(item, index) in items" :key="index" ref="navItem" class="list-none">
				<a :href="item.to" @click.prevent="scrollTo(item.to)">
					<AtomTextNav class="pt-2xs pb-2xs capitalize">
						{{ item.title }}
					</AtomTextNav>
				</a>
			</li>
		</ul>
	</nav>
</template>
