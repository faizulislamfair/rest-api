// Get goals 
// @route GET /api/goals
 
 const getGoals = (req, res) => {
    res.status(200).json({ message: 'Get goals' })
 }


// Create goal 
// @route POST /api/goals
 

 const createGoal = (req, res) => {
    res.status(200).json({ message: 'Create goal' })
 }


// Update goal 
// @route PUT /api/goals/:id
 
 const updateGoal = (req, res) => {
    res.status(200).json({ message: `Update goal ${req.params.id}` })
 }


// Delete goal
// @route DELETE /api/goals/:id
 
 const deleteGoal = (req, res) => {
    res.status(200).json({ message: `Delete goal ${req.params.id}` })
 }



 module.exports = {
    getGoals, 
    createGoal, 
    updateGoal, 
    deleteGoal
 }