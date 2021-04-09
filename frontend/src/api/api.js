import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const insertCountry = payload => api.post(`/country/create`, payload)
export const getAllCountries = () => api.get(`/countries`)
export const updateCountryById = (id, payload) => api.put(`/country/update/${id}`, payload)
export const deleteCountryById = id => api.delete(`/country/delete/${id}`)
export const getCountryById = id => api.get(`/country/${id}`)
export const getCountryByName = name => api.get(`/country/name/${name}`)

const apis = {
    insertCountry,
    getAllCountries,
    updateCountryById,
    deleteCountryById,
    getCountryByName,
    getCountryById,
}

export default apis