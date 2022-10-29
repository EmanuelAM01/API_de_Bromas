const Joke = require("../models/jokes.model")

module.exports.showJokes = (req, res) =>{
    Joke.find()
    .then(allJokes => res.json({Jokes: allJokes}))
    .catch(err => console.log({message: "Algo salió mal", error: err}))
}

module.exports.showOneJoke = (req, res) =>{
    Joke.findOne({_id: req.params.id})
    .then(Joke => res.json({Joke: Joke}))
    .catch(err => console.log({message: "Algo salió mal", error: err}))
}

module.exports.createJoke = (req, res) =>{
    Joke.create(req.body)
    .then(newJoke => res.json({Joke: newJoke}))
    .catch(err => console.log({message: "Algo salió mal", error: err}))
}

module.exports.updateJoke = (req, res) =>{
    Joke.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
    .then(updatedJoke => res.json({Joke: updatedJoke}))
    .catch(err => console.log({message: "Algo salió mal", error: err}))
}

module.exports.deleteJoke = (req, res) =>{
    Joke.deleteOne({_id: req.params.id})
    .then(result => res.json({result: result}))
    .catch(err => console.log({message: "Algo salió mal", error: err}))
}
