<template>
  <div class="">
    <div id="main" ref="main"></div>
  </div>
</template>

<script>
  let camera, scene, renderer;
  let geometry, material, mesh;
  import THREE from 'three.js'

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

      camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10)
      camera.position.z = 1

      scene = new THREE.Scene()

      geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2)
      material = new THREE.MeshNormalMaterial()

      mesh = new THREE.Mesh(geometry, material)
      scene.add(mesh)

      renderer = new THREE.WebGLRenderer({antialias: true})
      renderer.setSize(window.innerWidth, window.innerHeight)
      this.$refs.main.appendChild(renderer.domElement)

    },

    animate () {

      requestAnimationFrame(this.animate)

      mesh.rotation.x += 0.01
      mesh.rotation.y += 0.02

      renderer.render(scene, camera)

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
  height: 300px
}
</style>
