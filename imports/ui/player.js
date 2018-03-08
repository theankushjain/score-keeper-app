import React from "react";
import { Players } from "./../api/players";
import PropType from "prop-types";

export default class Player extends React.Component{
    
    render(){ 
        let itemClassName = `item item--rank-${this.props.player.rank}`; 
        return (
            <div key={this.props.player._id} className={itemClassName}>
                <div className="player">
                    <div>
                        <h3 className="player__name">{this.props.player.name}</h3>
                        <p className="player__stats">{this.props.player.position} place- {this.props.player.Score} points</p>
                    </div>
                    
                    <div className="player__actions">
                        <button className="button button--round" onClick={() => Players.remove({ _id: this.props.player._id })}>X</button>
                        <button className="button button--round" onClick={() => Players.update({ _id: this.props.player._id }, { $inc: { Score: 1 } })}>+1</button>
                        <button className="button button--round" onClick={() => Players.update({ _id: this.props.player._id }, { $inc: { Score: -1 } })}>-1</button>
                    </div>
                </div>
            </div>
        )
    }
}

Player.propTypes = {
    player: PropType.object.isRequired
}