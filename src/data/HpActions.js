import {HpDispatcher} from "./Dispatchers";
import HpActionTypes from "./HpActionTypes"

const Actions = {
    addHpEvent(hp, source, notes) {
        HpDispatcher.dispatch({ type: HpActionTypes.ADD_HP_EVENT, hp, source, notes });
    },
    deleteHpEvent(id) {
        HpDispatcher.dispatch({ type: HpActionTypes.DELETE_HP_EVENT, id });
    },
    editHpEvent(id, hp, source, notes) {
        HpDispatcher.dispatch({ type: HpActionTypes.EDIT_HP_EVENT, id, hp, source, notes });
    }
}

export default Actions;