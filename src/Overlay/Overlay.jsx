import React from "react";
import useLocationSettingsStore from "../stores/useLocationSettingsStore";
import { useShallow } from "zustand/react/shallow";
import { PrimeReactProvider } from "primereact/api";
import { Dialog } from "primereact/dialog";
import { TabPanel, TabView } from "primereact/tabview";
import { useLocation } from "wouter";
import HomePage from "./HomePage";
import { Tabs } from "../Constants";
import useOptionsStore from "../stores/useOptionsStore";
import { Button } from "primereact/button";
import CartPage from "./CartPage";
import MenuPage from "./MenuPage";
import ThemeSwitcher from "./ThemeSwitcher";
import useOrder from "../stores/useOrder";
import OrderPage from "./OrderPage";

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

    const { darkMode, toggleDarkMode } = useOptionsStore(
        useShallow((state) => ({
            darkMode: state.darkMode,
            toggleDarkMode: state.toggleDarkMode,
        }))
    );

    const { order } = useOrder(
        useShallow((state) => ({
            order: state.order,
        }))
    );

    return (
        <PrimeReactProvider>
            <ThemeSwitcher />
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
                        <Button
                            label={`${darkMode ? "Light" : "Dark"} Mode`}
                            onClick={toggleDarkMode}
                        />
                    </TabPanel>
                    <TabPanel leftIcon="pi pi-book" header="Menu">
                        <MenuPage />
                    </TabPanel>
                    <TabPanel leftIcon="pi pi-shopping-cart" header="Cart">
                        {order && order.length > 0 ? (
                            <OrderPage />
                        ) : (
                            <CartPage />
                        )}
                    </TabPanel>
                    <TabPanel
                        leftIcon="pi pi-wrench"
                        header="Make your own pizza"
                    ></TabPanel>
                    <TabPanel
                        leftIcon="pi pi-shopping-cart"
                        header="Preview your order"
                    ></TabPanel>
                </TabView>
            </Dialog>
        </PrimeReactProvider>
    );
};

export default Overlay;
