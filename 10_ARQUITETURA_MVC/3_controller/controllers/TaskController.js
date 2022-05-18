const Task = require('..models/Task')

module.exports = class TaskControler{
    static createTask(req, res){
        res.render('tasks/create')
    }
}