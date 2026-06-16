import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.module.js';
import {createWall} from './walls.js';
import {rooms} from './rooms.js';
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


rooms.forEach(room=>{

// أرضية الغرفة

const roomFloor = new THREE.Mesh(

new THREE.BoxGeometry(
room.width,
0.1,
room.depth
),

new THREE.MeshStandardMaterial({

color:"#d7c4a3"

})

);

roomFloor.position.set(

room.x,

0.1,

room.z

);

scene.add(roomFloor);


// الحائط الأيسر

createWall(
scene,
0.2,
3,
room.depth,
room.x-room.width/2,
1.5,
room.z
);


// الحائط الأيمن

createWall(
scene,
0.2,
3,
room.depth,
room.x+room.width/2,
1.5,
room.z
);


// الحائط العلوي

createWall(
scene,
room.width,
3,
0.2,
room.x,
1.5,
room.z-room.depth/2
);


// الحائط السفلي

createWall(
scene,
room.width,
3,
0.2,
room.x,
1.5,
room.z+room.depth/2
);

});

//=================

// Example wall

//=================

// LEFT WALL
createWall(
scene,
0.2,
3,
10,
-5,
1.5,
0
);


// RIGHT WALL
createWall(
scene,
0.2,
3,
10,
5,
1.5,
0
);


// TOP WALL
createWall(
scene,
10,
3,
0.2,
0,
1.5,
-5
);


// BOTTOM WALL
createWall(
scene,
10,
3,
0.2,
0,
1.5,
5
);




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
