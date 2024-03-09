import { Vector3 } from "three";
import { create } from "zustand";

export default create((set) => ({
    targetCameraPosition: new Vector3(-10, -5, 10),
    targetLookAtPosition: new Vector3(0, 0, 0),
    setTargetCameraPosition: (targetPosition) => {
        set({
            targetPosition: targetPosition,
        });
    },
    setTargetLookAtPosition: (targetLookAtPosition) => {
        set({
            targetLookAtPosition: targetLookAtPosition,
        });
    },
}));
