import React from "react";
import useOrder from "../stores/useOrder";
import { useShallow } from "zustand/react/shallow";

const OrderPage = () => {
    const { order, orderCompletesOn } = useOrder(
        useShallow((state) => ({
            order: state.order,
            orderCompletesOn: state.orderCompletesOn,
        }))
    );
    return (
        <>
            <p>
                Your order will be ready at: {orderCompletesOn.toLocaleString()}
            </p>
        </>
    );
};

export default OrderPage;
