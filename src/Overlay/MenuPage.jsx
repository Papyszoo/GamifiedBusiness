import React from "react";
import useCart from "../useCart";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useShallow } from "zustand/react/shallow";
import { Menu } from "../Constants";
import { Button } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";

const MenuPage = () => {
    const {
        cart,
        addToCart,
        decrementQuantityInCart,
        incrementQuantityInCart,
    } = useCart(
        useShallow((state) => ({
            cart: state.cart,
            addToCart: state.addToCart,
            decrementQuantityInCart: state.decrementQuantityInCart,
            incrementQuantityInCart: state.incrementQuantityInCart,
        }))
    );

    const cartActionsBody = (rowData) => {
        return (
            <>
                <Button
                    icon="pi pi-minus"
                    onClick={() => decrementQuantityInCart(rowData.name)}
                />
                <InputNumber
                    value={cart.find((p) => p.name === rowData.name)}
                />
                <Button
                    icon="pi pi-plus"
                    onClick={() => incrementQuantityInCart(rowData.name)}
                />
            </>
        );
    };

    return (
        <DataTable value={Menu} tableStyle={{ minWidth: "50rem" }}>
            <Column field="name" header="Name"></Column>
            <Column field="sauce" header="Sauce"></Column>
            <Column field="ingredients" header="Ingredients"></Column>
            <Column body={cartActionsBody} header="Cart Actions"></Column>
        </DataTable>
    );
};

export default MenuPage;
