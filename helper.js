import axios from 'axios'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

export function fetchUser() {
  const state = useSelector((state) => state.nav)
  axios({
    method: 'GET',
    url: 'https://mass-zone-backend.herokuapp.com/api/user',
    headers: {
      Authorization: `Bearer ${state.loginToken}`
    }
  })
    .then(function (response) {
      console.log('User feteched', response.data.data)
      // dispatch(setProducts(response.data.data))
    })
    .catch(function (error) {
      console.log('not fetched')
    })
  // setProducts(json.data);
  //setCount(count + 1);
}
