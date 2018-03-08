import { Mongo } from "meteor/mongo";
import numeral from "numeral";

export let Players = new Mongo.Collection('players');

export const positionPlayers=(players)=>{
    let rank=1;
    return players.map( (player,index) => {
            if(index!==0 && players[index-1].Score>player.Score){
                rank++;
            }

            return {
                ...player,
                rank,
                position: numeral(rank).format('0o')
            };
        });
};