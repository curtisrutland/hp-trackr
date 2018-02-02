import { Record } from "immutable";

const HpEvent = Record({
    id: "",
    hp: 0,
    currentHp: 0,
    source: "",
    notes: "",
    timestamp: new Date()
});

export default HpEvent;