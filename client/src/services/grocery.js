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

const submitGroceryList = async (payload) => {

  try {
    const response = await axios.post("http://localhost:5000/api/groceryList", payload);
    console.log(response)
    return response
  } catch (error) {
    console.log(error)
  }
}

export { getAll , submitGroceryList}