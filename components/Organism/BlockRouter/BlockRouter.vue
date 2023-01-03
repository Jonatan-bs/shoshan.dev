<script src="./BlockRouter.ts" lang="ts"></script>
<template v-if="contentAreaBlocks.length">
	<section
		v-for="(item, index) in contentAreaCollection"
		:key="index"
		:class="
			index !== (contentAreaCollection && contentAreaCollection.length - 1) &&
			'md:mb-3xl mb-xl'
		"
	>
		<!-- TEKNOLOGIER -->
		<template v-if="item && item.__typename === 'BlockServices'">
			<div
				:id="(setHashIds && item && createId(item.title)) || undefined"
				ref="refHashElm"
				class="mb-md"
			>
				<AtomTextHeading tag="h2" type="SECTION" class="text-center sm:text-left">{{
					item.title
				}}</AtomTextHeading>
			</div>
			<div class="main-grid" ref="refTechnologyCardScrollTrigger">
				<div
					v-for="(image, index) in item.images"
					ref="refTechnologyCard"
					:key="index"
					class="col-span-6 sm:col-span-4 lg:col-span-2"
				>
					<AtomBaseCard :has-padding="true">
						<div class="w-full h-full object-contain">
							<nuxt-img
								:src="image.url"
								:alt="image.alt"
								class="w-full object-contain aspect-1"
								provider="contentful"
								width="250"
								height="250"
							/>
						</div>
					</AtomBaseCard>
				</div>
			</div>
		</template>
		<!-- Projects -->
		<template v-if="item?.__typename === 'BlockProjectsSection'">
			<div
				:id="(setHashIds && item && createId(item.title)) || undefined"
				ref="refHashElm"
				class="mb-md"
			>
				<AtomTextHeading tag="h2" type="SECTION" class="text-center sm:text-left">{{
					item.title
				}}</AtomTextHeading>
			</div>
			<div class="main-grid" ref="refProjectCardScrollTrigger">
				<div
					v-for="(project, index) in item.projects"
					ref="refProjectCard"
					:key="index"
					class="col-span-12 sm:col-span-6 lg:col-span-4 w-full md:mb-auto mb-md group"
				>
					<NuxtLink :to="'/projekt/' + project.slug">
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
							<AtomTextHeading tag="h3" type="H2">{{
								project?.title
							}}</AtomTextHeading>

							<MoleculeBaseList
								v-if="project?.solutions"
								:items="project?.solutions"
							/>
						</article>
					</NuxtLink>
				</div>
			</div>
		</template>
		<!-- About -->
		<template v-if="item?.__typename === 'BlockAbout'">
			<div
				:id="(setHashIds && item && createId(item.title)) || undefined"
				ref="refHashElm"
				class="mb-md"
			>
				<AtomTextHeading tag="h2" type="SECTION" class="text-center sm:text-left">{{
					item.title
				}}</AtomTextHeading>
			</div>
			<div class="main-grid" ref="refAboutSectionScrollTrigger">
				<div class="col-span-12 md:col-span-5" ref="refAboutSectionImage">
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
					<div ref="refAboutSectionText">
						<AtomTextHeading tag="h3" type="H2">{{ item.name }}</AtomTextHeading>
					</div>
					<div ref="refAboutSectionText">
						<AtomTextSubheading class="mb-xs" :size="'SMALL'" color="LIGHT">
							{{ item.subheading }}
						</AtomTextSubheading>
					</div>
					<div ref="refAboutSectionText">
						<AtomTextBase>
							{{ item.about }}
						</AtomTextBase>
					</div>
				</div>
			</div>
		</template>
		<!-- Timeline -->
		<template v-if="item?.__typename === 'BlockTimeline'">
			<div
				:id="(setHashIds && item && createId(item.title)) || undefined"
				ref="refHashElm"
				class="mb-md"
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
			<div ref="refImageBlockScrollTrigger" class="main-grid">
				<div class="col-span-12" ref="refImageBlock">
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
