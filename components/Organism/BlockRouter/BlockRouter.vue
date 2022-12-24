<script src="./BlockRouter.ts" lang="ts"></script>
<template v-if="contentAreaBlocks.length">
	<section
		v-for="(item, index) in contentAreaCollection"
		:key="index"
		:class="index !== (contentAreaCollection && contentAreaCollection.length - 1) && 'mb-3xl'"
	>
		<!-- TEKNOLOGIER -->
		<template v-if="item && item.__typename === 'BlockServices'">
			<div
				:id="(setHashIds && item && createId(item.title)) || undefined"
				ref="refHashElm"
				class="mb-md scroll-mt-lg"
			>
				<AtomTextHeading tag="h2" type="SECTION" class="text-center sm:text-left">{{
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
			<div
				:id="(setHashIds && item && createId(item.title)) || undefined"
				ref="refHashElm"
				class="mb-md scroll-mt-lg"
			>
				<AtomTextHeading tag="h2" type="SECTION" class="text-center sm:text-left">{{
					item.title
				}}</AtomTextHeading>
			</div>
			<div class="main-grid">
				<NuxtLink
					v-for="(project, index) in item.projects"
					:key="index"
					:to="'/projekt/' + project.id"
					class="col-span-12 sm:col-span-6 lg:col-span-4 w-full md:mb-auto mb-md group"
				>
					<article>
						<AtomBaseCard :is-wide="true" class="mb-xs">
							<nuxt-img
								:src="project.teaserImage.url"
								class="w-full h-full object-cover group-hover:scale-110 transition-[transform]"
								provider="contentful"
								:alt="project.teaserImage.alt"
								width="400"
							/>
						</AtomBaseCard>
						<AtomTextHeading tag="h3" type="H2"> {{ project?.title }}</AtomTextHeading>

						<MoleculeBaseList v-if="project?.solutions" :items="project?.solutions" />
					</article>
				</NuxtLink>
			</div>
		</template>
		<!-- About -->
		<template v-if="item?.__typename === 'BlockAbout'">
			<div
				:id="(setHashIds && item && createId(item.title)) || undefined"
				ref="refHashElm"
				class="mb-md scroll-mt-lg"
			>
				<AtomTextHeading tag="h2" type="SECTION" class="text-center sm:text-left">{{
					item.title
				}}</AtomTextHeading>
			</div>
			<div class="main-grid">
				<div class="col-span-12 md:col-span-5">
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
				<div class="col-span-12 md:col-span-6 pl-sm">
					<AtomTextHeading tag="h3" type="H2">{{ item.name }}</AtomTextHeading>

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
			<div
				:id="(setHashIds && item && createId(item.title)) || undefined"
				ref="refHashElm"
				class="mb-md scroll-mt-lg"
			>
				<AtomTextHeading tag="h2" type="SECTION" class="text-center sm:text-left">{{
					item.title
				}}</AtomTextHeading>
			</div>
			<div class="main-grid">
				<div class="col-span-10 col-start-2">
					<OrganismTimeline :entries="item.entries" />
				</div>
			</div>
		</template>
		<!-- Image -->
		<template v-if="item?.__typename === 'BlockImage'">
			<div class="main-grid">
				<div class="col-span-12">
					<nuxt-img
						:src="item.image.url"
						:alt="item.image.alt"
						class="w-full h-full object-contain"
						provider="contentful"
						width="100vw"
					/>
				</div>
			</div>
		</template>
	</section>
</template>
