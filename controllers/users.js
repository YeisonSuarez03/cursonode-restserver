const {response} = require('express');
const {request} = require('express');

const usuariosGet = (req = request, res = response) => {
    const {apikey, nombre} = req.query

    res.json({
        msg: "get API - controller",
        apikey, nombre
    })
}

const usuariosPost = (req, res = response) => {
    const { body:{nombre, edad} } = req;

    res.json({
        msg: "Post API - controller",
        nombre, edad
    })
}

const usuariosPut = (req, res = response) => {

    const {id} = req.params;

    res.json({
        msg: "Put API - controller",
        id
    })
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: "Patch API - controller"
    })
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: "Delete API - controller"
    })
}


module.exports = {usuariosGet, usuariosPost, usuariosPut, usuariosPatch, usuariosDelete}