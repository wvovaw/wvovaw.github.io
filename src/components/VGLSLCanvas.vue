<template>
  <canvas class="glsl-canvas" :data-fragment-url="fragment" :width="width" :height="height" ref="canvas"></canvas>
</template>

<script>
// https://www.npmjs.com/package/glsl-canvas-js
// FIXME: It won't build as dependency but works well as minified script
import { Canvas } from '../plugins/glsl-canvas.min.js'

const options = {
  alpha: true,
  antialias: true,
  depth: true,
  desynchronized: false,
  failIfMajorPerformanceCaveat: false,
  powerPreference: 'default',
  premultipliedAlpha: false,
  preserveDrawingBuffer: false,
  stencil: false,
  doubleSided: false,
  extensions: ['EXT_shader_texture_lod'],
  onError: (error) => {
    console.log(error);
  }
};

export default {
  name: 'VGLSLCanvas',
  data() {
    return {
      glsl: null
    }
  },
  mounted() {
    this.glsl = new Canvas(this.$refs.canvas, options);
  },
  props: {
    width: {
      type: String,
      default: ""
    },
    height: {
      type: String,
      default: ""
    },
    fragment: {
      type: String,
      required: true
    }
  }
}
</script>