<script src="./index.page.ts" lang="ts" />
<template>
	<div>
		<header class="h-screen w-full flex items-center justify-center">
			<OrganismLogo />
		</header>
		<main class="mt-md">
			<div class="container">
				<OrganismBlockRouter :content-area-collection="data.contentAreaCollection" />
			</div>
		</main>
		<section id="contact" class="flex items-center justify-center h-screen w-screen">
			<AtomTextHeading tag="h2" type="SECTION">- KONTAKT -</AtomTextHeading>
		</section>
	</div>
</template>
