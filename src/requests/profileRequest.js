import axios from 'axios'
import { apiUrl } from '../config'
import authenticationStore from '../stores/authenticationStore'

const source = axios.CancelToken.source()

export const ProfileRequest = {
  cancelRequest: () => {
    source.cancel()
  },
  getProfile: (payload) => {
    return axios({
      method: 'post',
      url: `${apiUrl}/getProfile`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authenticationStore.accessToken || ''}`,
        'Token-Core-System': `Bearer ${authenticationStore.coreSysToken || ''}`,
      },
      data: payload,
    })
  },

}
