(function (Vue, pictureKey) {

  const {prefix} = pictures[pictureKey];

  let volume = 1;
  let section = 1;

  let progress = localStorage.getItem('progress');

  progress = progress ? JSON.parse(progress) : {};

  if(progress[pictureKey]){
    let picture = progress[pictureKey].split(',');
    volume = Number(picture[0].trim());
    section = Number(picture[1].trim());
  } else {
    volume = 1;
    section = 1;
  }

  let app = new Vue({
    data: {
      volume,
      section,
      src: '',
      notFound: false
    },
    methods: {
      prev(){
        this.section = this.section > 1 ? (this.section - 1) : this.section;
        this.show();
      },
      next(){
        this.section = this.section + 1;
        this.show();
      },
      prevVolume(){
        this.volume = this.volume > 1 ? (this.volume - 1) : this.volume;
        this.section = 1;
        this.show();
      },
      nextVolume(){
        this.volume = this.volume + 1;
        this.section = 1;
        this.show();
      },
      show(){
        this.src = '';
        this.loading = true;
        let img = new Image();
        img.onload = () => {
          progress[pictureKey] = `${this.volume},${this.section}`;
          localStorage.setItem('progress', JSON.stringify(progress));
          this.notFound = false;
          this.loading = false;
          this.src = this.url;
        };
        img.onerror = () => {
          this.src = '';
          this.notFound = true;
          this.loading = false;
        };
        img.src = this.url;
      }
    },
    computed: {
      m(){
        return this.volume < 10 ? `0${this.volume}` : this.volume;
      },
      v(){
        let result = '';
        switch (true){
          case(this.section > 999):
            result = this.section;
            break;
          case(this.section > 99 && this.section < 1000):
            result = `0${this.section}`;
            break;
          case(this.section > 9 && this.section < 100):
            result = `00${this.section}`;
            break;
          case(this.section < 10):
            result = `000${this.section}`;
            break;
        }
        return result;
      },
      url(){
        return prefix(this.m, this.v);
      }
    },
    created(){
      this.show();
    }
  });

  app.$mount('#app');

  const keyUpHandler = {
    '38': function(){
      app.prevVolume();
    },
    '40': function(){
      app.nextVolume();
    },
    '37': function(){
      app.prev();
    },
    '39': function(){
      app.next();
    },
  };

  document.addEventListener('keyup', function (event) {
    keyUpHandler[event.keyCode] && keyUpHandler[event.keyCode]();
  }, false);

  document.oncontextmenu = function () {
    return false;
  };

})(Vue, pictureKey);
