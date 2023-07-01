const connection = require('../model/dbconnect')

const postMovie = async (req, res) => {

    let data = {
        id: req.body.id,
        movieName: req.body.movieName,
        rating: req.body.rating,
        release_date: req.body.release_date,
    }
    console.log(data)

    let sql = 'INSERT into moviesInfo SET ?'
    await connection.query(sql, data, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send({
                status: 200,
                message: "Data Added"
            })
        }
    })
}

const getMovies = async (req, res) => {

    let sql = 'SELECT * FROM moviesInfo'

    await connection.query(sql, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
}

module.exports = {
    getMovies, postMovie
}
