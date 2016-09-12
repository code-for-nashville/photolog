const agent = require("superagent")

const photos = "https://ga-bar-photobomb.herokuapp.com/"

const express = require("express")

const app = express()

app.use(express.static(__dirname + "/public"))

app.get("/photos", (req, res) => {
    agent.get(photos)
        //.set("accept", "application/json")
        .end((err, resp) => {
            if (err) res.json({ error: err })

            else {
                console.log(resp.text)
                return resp.json(resp.text)
            }
        })
})

app.listen(process.env.PORT || 3000, () => {
    console.info(`Listening on ${process.env.PORT || 3000}`)
})
