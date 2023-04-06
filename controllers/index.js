const { User, Post, DetailUser, Tag } = require("../models")
const { Op } = require('sequelize')
const bcrypt = require('bcryptjs')
const { formatedPublish } = require('../helpers/formatPublish')


class Controller {
    static index(req, res) {
        const { error } = req.query
        res.render('index', { error })
    }

    static postLogin(req, res) {
        const { username, password } = req.body
        User.findOne({ where: { username } })
            .then(user => {
                if (user) {
                    const isValid = bcrypt.compareSync(password, user.password)
                    if (isValid) {
                        req.session.username = user.username
                        return res.redirect('/home')
                    } else {
                        const error = "invalid username or password"
                        return res.redirect(`/?error=${error}`)
                    }
                } else {
                    const error = "invalid username or password"
                    return res.redirect(`/?error=${error}`)
                }
            })
            .catch(err => {
                res.send(err)
            })
    }

    static logout(req, res) {
        req.session.destroy((err) => {
            if (err) res.send(err)
            else {
                res.redirect('/')
            }
        })
    }

    static home(req, res) {
        Post.findAll({
            order: [
                ["createdAt", "desc"]
            ]
        })
            .then((data) => {
                // res.send(data)
                res.render("home", { data, formatedPublish })
            })

            .catch(err => {
                res.send(err)
            })
    }

    static register(req, res) {
        res.render('register')
    }

    static createUser(req, res) {
        const newData = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        }
        User.create(newData)
            .then(() => {
                res.redirect("/")
            })
            .catch((err) => {
                res.send(err)
            })
    }

    static profile(req, res) {
        User.findOne({
            where: {
                username: req.session.username
            }
        })
            .then((data) => {
                // res.send(data)
                res.render("profile", { data })
            })

            .catch(err => {
                res.send(err)
            })
    }
}

module.exports = Controller