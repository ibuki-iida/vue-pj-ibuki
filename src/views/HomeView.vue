<template>
  <v-container>
		<v-row>
			<img :src="imgPath">
    </v-row>
  </v-container>
</template>


<script>
export default {
  name: 'HomeView',
	data() {
		return {
			imgPath: require('@/assets/icon_raw_size.png')
		}
	}
}
</script>