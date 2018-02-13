const fastify = require('fastify')()
const model = require('./mongoose');
const cors = require('cors')
fastify.use(cors())
// Declare a route
fastify.get('/', function (request, reply) {
  model.find({}).then((data) => {
    reply.send({
      ToDo: data
    })
  })
})

fastify.delete('/remove/:id', function (req, reply) {
  model.findByIdAndRemove(req.params.id).then((data) => {
    model.find({}).then((data) => {
      reply.send({
        ToDo: data
      })
    })
  })

})

fastify.post('/add', function (req, reply) {
  model.insertMany({
    ToDo: req.body.ToDo
  }).then((data) => {
    model.find({}).then((data) => {
      reply.send({
        ToDo: data
      })
    })
  })
})
// Run the server!
fastify.listen(3030, function (err) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  } else {
    console.log("running")
  }
})
