module.exports = (req,res,next) => {
    res.header('Access-Control-Allowed-Origin', '*')
    res.header('Access-Control-Allowed-Methods', 'GET,POST,OPTIONS,PUT,PATCH,DELETE')
    res.header('Access-Control-Allowed-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
}