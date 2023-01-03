<script src="./index.page.ts" lang="ts" />
<template>
	<div>
		<header class="fixed z-40 top-[0] left-[0] w-full">
			<div class="flex justify-center items-center gap-3xs group bg-white pb-xs">
				<OrganismNavPrimary :items="navItems" />
			</div>
		</header>

		<section class="h-screen w-full flex items-center justify-center">
			<OrganismLogo />
		</section>
		<main class="mt-md">
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
