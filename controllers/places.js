const express = require('express')
const router = express.Router();
const places = require("../models/places.js");
const db = require('../models')

// router.get('/', (req, res) => {
//   res.send('GET /places stub')
// })

router.get('/', (req, res) => {
    db.Place.find()
    .then((places) => {
      res.render('places/index', { places })
    })
    .catch(err => {
      console.log(err) 
      res.render('error404')
    })
})


// router.post('/', (req, res) => {
//   res.send('POST /places stub')
// })

router.post('/', (req, res) => {
  db.Place.create(req.body)
  .then(() => {
      res.redirect('/places')
  })
  .catch(err => {
    if (err && err.name == 'ValidationError') {
      let message = 'Validation Error: '
      for (var field in err.errors) {
        message += `${field} was ${err.errors[field].value}. `
        message += `${err.errors[field].message}`
      }
      console.log('Validation error message', message)
      res.render('places/new', { message })
    }
    else {
      res.render('error404')
    }
  })
})


router.get('/new', (req, res) => {
  res.render('places/new')
})

// router.get('/:id', (req, res) => {
//   res.send('GET /places/:id stub')
// })

router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .populate('comments').then(place => {
      res.render('places/show', { place })
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

router.post('/:id/comment', (req, res) => {
  req.body.rant = req.body.rant ? true : false
  db.Place.findById(req.params.id)
  .then(place => {
      db.Comment.create(req.body)
      .then(comment => {
          place.comments.push(comment.id)
          place.save().then(()=>{
            res.redirect(`/places/${req.params.id}`)
          })
      })
      .catch(err => {
          res.render('error404')
      })
  })
  .catch(err => {
      res.render('error404')
  })
})
router.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub')
})

router.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub')
})

router.get('/:id/edit', (req, res) => {
  res.send('GET edit form stub')
})

router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router;


// //INDEX/READ Get route
// router.get("/", (req, res) => {
//   res.render("places/index", {places});
// });

// //NEW/READ Get route
// router.get("/new", (req, res) => {
//   res.render("places/new");
// });

// //EDIT Get route
// router.get("/:id/edit", (req, res) => {
//   let id = Number(req.params.id);
//   if (isNaN(id)) {
//     res.render("error404");
//   } else if (!places[id]) {
//     res.render("error404");
//   } else {
//     res.render("places/edit", { place: places[id], id });
//   }
// });

// //SHOW/READ Get route
// router.get("/:id", (req, res) => {
//   let id = Number(req.params.id);
//   if (isNaN(id)) {
//     res.render("error404");
//   } else if (!places[id]) {
//     res.render("error404");
//   } else {
//     res.render("places/show", { place: places[id], id });
//   }
// });

// //UPDATE Put route
// router.put("/:id", (req, res) => {
//   let id = Number(req.params.id);
//   if (isNaN(id)) {
//     res.render("error404");
//   } else if (!places[id]) {
//     res.render("error404");
//   } else {
//     if (!req.body.pic) {
//       // Default image if one is not provided
//       req.body.pic =
//         "https://www.lostdogcafe.com/wp-content/uploads/2017/10/ldcafe-trademarkblue.png";
//     }
//     if (!req.body.city) {
//       req.body.city = "Anytown";
//     }
//     if (!req.body.state) {
//       req.body.state = "USA";
//     }

//     // Save the new data into places[id]
//     places[id] = req.body;
//     res.redirect(`/places/${id}`);
//   }
// });

// //DESTROY Delete route
// router.delete("/:id", (req, res) => {
//   let id = Number(req.params.id);
//   if (isNaN(id)) {
//     res.render("error404");
//   } else if (!places[id]) {
//     res.render("error404");
//   } else {
//     places.splice(id, 1);
//     res.redirect("/places");
//   }
// });

// //CREATE Post route
// router.post("/", (req, res) => {
//   //console.log(req.body)
//   if (!req.body.pic) {
//     // Default image if one is not provided
//     req.body.pic = "http://placekitten.com/400/400";
//   }
//   if (!req.body.city) {
//     req.body.city = "Anytown";
//   }
//   if (!req.body.state) {
//     req.body.state = "USA";
//   }
//   places.push(req.body);
//   res.redirect("/places");
// });