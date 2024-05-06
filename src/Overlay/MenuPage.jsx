import React, { useState } from "react";
import useCart from "../stores/useCart";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useShallow } from "zustand/react/shallow";
import { Menu } from "../Constants";
import { Button } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";
import AddCustomPizza from "./AddCustomPizza";

const MenuPage = () => {
    const [addCustomPizzaVisible, setAddCustomPizzaVisible] = useState(false);
    const { cart, addToCart, decrementQuantityInCart } = useCart(
        useShallow((state) => ({
            cart: state.cart,
            addToCart: state.addToCart,
            decrementQuantityInCart: state.decrementQuantityInCart,
        }))
    );

    const ingredientsBody = (rowData) => {
        return rowData.ingredients?.join(", ");
    };

    const cartActionsBody = (rowData) => {
        const quantity = cart.find((p) => p.name === rowData.name)?.quantity;
        console.log(rowData);
        if (rowData.name === "Custom") {
            return (
                <Button
                    icon="pi pi-plus"
                    onClick={() => setAddCustomPizzaVisible(true)}
                />
            );
        }
        return (
            <>
                <Button
                    icon="pi pi-minus"
                    onClick={() => decrementQuantityInCart(rowData.name)}
                    disabled={quantity === null || quantity === undefined}
                />
                <InputNumber value={quantity ?? 0} />
                <Button
                    icon="pi pi-plus"
                    onClick={() => addToCart(rowData.name)}
                />
            </>
        );
    };

    const priceBody = (rowData) => {
        return rowData.price ? `$${rowData.price}` : "";
    };

    return (
        <>
            <DataTable value={Menu} tableStyle={{ minWidth: "50rem" }}>
                <Column field="name" header="Name"></Column>
                <Column field="sauce" header="Sauce"></Column>
                <Column body={ingredientsBody} header="Ingredients"></Column>
                <Column field="price" body={priceBody} header="Price"></Column>
                <Column body={cartActionsBody} header="Cart Actions"></Column>
            </DataTable>
            <AddCustomPizza
                visible={addCustomPizzaVisible}
                setVisible={setAddCustomPizzaVisible}
            />
        </>
    );
};

export default MenuPage;
