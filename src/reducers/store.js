import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { reducer } from "../reducers";
import { myLogger } from "../middleware/myLogger";

export const store = createStore(reducer, applyMiddleware(myLogger));
