import Controller from '@ember/controller';

export default Controller.extend({
    randomWord: '',
    actions: {
        getRandomWord: function() {
            const words = Array.from(this.model._objects);
            const length = words.length;
            const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));
            this.set('randomWord', words[getRandomInt(length)]);
        }
    }
});
