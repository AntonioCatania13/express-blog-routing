function errorHandler(err, req, res, next) {
    res.status(500);
    res.json({
        statu: 500,
        error: err.message,
    })
}

module.exports = errorHandler