const router = require('express').Router()
const md = require('./accounts-middleware')

router.get('/', (req, res, next) => {
  // DO YOUR MAGIC
  try {
  //  res.json([{},{}]) good way to test to see if endpoint is returning data. also try to throw error: throw new Error('something went wrong!')
    res.json('get accounts')
  } catch (err) {
    next(err)
  }
})

router.get('/:id', md.checkAccountId, (req, res, next) => {
  // DO YOUR MAGIC
  try {
    res.json('get accounts by id')
  } catch (err) {
    next(err)
  }
})

router.post('/', md.checkAccountPayload, md.checkAccountNameUnique, (req, res, next) => {
  // DO YOUR MAGIC
  try {
    res.json('post accounts')
  } catch (err) {
    next(err)
  }
})

router.put('/:id', md.checkAccountId, md.checkAccountPayload, md.checkAccountNameUnique, (req, res, next) => {
  // DO YOUR MAGIC
  try {
    res.json('update accounts')
  } catch (err) {
    next(err)
  }
});

router.delete('/:id', md.checkAccountId, (req, res, next) => {
  // DO YOUR MAGIC
  try {
    res.json('delete account')
  } catch (err) {
    next(err)
  }
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
  res.status(err.status || 500).json({
    message: err.message,
  })
})

module.exports = router;
