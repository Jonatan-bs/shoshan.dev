<script src="./index.page.ts" lang="ts" />
<template>
	<div>
		<header class="fixed z-40 top-[0] left-[0] w-full">
			<div class="flex justify-center items-center gap-3xs group bg-white">
				<OrganismNavPrimary :items="navItems" />
			</div>
		</header>

		<section class="h-screen w-full flex items-center justify-center bg-grey-cascading-white">
			<OrganismLogo />
		</section>
		<main class="mt-xl">
			<div class="container">
				<OrganismBlockRouter
					:set-hash-ids="true"
					:content-area-collection="pageData?.contentAreaCollection"
				/>
			</div>
		</main>
		<div id="kontakt" ref="refHashElm"></div>
		<section class="flex items-center justify-center h-screen w-screen">
			<AtomButtonBase
				@click="modalContactIsActive = true"
				@keydown.enter="modalContactIsActive = true"
				>KONTAKT</AtomButtonBase
			>

			<OrganismModal v-model:is-active="modalContactIsActive" title="Kontakt Info">
				<ul>
					<li class="pb-xs">
						<AtomTextBase class="text-black-lacquer"> Email: </AtomTextBase>
						<a href="mailto:jonatan-bs@live.dk"
							><AtomTextBase class="text-black-lacquer underline underline-offset-4">
								Jonatan-bs@live.dk
							</AtomTextBase></a
						>
					</li>
					<li>
						<AtomTextBase class="text-black-lacquer"> Tlf.: </AtomTextBase>
						<a href="tel:+4560545554">
							<AtomTextBase class="text-black-lacquer underline underline-offset-4">
								60 54 55 54
							</AtomTextBase></a
						>
					</li>
				</ul>
			</OrganismModal>
		</section>
	</div>
</template>
