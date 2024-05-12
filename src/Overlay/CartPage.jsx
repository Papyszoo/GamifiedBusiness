import React from "react";
import useCart from "../stores/useCart";
import useOrder from "../stores/useOrder";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useShallow } from "zustand/react/shallow";
import { Button } from "primereact/button";

const CartPage = () => {
    const { cart } = useCart(
        useShallow((state) => ({
            cart: state.cart,
        }))
    );
    const { makeOrder } = useOrder(
        useShallow((state) => ({
            makeOrder: state.makeOrder,
        }))
    );
    return (
        <>
            <DataTable value={cart} tableStyle={{ minWidth: "50rem" }}>
                <Column field="name" header="Name"></Column>
                <Column field="quantity" header="Quantity"></Column>
                <Column field="price" header="Price"></Column>
            </DataTable>
            <Button label="Make an Order" onClick={() => makeOrder(cart)} />
        </>
    );
};

export default CartPage;
