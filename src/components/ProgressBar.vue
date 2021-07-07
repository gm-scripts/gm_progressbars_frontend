<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    function calculateAnimationGradient(
      numberOfSegments: number,
      blurSegments: boolean,
      skew: number,
      colors: string[]
    ): string {
      let r = "linear-gradient(";
      r += `${skew + 90}deg,`;

      // add colors and percentages
      for (let i = 0; i <= numberOfSegments; i++) {
        // temp var and function to get the color and the percentage
        let col = colors[i % colors.length];
        let percent = (i: number): number =>
          Math.round((i / numberOfSegments) * 1000) / 10;

        // add color and percentage normally
        r += `${col} ${percent(i)}%`;

        // if blurSegments is true, add another one with the same color to make it be lines
        if (!blurSegments) {
          r += `,${col} ${percent(i + 1)}%`;

          // stop loop if it just added 100% to prevent it having 100% colors twice at the end
          if (percent(i + 1) === 100) break;
        }

        // add a comma if it isnt the last one
        if (!(i === numberOfSegments)) r += ",";
      }

      r += ")";
      console.log(r);
      return r;
    }

    let bg = ref(
      calculateAnimationGradient(8, false, 0, ["#23bf7c", "#10a55a"])
    );

    return {
      bg,
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
    span.label Label
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
        transform: skewX(20deg)
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
