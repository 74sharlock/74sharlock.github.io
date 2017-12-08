// ==UserScript==
// @name         知乎pc辅助插件
// @author       74sharlock
// @namespace    none
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.zhihu.com/question/*
// @grant        none
// ==/UserScript==

(function() {

  let styles = document.createElement('style');
  styles.className = 'helper-bar-styles';
  styles.innerText = `
  .helper-bar {margin-bottom: 10px;}
  `;

  let isInSbAnswer = /\/question\/\d+\/answer\/\d+/.test(location.pathname);

  let containerSelector = isInSbAnswer ? '.Question-mainColumn' : '[data-zop-feedlist="true"]';

  let answerSelector = isInSbAnswer ? '.Card' : '.List-item';

  document.head.appendChild(styles);

  const el = document.querySelector(containerSelector);

  const isInViewport = function(el){
    let rect = el.getBoundingClientRect();

    return (
      rect.bottom >= 0 &&
      rect.right >= 0 &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.left <= (window.innerWidth || document.documentElement.clientWidth)
    );

  };

  const setSrc = function (node, src) {
    let nodeName = node.nodeName.toLowerCase();
    if(nodeName === 'img'){
      node.src = src;
    } else {
      node.style.backgroundImage = `url(${src})`;
    }
    node.setAttribute('data-loaded', 1);
  };

  const loadImage = function (el) {
    let img = new Image(), src = el.getAttribute('data-src');
    img.src = src;
    if(img.complete){
      setSrc(el, src);
    } else {
      img.onload = function () {
        setSrc(el, src);
      };
    }
  };

  const createdHelperBar = function (node) {
    if(!node.getAttribute('data-helped')){
      let bar = document.createElement('div'), meta = node.querySelector('.ContentItem > meta[itemprop="url"]');

      if(meta){
        bar.className = 'helper-bar';
        bar.innerHTML = `<a class="Button Button--plain" href="${meta.content}" target="_blank"><svg viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg" class="Icon Icon--share Icon--left" width="13" height="16" aria-hidden="true" style="height: 16px; width: 13px;"><title></title><g><path d="M.93 3.89C-.135 4.13-.343 5.56.614 6.098L5.89 9.005l8.168-4.776c.25-.128.477.197.273.388L7.05 10.66l.926 5.953c.18 1.084 1.593 1.376 2.182.456l9.644-15.243c.584-.892-.212-2.03-1.234-1.796L.93 3.89z"></path></g></svg>在新窗口打开这个回答</a>`;
        isInSbAnswer ? node.querySelector('.QuestionAnswer-content').prepend(bar) : node.prepend(bar);
        lazyLoad(getImgs(node));
        node.setAttribute('data-helped', 1);
      }

    }
  };

  const helperAnswer = function (answerItems) {
    answerItems.forEach((item) => {
      isInViewport(item) && createdHelperBar(item);
    });
  };

  const lazyLoad = function (imgs) {
    imgs.forEach((img)=>{
      img.classList.add('helper-refresh');
      img.addEventListener('click', function () {
        loadImage(this);
      }, false);
    });
  };

  const getAnswerItems = ele => [].slice.call(ele.querySelectorAll(answerSelector)).filter(function (node) {
    return !node.getAttribute('data-helped');
  });

  const getImgs = ele => [].slice.call(ele.querySelectorAll('[data-src]')).filter(function (node) {
    return !node.getAttribute('data-loaded');
  });

  let timer = null;

  document.addEventListener('scroll', function () {
    timer && clearTimeout(timer);

    timer = setTimeout(function () {
      helperAnswer(getAnswerItems(el));
    }, 200);

  }, false);

  let observer = new MutationObserver(function () {
    helperAnswer(getAnswerItems(el));
  });

  observer.observe(el, {
    characterData: true,
    childList: true,
    subtree: true
  });

})();

