import * as THREE from 'three';

export class Clouds {

  private mesh:THREE.Object3D =  new THREE.Object3D();
  private nClouds = 20;
  private stepAngle;

  constructor() {}

  create(scene){
    this.stepAngle = Math.PI*2 / this.nClouds;

    for (var i=0; i < this.nClouds; i++) {
      var c = this.createCloud();
      var a = this.stepAngle*i;
      var h = 350 + Math.random()*200;

      c.position.y = Math.sin(a)*h;
      c.position.x = Math.cos(a)*h;

      c.rotation.z = a + Math.PI/2;
      c.position.z = -400-Math.random()*400;

      var s = 1+Math.random()*2;
      c.scale.set(s,s,s);

      this.mesh.add(c);
      scene.add(this.mesh)
      this.mesh.position.y = -600;
      this.mesh.position.y = -180;
    }
  }

  createCloud(){
     let mesh = new THREE.Object3D();
     let geom = new THREE.BoxGeometry(20,20,20);

     let mat = new THREE.MeshPhongMaterial({
       color: 0xd8d0d1,
       transparent: true,
       opacity: 0.9,
       shading: THREE.FlatShading
     });

     // dupe it a few times
     let nBlocks = 3+Math.floor(Math.random()*3);
     for (let i = 0; i < nBlocks; i++) {
       let m = new THREE.Mesh(geom, mat);

       m.position.x = i*15;
       m.position.y = Math.random()*10;
       m.position.z = Math.random()*10;
       m.rotation.z = Math.random()*Math.PI*2;
       m.rotation.z = Math.random()*Math.PI*2;

       let s = .1 + Math.random() * 0.9;
       m.scale.set(s,s,s);
       m.receiveShadow = true;

       mesh.add(m);
     }
     return mesh
  }

  animate(){
    this.mesh.rotation.z += 0.01;
  }
}
