import React from "react";

const HpEvent = ({ hpEvent }) =>
    <li>Hp: {hpEvent.hp}, Current Hp: {hpEvent.currentHp}; Id: {hpEvent.id}</li>;

function renderEvents(events) {
    return [...events.values()]
        .reverse()
        .map(evt => <HpEvent hpEvent={evt} key={evt.id} />);
}

const HpListView = ({ events }) => (
    <div id="hp-list">
        <ul>
            {renderEvents(events)}
        </ul>
    </div>
);

export default HpListView;