import React, { Fragment } from "react";

const Header = ({ currentHp }) => (
    <header>
        {`Current HP: ${currentHp}`}
    </header>
);

const HpEvent = ({ hp, currentHp, id }) => <li>Hp: {hp}, Current Hp: {currentHp}; Id: {id}</li>;

const Main = ({ events }) => (
    <div>
        {[...events.values()].reverse().map(evt => <HpEvent key={evt.id} id={evt.id} hp={evt.hp} currentHp={evt.currentHp} />)}
    </div>
);

const AppView = props => (
    <Fragment>
        <Header {...props} />
        <Main {...props} />
    </Fragment>
);

export default AppView;