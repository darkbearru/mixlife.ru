<script lang="ts" setup>

useSeoMeta({
	title: 'MixLife.ru. Домен продаётся',
	ogTitle: 'MixLife.ru. Домен продаётся',
	description: 'Домен продаётся, может использоваться для портала по коктейлям либо клубной музыки.',
	ogDescription: 'Домен продаётся, может использоваться для портала по коктейлям либо клубной музыки.',
	// ogImage: 'https://example.com/image.png',
	// twitterCard: 'summary_large_image',
})
</script>

<template>
  <div class="bg">
	  <div class="logo">
			<svgo-logo filled alt="MixLife.ru. Домен продаётся" />
		  <h2>Домен продаётся</h2>
	  </div>
  </div>
</template>

<style lang="scss">
	body {
		padding: 0;
		margin: 0;
		font-family: 'Rubik', sans-serif;
	}
	.bg {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100vh;
		background: #1F2937;
		.logo {
			color: #E5EDFF;
			width: 300px;
			height: auto;
			text-align: center;
		}
	}
	h2 {
		font-size: 1rem;
		color: #9CA3AF;
		font-weight: 400;
	}
</style>
