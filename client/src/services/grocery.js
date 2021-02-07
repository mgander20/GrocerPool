import axios from 'axios';
const baseUrl = '/api/grocery/getGroceries';

const getAll = async () => {
  try {
    const response = axios.get(baseUrl);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const submitGroceryList = async (payload) => {
  try {
    if (process.env.NODE_ENV === 'production') {
      const url = '/api/groceryList';
    } else {
      const url = 'http://localhost:5000/api/groceryList';
    }
    const response = await axios.post(url, payload);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export { getAll, submitGroceryList };
