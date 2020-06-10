import * as Linking from "expo-linking";

export default {
  prefixes: [Linking.makeUrl("/")],
  config: {
    Root: {
      path: "root",
      screens: {
        Home: "home",
        Schedule: "schedule",
        Map: "map",
        Food: "food",
      },
    },
  },
};
