import { OrderedMap, is } from "immutable";
import { ReduceStore } from "flux/utils";
import HpDispatcher from "./HpDispatcher";
import HpActionTypes from "./HpActionTypes";
import HpEvent from "./HpEvent";

let _nextId = 1;

class HpStore extends ReduceStore {
    constructor() {
        super(HpDispatcher);
    }

    getInitialState() {
        const newEvent = new HpEvent({ id: 0, hp: 10, currentHp: 10 });
        return OrderedMap().set(0, newEvent);
    }

    reduce(state, action) {
        switch (action.type) {
            case HpActionTypes.ADD_HP_EVENT:
                return this.addHpEvent(state, action);
            case HpActionTypes.DELETE_HP_EVENT:
                return this.deleteHpEvent(state, action);
            case HpActionTypes.EDIT_HP_EVENT:
            default:
                return state;
        }
    }

    addHpEvent(state, action) {
        if (action.hp === 0) {
            console.warn("cannot set an hp event of 0");
            return state;
        }
        const currentHp = state.reduce((acc, { hp }, id) => acc + hp, 0) + action.hp;
        const id = _nextId++;
        return state.set(id, new HpEvent({ id, currentHp, ...action }));
    }

    deleteHpEvent(state, { id }) {
        if (!state.has(id)) {
            console.warn(`attempted to remove event id ${id} that doesn't exist`);
            return state;
        }
        let hpAgg = 0;
        const newState = state.filter((_, key) => !is(key, id)).map(evt => {
            let currentHp = hpAgg + evt.hp;
            return evt.merge({ currentHp });
        });
        return newState;
    }

    updateHpEvent(state, action) {
        return state;
        //return state.update(action.id, hpEv => newEvent);
    }
}

export default new HpStore();