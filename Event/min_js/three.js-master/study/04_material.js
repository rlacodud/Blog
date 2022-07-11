import * as THREE from '../build/three.module.js';
import {OrbitControls} from '../examples/jsm/controls/OrbitControls.js';
import {VertexNormalsHelper} from '../examples/jsm/helpers/VertexNormalsHelper.js';

class App {
  constructor() {
    const divContainer = document.querySelector('#webgl-container');
    // 해당 APP CLASS 내부에서만 사용되는 private field | method 라는 의미.
    this._divContainer = divContainer;

    const renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setPixelRatio(window.devicePixelRatio);
    divContainer.appendChild(renderer.domElement);
    this._renderer = renderer;

    const scene = new THREE.Scene();
    this._scene = scene;

    this._setupCamera();
    this._setupLight();
    this._setupModel();
    this._setupControls();

    window.onresize = this.resize.bind(this);
    this.resize();

    requestAnimationFrame(this.render.bind(this));
  }
  _setupControls () {
    new OrbitControls(this._camera, this._divContainer);
  }
  _setupCamera () {
    const width = this._divContainer.clientWidth;
    const height = this._divContainer.clientHeight;
    const camera = new THREE.PerspectiveCamera(
      75,
      width / height,
      0.1,
      100
    );
    camera.position.z = 3;
    this._camera = camera;
    this._scene.add(camera);
  }

