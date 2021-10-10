const express = require("express");
const app = express();
app.use(express.json());

const axios = require("axios");

const apiPath = "https://api.deezer.com";

function concatQueryParams(query) {
    let properties = "";

    Object.keys(query).forEach((key) => {
        if (properties) {
            properties += `&${key}=${query[key]}`;
        } else {
            properties = `?${key}=${query[key]}`;
        }
    });

    return properties;
}

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

app.get("/chart/", (req, res) => {
    const id = req.params.id;

    const querysParams = req.query;

    const querys = concatQueryParams(querysParams);

    axios.get(`${apiPath}/chart/${id}${querys}`).then((response) => {
        res.statusCode = 200;

        return res.json(response.data);
    });
});

app.listen(3001);
