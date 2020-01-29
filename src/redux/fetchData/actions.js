 import * as types from "./types";

const fetchDataSuccess = payload => ({ type: types.FETCH_DATA_SUCCESS, payload });

export const fetchAllData = () => async dispatch => {
    try {
        const data = await Promise.all(types.API_OBJECT.map(async item => {
            let res = await fetch(item.url)
            return await res.json()
        }))
        dispatch(fetchDataSuccess(data))
    }
    catch (e) {
        console.log(e) 
    }
}