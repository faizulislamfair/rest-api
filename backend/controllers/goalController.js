const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalModel')

// Get goals 
// @route GET /api/goals
 
 const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goals.find()

    res.status(200).json(goals)
 })


// Create goal 
// @route POST /api/goals
 

 const createGoal = asyncHandler(async (req, res) => {
    if(!req.body.text) {
       res.status(400)
       throw new Error('Add a text field')
    }

    const goal = await Goal.create({
      text: req.body.text
    })

    res.status(200).json(goal)
 })


// Update goal 
// @route PUT /api/goals/:id
 
 const updateGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)

    if(!goal) {
      res.status(400)
      throw new Error('Goal not found')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })

    res.status(200).json(updateGoal)
 })


// Delete goal
// @route DELETE /api/goals/:id
 
 const deleteGoal = asyncHandler(async (req, res) => {
   const goal = await Goal.findById(req.params.id)

    if(!goal) {
      res.status(400)
      throw new Error('Goal not found')
    }

    await goal.remove()

    res.status(200).json({ id: req.params.id })
 })



 module.exports = {
    getGoals, 
    createGoal, 
    updateGoal, 
    deleteGoal
 }