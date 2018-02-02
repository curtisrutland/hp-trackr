import AppView from "../views/AppView";
import { Container } from "flux/utils";
import HpStore from "../data/HpStore";
import HpActions from "../data/HpActions";

function getStores() {
    return [HpStore];
}

function getState() {
    const events = HpStore.getState();
    return {
        events,
        currentHp: events.reduce((acc, { hp }, id) => acc + hp, 0),
        onAddTodo: HpActions.addHpEvent,
        onDeleteTodo: HpActions.deleteHpEvent,
        onEditTodo: HpActions.editHpEvent
    }
}

export default Container.createFunctional(AppView, getStores, getState);