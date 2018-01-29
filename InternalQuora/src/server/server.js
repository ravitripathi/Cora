const express = require('express')
var cors = require('cors')
const slack = require('express-slack')
const axios = require('axios')

const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')

const app = express()

app.set('view engine', 'ejs')

app.use(cors({origin: 'http://localhost:8080'}))



const PORT = 3000

passport.use(
    new GoogleStrategy({
        callbackURL: '/google/redirect',
        clientID: '181794872340-qdk5ljombm3jvgl2tp76lgk8k3ldboo8.apps.googleusercontent.com',
        clientSecret: 'GRFTpW76uToBi2GLt4-v0pH_'
    }, (accessToken, refreshToken, profile) => {
        console.log(profile)
    })
)

app.get('/google', passport.authenticate('google', {
    scope: ['profile']
}))

app.get('/google/redirect', passport.authenticate('google'), (req,res) => {
    res.send('Reached')
    res.redirect('http://localhost:8080')
})

// app.get('/google/', (req, res) => {
//
// })

app.get('/slack/', (req, res) => {
    const code = req.query.code;
    axios({
        method: 'get',
        url: 'https://slack.com/api/oauth.access?client_id=304468210898.305541541543&client_secret=d93eb31dd7fbb9217ceeb713da523b2d&code=' + code,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
        .then(function (response) {

            console.log(response)
            let token = response.data.access_token
            console.log(token)
            axios({
                method: 'get',
                url: 'https://slack.com/api/users.profile.get?token=' + token,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
                .then(function (resp) {
                    //console.log(resp.data.profile.email)
                    res.redirect('http://localhost:8080')
                })
                .catch(function (error) {
                    console.log(error)
                })
        })
        .catch(function (err) {
            console.log(err)
        })
})


app.get('/test/', (req, res) => {
    const code = req.query.code;
    const customers = [
        {id: 1, firstName: code, lastName: 'Doe'},
        {id: 2, firstName: 'Steve', lastName: 'Smith'},
        {id: 3, firstName: 'Marry', lastName: 'Swanson'}
    ]

    res.json(customers);
})



app.listen(PORT, () => console.log('Server started at port: ' + PORT))