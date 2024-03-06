import "./style.css";
import 'primeicons/primeicons.css';
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import PizzaPlace from "./PizzaPlace/PizzaPlace";
import { Perf } from "r3f-perf";
import { PrimeReactProvider } from 'primereact/api';
import { Dialog } from "primereact/dialog";
import { TabPanel, TabView } from "primereact/tabview";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
    <>
        <Canvas camera={{ position: [0, 0, 10] }}>
            <Perf position="top-left" />
            <PizzaPlace />
        </Canvas>
        <PrimeReactProvider>
            <Dialog maximized visible closable={false} className="dialog-overlay">
                <TabView className="tabView-overlay">
                    <TabPanel leftIcon="pi pi-shopping-cart" header="test">
                        <p>test</p>
                    </TabPanel>
                </TabView>
            </Dialog>
        </PrimeReactProvider>
    </>
);
