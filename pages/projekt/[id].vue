<template>
	<div class="container">
		<header class="h-screen w-full flex items-center justify-center">
			<div class="rounded-bl-lg h-[50rem] w-full bg-blue-cornflower relative">
				<nuxt-img
					:src="data.headerImage.url"
					:alt="data.headerImage.alt"
					class="w-full h-[70rem] left-[0] -top-[10rem] -bottom-3xs absolute object-contain"
					provider="contentful"
					width="470"
				/>
			</div>
			<div
				class="rounded-tr-lg bg-grey-cascading-white h-[50rem] w-full flex items-center p-lg"
			>
				<div>
					<AtomTextHeading tag="h1" type="H1">{{ data.title }}</AtomTextHeading>
					<MoleculeBaseList :items="data.solutions" />
				</div>
			</div>
		</header>
		<main class="mt-md">
			<div class="container">
				<OrganismBlockRouter :content-area-collection="data.contentAreaCollection" />
			</div>
		</main>
	</div>
</template>
<script src="./[id].page.ts" lang="ts" />
