class Controller {
    static index(req, res) {
        res.render('index')
    }

    static home(req, res) {
        res.render('home')
    }

    static register(req, res) {
        res.render('register')
    }

    static profile(req, res) {
        res.render('profile')
    }
}

module.exports = Controller