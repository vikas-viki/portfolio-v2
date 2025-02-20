import Cursor from "./CursorClass";

/* eslint-disable no-param-reassign */
const addHoverEvent = (cursor: Cursor, targets: string | string[]) => {
  if (!targets) return;

  if (Array.isArray(targets)) {
    targets.forEach((target) => {
      [].forEach.call(document.querySelectorAll(target), (el: Element) => {
        el.addEventListener('mouseenter', cursor.enter);
        el.addEventListener('mouseleave', cursor.leave);
      });
    });
  } else {
    [].forEach.call(document.querySelectorAll(targets), (el: Element) => {
      el.addEventListener('mouseenter', cursor.enter);
      el.addEventListener('mouseleave', cursor.leave);
    });
  }
};

const removeHoverEvent = (cursor: Cursor, targets: string | string[]) => {
  if (!targets) return;

  if (Array.isArray(targets)) {
    targets.forEach((target) => {
      [].forEach.call(document.querySelectorAll(target), (el: Element) => {
        el.removeEventListener('mouseenter', cursor.enter);
        el.removeEventListener('mouseleave', cursor.leave);
      });
    });
  } else {
    [].forEach.call(document.querySelectorAll(targets), (el: Element) => {
      el.removeEventListener('mouseenter', cursor.enter);
      el.removeEventListener('mouseleave', cursor.leave);
    });
  }
};

const handleWindowEvent = (cursor: Cursor) => {
  document.body.addEventListener('mouseleave', cursor.hide);
  document.body.addEventListener('mouseenter', cursor.show);
};

const removeWindowEvent = (cursor: Cursor) => {
  document.body.removeEventListener('mouseleave', cursor.hide);
  document.body.removeEventListener('mouseenter', cursor.show);
};

// Linear interpolation
const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b;

// Get mouse position
const getMousePos = (e: MouseEvent) => {
  let posX = 0;
  let posY = 0;

  // if (!e) e = window.event;

  posX = e.clientX;
  posY = e.clientY;

  return {
    x: posX,
    y: posY,
  };
};

export {
  addHoverEvent, removeHoverEvent,
  handleWindowEvent, removeWindowEvent,
  lerp, getMousePos,
};
