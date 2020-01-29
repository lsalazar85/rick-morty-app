import React, { Component }  from 'react'
import ListOfAllContentContainer  from '../../container/ListOfAllContentContainer'

export class Home extends Component {
    render(){
        return(
            <div>
                <ListOfAllContentContainer />
            </div>
        )
    }
}

Home.displayName = 'Home'