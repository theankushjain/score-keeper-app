import React from "react"; //to use jsx
import ReactDOM from "react-dom"; //for web app using react
import { Meteor } from "meteor/meteor"; //meteor packages are predecessed by meteor
import { Players, positionPlayers } from "./../imports/api/players"; //contains our database collection
import { Tracker } from "meteor/tracker";//for autoreload

import App from "./../imports/ui/App";

 



// const handleTitleSubmit = (f) => {
//     f.preventDefault();
//     console.log("nvtitleName");
    
//     let titleName = f.target.inputTitleName.value;
//     f.target.inputTitleName.value = '';
//     if (titleName) {
//         document.getElementById('title').innerHTML=titleName;
        
//     }
// }



Meteor.startup(() => {
    let title = 'Score Keep';

    //syncs data between mini mongo and mongoDB after every change
    Tracker.autorun(() => {
        // setTimeout(() => {
            let players = Players.find({},{sort:{Score:-1}}).fetch();
            let updatedPlayers= positionPlayers(players);

            console.log(updatedPlayers);
            

        ReactDOM.render(<App title={title} players={updatedPlayers} />, document.getElementById('app'));
        // }, 1000);
        
    })

});