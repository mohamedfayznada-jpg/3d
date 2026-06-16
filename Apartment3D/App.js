import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.module.js';

import { OrbitControls }

from 'https://cdn.jsdelivr.net/npm/three@0.170.0/examples/jsm/controls/OrbitControls.js';



//=================

// Scene

//=================

const scene = new THREE.Scene();

scene.background =
new THREE.Color(0xe5e5e5);



//=================

// Camera

//=================

const camera =
new THREE.PerspectiveCamera(

60,

window.innerWidth/window.innerHeight,

0.1,

1000

);

camera.position.set(
15,
15,
15
);



//=================

// Renderer

//=================

const renderer =
new THREE.WebGLRenderer({

antialias:true

});

renderer.setSize(

window.innerWidth,

window.innerHeight

);

renderer.shadowMap.enabled=true;

document.body.appendChild(

renderer.domElement

);




//=================

// Controls

//=================

const controls =
new OrbitControls(

camera,

renderer.domElement

);

controls.enableDamping=true;

controls.enableZoom=true;

controls.enablePan=true;

controls.maxPolarAngle=Math.PI/2;





//=================

// Lights

//=================

scene.add(

new THREE.AmbientLight(

0xffffff,

2

)

);


const sun =
new THREE.DirectionalLight(

0xffffff,

3

);

sun.position.set(

20,

30,

10

);

sun.castShadow=true;

scene.add(sun);




//=================

// Floor

//=================

const floor =
new THREE.Mesh(

new THREE.BoxGeometry(

20,

0.2,

20

),

new THREE.MeshStandardMaterial({

color:"#c8b08f"

})

);

floor.receiveShadow=true;

scene.add(floor);




//=================

// Example wall

//=================

const wall =
new THREE.Mesh(

new THREE.BoxGeometry(

0.2,

3,

10

),

new THREE.MeshStandardMaterial({

color:"white"

})

);

wall.position.set(

-5,

1.5,

0

);

wall.castShadow=true;

scene.add(wall);




//=================

// Animate

//=================

function animate(){

requestAnimationFrame(

animate

);

controls.update();

renderer.render(

scene,

camera

);

}


animate();




//=================

// Resize

//=================

window.addEventListener(

'resize',

()=>{

camera.aspect=
window.innerWidth/
window.innerHeight;

camera.updateProjectionMatrix();

renderer.setSize(

window.innerWidth,

window.innerHeight

);

}

);
