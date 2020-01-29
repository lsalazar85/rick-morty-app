import { PureComponent } from 'react'
import { func } from 'prop-types'

const DATA = [
    {id:1, name: 'Characters' , path: '/characters'},
    {id:2, name: 'Location' , path: '/location'},
    {id:3, name: 'Episodes' , path: '/episodes'}
]

export class MenuList extends PureComponent {

    state = {
        list: DATA
    }

    static propTypes = {
        render: func.isRequired
    }

    render(){
        return (
            this.props.render(this.state)
        )
    }
}

MenuList.displayName = 'MenuList'

