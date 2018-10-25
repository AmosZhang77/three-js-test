<template>
  <div class="">
    <div id="main" ref="main"></div>
  </div>
</template>

<script>
  /* eslint-disable */
  let camera, scene, renderer;
  let geometry, material, mesh;
  // import THREE from 'three'

  export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted () {

    this.init();
    this.animate();

  },
  methods:{

    init() {

      var renderer = new THREE.WebGLRenderer()
      renderer.setSize(window.innerWidth, window.innerHeight)
      this.$refs.main.appendChild(renderer.domElement)
      var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500)
      camera.position.set(0, 0, 100)
      camera.lookAt(0, 0, 0)

      var scene = new THREE.Scene()

      var material = new THREE.LineBasicMaterial({color: 0x0000ff})
      var geometry = new THREE.Geometry()
      geometry.vertices.push(new THREE.Vector3(-10, 0, 0))
      geometry.vertices.push(new THREE.Vector3(0, 10, 0))
      geometry.vertices.push(new THREE.Vector3(10, 0, 0))

      var line = new THREE.Line(geometry, material)

      scene.add(line)
      renderer.render(scene, camera)
    },

    animate () {


    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
/*a {
  color: #42b983;
}*/

#main {
  height: 100%;
  width: 100%;
}
</style>
