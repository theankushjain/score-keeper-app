import React from "react";
import Player from "./player";
import FlipMove from "react-flip-move";


export default class PlayerList extends React.Component{
    //Formatting each member of the playerlist
    renderPlayers(){
        if(this.props.players.length===0){
            return (
                <div className="item">
                    <p className="item__message">Add your first player to get started.</p>
                </div>
            )
        }
        else{
            return this.props.players.map(function (player) {
                return (
                    <Player key={player._id} player={player} />
                )
            })
        }   
    }

    render(){
        return(
            <div>
                <FlipMove maintainContainerHeight={true} easing="cubic-bezier(0,0.7,0.8,0.1)">
                    {this.renderPlayers()}
                </FlipMove>
            </div>
        )
    }
}