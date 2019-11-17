import { createStore, applyMiddleware } from "redux";
import rootReducer from "./root.reducer";
import createSagaMiddleware from "redux-saga";
import RootSaga from "./sagas/root.saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(RootSaga);

export default store;
