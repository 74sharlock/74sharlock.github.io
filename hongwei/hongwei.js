const _createQuestions = () => {
  let arr = [];
  for (let i = 0; i < 100; i++){
    const n = i + 1;
    const sum = 2 * n;
    arr.push({
      title: `${n} + ${n} =`,
      answer: sum,
      options: [
        sum,
        sum - 1,
        sum + 1,
        sum + 2
      ],
    });
  }
  return arr;
}

new Vue({
  el: '#app',
  filters: {
    numberToLetter(value) {
      return ['A', 'B', 'C', 'D'][value];
    }
  },
  data() {
    return {
      questions: [],
      count: 10,
      answers: {},
      showMyAnswer: false
    }
  },
  methods: {
    random(x, y) {
      // 返回x和y之间的随机整数，但是不包含x和y之间较大的那个数。
      let max = Math.max(x, y);
      let min = Math.min(x, y);
      return Math.floor(Math.random() * (max - min) + min);
    },
    resetQuestions() {
      this.questions = [];
      const questions = _createQuestions();
      for (let i = 0; i < this.count; i++) {
        let randomIndex = this.random(0, questions.length);
        let item = questions.splice(randomIndex, 1)[0];
        this.questions.push(item);
        this.$set(this.answers, i, '');
      }
    },
    previewAnswers() {
      this.showMyAnswer = true;
    },
    submit() {
      alert('假装提交成功！');
    }
  },
  created() {
    this.resetQuestions();
    document.querySelector('#app').setAttribute('mounted', true);
  }
})