import Ember from 'ember';

export default Ember.Component.extend({
  askNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('askNewQuestion', true);
    },
    saveQuestion() {
      var params = {
        author: this.get('author') ? this.get('author') : "",
        content: this.get('content') ? this.get('content') : "",
        notes: this.get('notes') ? this.get('notes') : ""
      };
      this.set('author', "");
      this.set('content', "");
      this.set('askNewQuestion', false);
      this.sendAction('saveQuestion', params);
    }
  }
});
