import screen1 from "./screen-1";
import screen2 from "./screen-2";
import screen3 from "./screen-3";
import screen4 from "./screen-4";
import screen5 from "./screen-5";
import screen6 from "./screen-6";

const getScreenConfig = ({ screen }) => {
  const screens = {
    S1: screen1,
    S2: screen2,
    S3: screen3,
    S4: screen4,
    S5: screen5,
    S6: screen6
  };

  const currentScreenConfig = screens[screen];

  return currentScreenConfig;
};

export default getScreenConfig;
