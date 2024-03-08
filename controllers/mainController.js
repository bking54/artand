/*
Simple Page Requests
*/

exports.index = (req, res) => {
    res.render('index');
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

exports.tutoring = (req, res) => {
    res.render('tutoring');
}

//POST

//Payment & Registration
//Needs to email user & 4rtand, 
//accept paypal, and redirect with a message
exports.pay = (req, res) => {
    let info = Object.entries(req.body);

    //start here
    if (info[0][1] == '1') {

    } else if (info[0][1] == '2') {

    } else if (info[0][1] == '3') {

    } else if (info[0][1] == '4') {

    }

    console.log(info);
    res.render('camps');
}