const { resolve } = require('path');
const { writeFile } = require('fs');
const phantom = require('phantom');

const url = 'http://shuofengfeiyang.quanben-xiaoshuo.com';

let l = 63;

(async function() {
  while (l-- && l > 0) {
    const instance = await phantom.create();

    instance.onError = function(msg, trace) {
      let msgStack = ['PHANTOM ERROR: ' + msg];
      if (trace && trace.length) {
        msgStack.push('TRACE:');
        trace.forEach(function(t) {
          msgStack.push(
            ' -> ' +
              (t.file || t.sourceURL) +
              ': ' +
              t.line +
              (t.function ? ' (in function ' + t.function + ')' : '')
          );
        });
      }
      console.log(msgStack.join('\n'));
      instance.exit(1);
    };

    const page = await instance.createPage();

    page.on('onConsoleMessage', function(msg) {
      console.log(msg);
    });

    await page.open(`${url}/${l}.html`);

    let contents = await page.evaluate(function() {
      var paragraphs = document.querySelectorAll('.articlebody p');
      var titleNode = document.querySelector('h1');
      return {
        title: titleNode.innerHTML,
        data: [].slice.call(paragraphs).map(function(p) {
          return p.innerHTML;
        })
      };
    });

    writeFile(
      resolve(__dirname, `../app/data/back/${contents.title}.json`),
      JSON.stringify(contents.data, null, 2),
      async function() {
        if (l === 1) {
          await instance.exit(0);
        }
      }
    );
  }
})();
