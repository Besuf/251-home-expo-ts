import { transitionFast } from "./transitionPresets";

export const layoutVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  transition: { duration: transitionFast.duration },
};

export const headerVariant = {
  initial: {
    y: -100,
  },
  animate: {
    y: 0,
  },
  exit: {
    y: -100,
  },
  transition: { duration: transitionFast.duration },
};
