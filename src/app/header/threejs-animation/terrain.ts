import * as THREE from 'three';

export class Terrain {

  private planet:THREE.Object3D = new THREE.Object3D();

  constructor() {}

  create(scene) {
    scene.add(this.planet);

    this.planet.position.y = -180;

    let geom = new THREE.IcosahedronGeometry(15, 2);
    let mat = new THREE.MeshPhongMaterial({
      color: 0xBD9779,
      shading: THREE.FlatShading
    });
    let bones = new THREE.MeshPhongMaterial({
      color: 0xBD9779,
      wireframe: true,
      side: THREE.DoubleSide
    });

    let mesh = new THREE.Mesh(geom, mat);
    mesh.scale.x = mesh.scale.y = mesh.scale.z = 18;
    this.planet.add(mesh);

    mesh = new THREE.Mesh(geom, bones);
    mesh.scale.x = mesh.scale.y = mesh.scale.z = 20;

    let ambientLight = new THREE.AmbientLight(0xBD9779);
    ambientLight.castShadow = true;
    scene.add(ambientLight);

    let directionalLight = new THREE.DirectionalLight(0xffffff);
    directionalLight.castShadow = true;
    directionalLight.position.set(1, 1, 1).normalize();
    scene.add(directionalLight);

  }

  animate(){
    this.planet.rotation.z += .001;
    this.planet.rotation.y = 0;
    this.planet.rotation.x = 0;
  }
}
