import Route from '@ember/routing/route';

export default Route.extend({
    actions: {
        deleteWord: function(id){
            this.store.findRecord('words', id).then(function(word) {
                word.deleteRecord();
                word.save();
            });
        },
    },
    model: function(){
        return this.store.query('words', {
            orderBy: 'word',
          });
    }
});
