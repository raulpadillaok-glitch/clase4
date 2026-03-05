import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-background-360',
  template: '<div #container class="viewer-360"></div>',
  styles: ['.viewer-360 { width: 100vw; height: 100vh; position: fixed; z-index: -1; }']
})
export class Background360 implements AfterViewInit {
  @ViewChild('rendererContainer') rendererContainer!: ElementRef;

  ngAfterViewInit() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    this.rendererContainer.nativeElement.appendChild(renderer.domElement);

    // Esfera para la imagen 360
    const geometry = new THREE.SphereGeometry(500, 60, 40);
    geometry.scale(-1, 1, 1); // Invertir para ver desde adentro

    const loader = new THREE.TextureLoader();
   const texture = loader.load('assets/123.jpg');

const material = new THREE.MeshBasicMaterial({ map: texture });
    const sphere = new THREE.Mesh(geometry, material);
    
    scene.add(sphere);
    camera.position.set(0, 0, 0.1);

    const animate = () => {
      requestAnimationFrame(animate);
      sphere.rotation.y += 0.001; // Rotación lenta automática
      renderer.render(scene, camera);
    };
    animate();
  }
}