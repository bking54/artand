/*
Simple Page Requests
*/

exports.index = (req, res) => {
    res.render('./index');
}

exports.about = (req, res) => {
    res.render('about', {title: 'Artand'})
}

exports.camps = (req, res) => {
    res.render('camps', {title: 'Artand'});
}

exports.faqs = (req, res) => {
    res.render('FAQs', {title: 'Artand'});
}

exports.policy = (req, res) => {
    res.render('policy');
}

exports.directions = (req, res) => {
    res.redirect('http://www.google.com');
}

exports.register = (req, res) => {
    res.render('register');
}

exports.agreement = (req, res) => {
    res.render('policyagreement');
}

exports.checkout = (req, res) => {
    res.render('checkout');
}