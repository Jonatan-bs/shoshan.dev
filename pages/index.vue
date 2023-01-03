<script src="./index.page.ts" lang="ts" />
<template>
	<div>
		<header class="fixed z-40 top-[0] left-[0] w-full">
			<div class="flex justify-center items-center gap-3xs group bg-white pb-xs">
				<OrganismNavPrimary :items="navItems" />
			</div>
		</header>

		<section
			class="min-h-screen w-full flex flex-col-reverse md:flex-row items-center justify-center bg-grey-cascading-white"
		>
			<div class="md:w-1/2 p-sm flex justify-end">
				<NuxtImg
					src="https://media0.giphy.com/media/wX5Ga4QAlV1f3DXBXR/giphy.gif?cid=ecf05e47iukhijklbgtygno2tufe912hnm8m8udk9ada9osn&rid=giphy.gif&ct=gl"
					class="max-w-[50rem] w-full"
				/>
			</div>
			<div class="md:w-1/2 p-sm">
				<h1
					class="md:text-left text-center text-md md:text-xl font-bold capitalize mt-[1.5vw] lg:mt-2xs text-black-lacquer leading-none"
				>
					jonatan shoshan
				</h1>
				<AtomTextSubheading class="mt-2xs md:text-left text-center">
					&lt; webspecialist >
				</AtomTextSubheading>
			</div>
		</section>
		<main class="mt-xl">
			<div class="container">
				<OrganismBlockRouter
					:set-hash-ids="true"
					:content-area-collection="data.contentAreaCollection"
				/>
			</div>
		</main>
		<div id="kontakt" ref="refHashElm"></div>
		<section class="flex items-center justify-center h-screen w-screen">
			<button
				@click="modalContactIsActive = true"
				@keydown.enter="modalContactIsActive = true"
			>
				<AtomTextHeading tag="h2" type="SECTION">- KONTAKT -</AtomTextHeading>
			</button>
			<OrganismModal v-model:is-active="modalContactIsActive" title="Kontakt Info">
				<ul>
					<li class="pb-xs">
						<AtomTextBase class="text-black-lacquer"> Email: </AtomTextBase>
						<AtomTextBase class="text-black-lacquer"> Jonatan-bs@live.dk </AtomTextBase>
					</li>
					<li>
						<AtomTextBase class="text-black-lacquer"> Tlf.: </AtomTextBase>
						<AtomTextBase class="text-black-lacquer"> 60 54 55 54 </AtomTextBase>
					</li>
				</ul>
			</OrganismModal>
		</section>
	</div>
</template>
