<script src="./BaseCard.ts" lang="ts" />
<template>
	<div
		class="bg-grey-cascading-white rounded-tr-sm rounded-bl-sm w-full overflow-hidden"
		:class="[isWide ? 'aspect-5/4' : 'aspect-1', hasPadding && 'p-xs sm:p-sm md:p-md']"
	>
		<slot />
	</div>
</template>
