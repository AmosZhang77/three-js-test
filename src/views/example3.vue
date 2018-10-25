<template>
  <div class="">
    <div id="main" ref="main"></div>
  </div>
</template>

<script>
  /* eslint-disable */
  let camera, scene, renderer
  let geometry, material, mesh
  let light
  // import THREE from 'three.js'
  // console.log(THREE)
  // console.log(OrbitControls)
  // import THREE from '@public/threePlug/OrbitControls.js'

  let controls //

  export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted () {
    this.initRender()
    this.initScene()
    this.initCamera()
    this.initLight()
    this.initModel()
    this.initControls()
    this.animate()

    window.onresize = this.onWindowResize
  },
  methods:{
    init() {


      camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10) // 参1 相机角度 2 宽高比， 3 近剪切面 4 远剪切面 near and far clipping plane
      // camera.position.z = 1 // 相机z轴高度
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
      this.$refs.main.firstElementChild.style.height = '100%'
      this.$refs.main.firstElementChild.style.width = '100%'

      //（1）首先引入插件，文件地址在官方案例的examples/js/controls/OrbitControls.js。
      //（2）然后实例化函数，把相机和渲染器的dom传入，并设置相关设置。
      //用户交互插件 鼠标左键按住旋转，右键按住平移，滚轮缩放


    },
    render () {
      renderer.render(scene, camera)
    },
    initRender () {
      renderer = new THREE.WebGLRenderer({antialias: true})
      // renderer.setSize(window.innerWidth/1, window.innerHeight/1,false) // false 用于像素不跟着显示大小走，提高性能，降低分辨率
      renderer.setSize(window.innerWidth, window.innerHeight)
      this.$refs.main.appendChild(renderer.domElement)
      // this.$refs.main.firstElementChild.style.height = '100%'
      // this.$refs.main.firstElementChild.style.width = '100%'
    },
    initCamera() {
      // camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10) // 参1 相机角度 2 宽高比， 3 近剪切面 4 远剪切面 near and far clipping plane
      camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 1, 10000);
      camera.position.set(0, 0, 400);
    },
    initLight () {
      scene.add(new THREE.AmbientLight(0x404040))
      light = new THREE.DirectionalLight(0xffffff)
      light.position.set(1, 1, 1)
      scene.add(light)
    },
  initScene() {
      scene = new THREE.Scene();
    },
    initModel() {

     /* var map = new THREE.TextureLoader().load("examples/textures/UV_Grid_Sm.jpg");
      var material = new THREE.MeshLambertMaterial({map:map});
      var cube = new THREE.Mesh(new THREE.BoxGeometry(100, 200, 100, 1, 1, 1), material);
      scene.add(cube);*/
      geometry = new THREE.BoxGeometry(100, 100, 100)
      material = new THREE.MeshNormalMaterial()

      mesh = new THREE.Mesh(geometry, material)
      scene.add(mesh)
    },
    animate () {
      //更新控制器
      controls.update();
      this.render();
    },
    initControls () {

      // controls = new THREE.OrbitControls(camera, renderer.domElement)
      controls = new THREE.OrbitControls(camera)

      // 如果使用animate方法时，将此函数删除
      //controls.addEventListener( 'change', render );
      // 使动画循环使用时阻尼或自转 意思是否有惯性
      controls.enableDamping = true

      //动态阻尼系数 就是鼠标拖拽旋转灵敏度
      //controls.dampingFactor = 0.25;
      //是否可以缩放
      controls.enableZoom = true

      //是否自动旋转
      controls.autoRotate = true

      //设置相机距离原点的最远距离
      controls.minDistance = 0.01

      //设置相机距离原点的最远距离
      controls.maxDistance = 100000

      //是否开启右键拖拽
      controls.enablePan = true

    },
    //窗口变动触发的函数
    onWindowResize () {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      this.render()
      renderer.setSize(window.innerWidth, window.innerHeight)
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
