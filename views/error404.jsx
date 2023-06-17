const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <center>
              <p>Oops, sorry, we can't find this page!</p>
                <img src='https://www.fortbendcountytx.gov/sites/default/files/media/2021-11/636776493870870000.jpg' alt='lost'/>
              </center>
                
          </main>
      </Def>
    )
  }  

module.exports = error404
