import React, { Component } from 'react'
import { Players } from '../shared/ListOfPlayers'
import PlayersPresentation from './PlayersPresentation';
export class Main extends Component {
    constructor() {
        super();
        this.state = {
            player: Players
        }
    }
    render() {
        return <PlayersPresentation player={this.state.Players} />

    }
}
export default Main