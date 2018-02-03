import React, { Fragment } from "react";
import HpListView from "./HpListView";
import HeaderView from "./HeaderView";
import Modal from "../components/Modal";

const AppView = props => (
    <Fragment>
        <div id="app">
            <HeaderView currentHp={props.currentHp} />
            <HpListView events={props.events} />
        </div>
        <Modal>
            <h1>Hello Modal</h1>
        </Modal>
    </Fragment>
);

export default AppView;