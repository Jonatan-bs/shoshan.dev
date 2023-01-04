<script src="./Modal.ts" lang="ts"></script>
<template>
	<Teleport to="body">
		<Transition name="modal">
			<div
				v-show="isActive"
				ref="refModal"
				class="fixed inset-[0] bg-black bg-opacity-80 z-50 flex items-center justify-center"
				@click="$emit('update:isActive', false)"
				@keydown.enter="$emit('update:isActive', false)"
			>
				<div
					class="organism-modal__content bg-white p-sm rounded-bl-sm rounded-tr-sm max-w-[70rem] m-2xs w-full relative"
					@click.stop=""
				>
					<button class="w-[2rem] absolute top-sm right-sm">
						<SvgCross @click="$emit('update:isActive', false)" />
					</button>
					<AtomTextHeading class="text-center mb-3xs" type="H1" tag="p">
						{{ title }}</AtomTextHeading
					>
					<slot />
				</div>
			</div>
		</Transition>
	</Teleport>
</template>
