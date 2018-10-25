<template>
  <div class="">
    <div id="main" ref="main"></div>
  </div>
</template>

<script>
  /* eslint-disable */
  let camera, scene, renderer;
  let geometry, material, mesh;
  let controls
  // import THREE from 'three'
  // import THREE from '@public/threePlug/OrbitControls.js'

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
let _this = this

      camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10) // 参1 相机角度 2 宽高比， 3 近剪切面 4 远剪切面 near and far clipping plane
      camera.position.z = 1 // 相机z轴高度
      // camera.position.x = 1 // 相机z轴高度
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
      this.$refs.main.firstElementChild.style.height = '70%'
      this.$refs.main.firstElementChild.style.width = '70%'

      controls = new THREE.OrbitControls( camera, this.$refs.main);
      // controls.addEventListener( 'change', _this.updateControls );


// 如果使用animate方法时，将此函数删除
      //controls.addEventListener( 'change', render );
      // 使动画循环使用时阻尼或自转 意思是否有惯性
      controls.enableDamping = true

      //动态阻尼系数 就是鼠标拖拽旋转灵敏度
      controls.dampingFactor = 0.25;
      //是否可以缩放
      controls.enableZoom = true

      //是否自动旋转
      // controls.autoRotate = true

      //设置相机距离原点的最远距离
      controls.minDistance = 0.01

      //设置相机距离原点的最远距离
      controls.maxDistance = 100000

      //是否开启右键拖拽
      controls.enablePan = true

      // How far you can orbit vertically, upper and lower limits.
      // Range is 0 to Math.PI radians.
      this.minPolarAngle = Math.PI/10 // radians
      this.maxPolarAngle = Math.PI/4 // Math.PI // radians

      // How far you can orbit horizontally, upper and lower limits.
      // If set, must be a sub-interval of the interval [ - Math.PI, Math.PI ].
      this.minAzimuthAngle = -Math.PI/8  //- Infinity; // radians
      this.maxAzimuthAngle = Math.PI/8 // Infinity; // radians
    },

    animate () {
let _this = this
      requestAnimationFrame(this.animate)

      // mesh.rotation.x += 0.01
      // mesh.rotation.y += 0.02
      // controls.update();
      //
      renderer.render(scene, camera)

    },
    updateControls() {
      controls.update();
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
