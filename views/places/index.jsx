const React = require('react')
const Def = require('../default')

function index (data) {
    //console.log(data.places.name)
    let placesFormatted = data.places.map((place) => {
        return (
          <div className="col-sm-6 text-center">
            <a href={`/places/${place.id}`}>
            <h2>
              {place.name}
            </h2>
            </a>
            <p className="text-center">
              {place.cuisines}
            </p>
            <img src={place.pic} alt={place.name} />
            <p className="text-center">
              Located in {place.city}, {place.state}
            </p>
          </div>
        )
      })      
    return (
      <Def>
          <main>
              <h1>PLACES INDEX PAGE</h1>
              <div className="row">
              {placesFormatted}
              </div>
          </main>
      </Def>
  )
  }

  module.exports = index
