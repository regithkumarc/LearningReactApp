
import axios from 'axios'

const getAllApi = "http://localhost:9000/api/employees/getAllEmployees";
export function getAllEmployee(){
     axios.get(getAllApi).then(result => {
        return result
    });
}