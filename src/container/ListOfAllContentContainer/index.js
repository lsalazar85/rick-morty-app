import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import { fetchAllData } from '../../redux/fetchData/actions'
import { ListOfAllContent } from '../../components/ListOfAllContent'
import { selectAllData } from '../../redux/fetchData/selectors'

class ListOfAllContentContainer extends Component {

    componentDidMount(){
        this.props.fetchAllData()
    }

    render(){
        const { allData } = this.props
        return (
            <Fragment>
                <ListOfAllContent 
                    render={ () => allData.map((item, index) => 
                        <div key={index}>
                            <span>
                                { item.image ? <img src={item.image } alt={item.name} /> : null }
                            </span>
                            <span>{item.name}</span>
                            <span>{item.status}</span>
                            <span>{DataTransferItemList.species}</span>
                        </div>
                    )}
                />
            </Fragment>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    fetchAllData: () => dispatch(fetchAllData())
})

export default connect(( state => ({ allData: selectAllData(state) }) ),mapDispatchToProps)(ListOfAllContentContainer)