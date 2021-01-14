import axios from 'axios'

export const listProducts = () => async (dispatch) => {
    try {
        dispatch({
            type: 'PRODUCT_LIST_REQUEST',
        })
        const { data } = await axios.get('http://localhost:5000/api/products')
        dispatch({
            type: 'PRODUCT_LIST_SUCCESS',
            payload: data,
        })
    }
    catch (err) {
        dispatch({
            type: 'PRODUCT_LIST_FAIL',
            payload: err.response && err.response.data.message ? err.response.data.message : err.message
        })
    }

}

export const detailProduct = (id) => async (dispatch) => {
    try {
        dispatch({ type: 'PRODUCT_DETAIL_REQUEST' })
        const { data } = await axios.get(`http://localhost:5000/api/products/${id}`)
        dispatch({ type: 'PRODUCT_DETAIL_SUCCESS', payload: data })
    }
    catch (err) {
        dispatch({
            type: 'PRODUCT_LIST_FAIL',
            payload: err.response && err.response.data.message ? err.response.data.message : err.message
        })
    }
}