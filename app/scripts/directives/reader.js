import Dragend from './dragend';

export default {
  name: 'reader',
  bind(el) {
    setTimeout(() => {
      let styles = getComputedStyle(el);
      let gap = parseInt(styles.columnGap, 10);
      let width = el.clientWidth;
      let pages = Math.ceil(el.scrollWidth / (el.clientWidth + gap));
      new Dragend(el, {
        pages: Array.from(new Array(pages), (val, index) => index + 1),
        borderBetweenPages: gap
      });
    }, 100);
  }
};
