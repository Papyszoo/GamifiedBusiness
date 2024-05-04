import React from "react";
import useOptionsStore from "../stores/useOptionsStore";
import { useShallow } from "zustand/react/shallow";

const OverlayPage = (props) => {
    const { overlayVisible } = useOptionsStore(
        useShallow((state) => ({
            overlayVisible: state.overlayVisible,
        }))
    );

    if (overlayVisible) {
        return props.children;
    }
    return <></>;
};

export default OverlayPage;
