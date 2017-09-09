import {AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Scene } from './scene';
import { Terrain } from './terrain';
import { Plane } from './plane';
import * as THREE from 'three';

@Component({
  selector: 'app-threejs-animation',
  templateUrl: './threejs-animation.component.html',
  styleUrls: ['./threejs-animation.component.less']
})
export class ThreejsAnimationComponent implements AfterViewInit {
  //setup canvas
  @ViewChild('canvas')
  private canvasRef: ElementRef;

  private get canvas() : HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  //setup threejs and import custom classes
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private plane: Plane = new Plane();
  private terrain: Terrain = new Terrain();
  private scene: Scene;

  //camera settings
  public cameraPos = { x: 0, y: 100, z: 400 };
  public fieldOfView: number = 25;
  public nearClippingPane: number = 1;
  public farClippingPane: number = 1000;


  constructor() { }

  private addObjectsToScene() {
    this.terrain.create(this.scene);
    this.plane.create(this.scene);
  }

  private createScene() {
    this.scene = new Scene();

    //setup camera
    let aspectRatio = this.getAspectRatio();
    this.camera = new THREE.PerspectiveCamera(
      this.fieldOfView,
      aspectRatio,
      this.nearClippingPane,
      this.farClippingPane
    );
    this.camera.position.set(this.cameraPos.x,this.cameraPos.y,this.cameraPos.z);
  }

  private getAspectRatio() {
    let size = this.getWidthAndHeight();
    return size.width / size.height;
  }


  private startRenderingLoop() {
    let size = this.getWidthAndHeight();
    /* Renderer */
    // Use canvas element in template
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true, alpha: true });
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(size.width, size.height);

    let component: ThreejsAnimationComponent = this;
    let scene = this.scene.scene;
    let terrain = this.terrain;
    let plane = this.plane;
    (function render() {
      requestAnimationFrame(render);
      terrain.animate();
      plane.animate();
      component.renderer.render(scene, component.camera);
    }());
  }

  private getWidthAndHeight() {
      let width = window.innerWidth;
      let height = 300;
      if(width <= 767){
        height = 530
      }
      return {width:width, height: height};

  }

  //Update scene after resizing.
  public onResize(event) {
    this.camera.aspect = this.getAspectRatio();
    this.camera.updateProjectionMatrix();

    let size = this.getWidthAndHeight();
    this.canvas.width = size.width;
    this.canvas.height = size.height;
    this.renderer.setSize(size.width, size.height);
  }


  //wait for view to init before starting threejs
  public ngAfterViewInit() {
    this.createScene();
    this.addObjectsToScene();
    this.startRenderingLoop();
  }
}
