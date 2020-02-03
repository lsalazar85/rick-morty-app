import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchAllData } from '../../redux/fetchData/actions'
import { ListOfAllContent } from '../../components/ListOfAllContent'
import { selectAllData } from '../../redux/fetchData/selectors'

export const  ListOfAllContentContainer = props => {
    useEffect(() => {
        props.fetchAllData()
    }, [])

    const { allData } = props

    return (
        <Fragment>
            <ListOfAllContent 
                render={ () => allData.map((item, index) => 
                    <div key={index}>
                        {item.image && <span><img src={item.image } alt={item.name} /></span> }
                        <span>{item.name}</span>
                        <span>{item.status}</span>
                        <span>{DataTransferItemList.species}</span>
                    </div>
                )}
            />
        </Fragment>
    )
}

const mapDispatchToProps = dispatch => ({
    fetchAllData: () => dispatch(fetchAllData())
})

export default connect(( state => ({ allData: selectAllData(state) }) ),mapDispatchToProps)(ListOfAllContentContainer)