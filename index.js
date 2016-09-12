const photos = "https://ga-bar-photobomb.herokuapp.com/"

const express = require("express")

const app = express()

app.use(express.static(__dirname + "/public"))

app.get("/photos", (req, res) => {
    return res.json([
            { url: "woo", phoneNumber: "yeah" }
    ])
})

app.listen(process.env.PORT || 3000, () => {
    console.info(`Listening on ${process.env.PORT || 3000}`)
})
