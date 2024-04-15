import React from "react";
import useCart from "../useCart";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useShallow } from "zustand/react/shallow";
import { Menu } from "../Constants";

const MenuPage = () => {
    const { cart, addToCart } = useCart(
        useShallow((state) => ({
            cart: state.cart,
            addToCart: state.addToCart,
        }))
    );
    return (
        <DataTable value={Menu} tableStyle={{ minWidth: "50rem" }}>
            <Column field="name" header="Name"></Column>
            <Column field="sauce" header="Sauce"></Column>
            <Column field="ingredients" header="Ingredients"></Column>
        </DataTable>
    );
};

export default MenuPage;
