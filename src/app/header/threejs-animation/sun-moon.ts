import * as THREE from 'three';

export class SunMoon {


  private sun:THREE.Object3D = new THREE.Object3D();
  private moon:THREE.Object3D = new THREE.Object3D();
  private container:THREE.Object3D = new THREE.Object3D();

  constructor(){}

  getSun(){
    return this.sun;
  }

  create(scene) {
    scene.add(this.container);
    this.container.add(this.sun);

    this.sun.position.y = 250;
    this.sun.position.z = -250;

    let geom = new THREE.SphereGeometry(1.5, 20);
    let mat = new THREE.MeshPhongMaterial({
      color: 0xBD9779,
      shading: THREE.FlatShading
    });

    let mesh = new THREE.Mesh(geom, mat);
    mesh.scale.x = mesh.scale.y = mesh.scale.z = 18;
    this.sun.add(mesh);

    let ambientLight = new THREE.AmbientLight(0xBD9779);
    ambientLight.castShadow = true;
    this.sun.add(ambientLight);

    let directionalLight = new THREE.DirectionalLight(0xffffff);
    directionalLight.castShadow = true;
    directionalLight.position.set(1, 1, 1).normalize();
    this.sun.add(directionalLight);
  }

  animate(){
    this.container.rotation.z += 0.01;
  }
}
