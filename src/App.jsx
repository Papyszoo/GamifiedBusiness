import "./style.css";
import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import PizzaPlace from "./PizzaPlace/PizzaPlace";
import { Perf } from "r3f-perf";
import { PrimeReactProvider } from "primereact/api";
import { Dialog } from "primereact/dialog";
import { TabPanel, TabView } from "primereact/tabview";
import { useLocation } from "wouter";
import { Tabs, Routes } from "./pages";

const App = () => {
    const [location, setLocation] = useLocation();
    const [locationSettings, setLocationSettings] = useState(Routes.default);

    useEffect(() => {
        setLocationSettings(Routes[location] ?? Routes.default);
        console.log(locationSettings);
    }, [location]);

    return (
        <>
            <Canvas camera={{ position: [0, 0, 10] }}>
                <Perf position="top-left" />
                <PizzaPlace />
            </Canvas>
            <PrimeReactProvider>
                <Dialog
                    maximized
                    visible
                    closable={false}
                    className="dialog-overlay"
                    showHeader={false}
                >
                    <TabView
                        activeIndex={locationSettings.selectedTab}
                        className="tabView-overlay"
                        onTabChange={(e) => setLocation(Tabs[e.index])}
                    >
                        <TabPanel leftIcon="pi pi-shopping-cart" header="test">
                            <p>test</p>
                        </TabPanel>
                        <TabPanel leftIcon="pi pi-shopping-cart" header="test2">
                            <p>test</p>
                        </TabPanel>
                        <TabPanel leftIcon="pi pi-shopping-cart" header="test3">
                            <p>test</p>
                        </TabPanel>
                    </TabView>
                </Dialog>
            </PrimeReactProvider>
        </>
    );
};

export default App;
