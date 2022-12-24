<script src="./Timeline.ts" lang="ts"></script>
<template>
	<div v-for="(entry, index) in entries" :key="index">
		<div class="flex">
			<div class="md:block hidden flex-shrink-0 pr-sm mt-[5rem]">
				<AtomTextBase>
					{{ formatDate(entry.fromDate) }} -
					{{ entry.overwriteToDateWithNow ? "Nu" : formatDate(entry.toDate) }}
				</AtomTextBase>
			</div>
			<!-- Ball start -->
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
						<svg height="100%" width="1rem" class="absolute inset-[0] blur-sm">
							<line
								x1="2.5"
								y1="0"
								x2="2.5"
								y2="100%"
								class="stroke-5 stroke-blue-cornflower"
							/>
						</svg>
						<svg height="100%" width="1rem" class="absolute inset-[0]">
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
			<!-- Ball end -->
			<div class="pl-2xs md:pl-sm mt-[2rem] md:mt-[4rem]">
				<div ref="refAnimateFromBottom">
					<AtomTextBase class="md:hidden block mb-2xs">
						{{ formatDate(entry.fromDate) }} -
						{{ entry.overwriteToDateWithNow ? "Nu" : formatDate(entry.toDate) }}
					</AtomTextBase>
					<AtomTextHeading type="H1" class="mb-3xs">
						{{ entry.title }}
					</AtomTextHeading>
					<AtomTextSubheading size="SMALL" color="DEFAULT" class="mb-xs">
						{{ entry.subHeading }}
					</AtomTextSubheading>

					<AtomTextBase class="mb-xl">
						{{ entry.description }}
					</AtomTextBase>
				</div>
			</div>
		</div>
	</div>
</template>
