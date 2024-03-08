import React from "react";
import useLocationSettingsStore from "../useLocationSettingsStore";
import { useShallow } from "zustand/react/shallow";
import { PrimeReactProvider } from "primereact/api";
import { Dialog } from "primereact/dialog";
import { TabPanel, TabView } from "primereact/tabview";
import { useLocation } from "wouter";
import HomePage from "./HomePage";
import { Tabs } from "../Constants";

const Overlay = () => {
    const [location, setLocation] = useLocation();

    const { selectedTab, overlayVisible, environmentLoaded } =
        useLocationSettingsStore(
            useShallow((state) => ({
                selectedTab: state.selectedTab,
                overlayVisible: state.overlayVisible,
                environmentLoaded: state.environmentLoaded,
            }))
        );
    return (
        <PrimeReactProvider>
            <Dialog
                visible
                closable={false}
                modal={false}
                className={`dialog-overlay ${
                    overlayVisible ? "" : "overlay-hidden"
                }`}
                showHeader={false}
            >
                <TabView
                    activeIndex={selectedTab}
                    onTabChange={(e) => setLocation(Tabs[e.index])}
                >
                    <TabPanel leftIcon="pi pi-home" header="Home">
                        <HomePage />
                    </TabPanel>
                    <TabPanel leftIcon="pi pi-book" header="Menu">
                        <p>test</p>
                    </TabPanel>
                    <TabPanel leftIcon="pi pi-shopping-cart" header="Cart">
                        <p>test</p>
                    </TabPanel>
                    <TabPanel
                        leftIcon="pi pi-wrench"
                        header="Customize"
                    ></TabPanel>
                </TabView>
            </Dialog>
        </PrimeReactProvider>
    );
};

export default Overlay;
