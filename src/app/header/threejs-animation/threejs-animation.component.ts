import {AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { EffectComposer, GlitchPass, RenderPass, GodRaysPass, KernelSize } from "postprocessing";
import { Scene } from './scene';
import { Terrain } from './terrain';
import { Plane } from './plane';
import { Clouds } from './clouds';
import { SunMoon } from './sun-moon';
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
  private clouds: Clouds = new Clouds();
  private sunMoon: SunMoon = new SunMoon();
  private scene: Scene;
  private clock = new THREE.Clock();
  private godRays;
  private composer;

  //camera settings
  public cameraPos = { x: 0, y: 100, z: 400 };
  public fieldOfView: number = 25;
  public nearClippingPane: number = 1;
  public farClippingPane: number = 1000;


  constructor() { }

  private createRenderer(){
    let size = this.getWidthAndHeight();
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true, alpha: true });
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(size.width, size.height);
  }

  private createScene() {
    this.scene = new Scene();
    let aspectRatio = this.getAspectRatio();
    this.camera = new THREE.PerspectiveCamera(
      this.fieldOfView,
      aspectRatio,
      this.nearClippingPane,
      this.farClippingPane
    );
    this.camera.position.set(this.cameraPos.x,this.cameraPos.y,this.cameraPos.z);
  }

  private addObjectsToScene() {
    this.terrain.create(this.scene);
    this.plane.create(this.scene);
    this.clouds.create(this.scene);
    this.sunMoon.create(this.scene);
  }

  private addEffects(){
    this.composer = new EffectComposer(this.renderer);
    this.composer.addPass(new RenderPass(this.scene.scene, this.camera));
    let glitchPass = new GlitchPass();
    this.godRays = new GodRaysPass(this.scene.scene, this.camera, this.sunMoon.getSun(), {
			resolutionScale: 0.6,
			kernelSize: KernelSize.SMALL,
			intensity: 1.0,
			density: 0.96,
			decay: 0.93,
			weight: 0.4,
			exposure: 0.6,
			samples: 60,
			clampMax: 1.0
		});
    glitchPass.renderToScreen = true;
    this.godRays.renderToScreen = true;
    this.composer.addPass(glitchPass);
    this.composer.addPass(this.godRays);
  }

  private animate(){
      requestAnimationFrame(this.animate.bind(this));
      this.terrain.animate();
      this.plane.animate();
      this.clouds.animate();
      this.sunMoon.animate();
      this.composer.render(this.clock.getDelta())
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

  private getAspectRatio() {
    let size = this.getWidthAndHeight();
    return size.width / size.height;
  }

  private getWidthAndHeight() {
      let width = window.innerWidth;
      let height = 300;
      if(width <= 767){
        height = 530
      }
      return {width:width, height: height};
  }

  //wait for view to init before starting threejs
  public ngAfterViewInit() {
    this.createRenderer();
    this.createScene();
    this.addObjectsToScene();
    this.addEffects();
    this.animate();
  }
}
