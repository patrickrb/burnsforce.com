import * as THREE from 'three';

export class Plane {

  private mesh:THREE.Object3D = new THREE.Object3D();
  private airplane;
  private prop:THREE.Mesh;

  private colors = {
  	red:0xf25346,
  	white:0xd8d0d1,
  	brown:0x59332e,
  	pink:0xF5986E,
  	brownDark:0x23190f,
  	blue:0x68c3c0,
  };

  constructor() {}

  create(scene){
    // cabin
    let geomCockpit = new THREE.BoxGeometry(60,50,50,1,1,1);
    let matCockpit = new THREE.MeshPhongMaterial({
      color: this.colors.red,
      shading: THREE.FlatShading
    });

    geomCockpit.vertices[4].y -=10;
    geomCockpit.vertices[4].z +=20;
    geomCockpit.vertices[5].y -=10;
    geomCockpit.vertices[5].z -=20;
    geomCockpit.vertices[6].y +=30;
    geomCockpit.vertices[6].z +=20;
    geomCockpit.vertices[7].y +=30;
    geomCockpit.vertices[7].z -=20;

    let cockpit = new THREE.Mesh(geomCockpit, matCockpit);
    cockpit.castShadow = true;
    cockpit.receiveShadow = true;
    this.mesh.add(cockpit);

    // windshield
    let geomWs = new THREE.BoxGeometry(2,20,50,1,1,1);
    let matWs = new THREE.MeshPhongMaterial({
      color: this.colors.white,
      transparent: true,
      opacity: 0.3,
      shading: THREE.FlatShading
    });
    let ws = new THREE.Mesh(geomWs, matWs);
    ws.castShadow = true;
    ws.receiveShadow = true;
    ws.rotation.z = 0.25;
    ws.position.set(28, 35, 0);
    this.mesh.add(ws);

    // engine
    let geomEngine = new THREE.BoxGeometry(20,50,50,1,1,1);
    let matEngine = new THREE.MeshPhongMaterial({
      color: this.colors.white,
      shading: THREE.FlatShading
    });

    geomEngine.vertices[0].x += 5;
    geomEngine.vertices[0].z -= 5;
    geomEngine.vertices[0].y -= 5;
    geomEngine.vertices[1].x += 5;
    geomEngine.vertices[1].z += 5;
    geomEngine.vertices[1].y -= 5;
    geomEngine.vertices[2].x += 5;
    geomEngine.vertices[2].y += 5;
    geomEngine.vertices[2].z -= 5;
    geomEngine.vertices[3].x += 5;
    geomEngine.vertices[3].y += 5;
    geomEngine.vertices[3].z += 5;

    let engine = new THREE.Mesh(geomEngine, matEngine);
    engine.position.x = 40;
    engine.castShadow = true;
    engine.receiveShadow = true;
    this.mesh.add(engine);

    // tail
    let geomTailPlane = new THREE.BoxGeometry(20,40,5,1,1,1);
    let matTailPlane = new THREE.MeshPhongMaterial({
      color: this.colors.red,
      shading: THREE.FlatShading
    });

    geomTailPlane.vertices[0].x -= 10;
    geomTailPlane.vertices[1].x -= 10;

    let tailPlane = new THREE.Mesh(geomTailPlane, matTailPlane);
    tailPlane.position.set(-30,25,0);
    tailPlane.castShadow = true;
    tailPlane.receiveShadow = true;
    this.mesh.add(tailPlane);

    // wing
    let geomSideWing = new THREE.BoxGeometry(40,8,150,1,1,1);
    let matSideWing = new THREE.MeshPhongMaterial({
      color: this.colors.red,
      shading: THREE.FlatShading
    });

    geomSideWing.vertices[4].z += 10;
    geomSideWing.vertices[6].z += 10;

    geomSideWing.vertices[5].z -= 10;
    geomSideWing.vertices[7].z -= 10;


    let sideWing = new THREE.Mesh(geomSideWing, matSideWing);
    sideWing.castShadow = true;
    sideWing.receiveShadow = true;
    this.mesh.add(sideWing);

    // tail wing
    let geomTailWing = new THREE.BoxGeometry(20,4,55,1,1,1);
    let matTailWing = new THREE.MeshPhongMaterial({
      color: this.colors.red,
      shading: THREE.FlatShading
    });

    let tailWing = new THREE.Mesh(geomTailWing, matTailWing);
    tailWing.castShadow = true;
    tailWing.receiveShadow = true;

    geomTailWing.vertices[0].z -= 5;
    geomTailWing.vertices[2].z -= 5;
    geomTailWing.vertices[1].z += 5;

    tailWing.position.set(-35,0,0);
    this.mesh.add(tailWing);

    // prop
    let geomProp = new THREE.BoxGeometry(20,10,10,1,1,1);
    let matProp = new THREE.MeshPhongMaterial({
      color: this.colors.brown,
      shading: THREE.FlatShading
    });
    this.prop = new THREE.Mesh(geomProp, matProp);
    this.prop.castShadow = true;
    this.prop.receiveShadow = true;

    //blades
    let geomBlade = new THREE.BoxGeometry(1,100,20,1,1,1);
    let matBlade = new THREE.MeshPhongMaterial({
      color: this.colors.brownDark,
      shading: THREE.FlatShading
    });
    let blade = new THREE.Mesh(geomBlade, matBlade);
    blade.position.set(8,0,0);
    blade.castShadow = true;
    blade.receiveShadow = true;
    this.prop.add(blade);
    this.prop.position.set(55,0,0);
    this.mesh.add(this.prop);

    this.mesh.scale.set(0.25,0.25,0.25);
    this.mesh.position.y = 100;
    this.mesh.rotation.x = 0.5;
    this.mesh.position.z = -50;
    scene.add(this.mesh);
  }

  animate(){
    this.prop.rotation.x += 0.3;
  }
}
