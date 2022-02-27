import React from 'react'
import { useParams } from 'react-router'
import data from '../../services-data.json'

function ServicesDetails(props) {
  const params = useParams()
  const { id } = params // Location index
  const { images, title, alt, long_desc } = data[id]

  return (
    <div>
      <div>
        <img src={`${process.env.PUBLIC_URL}images/${images[0]}`} alt={alt} />
      </div>

      <div>
        <h1>{ title }</h1>
        <p>{ long_desc }</p>
      </div>

    </div>
  )
}

export default ServicesDetails