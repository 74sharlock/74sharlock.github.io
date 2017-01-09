import 'animate.css'
import {tan, tanAlert, tanConfirm, tanTips, infoTips, sucTips, errorTips, primaryTips, warnTips} from 'tan-dialog';
import {R, QA} from 'littlelib';

const options = {};

options.methods = {
  config(){
    return {
      title: '标题',
      content: '文本<br><input type="text" placeholder="输入,然后查看控制台">',
      width: 300,
      height: 'auto',
      okVal: 'ok',
      cancelVal: 'cancel',
      cancel: function () {
        console.log('你点了cancel按钮');
      },
      onShow: function () {
        var self = this, input = this.node.querySelector('input');
        input.addEventListener('input', function () {
          self.returnValue = this.value.trim();
        }, false);
        console.log('就要显示了');
      },
      afterShow: function () {
        console.log('显示完成');
      },
      onClose: function () {
        console.log('现在要关闭了', '然后输入框的值是' + this.returnValue);
      },
      afterClose: function () {
        console.log('已经关闭,你保存的值是' + this.returnValue);
      }
    }
  },
  d(){
    console.log(options.components.d);
    return options.components.d.show();
  },
  e(){
    return options.components.e.show();
  },
  f(){
    return options.components.f.show();
  },
  openAlert(){
    tanAlert('提示框', function () {
      infoTips('你点击了按钮!')
    });
  },
  openConfirm(){
    tanConfirm('确认框', function () {
      sucTips('你点击了确定!')
    }, function () {
      errorTips('你点击了取消!')
    });
  },
  openTips(){
    tanTips('2秒之后关闭', 2000, function () {
      primaryTips('关闭!', 2000, function () {
        warnTips('别忘了还有这个警告弹窗样式.');
      });
    });
  }
};


options.components = {
  d: (function(){
    let o = tan(options.methods.config());
    o.on('ok', function () {
      console.log('你点了OK按钮');
      this.close();
    });
    return o;
  })(),
  e: (function () {
    let opts = options.methods.config();
    opts['in'] = {
      name: 'bounceInLeft'
    };
    opts['out'] = {
      name: 'bounceOutRight'
    };

    let o = tan(opts);
    o.on('cancel', function () {
      console.log('自定义的关闭按钮事件');
    });

    return o;
  })(),
  f: (function () {
    var opts = options.methods.config();
    opts['in'] = {
      name: 'flipInX'
    };
    opts['out'] = {
      name: 'flipOutX'
    };
    let o = tan(opts);
    o.on('afterClose', function () {
      console.log('自定义的关闭动作结束后事件(这里绕吗?)');
    });
    return o;
  })()
};

R(function () {
  let btns = QA('button');
  [].forEach.call(btns, function (btn) {
    btn.on('click', function () {
      let m = btn.getAttribute('@click');
      options.methods[m] && options.methods[m].call(btn);
    });
  });
});
