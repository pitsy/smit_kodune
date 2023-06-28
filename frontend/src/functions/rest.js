import axios from 'axios';

// REST endpoints implementation

export const fetchData = async () => {
    try {
        const response = await axios.get(process.env.REACT_APP_API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching data');
    }
}

export const postData = async (newContactData) => {
    let newData = {
      name: newContactData[0],
      codeName: newContactData[1],
      phoneNumber: newContactData[2]
    }

    try {
      await axios.post(process.env.REACT_APP_API_URL, newData);
      return newData;
    } catch (error) {
      console.error('Error creating data');
      return error.response.data.message;
    }
};

export const deleteData = async (id) => {
    try {
      const response = await axios.delete(process.env.REACT_APP_API_URL + `/${id}`);
      if (response.status === 200) {
        console.log('Data deleted successfully');
      } else {
        console.log('Data deletion failed');
      }
    } catch (error) {
      console.error('Error deleting data');
      return error.response.data.message;
    }
};

export const putData = async (id, newFormattedData) => {
  try {
    await axios.put(process.env.REACT_APP_API_URL + `/${id}?${newFormattedData}`);
  } catch (error) {
    console.error('Error updating data');
    return error.response.data.message;
  }
};