const BillingCycle = require('./billingCycle')
const errorHandler = require('../common/errorHandle')


BillingCycle.methods(['get','post','put','delete'])
BillingCycle.updateOptions({new: true, runValidators: true})
BillingCycle.after('post', errorHandler).after('put',errorHandler)

BillingCycle.route('summary',(req,res,next)=> {
    BillingCycle.aggregate({
        $project: {credit: {$sum: "$credits.value"}, debt: {$sum: "$debts.value"}}

    },{$group: {_id: null, credit: {$sum: "$credit"}, debt: {$sum: "$debt"}}
    },{
        $project: {_id: 0, credit: 1, dept: 1}
    },(error, result) => {
        if(error){
            res.status(500).json({errors: [error]})
        }else{
            res.json(result[0] || {credit: 0, debt: 0})
        }
    })
})

BillingCycle.route('get', (req, res, next) => {

    BillingCycle.find({}, (err, docs) => {

        if(!err) {

            res.json(docs)

        } else {

            res.status(500).json({errors: [error]})

        }

    })

})

module.exports = BillingCycle