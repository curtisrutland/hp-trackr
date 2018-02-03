import React from "react";
import Button from "../components/Button";

const style = {
    header: {
        display: "flex",
        flexFlow: "column nowrap",
        alignItems: "center"
    },
    currentHp: {
        fontSize: "4rem",

    }
};

const HeaderView = ({ currentHp }) => (
    <header style={style.header}>
        <div style={style.currentHp}>
            {currentHp}
        </div>
        <Button
            text="+/- HP"
            onClick={() => { }}
        />
    </header>
);

export default HeaderView;