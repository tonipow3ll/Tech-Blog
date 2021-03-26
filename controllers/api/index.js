const router = require('express').Router();
const userRoutes = require('./userroutes');
// const withAuth here

// router.use('userroutes', userRoutes)
router.use('/userroutes', userRoutes)

module.exports = router;