import axios from 'axios'
const { REACT_APP_KEY } = process.env
const date = new Date()
const Sol = 2890
const earthDay = '2020-09-22'
const currentDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`

type getRoverProps = {
  name?: string
  page?: number
  filter?: string
}

const getRover = ({ name = 'curiosity', page = 1, filter }: getRoverProps) => {
  const optParamsEarth = `&earth_date=${
    filter === 'earth_date' ? earthDay : currentDate
  }`
  const URI = `https://api.nasa.gov/mars-photos/api/v1/rovers/${name}/photos?${optParamsEarth}&page=${page}&api_key=${REACT_APP_KEY}`
  const URIbySol = `https://api.nasa.gov/mars-photos/api/v1/rovers/${name}/photos?&sol=${Sol}&page=${page}&api_key=${REACT_APP_KEY}`
  const path = filter === 'sol' ? URIbySol : URI
  return axios
    .get(path)
    .then((res) => res?.data?.photos)
    .catch((err) => err)
}

export default getRover
