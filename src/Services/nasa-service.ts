import axios from 'axios'
const { REACT_APP_KEY } = process.env
const currentDate = '2020-09-22'
const currentSol = 2890

type getRoverProps = {
  name?: string
  page?: string
}

const getRover = ({ name = 'curiosity', page = '0' }: getRoverProps) => {
  const URI = `https://api.nasa.gov/mars-photos/api/v1/rovers/${name}/photos?earth_date=${currentDate}&sol=${currentSol}&page=${page}&api_key=${REACT_APP_KEY}`
  return axios
    .get(URI)
    .then((res) => res)
    .catch((err) => err)
}

export default getRover
