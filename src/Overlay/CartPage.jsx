import React from "react";
import useCart from "../useCart";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useShallow } from "zustand/react/shallow";

const CartPage = () => {
    const { cart } = useCart(
        useShallow((state) => ({
            cart: state.cart,
        }))
    );
    return (
        <DataTable value={cart} tableStyle={{ minWidth: "50rem" }}>
            <Column field="name" header="Name"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
    );
};

export default CartPage;
