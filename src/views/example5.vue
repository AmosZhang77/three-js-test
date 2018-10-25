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


      camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10) // 参1 相机角度 2 宽高比， 3 近剪切面 4 远剪切面 near and far clipping plane
      camera.position.z = 1 // 相机z轴高度
      camera.position.x = 1 // 相机z轴高度
      // camera.position.y = 1 // 相机z轴高度

      scene = new THREE.Scene()

      geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2)
      material = new THREE.MeshNormalMaterial()

      mesh = new THREE.Mesh(geometry, material)
      scene.add(mesh)

      renderer = new THREE.WebGLRenderer({antialias: true})
      renderer.setSize(window.innerWidth/1, window.innerHeight/1,false) // false 用于像素不跟着显示大小走，提高性能，降低分辨率
      this.$refs.main.appendChild(renderer.domElement)
      // console.log(this.$refs.main.firstElementChild)
      this.$refs.main.firstElementChild.style.height = '100%'
      this.$refs.main.firstElementChild.style.width = '100%'

    },

    animate () {

      requestAnimationFrame(this.animate)

      // mesh.rotation.x += 0.01
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
  height: 100%;
  width: 100%;
}
</style>
