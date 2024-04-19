import React from "react";
import Pizza from "../../Pizza/Pizza";
import { Ingredients, Menu } from "../../../Constants";
import useCart from "../../../useCart";
import { useShallow } from "zustand/react/shallow";
import { Billboard, Text } from "@react-three/drei";

const FloorCart = () => {
    const { cart } = useCart(
        useShallow((state) => ({
            cart: state.cart,
        }))
    );
    return (
        <>
            {cart.map((pizza, i) => (
                <group position={[-5 + i * 2, 0, 0]}>
                    <Billboard position={[0, 2, 0]}>
                        <Text
                            color="white"
                            anchorX="center"
                            anchorY="middle"
                            scale={0.2}
                        >
                            {pizza.name}
                        </Text>
                    </Billboard>
                    <Pizza
                        rotation={[Math.PI / 2, 0, 0]}
                        // ingredients={Menu.find(
                        //     (p) => p.name === pizza.name
                        // ).ingredients.filter((i) => i !== Ingredients.cheese)}
                    />
                </group>
            ))}
        </>
    );
};

export default FloorCart;
