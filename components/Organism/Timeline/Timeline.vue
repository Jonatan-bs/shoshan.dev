<script src="./Timeline.ts" lang="ts"></script>
<template>
	<div v-for="(entry, index) in entries" :key="index">
		<div class="flex">
			<div class="md:block hidden flex-shrink-0 pr-sm mt-[5rem] w-[15rem]">
				<AtomTextBase>
					{{ formatDate(entry.fromDate) }} -
					{{ entry.overwriteToDateWithNow ? "Nu" : formatDate(entry.toDate) }}
				</AtomTextBase>
			</div>
			<!-- Ball and line start -->
			<div class="flex flex-col items-center">
				<MoleculeGlowBall :is-active="activeGlowBallIndexes >= index">
					<nuxt-img
						:src="entry.image.url"
						class="w-full h-full object-contain"
						provider="contentful"
						width="500"
						:alt="entry.image.alt"
					/>
				</MoleculeGlowBall>
				<div class="relative flex-1">
					<svg width="1rem" class="h-full">
						<line
							x1="2.5"
							y1="0"
							x2="2.5"
							y2="100%"
							class="stroke-5 stroke-grey-robo-master"
						/>
					</svg>
					<div ref="refLineWrapper" class="absolute inset-[0]">
						<svg
							height="0"
							width="1rem"
							class="absolute inset-[0] blur-sm hidden sm:block"
						>
							<line
								x1="2.5"
								y1="0"
								x2="2.5"
								y2="100%"
								class="stroke-5 stroke-blue-cornflower"
							/>
						</svg>
						<svg height="0" width="1rem" class="absolute inset-[0]">
							<line
								x1="2.5"
								y1="0"
								x2="2.5"
								y2="100%"
								class="stroke-5 stroke-blue-cornflower"
							/>
						</svg>
					</div>
				</div>
			</div>
			<!-- Ball and line end -->
			<div class="pl-2xs md:pl-sm mb-xl mt-[2rem] md:mt-[4rem]">
				<div ref="refAnimateFromBottom">
					<AtomTextBase class="md:hidden block mb-2xs">
						{{ formatDate(entry.fromDate) }} -
						{{ entry.overwriteToDateWithNow ? "Nu" : formatDate(entry.toDate) }}
					</AtomTextBase>
					<AtomTextHeading type="H1" class="md:mb-3xs">
						{{ entry.title }}
					</AtomTextHeading>
					<AtomTextSubheading size="SMALL" color="DEFAULT" class="mb-xs">
						{{ entry.subHeading }}
					</AtomTextSubheading>

					<MoleculeMarkdown :value="entry.description" />
				</div>
			</div>
		</div>
	</div>
</template>
