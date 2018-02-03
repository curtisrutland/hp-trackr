import React from "react";
import HpListView from "./HpListView";
import HeaderView from "./HeaderView";

const AppView = props => (
    <div id="app">
        <HeaderView currentHp={props.currentHp} />
        <HpListView events={props.events} />
    </div>
);

export default AppView;