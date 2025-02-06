sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'ns/incident/test/integration/FirstJourney',
		'ns/incident/test/integration/pages/incidentdetailsList',
		'ns/incident/test/integration/pages/incidentdetailsObjectPage'
    ],
    function(JourneyRunner, opaJourney, incidentdetailsList, incidentdetailsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('ns/incident') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheincidentdetailsList: incidentdetailsList,
					onTheincidentdetailsObjectPage: incidentdetailsObjectPage
                }
            },
            opaJourney.run
        );
    }
);