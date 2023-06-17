const React = require('react')
const Def = require('../default')
const new_form = require('./new')

function comment_form(){
    return(
        <Def>
            <main>
                <h1>Comment on Place</h1>
                <form class="row g-3" method="POST" action="/places/:id/comment">
                    <div className="col-12">
                        <label htmlFor="content" className="form-label">Your Comment</label>
                        <input 
                            className="form-control" 
                            type="text" 
                            id="content" 
                            name="content" 
                        />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="author" className="form-label">Your Name</label>
                        <input 
                            className="form-control" 
                            id="author" 
                            name="author" 
                        />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="stars" className="form-label">Stars</label>
                        <input 
                            className="form-range"
                            type="range"
                            id="stars"
                            name="stars"   
                            min="1"
                            max="5"
                            step="0.5"
                        />
                    </div>
                    <div className="col-md-2">
                        <div className="form-check">
                            <label class="form-check-label" htmlFor="rant" id="rant-checkbox">Rant?</label>
                            <br/>
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="rant"
                                name="rant"
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <input className="btn btn-primary" type="submit" value="Add Comment" />
                    </div>
                </form>
            </main>
        </Def>
    )
}

module.exports = comment_form