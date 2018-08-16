import Component from '@ember/component';

export default Component.extend({
    randomWord: null,
    error: '',
    checkWords: function(){
        console.log(this.randomWord);
    },
    actions: {
        getRandomWord: function() {
            const words = Array.from(this.words._objects);
            const length = words.length;
            const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));
            const translate =  this.get('translate');

            if(!this.randomWord) {
                this.set('randomWord', words[getRandomInt(length)]);
            } else {
                if(translate === this.randomWord.translate) {
                    this.set('randomWord', words[getRandomInt(length)]);
                    this.set('error', '');
                    document.getElementById('checkWordForm').reset();
                } else {
                    this.set('error', 'Wrong word!');
                }
            }   
        }
    }
});
