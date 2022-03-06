import { AnyAction } from "redux";

interface UserEvent {
    id: string,
    name: string,
    markets: Array<[any]>
}

interface UserEventsState {
    byIds: Record<UserEvent['id'], UserEvent>;
    allIds: UserEvent['id'][]
}

const initialState: UserEventsState ={
    byIds: {},
    allIds: []
}

const userEventsReducer = (
    state:UserEventsState=initialState, 
    action:AnyAction
    ) => {
        switch (action.type) {
            default:
                return state;
        }
};

export default userEventsReducer