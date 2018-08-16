import Controller from '@ember/controller';

export default Controller.extend({
    error: '',
    message: '',
    actions: {
        saveWord: function() {
            const newWord = this.store.createRecord('words', {
                word: this.get('word'),
                translate: this.get('translate'),
                timestamp: new Date().getTime
            });
            if (newWord.word && newWord.translate) {
                document.getElementById('addNewWordForm').reset();
                this.set('message', 'Word successfully added');
                this.set('error', '');
                newWord.save();  
            } else {
                this.set('error', 'Enter your WORD and TRANSLATE');
                this.set('message', '');
            }
            
        }
    }
});
