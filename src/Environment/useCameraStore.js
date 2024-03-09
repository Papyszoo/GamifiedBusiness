import { Vector3 } from "three";
import { create } from "zustand";

export default create((set) => ({
    targetCameraPosition: new Vector3(-10, -5, 10),
    targetLookAt: null,
    setTargetCameraPosition: (targetCameraPosition) => {
        set({
            targetCameraPosition: targetCameraPosition,
        });
    },
    setTargetLookAt: (targetLookAt) => {
        set({
            targetLookAt: targetLookAt,
        });
    },
}));
