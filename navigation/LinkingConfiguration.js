import * as Linking from "expo-linking";

export default {
  prefixes: [Linking.makeUrl("/")],
  config: {
    SignIn: {
      path: "signin",
    },
    Root: {
      path: "root",
      screens: {
        Home: "home",
        Schedule: "schedule",
        Food: "food",
      },
    },
  },
};
