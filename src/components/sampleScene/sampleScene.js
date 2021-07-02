import * as BABYLON from '@babylonjs/core';
import "@babylonjs/loaders/glTF";

//when uncommented, importing this glTF gets error, says:
    //Module parse failed: Unexpected token (2:12) 
    //You may need an appropriate loader to handle this file type, 
    //currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
import testarossa from "./FerarriTestarossa.gltf";


if (typeof document !== 'undefined') {
    require("@babylonjs/core/Debug/debugLayer");
    require("@babylonjs/inspector");
}

const onSceneReady = scene => {
    scene.debugLayer.show();
    const canvas = scene.getEngine().getRenderingCanvas();
    const camera = new BABYLON.ArcRotateCamera("camera", 0, 0, -10, new BABYLON.Vector3(0, 0, 0), scene);
    camera.setTarget(BABYLON.Vector3.Zero());
    camera.attachControl(canvas, true);
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
    light.intensity = 0.7;


        //example 1, works, pulls from static/public folder
        //can also use importMesh this way
    // BABYLON.SceneLoader.Append(
    //     "/", 
    //     "FerarriTestarossa.gltf", 
    //     scene, 
    //     function (scene) {
    //         const car = scene.getMeshByID("__root__");
    //         car.rotation = new BABYLON.Vector3(3*Math.PI/2, Math.PI/2, 0);
    //     }
    // )


        //example 2, append with imported file:
        //doesn't work because can't import file
    BABYLON.SceneLoader.Append(
        "", 
        testarossa, 
        scene, 
        function (scene) {
        }
    )
    
    
}

function onRender (scene) {
}

export {onSceneReady, onRender};





