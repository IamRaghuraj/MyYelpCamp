const express = require('express')
const catchAsync = require('../utils/catchAsync')
const Campground = require('../models/campground')
const router = express.Router()
const campgrounds = require('../controllers/campgrounds')
const { isLoggedIn, isAuthor, validateCampground } = require('../middleware')


router.get('/', catchAsync (campgrounds.index))

router.get('/new', isLoggedIn, catchAsync (campgrounds.renderNewForm))

router.post('/', isLoggedIn, validateCampground, catchAsync (campgrounds.createCampground))

router.get('/:id', catchAsync (campgrounds.showCampground))

router.get('/:id/edit', isLoggedIn, isAuthor, catchAsync (campgrounds.renderEditForm))

router.put('/:id', isLoggedIn, isAuthor, validateCampground, catchAsync (campgrounds.updateCampground))

router.delete('/:id', isLoggedIn, isAuthor, catchAsync (campgrounds.deleteCampground))

module.exports = router