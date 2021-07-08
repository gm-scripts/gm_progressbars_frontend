<script lang="ts">
import { defineComponent } from "vue";
import ProgressBar from "./components/ProgressBar.vue";

export default defineComponent({
  // setup() {}
  components: {
    ProgressBar,
  },
});
</script>

<template lang="pug">
#ui-container
  .progressbars
    ProgressBar( test="testing" )
</template>

<style lang="sass">
#ui-container
  --bar-border-scale: 1
  --bar-border-color: #4a4a55

  --bar-bg-color: #2d2d35 // also needed if animated

  --bar-padding-scale: 1

  --bar-bg-animation-bars: 10 // js later
  --bar-bg-animation-blur: 0 // 0-1
  --bar-bg-animation-speed: 1s // sec for one completion
  --bar-bg-animation-skew: 0 // 0-1
  --bar-bg-animation-color-0: #23bf7c
  --bar-bg-animation-color-1: #10a55a

  --bar-progress-color: #23bf7c

  --bar-progress-corner-rounding: 0 // 0-1
  --bar-corner-rounding: 1 // 0-1

  --bar-skewing: 0deg // deg
  --bar-progress-skewing: -0deg //deg

  --bar-length-scale: 9
  --bar-height-scale: 1

  --bar-label-scale: 1
  --bar-label-alignment: center // left, right, center
  --bar-label-font: 'Montserrat', Helvetica, Arial, sans-serif
  --bar-label-font-weight: regular
  --bar-label-color: #eaeaf4

  --bar-label-font-style: none
  --bar-label-font-border: none

  display: grid
  place-items: center
  height: 100vh

html, body
  margin: 0
  padding: 0

*
  box-sizing: border-box
</style>
