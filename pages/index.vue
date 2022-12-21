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
			<template v-if="data?.items.length">
				<section
					v-for="(item, index) in data?.items[0]?.contentAreaCollection?.items"
					:key="index"
					class="mb-3xl"
				>
					<!-- TEKNOLOGIER -->
					<template v-if="item?.__typename === 'BlockServices'">
						<div class="mb-md">
							<AtomTextHeading tag="h2" type="SECTION">{{
								item.title
							}}</AtomTextHeading>
						</div>
						<div class="main-grid">
							<AtomBaseCard
								v-for="(image, index) in item.imageCollection?.items"
								:key="index"
								class="col-span-6 sm:col-span-4 lg:col-span-2"
								:has-padding="true"
							>
								<nuxt-img
									v-if="image?.url"
									:src="image.url"
									class="w-full h-full object-contain"
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
								v-for="(project, index) in item.projectsCollection?.items"
								:key="index"
								class="col-span-12 sm:col-span-6 lg:col-span-4 w-full"
							>
								<AtomBaseCard :is-wide="true" class="mb-xs">
									<nuxt-img
										v-if="project?.teaserImage?.url"
										:src="project.teaserImage.url"
										class="w-full h-full object-cover"
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
										v-if="item?.image?.url"
										:src="item.image.url"
										class="w-full h-full object-cover"
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
						<div class="main-grid"></div>
					</template>
				</section>
			</template>
		</main>
	</div>
</template>
