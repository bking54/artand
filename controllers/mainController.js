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

//POST requests

//Payment & Registration
//Needs to email user & 4rtand, 
//accept paypal, and redirect with a message
exports.pay = (req, res) => {
    let keys = Object.keys(req.body);
    let values = Object.values(req.body);

    //start here

    //Sort data
    //Has second guardian?
    let secondGuardian = values[keys.indexOf('has-parent-2')] == 'true' ? true : false;
    
    //Get Parent 1
    let parent1 = {
        firstName: values[keys.indexOf('fname-1')],
        lastName: values[keys.indexOf('lname-1')],
        phone1: values[keys.indexOf('phone-1')],
        email1:  values[keys.indexOf('email-1')],
        address1:  values[keys.indexOf('address-1')],
        aptNumber:  values[keys.indexOf('aptnum-1')],
        city: values[keys.indexOf('city-1')],
        state:  values[keys.indexOf('state-1')],
        zipCode:  values[keys.indexOf('zip-1')]
    }

    //If Two Parents Selected, Get Parent 2
    let parent2 = undefined;
    if (secondGuardian) {
        parent2 = {
            firstName: values[keys.indexOf('fname-2')],
            lastName: values[keys.indexOf('lname-2')],
            phone2: values[keys.indexOf('phone-2')],
            email2:  values[keys.indexOf('email-2')],
            address2:  values[keys.indexOf('address-2')],
            aptNumber:  values[keys.indexOf('aptnum-2')],
            city: values[keys.indexOf('city-2')],
            state:  values[keys.indexOf('state-2')],
            zipCode:  values[keys.indexOf('zip-2')]
        }
    }

    //Emergency Contact
    let emergencyContact = {
        firstName: values[keys.indexOf('fname-ec')],
        lastName: values[keys.indexOf('lname-ec')],
        relationship: values[keys.indexOf('relation-ec')],
        cellphone: values[keys.indexOf('cellphone-ec')],
        homephone: values[keys.indexOf('homephone-ec')],
        workphone:  values[keys.indexOf('workphone-ec')]
    }

    //Pickup person 1
    let temp1 = {
        fullName: values[keys.indexOf('name-pickup-1')],
        relationship: values[keys.indexOf('relation-pickup-1')]
    }
    let pickup1 = values[keys.indexOf('has-pickup-1')] == 'true' ? temp1 : undefined;

    //Pickup person 2
    let temp2 = {
        fullName: values[keys.indexOf('name-pickup-2')],
        relationship: values[keys.indexOf('relation-pickup-2')]
    }
    let pickup2 = values[keys.indexOf('has-pickup-2')] == 'true' ? temp2 : undefined;

    //Pickup person 3
    let temp3 = {
        fullName: values[keys.indexOf('name-pickup-3')],
        relationship: values[keys.indexOf('relation-pickup-3')]
    }
    let pickup3 = values[keys.indexOf('has-pickup-3')] == 'true' ? temp3 : undefined;

    //Number of children to be registered
    let numCampers = parseInt(values[keys.indexOf('num-children')]);

    //Fill in camper data
    let camper1 = undefined;
    let camper2 = undefined;
    let camper3 = undefined;
    let camper4 = undefined;
    //camper 1
    if (numCampers >= 1) {
        let camp1 =  values[keys.indexOf('pmz-1')] == 'true' ? true : false;
        let camp2 =  values[keys.indexOf('tif-1')] == 'true' ? true : false;
        let camp3 =  values[keys.indexOf('geo-1')] == 'true' ? true : false;
        let camp4 =  values[keys.indexOf('tum-1')] == 'true' ? true : false;
        camper1 = {
            firstName: values[keys.indexOf('fname-camper-1')],
            lastName:  values[keys.indexOf('lname-camper-1')],
            enrolled: [camp1, camp2, camp3, camp4]
        }
    }
    //camper 2
    if (numCampers >= 2) {
        let camp1 =  values[keys.indexOf('pmz-2')] == 'true' ? true : false;
        let camp2 =  values[keys.indexOf('tif-2')] == 'true' ? true : false;
        let camp3 =  values[keys.indexOf('geo-2')] == 'true' ? true : false;
        let camp4 =  values[keys.indexOf('tum-2')] == 'true' ? true : false;
        camper2 = {
            firstName: values[keys.indexOf('fname-camper-2')],
            lastName:  values[keys.indexOf('lname-camper-2')],
            enrolled: [camp1, camp2, camp3, camp4]
        }
    }
    //camper 3
    if (numCampers >= 3) {
        let camp1 =  values[keys.indexOf('pmz-3')] == 'true' ? true : false;
        let camp2 =  values[keys.indexOf('tif-3')] == 'true' ? true : false;
        let camp3 =  values[keys.indexOf('geo-3')] == 'true' ? true : false;
        let camp4 =  values[keys.indexOf('tum-3')] == 'true' ? true : false;
        camper3 = {
            firstName: values[keys.indexOf('fname-camper-3')],
            lastName:  values[keys.indexOf('lname-camper-3')],
            enrolled: [camp1, camp2, camp3, camp4]
        }
    }
    //camper 4
    if (numCampers >= 4) {
        let camp1 =  values[keys.indexOf('pmz-4')] == 'true' ? true : false;
        let camp2 =  values[keys.indexOf('tif-4')] == 'true' ? true : false;
        let camp3 =  values[keys.indexOf('geo-4')] == 'true' ? true : false;
        let camp4 =  values[keys.indexOf('tum-4')] == 'true' ? true : false;
        camper4 = {
            firstName: values[keys.indexOf('fname-camper-4')],
            lastName:  values[keys.indexOf('lname-camper-4')],
            enrolled: [camp1, camp2, camp3, camp4]
        }
    }

    //Has agreed to the policy agreement
    let agreement = values[keys.indexOf('agreement')] == 'on' ? true : false;

    //format data
    //temp?
    let data = {
        parent1: parent1,
        parent2: parent2,
        emergencyContact: emergencyContact,
        pickup1: pickup1,
        pickup2: pickup2,
        pickup3: pickup3,
        numCampers: numCampers,
        camper1: camper1,
        camper2: camper2,
        camper3: camper3,
        camper4: camper4,
        agreement: agreement
    }

    console.log(data);

    //Email Confirmation

    //Send data to artand

    //paypal magic

    //final redirect
    res.render('camps');
}