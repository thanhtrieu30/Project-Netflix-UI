import React from 'react'
import Main from '../Components/Main'
import Row from '../Components/Row'
import requests from '../Requests'

const Home = () => {
  return (
    <>
        <Main />
        <Row rowId='1' title='Up Coming' fetchURL={requests.requestUpComing} />
        <Row rowId='2' title='Trending' fetchURL={requests.requestTrending} />
        <Row rowId='3' title='Top Rated' fetchURL={requests.requestTopRated} />
        <Row rowId='4' title='Popular' fetchURL={requests.requestPopular} />
        <Row rowId='5' title='Horror' fetchURL={requests.requestHorror} />

    </>
  )
}

export default Home