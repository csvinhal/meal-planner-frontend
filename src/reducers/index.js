import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import watchAuth from "../sagas";
import dialogReducer from "./dialog";
import loadingReducer from "./loading";
import toastReducer from "./toast";

const rootReducer = combineReducers({
  dialog: dialogReducer,
  toast: toastReducer,
  loader: loadingReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watchAuth);

export { store };
