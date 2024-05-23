import React from "react";
import KitchenCabinet from "../Models/Environment/Kitchen/KitchenCabinet";
import KitchenCabinetDrawer from "../Models/Environment/Kitchen/KitchenCabinetDrawer";
import KitchenStove from "../Models/Environment/Kitchen/KitchenStove";
import Fridge from "../Models/Environment/Kitchen/Fridge";

const Kitchen = () => {
    return (
        <group position-z={15.8}>
            <KitchenCabinet />
            <KitchenCabinetDrawer position-x={3} />
            <KitchenStove position-x={6} />
            <Fridge position={[-4.3, 0, 1.4]} />
        </group>
    );
};

export default Kitchen;
