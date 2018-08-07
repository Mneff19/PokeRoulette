import {
    SAVE_PLAYER_IMAGE,
    FETCH_PLAYER_IMAGE
} from './types';

import axios from './axios';
import ROOT_URL from '../config';

export function StorePlayerImage(formData, success) {
    return function(dispatch) {
        axios.post(`${ROOT_URL}/store_image`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => {
                dispatch({
                    type: SAVE_PLAYER_IMAGE,
                    payload: response.data
                })
                console.log(response);
                success();
            })
            .catch(err => {
                console.log(err);
            })
    }
}
