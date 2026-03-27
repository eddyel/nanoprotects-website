import React from "react";

const makeMotionEl = (tag) =>
  React.forwardRef(function MotionEl(props, ref) {
    const {
      initial, animate, exit, transition, variants,
      whileHover, whileTap, whileFocus, whileInView,
      layoutId, layout, drag, dragConstraints,
      onAnimationStart, onAnimationComplete,
      viewport, custom, style,
      ...rest
    } = props;
    return React.createElement(tag || "div", { ...rest, style, ref });
  });

export const motion = new Proxy(
  {},
  { get(_, tag) { return makeMotionEl(String(tag)); } }
);
export const m = motion;

export function AnimatePresence({ children }) { return children ?? null; }
export function LazyMotion({ children }) { return children ?? null; }
export function MotionConfig({ children }) { return children ?? null; }

export const useAnimation = () => ({ start: () => Promise.resolve(), stop: () => {}, set: () => {} });
export const useInView = () => [null, false];
export const useScroll = () => ({ scrollY: { get: () => 0, onChange: () => () => {} }, scrollYProgress: { get: () => 0 } });
export const useTransform = (val) => val;
export const useMotionValue = (v) => ({ get: () => v, set: () => {}, onChange: () => () => {} });
export const useSpring = (v) => v;
export const useReducedMotion = () => true;
export const useMotionTemplate = () => ({ get: () => "" });
export const useVelocity = () => ({ get: () => 0 });
export const useAnimationControls = () => ({ start: () => Promise.resolve(), stop: () => {} });
export const usePresence = () => [true, () => {}];
export const useIsPresent = () => true;

export const domAnimation = {};
export const domMax = {};
export const animate = () => ({ stop: () => {}, then: () => {} });
export const stagger = () => 0;
export const spring = () => ({});
export const easeIn = (t) => t;
export const easeOut = (t) => t;
export const easeInOut = (t) => t;
export const linear = (t) => t;
export const circIn = (t) => t;
export const circOut = (t) => t;
export const backIn = (t) => t;
export const backOut = (t) => t;
export const anticipate = (t) => t;