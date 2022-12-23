<script src="./index.page.ts" lang="ts" />
<template>
	<div class="container">
		<section>
			<div class="absolute top-[0] left-[0] w-full flex justify-center">
				<OrganismNavPrimary :items="navItems" />
			</div>
			<div class="h-screen w-full flex items-center justify-center">
				<OrganismLogo />
			</div>
		</section>
		<main class="mt-md">
			<template v-if="data?.contentAreaCollection.length">
				<section
					v-for="(item, index) in data?.contentAreaCollection"
					:key="index"
					class="mb-3xl"
				>
					<!-- TEKNOLOGIER -->
					<template v-if="item && item.__typename === 'BlockServices'">
						<div class="mb-md">
							<AtomTextHeading tag="h2" type="SECTION">{{
								item.title
							}}</AtomTextHeading>
						</div>
						<div class="main-grid">
							<AtomBaseCard
								v-for="(image, index) in item.images"
								:key="index"
								class="col-span-6 sm:col-span-4 lg:col-span-2"
								:has-padding="true"
							>
								<nuxt-img
									:src="image.url"
									:alt="image.alt"
									class="w-full h-full object-contain"
									provider="contentful"
									width="250"
								/>
							</AtomBaseCard>
						</div>
					</template>
					<!-- Projects -->
					<template v-if="item?.__typename === 'BlockProjectsSection'">
						<div class="mb-md">
							<AtomTextHeading tag="h2" type="SECTION">{{
								item.title
							}}</AtomTextHeading>
						</div>
						<div class="main-grid">
							<article
								v-for="(project, index) in item.projects"
								:key="index"
								class="col-span-12 sm:col-span-6 lg:col-span-4 w-full"
							>
								<AtomBaseCard :is-wide="true" class="mb-xs">
									<nuxt-img
										:src="project.teaserImage.url"
										class="w-full h-full object-cover"
										provider="contentful"
										:alt="project.teaserImage.alt"
										width="400"
									/>
								</AtomBaseCard>
								<AtomTextHeading tag="h3" type="H3">
									{{ project?.title }}</AtomTextHeading
								>

								<MoleculeBaseList
									v-if="project?.solutions"
									:items="project?.solutions"
								/>
							</article>
						</div>
					</template>
					<!-- About -->
					<template v-if="item?.__typename === 'BlockAbout'">
						<div class="mb-md">
							<AtomTextHeading tag="h2" type="SECTION">{{
								item.title
							}}</AtomTextHeading>
						</div>
						<div class="main-grid">
							<div class="col-span-5">
								<AtomBaseCard :is-wide="true">
									<nuxt-img
										:src="item.image.url"
										class="w-full h-full object-cover"
										provider="contentful"
										width="500"
										:alt="item.image.alt"
									/>
								</AtomBaseCard>
							</div>
							<div class="col-span-6 pl-sm">
								<AtomTextHeading tag="h3" type="H3">{{
									item.name
								}}</AtomTextHeading>

								<AtomTextSubheading class="mb-xs" :size="'SMALL'" color="LIGHT">
									{{ item.subheading }}
								</AtomTextSubheading>
								<AtomTextBase>
									{{ item.about }}
								</AtomTextBase>
							</div>
						</div>
					</template>
					<!-- Timeline -->
					<template v-if="item?.__typename === 'BlockTimeline'">
						<div class="mb-md">
							<AtomTextHeading tag="h2" type="SECTION">{{
								item.title
							}}</AtomTextHeading>
						</div>
						<div class="main-grid">
							<section class="col-span-10 col-start-2">
								<OrganismTimeline :entries="item.entries" />
							</section>
						</div>
					</template>
				</section>
			</template>
		</main>
	</div>
</template>
