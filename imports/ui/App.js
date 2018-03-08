import React from "react";
import TitleBar from "./TitleBar";
import InputPlayer from "./PlayerInput";
import Player from "./player";
import PlayerList from "./playerlist";
import PropTypes from "prop-types";

export default class App extends React.Component{
    render(){
        return (
            <div>
                <TitleBar title={this.props.title} subtitle="Created By Ankush Jain" ></TitleBar>
                <div className="wrapper">
                    <PlayerList players={this.props.players} />
                    <InputPlayer></InputPlayer>
                </div>   
            </div>
        )
    }
}

App.propTypes={
    players:PropTypes.array.isRequired,
    title:PropTypes.string.isRequired
}