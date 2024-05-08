import { Dialog } from "primereact/dialog";
import { RadioButton } from "primereact/radiobutton";
import { Sauces, Ingredients } from "../Constants";
import React from "react";
import useNewCustomPizzaStore from "../stores/useNewCustomPizzaStore";
import { useShallow } from "zustand/react/shallow";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const AddCustomPizza = ({ visible, setVisible }) => {
    const { selectedSauce, setSauce } = useNewCustomPizzaStore(
        useShallow((state) => ({
            selectedSauce: state.sauce,
            setSauce: state.setSauce,
        }))
    );

    const ingredientsBody = () => {
        <></>;
    };

    const priceBody = (rowData) => {
        return rowData.price ? `$${rowData.price}` : "";
    };

    return (
        <Dialog
            header="Add Custom Pizza"
            visible={visible}
            style={{ width: "50vw" }}
            onHide={() => setVisible(false)}
        >
            <div className="flex flex-wrap gap-3">
                <label>Sauce:</label>
                {Object.keys(Sauces).map((sauce) => {
                    return (
                        <div key={sauce} className="flex align-items-center">
                            <RadioButton
                                inputId={sauce}
                                name="sauce"
                                value={sauce}
                                onChange={(e) => setSauce(e.value)}
                                checked={selectedSauce === sauce}
                            />
                            <label htmlFor={sauce} className="ml-2">
                                {sauce.charAt(0).toUpperCase() + sauce.slice(1)}
                            </label>
                        </div>
                    );
                })}
            </div>
            <DataTable
                value={Object.values(Ingredients)}
                tableStyle={{ minWidth: "50rem" }}
            >
                <Column field="name" header="Name"></Column>
                <Column field="price" body={priceBody} header="Price"></Column>
                <Column body={ingredientsBody} header="Cart Actions"></Column>
            </DataTable>
        </Dialog>
    );
};

export default AddCustomPizza;
