import React from "react";
import { Players } from "./../api/players";

export default class PlayerInput extends React.Component{
    //Inserting data from form to mongoDB
    handlePlayerSubmit(e) {
        e.preventDefault();
        let playerName = e.target.inputPlayerName.value;
        e.target.inputPlayerName.value = '';
        if (playerName) {
            Players.insert({
                name: playerName,
                Score: 0
            })
        }
    }

    render(){
        return (
            <div className="item">
                <form className="form" onSubmit={this.handlePlayerSubmit.bind(this)}> 
                {/* bind(this) has been used so that this in the called function is not lost */}
                    <input className="form__input" placeholder="Player Name" type="text" name="inputPlayerName"></input>
                    <input className="button" type="button" value="Submit" />
                </form>
            </div>
        )
    }
}
