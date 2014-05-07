define([
	"views/ApplicationView",
	"views/HomeView",
	"views/EventView",
	"views/LocationView",
	"views/DonateView",
	"views/ConnectView",
	"views/SermonView",
	"views/VisionView",
	"views/AboutView",
	"views/LeadershipView",
	//"adapters/ApplicationAdapter",
	//"models/Home",
	//"components/barChart",
	//"components/pieChart",
	"controllers/ApplicationController",
	"controllers/LeadershipController",
	"controllers/SermonController",
	//"controllers/HomeController",
	//"router/HomeRoute",
	"router/router"
], function(ApplicationView, HomeView, EventView, LocationView, DonateView, ConnectView, SermonView, VisionView, AboutView, LeadershipView, ApplicationController,LeadershipController, SermonController, Router){
	/*Module Pattern*/
	var App = {
		ApplicationView: ApplicationView,
		HomeView: HomeView,
		EventView: EventView,
		LocationView: LocationView,
		DonateView: DonateView,
		ConnectView: ConnectView,
		SermonView: SermonView,
		VisionView: VisionView,
		AboutView: AboutView,
		LeadershipView: LeadershipView,
		ApplicationController: ApplicationController,
		LeadershipController: LeadershipController,
		SermonController: SermonController,
		Router: Router,
		rootElement: "body"
	};

	return App;
});