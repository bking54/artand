exports.index = (req, res) => {
    res.render('index', {title: 'Artand'});
}

exports.about = (req, res) => {
    res.render('about', {title: 'Artand'})
}

exports.camps = (req, res) => {
    res.render('camps', {title: 'Artand'});
}

exports.policy = (req, res) => {
    res.render('policy', {title: 'Artand'});
}