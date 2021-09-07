import axios from 'axios'
const { REACT_APP_KEY } = process.env
const Sol = 2890
const earthDay = '2020-09-22'
const date = new Date()
const currentDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`

type getRoverProps = {
  name?: string
  page?: number
  filter?: string
}

const getRover = ({ name = 'curiosity', page = 1, filter }: getRoverProps) => {
  const URI = `https://api.nasa.gov/mars-photos/api/v1/rovers/${name}/photos?${
    filter === 'sol' ? Sol : ''
  }&earth_date=${
    filter === 'earth_date' ? earthDay : currentDate
  }&total_photos&page=${page}&api_key=${REACT_APP_KEY}`
  console.log(URI)
  return axios
    .get(URI)
    .then((res) => res?.data?.photos)
    .catch((err) => err)
}

export default getRover
