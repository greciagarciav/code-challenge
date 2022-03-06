import {Action} from 'redux';
import { RootState } from './store';

interface RecorderState {
    shoppingCart :any
}

const ADD = 'recorder/add';
const REMOVE = 'recorder/remove';

type AddAction = Action<typeof ADD>
type RemoveAction = Action<typeof REMOVE>

export const add = ():AddAction => ({
    type: ADD
});

export const remove = ():RemoveAction => ({
    type: REMOVE
});

export const selectRecorderState = (rootState: RootState) => rootState.recorder;

export const selectShoppingCart = (rootState: RootState) => selectRecorderState(rootState).shoppingCart;

const initialState: RecorderState = {
    shoppingCart: []
}

const recorderReducer = (
    state:RecorderState = initialState, 
    action: AddAction | RemoveAction
    ) => {
    switch (action.type) {
        case ADD:
            return {...state, shoppingCart: [new Object]};

        case REMOVE:
            return {...state, shoppingCart: []};

        default:
            return state;
    }
}

export default recorderReducer;