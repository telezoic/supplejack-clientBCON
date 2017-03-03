import Ember from 'ember';

export default Ember.Controller.extend({
  application: Ember.inject.controller('application'),
  textParamStorage: {},
  //leaflet variables - should eventually be moved to new controller
  lat: 53.014783245859235,
  lng: -96.24023437500001,
  zoom: 5,

  locations: Ember.computed('model', function(){
    console.log(this.get('model'));
  }),

  actions: {
    updateParams(obj){
      console.log(obj);
      this.get('application').send('updateParams', obj);
    },
    updateCenter(e){
      let center = e.target.getCenter();
      this.set('lat', center.lat);
      this.set('lng', center.lng);
    }
  }
});
