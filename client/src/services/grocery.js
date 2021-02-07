import axios from 'axios'
const baseUrl = '/api/grocery/getGroceries'

const getAll = async () => {

  try {
    const response = axios.get(baseUrl);
    return response
  } catch (error) {
    console.log(error)
  }
}

export { getAll }