  _setupLight() {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    this._scene.add(ambientLight);

    const color = 0xffffff;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);
    // this._scene.add(light);
    this._camera.add(light);
  }

  _setupModel() {
    // ------------------------------------PointsMaterial--------------------------------------
    // const vertices = [];
    // for(let i = 0; i < 10000; i++) {
    //   const x = THREE.Math.randFloatSpread(5);
    //   const y = THREE.Math.randFloatSpread(5);
    //   const z = THREE.Math.randFloatSpread(5);

    //   vertices.push(x, y, z);
    // }

    // const geometry = new THREE.BufferGeometry();
    // geometry.setAttribute(
    //   "position",
    //   new THREE.Float32BufferAttribute(vertices, 3)
    // );

    // const sprite = new THREE.TextureLoader().load(
    //   "../examples/textures/sprites/disc.png"
    // );

    // const material = new THREE.PointsMaterial({
    //   map: sprite,
    //   alphaTest: 0.5,
    //   color: 0xff0000,
    //   size: 5,
    //   sizeAttenuation: false
    // });

    // const points = new THREE.Points(geometry, material);
    // this._scene.add(points);

    // ------------------------------------PointsMaterial--------------------------------------
    // const vertices = [
    //   -1, 1, 0,
    //   1, 1, 0,
    //   -1, -1, 0,
    //   1, -1, 0,
    // ];

    // const geometry = new THREE.BufferGeometry();
    // geometry.setAttribute("position",
    // new THREE.Float32BufferAttribute(vertices, 3));

    // // const material = new THREE.LineBasicMaterial({
    // //   color: 0xff0000
    // // });

    // const material = new THREE.LineDashedMaterial({
    //   color: 0xffff00,
    //   dashSize: 0.2,
    //   gapSize: 0.1,
    //   scale: 1
    // });

    // const line = new THREE.Line(geometry, material);
    // line.computeLineDistances();
    // this._scene.add(line);

    // ------------------------------------Mesh--------------------------------------
    // const material = new THREE.MeshBasicMaterial({
    //   visible: true,
    //   transparent: true,
    //   opacity: 0.5,
    //   depthTest: true,
    //   depthWrite: true,
    //   side: THREE.DoubleSide,
    //   color: 0xffff00,
    //   wireframe: false
    // });

    // const material = new THREE.MeshLambertMaterial({
    //   transparent: true,
    //   opacity: 0.5,
    //   side: THREE.BackSide,
    //   color: 0xff0000,
    //   emissive: 0x555500,
    //   wireframe: false
    // });

    // const material = new THREE.MeshPhongMaterial({
    //   color: 0xff0000,
    //   emissive: 0x0000,
    //   specular: 0xffff00,
    //   shininess: 10,
    //   flatShading: true,
    //   wrireframe: false
    // })

    // const material = new THREE.MeshStandardMaterial({
    //   color: 0xff0000,
    //   emissive: 0x00000,
    //   roughness: 0.25,
    //   metalness: 0.1,
    //   wireframe: false,
    //   flatShading: false,
    // });

    // const material = new THREE.MeshPhysicalMaterial({
    //   color: 0xff0000,
    //   emissive: 0x0000,
    //   roughness: 1,
    //   metalness: 0,
    //   clearcoat: 1,
    //   clearcoatRoughness: 0,
    //   wireframe: false,
    //   flatShading: false
    // })

    // ------------------------------------Texture--------------------------------------
    // const map = TextureLoader.load(
    //   "../examples/textures/uv_grid_opengl.jpg",
    //   texture => {
    //     texture.repeat.x = 1;
    //     texture.repeat.y = 1;
    
    //     texture.wrapS = THREE.ClampToEdgeWrapping;
    //     texture.wrapT = THREE.ClampToEdgeWrapping;
    
    //     texture.offset.x = 0;
    //     texture.offset.y = 0;
    
    //     texture.rotation = THREE.MathUtils.degToRad(0);
    
    //     texture.center.x = 0.5;
    //     texture.center.y = 0.5;
    
    //     texture.magFilter = THREE.LinearFilter;
    //     texture.minFilter = THREE.NearestMipMapLinearFilter;
    //   }
    // );
    const TextureLoader = new THREE.TextureLoader();
    const map = TextureLoader.load("images/glass/Glass_Window_002_basecolor.jpg");
    const mapAO = TextureLoader.load("images/glass/Glass_Window_002_ambientOcclusion.jpg");
    const mapHeight = TextureLoader.load("images/glass/Glass_Window_002_height.png");
    const mapNormal = TextureLoader.load("images/glass/Glass_Window_002_normal.jpg");
    const mapRoughness = TextureLoader.load("images/glass/Glass_Window_002_roughness.jpg");
    const mapMetalic = TextureLoader.load("images/glass/Glass_Window_002_metallic.jpg");
    const mapAlpha = TextureLoader.load("images/glass/Glass_Window_002_opacity.jpg");
    const mapLight = TextureLoader.load("images/glass/light.jpg")
        
    const material = new THREE.MeshStandardMaterial({
      map: map,

      normalMap: mapNormal,

      displacementMap: mapHeight,
      displacementScale: 0.2,
      displacementBias: -0.15,

      aoMap: mapAO,
      aoMapIntensity: 2,

      roughnessMap: mapRoughness,
      roughness: 0.5,

      metalnessMap: mapMetalic,
      metalness: 0.5,

      // alphaMap: mapAlpha,
      transparent: true,
      side: THREE.DoubleSide,

      lightMap: mapLight,
      lightMapIntensity: 2,
    });

    const box = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1, 256, 256, 256), material);
    box.position.set(-1, 0, 0);
    box.geometry.attributes.uv2 = box.geometry.attributes.uv;
    this._scene.add(box);

    // const boxHelper = new VertexNormalsHelper(box, 0.1, 0xffff00);
    // this._scene.add(boxHelper);

    const sphere = new THREE.Mesh(new THREE.SphereGeometry(0.7, 512, 512), material);
    sphere.position.set(1, 0, 0);
    sphere.geometry.attributes.uv2 = sphere.geometry.attributes.uv;
    this._scene.add(sphere);

    // const sphereHelper = new VertexNormalsHelper(sphere, 0.1, 0xffff00);
    // this._scene.add(sphereHelper);
  }

  resize() {
    const width = this._divContainer.clientWidth;
    const height = this._divContainer.clientHeight;

    this._camera.aspect = width / height;
    this._camera.updateProjectionMatrix();

    this._renderer.setSize(width, height);
  }

  render(time) {
    // scene을 camera의 시점으로 렌더링하라는 의미.
    this._renderer.render(this._scene, this._camera);
    this.update(time);
    requestAnimationFrame(this.render.bind(this));
  }
  
  // time은 requestAnimationFrame가 전달해주는 값
  update(time){
    time *= 0.001; // second unit
    // this._cube.rotation.x = time;
    // this._cube.rotation.y = time;
  }
}


window.onload = function  () {
  new App();
}