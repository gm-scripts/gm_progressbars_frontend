<script lang="ts">
import { defineComponent, ref } from "vue";
import { makeGradient } from "../ts/GradientGen";

export default defineComponent({
  props: {
    test: String,
  },
  setup(props) {
    let bg = ref(makeGradient(16, false, 0, ["#5c8ac0", "#75b5fd"]));
    // let tester = ref(props.test);
    let tester = ref(props.test);

    console.log(props);

    return {
      bg,
      tester,
      props,
    };
  },
});
</script>

<template lang="pug">
.progressbar
  .outer
    .progress( 
      :style="{ '--bg': bg, }" 
    )
    span.label {{ tester }}
</template>

<style lang="sass">
.progressbar
  --progress: 0.5
  .outer
    position: relative
    overflow: hidden

    border: calc(0.5vh * var(--bar-border-scale)) solid var(--bar-border-color)
    border-radius: calc((4vh * var(--bar-height-scale) * 0.5 * var(--bar-corner-rounding)))

    background-color: var(--bar-bg-color)

    color: var(--bar-label-color)
    font-family: var(--bar-label-font)
    font-size: calc(2vh * var(--bar-label-scale))
    line-height: calc(4vh * var(--bar-height-scale) - 1vh * var(--bar-border-scale))

    width: calc(4vh * var(--bar-length-scale))
    height: calc(4vh * var(--bar-height-scale))

    transform: skewX(var(--bar-skewing))

    .progress
      height: 100%
      width: calc(100% * var(--progress) + (4vh * var(--bar-height-scale))
      top: 0
      left: calc(-4vh * var(--bar-height-scale))

      border-radius: calc((4vh * var(--bar-height-scale)) * var(--bar-progress-corner-rounding) * 0.5)

      transform: skewX(var(--bar-progress-skewing))

      --bg: none

      overflow: hidden

      // animation
      &:before
        position: relative
        content: ""
        display: block
        // left: -4vh
        width: calc(4vh * var(--bar-length-scale))
        height: 100%
        background-color: red
        background-image: var(--bg)
        transform: skewX(0deg)
        background-size: calc(4vh * var(--bar-length-scale))
        animation: load 5s linear infinite

      @keyframes load
        0%
          background-position: 0vh
        100%
          background-position: calc(4vh * var(--bar-length-scale))


    .label
      text-align: left

    span, div
      position: absolute
      display: block
      left: 50%
      transform: translateX(-50%)

    span
      width: 96%
</style>
