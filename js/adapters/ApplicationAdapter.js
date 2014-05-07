define([
	"ember","parse"
], function(Ember,Parse) {

	var ApplicationAdapter = DS.ParseAdapter.extend({
				applicationId: 'aGj00lxcBajwuOGg4tZtWw42yNaQWZR6DQtEpw2Y',
				restApiId: 'H94oUBK3pwV9ozZbb0mkq90QzAXf4OSsz2Jec43L',
				javascriptId: 'kTddsB9QKdpC3bIX7pySDRT1uizpJFbk01Xo5Ero'
			});
	
	return ApplicationAdapter;
});