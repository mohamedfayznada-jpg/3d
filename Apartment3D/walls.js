import * as THREE from
'https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.module.js';


export function createWall(
scene,
width,
height,
depth,
x,
y,
z,
color="white"
){

const wall = new THREE.Mesh(

new THREE.BoxGeometry(
width,
height,
depth
),

new THREE.MeshStandardMaterial({
color
})

);

wall.position.set(
x,
y,
z
);

wall.castShadow = true;
wall.receiveShadow = true;

scene.add(wall);

}
