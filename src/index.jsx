import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import PizzaPlace from "./PizzaPlace.jsx";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
    <Canvas camera={{ position: [0, 0, 10] }}>
        <PizzaPlace />
    </Canvas>
);
