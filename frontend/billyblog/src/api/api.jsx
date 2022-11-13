import axios from 'axios';

async function api() {
    try {
        const response = await fetch('http://localhost:8080/v2/api-docs')
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

export default api;