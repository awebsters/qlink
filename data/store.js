import { AsyncStorage } from "react-native";
import { createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import rootReducer from "./redux";

const persistConfig = {
  key: "root2",
  storage: AsyncStorage,
  blacklist: ["schedule"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, undefined);

export const persistor = persistStore(store);
