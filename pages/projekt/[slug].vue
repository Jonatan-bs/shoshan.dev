<template>
	<div class="container">
		<header class="fixed z-40 bottom-[0] md:bottom-auto md:top-[0] left-[0] w-full">
			<div class="flex justify-center items-center gap-3xs group bg-white pt-2xs pb-xs">
				<SvgArrowLeft
					class="text-grey-robo-master w-[2rem] group-hover:-translate-x-3xs transition-transform ease-out duration-300"
				/>
				<NuxtLink to="/">
					<AtomTextNav class="capitalize"> tilbage til forsiden </AtomTextNav>
				</NuxtLink>
			</div>
		</header>
		<section
			class="mt-xs md:mt-lg mb-3xl md:mb-auto md:mt-auto md:h-screen w-full flex flex-col-reverse md:flex-row items-center justify-center"
		>
			<div class="rounded-bl-lg h-[40rem] md:h-[50rem] w-full bg-blue-cornflower relative">
				<div ref="refHeroImage">
					<nuxt-img
						:src="pageData.headerImage.url"
						:alt="pageData.headerImage.alt"
						class="w-full h-[60rem] md:h-[70rem] left-[0] -top-[10rem] -bottom-3xs absolute object-contain"
						provider="contentful"
						width="470"
					/>
				</div>
			</div>
			<div
				class="rounded-tr-lg bg-grey-cascading-white h-[40rem] md:h-[50rem] w-full flex items-center p-lg"
			>
				<div>
					<AtomTextHeading tag="h1" type="H1">{{ pageData.title }}</AtomTextHeading>
					<MoleculeBaseList :items="pageData.solutions" />
				</div>
			</div>
		</section>
		<main class="mt-md">
			<div class="container mb-xl">
				<OrganismBlockRouter :content-area-collection="pageData.contentAreaCollection" />
			</div>
		</main>
	</div>
</template>
<script src="./[slug].page.ts" lang="ts" />
