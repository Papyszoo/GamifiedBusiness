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
import "./Overlay.css";
import OverlayPage from "./OverlayPage";
import SettingsModal from "./SettingsModal";

const Overlay = () => {
    const [location, setLocation] = useLocation();

    const { selectedTab, environmentLoaded } = useLocationSettingsStore(
        useShallow((state) => ({
            selectedTab: state.selectedTab,
            environmentLoaded: state.environmentLoaded,
        }))
    );

    const {
        darkMode,
        overlayVisible,
        toggleDarkMode,
        toggleOverlayVisible,
        toggleSettingsVisible,
    } = useOptionsStore(
        useShallow((state) => ({
            darkMode: state.darkMode,
            overlayVisible: state.overlayVisible,
            toggleDarkMode: state.toggleDarkMode,
            toggleOverlayVisible: state.toggleOverlayVisible,
            toggleSettingsVisible: state.toggleSettingsVisible,
        }))
    );

    const { order } = useOrder(
        useShallow((state) => ({
            order: state.order,
        }))
    );

    const toggleFullScreen = () => {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            document.body.requestFullscreen();
        }
    };

    return (
        <PrimeReactProvider>
            <ThemeSwitcher />
            <SettingsModal />
            <Dialog
                visible
                closable={false}
                modal={false}
                className={`dialog-overlay ${
                    overlayVisible ? "" : "overlay-hidden"
                }`}
                maskClassName="dialog-overlay-mask"
                showHeader={false}
            >
                <Button
                    id="toggle-dark-mode-button"
                    icon={darkMode ? "pi pi-sun" : "pi pi-moon"}
                    onClick={toggleDarkMode}
                />
                <Button
                    id="toggle-layout-button"
                    icon="pi pi-desktop"
                    onClick={toggleOverlayVisible}
                />
                <Button
                    id="toggle-settings-button"
                    icon="pi pi-cog"
                    onClick={toggleSettingsVisible}
                />
                <Button
                    id="toggle-fullscreen-button"
                    icon="pi pi-window-maximize"
                    onClick={toggleFullScreen}
                />
                <TabView
                    activeIndex={selectedTab}
                    onTabChange={(e) => setLocation(Tabs[e.index])}
                >
                    <TabPanel leftIcon="pi pi-home" header="Home">
                        <OverlayPage>
                            <HomePage />
                        </OverlayPage>
                    </TabPanel>
                    <TabPanel leftIcon="pi pi-book" header="Menu">
                        <OverlayPage>
                            <MenuPage />
                        </OverlayPage>
                    </TabPanel>
                    <TabPanel leftIcon="pi pi-shopping-cart" header="Cart">
                        <OverlayPage>
                            {order && order.length > 0 ? (
                                <OrderPage />
                            ) : (
                                <CartPage />
                            )}
                        </OverlayPage>
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
