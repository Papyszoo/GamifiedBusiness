import React from "react";
import CouchesWithTable from "./CouchesWithTable";

const Garden = (props) => {
    return (
        <group {...props}>
            <group position-z={-25}>
                <CouchesWithTable
                    position={[20, 0, 0]}
                    rotation-y={Math.PI / 2}
                />
                <CouchesWithTable
                    position={[-20, 0, 0]}
                    rotation-y={Math.PI / 2}
                />
            </group>
        </group>
    );
};

export default Garden;
