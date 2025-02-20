import { gsap } from 'gsap';
import {
  getMousePos,
  lerp,
} from './utils.ts';
import { RenderedStyles } from '../../types.ts';

class Cursor {
  DOM: { el: HTMLElement; };
  bounds: any;
  renderedStyles: RenderedStyles;
  isVisible: boolean;
  opacity: number;
  targetProps: { opacity: number; scale: number; };
  mouse: { x: number; y: number; };
  onMouseMoveEv: () => void;

  constructor(
    el: HTMLElement,
    smoothness: {
      movement: number,
      opacity: number,
      scale: number,
    },
    opacity: number,
    targetOpacity: number,
    targetScale: number,
  ) {
    this.bindAll();

    this.DOM = { el };
    this.bounds = this.DOM.el.getBoundingClientRect();
    this.renderedStyles = {
      tx: {
        previous: 0,
        current: 0,
        amt: smoothness.movement,
      },
      ty: {
        previous: 0,
        current: 0,
        amt: smoothness.movement,
      },
      scale: {
        previous: 1,
        current: 1,
        amt: smoothness.scale,
      },
      opacity: {
        previous: 1,
        current: opacity,
        amt: smoothness.opacity,
      },
    };

    this.isVisible = true;

    this.opacity = opacity;

    this.targetProps = {
      opacity: targetOpacity,
      scale: targetScale,
    };

    this.mouse = {
      x: 0,
      y: 0,
    };

    window.addEventListener('mousemove', this.getPos);

    this.onMouseMoveEv = () => {
      this.renderedStyles.tx.current = this.mouse.x - this.bounds.width / 2;
      this.renderedStyles.tx.previous = this.renderedStyles.tx.current;
      this.renderedStyles.ty.current = this.mouse.y - this.bounds.height / 2;
      this.renderedStyles.ty.previous = this.renderedStyles.ty.current;

      gsap.to(this.DOM.el, {
        duration: 0.3,
        ease: 'Power3.easeOut',
        opacity: this.opacity,
      });

      requestAnimationFrame(() => this.render());
      window.removeEventListener('mousemove', this.onMouseMoveEv);
    };

    window.addEventListener('mousemove', this.onMouseMoveEv);
  }

  bindAll() {
    (['enter', 'leave', 'hide', 'show', 'getPos'] as Array<keyof Cursor>)
      .forEach((fn) => {
        (this[fn] as any) = this[fn].bind(this);
      });
  }

  getPos(ev: MouseEvent) {
    this.mouse = getMousePos(ev);
  }

  enter() {
    this.renderedStyles.scale.current = this.targetProps.scale;
    this.renderedStyles.opacity.current = this.targetProps.opacity;
  }

  leave() {
    this.renderedStyles.scale.current = 1;
    this.renderedStyles.opacity.current = this.opacity;
  }

  hide(ev: MouseEvent) {
    if (!ev.relatedTarget && !ev.target) {
      this.isVisible = false;
      gsap.to(this.DOM.el, {
        duration: 0.5,
        ease: 'Power3.easeOut',
        opacity: 0,
      });
    }
  }

  show() {
    this.isVisible = true;
    requestAnimationFrame(() => this.render());
    gsap.to(this.DOM.el, {
      duration: 0.3,
      ease: 'Power3.easeOut',
      opacity: this.opacity,
    });
  }

  destroy() {
    this.isVisible = false;
    window.removeEventListener('mousemove', this.getPos);
  }

  render() {
    this.renderedStyles.tx.current = this.mouse.x - this.bounds.width / 2;
    this.renderedStyles.ty.current = this.mouse.y - this.bounds.height / 2;

    (Object.keys(this.renderedStyles) as (keyof RenderedStyles)[]).forEach((key) => {
      this.renderedStyles[key].previous = lerp(
        this.renderedStyles[key].previous,
        this.renderedStyles[key].current,
        this.renderedStyles[key].amt,
      );
    });

    this.DOM.el.style.transform = `translate3d(${this.renderedStyles.tx.previous}px, ${this.renderedStyles.ty.previous}px, 0) scale(${this.renderedStyles.scale.previous})`;
    this.DOM.el.style.opacity = String(this.renderedStyles.opacity.previous);
    if (this.isVisible) {
      requestAnimationFrame(() => this.render());
    }
  }
}

export default Cursor;
