import axios from 'axios';

export function apitest() {
    axios.get('http://localhost:3000/test/data')
      .then(response => {
        return response.data;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
}