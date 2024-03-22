const e = require('express');
const nodemailer = require('nodemailer');
//require('dotenv').config();

//email transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'bking5194@gmail.com', //use dotenv
        pass: 'pjrp chgy hwgd bgrx'
    }
});

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
    res.redirect('https://www.google.com/maps/place/1417+Seaton+Rd,+Durham,+NC+27713/@35.8954226,-78.9136961,17z/data=!3m1!4b1!4m6!3m5!1s0x89acef3ea5f5036b:0x437d4c6c34a6313e!8m2!3d35.8954183!4d-78.9111212!16s%2Fg%2F11b8v5qqch?entry=ttu');
}

exports.register = (req, res) => {
    res.render('register');
}

exports.tutoring = (req, res) => {
    res.render('tutoring');
}

exports.confirmation = (req, res) => {
    res.render('confirmation');
}

exports.confirmationerror = (req, res) => {
    res.render('confirmationerror');
}

//POST requests

//Payment & Registration
//Needs to email user & 4rtand, 
//accept paypal, and redirect with a message
exports.pay = (req, res/*, next*/) => {
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
            enrolled: [camp1, camp2, camp3, camp4],
            bday: values[keys.indexOf('bday-camper-1')],
            grade: values[keys.indexOf('grade-camper-1')],
            about: values[keys.indexOf('about-camper-1')]
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
            enrolled: [camp1, camp2, camp3, camp4],
            bday: values[keys.indexOf('bday-camper-2')],
            grade: values[keys.indexOf('grade-camper-2')],
            about: values[keys.indexOf('about-camper-2')]
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
            enrolled: [camp1, camp2, camp3, camp4],
            bday: values[keys.indexOf('bday-camper-3')],
            grade: values[keys.indexOf('grade-camper-3')],
            about: values[keys.indexOf('about-camper-3')]
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
            enrolled: [camp1, camp2, camp3, camp4],
            bday: values[keys.indexOf('bday-camper-3')],
            grade: values[keys.indexOf('grade-camper-3')],
            about: values[keys.indexOf('about-camper-3')]
        }
    }

    //Has agreed to the policy agreement
    let agreement = values[keys.indexOf('agreement')] == 'on' ? true : false;

    //format data
    //temp?
    /*
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
    */
    //console.log(data);

    //Email Confirmation
    //Archive Email Construction
    //parent table
    let archiveHTML = '<!DOCTYPE html><html> <head> <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"> <style> .true { background-color: #6dff6d } h1, h2, h3, p { font-family: "Roboto"; } h1 { font-weight: 420; margin-top: 20px; } h2 { font-weight: 400; } table { font-family: "Roboto", sans-serif; border-collapse: collapse; width: 100%; border: #000d4e; } td, th { border: 1px solid #000d4e; text-align: left; padding: 8px; } .tables { margin: 4vw; } </style> </head> <body style="margin: 0%; padding: 0%;"> <header style="position: absolute; background-color: #000d4e; height: auto; margin: 0; padding: 0; border-bottom: 0.25vw solid #faad3f; width: 100%;"> <h1 style="color: #fff; text-align: center;">Math Art Connections</h1> <div style="background-color: hsl(230, 40%, 35%);"> <h2 style="color:#fff; text-align: center; margin: 0%; padding: .6vw 0% .6vw 0%;">Registration Information</h2> </div> </header> <div style="position: absolute; min-height: 100vh; top: 25%;"> <div style="padding-bottom: 2.5em;"> <div class="tables"> <div id="parents"> <h3>Parent Information</h3> <table> <tr> <th>First Name</th> <th>Last Name</th> <th>Phone Number</th> <th>Email Address</th> <th>Address</th> <th>Apt. Number</th> <th>City</th> <th>State</th> <th>Zip Code</th> </tr> <tr id="parent1">' +
        '<td>' + parent1.firstName + '</td>' +
        '<td>' + parent1.lastName + '</td>' + 
        '<td>' + parent1.phone1 + '</td>' +
        '<td>' + parent1.email1 + '</td>' +
        '<td>' + parent1.address1 + '</td>' +
        '<td>' + parent1.aptNumber + '</td>' +
        '<td>' + parent1.city + '</td>' +
        '<td>' + parent1.state + '</td>' +
        '<td>' + parent1.zipCode + '</td></tr>';
    if (parent2 != undefined) {
        archiveHTML += '<tr><td>' + 
        parent1.firstName + '</td>' +
        '<td>' + parent2.lastName + '</td>' + 
        '<td>' + parent2.phone2 + '</td>' +
        '<td>' + parent2.email2 + '</td>' +
        '<td>' + parent2.address2 + '</td>' +
        '<td>' + parent2.aptNumber + '</td>' +
        '<td>' + parent2.city + '</td>' +
        '<td>' + parent2.state + '</td>' +
        '<td>' + parent2.zipCode + '</td></tr>';
    }
    //Emergency table
    archiveHTML += '</table></div><div id="emergency"> <h3>Emergency Contact</h3> <table> <tr> <th>First Name</th> <th>Last Name</th> <th>Relationship to Child</th> <th>Cell phone</th> <th>Home phone</th> <th>Work Phone</th> </tr> <tr id="emergency-contact">' +
    '<td>' + emergencyContact.firstName + '</td>' +
    '<td>' + emergencyContact.lastName + '</td>' + 
    '<td>' + emergencyContact.relationship + '</td>' + 
    '<td>' + emergencyContact.cellphone + '</td>' + 
    '<td>' + emergencyContact.homephone + '</td>' + 
    '<td>' + emergencyContact.workphone + '</td></tr></table></div>';
    //Pickup table
    if (pickup1 != undefined || pickup2 != undefined || pickup3 != undefined) {
        archiveHTML += '<div id="pickup"> <h3>Approved Pickup List</h3> <table> <tr> <th>Full Name</th> <th>Relationship to Child</th> </tr>';
    } else {
        archiveHTML += '<div id="pickup"><h3>Only Parents And Emergency Contact Approved For Pickup</h3></div>';
    }
    if (pickup1 != undefined) {
        archiveHTML += '<tr>' +
        '<td>' + pickup1.fullName + '</td>' +
        '<td>' + pickup1.relationship + '</td></tr>';
    }
    if (pickup2 != undefined) {
        archiveHTML += '<tr>' +
        '<td>' + pickup2.fullName + '</td>' +
        '<td>' + pickup2.relationship + '</td></tr>';
    }
    if (pickup3 != undefined) {
        archiveHTML += '<tr>' +
        '<td>' + pickup3.fullName + '</td>' +
        '<td>' + pickup3.relationship + '</td></tr>';
    }
    if (pickup1 != undefined || pickup2 != undefined || pickup3 != undefined) {
        archiveHTML += '</table></div>';
    }
    //Camper Info Table
    archiveHTML += '<div id="campers"><h3>Camper Information</h3> <table> <tr> <th>First Name</th> <th>Last Name</th> <th>Birthday</th> <th>Grade</th> <th>Important Information</th> </tr>';
    if (numCampers >= 1) {
        archiveHTML += '<tr>' +
        '<td>' + camper1.firstName + '</td>' +
        '<td>' + camper1.lastName + '</td>' +
        '<td>' + camper1.bday + '</td>' +
        '<td>' + camper1.grade + '</td>' +
        '<td>' + camper1.about + '</td></tr>';
    }
    if (numCampers >= 2) {
        archiveHTML += '<tr>' +
        '<td>' + camper2.firstName + '</td>' +
        '<td>' + camper2.lastName + '</td>' +
        '<td>' + camper2.bday + '</td>' +
        '<td>' + camper2.grade + '</td>' +
        '<td>' + camper2.about + '</td></tr>';
    }
    if (numCampers >= 3) {
        archiveHTML += '<tr>' +
        '<td>' + camper3.firstName + '</td>' +
        '<td>' + camper3.lastName + '</td>' +
        '<td>' + camper3.bday + '</td>' +
        '<td>' + camper3.grade + '</td>' +
        '<td>' + camper3.about + '</td></tr>';
    }
    if (numCampers >= 4) {
        archiveHTML += '<tr>' +
        '<td>' + camper4.firstName + '</td>' +
        '<td>' + camper4.lastName + '</td>' +
        '<td>' + camper4.bday + '</td>' +
        '<td>' + camper4.grade + '</td>' +
        '<td>' + camper4.about + '</td></tr>';
    }
    archiveHTML += '</table></div>';
    //FINALLY the enrollment and billing info
    archiveHTML += '<div id="enrollment"><h3>Enrollment and Billing</h3><table> <tr> <th>Camper</th> <th>Plus Minus Zero</th> <th>Times Into Fractions</th> <th>Geometry</th> <th>Turbo Multiplication</th> </tr>';
    if (numCampers >= 1) {
        archiveHTML += '<tr>' +
        '<td>' + camper1.firstName + '</td>' +
        '<td class="' + camper1.enrolled[0] + '">' + camper1.enrolled[0] + '</td>' +
        '<td class="' + camper1.enrolled[1] + '">' + camper1.enrolled[1] + '</td>' +
        '<td class="' + camper1.enrolled[2] + '">' + camper1.enrolled[2] + '</td>' +
        '<td class="' + camper1.enrolled[3] + '">' + camper1.enrolled[3] + '</td></tr>';
    }
    if (numCampers >= 2) {
        archiveHTML += '<tr>' +
        '<td>' + camper2.firstName + '</td>' +
        '<td class="' + camper2.enrolled[0] + '">' + camper2.enrolled[0] + '</td>' +
        '<td class="' + camper2.enrolled[1] + '">' + camper2.enrolled[1] + '</td>' +
        '<td class="' + camper2.enrolled[2] + '">' + camper2.enrolled[2] + '</td>' +
        '<td class="' + camper2.enrolled[3] + '">' + camper2.enrolled[3] + '</td></tr>';
    }
    if (numCampers >= 3) {
        archiveHTML += '<tr>' +
        '<td>' + camper3.firstName + '</td>' +
        '<td class="' + camper3.enrolled[0] + '">' + camper3.enrolled[0] + '</td>' +
        '<td class="' + camper3.enrolled[1] + '">' + camper3.enrolled[1] + '</td>' +
        '<td class="' + camper3.enrolled[2] + '">' + camper3.enrolled[2] + '</td>' +
        '<td class="' + camper3.enrolled[3] + '">' + camper3.enrolled[3] + '</td></tr>';
    }
    if (numCampers >= 4) {
        archiveHTML += '<tr>' +
        '<td>' + camper4.firstName + '</td>' +
        '<td class="' + camper4.enrolled[0] + '">' + camper4.enrolled[0] + '</td>' +
        '<td class="' + camper4.enrolled[1] + '">' + camper4.enrolled[1] + '</td>' +
        '<td class="' + camper4.enrolled[2] + '">' + camper4.enrolled[2] + '</td>' +
        '<td class="' + camper4.enrolled[3] + '">' + camper4.enrolled[3] + '</td></tr>';
    }
    //Total bill
    let total = 0;
    for (let n = 0; n < 4; n++) {
        if (camper1 != undefined && camper1.enrolled[n] == true) total += 199;
        if (camper2 != undefined && camper2.enrolled[n] == true) total += 199;
        if (camper3 != undefined && camper3.enrolled[n] == true) total += 199;
        if (camper4 != undefined && camper4.enrolled[n] == true) total += 199;
    }
    archiveHTML += '</table> </div><div><h3>Total Amount Owed</h3><p>$' + total + '</p></div>';
    archiveHTML += ' </div> </div> </div> <footer> </footer> </body></html>';

    //create client html
    let clientHTML = '<!DOCTYPE html><html> <head> <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"> <style> .true { background-color: #6dff6d } h1, h2, h3, p { font-family: "Roboto"; } h1 { font-weight: 420; } h2 { font-weight: 400; } table { font-family: "Roboto", sans-serif; border-collapse: collapse; width: 100%; border: #000d4e; } td, th { border: 1px solid #000d4e; text-align: left; padding: 8px; } .tables { margin: 4vw; } </style> </head> <body style="margin: 0%; padding: 0%;"> <header style="position: absolute; background-color: #000d4e; height: auto; margin: 0; padding: 0; border-bottom: 0.25vw solid #faad3f; width: 100%;"> <h1 style="color: #fff; text-align: center;">Math Art Connections</h1> <div style="background-color: hsl(230, 40%, 35%);"> <h2 style="color:#fff; text-align: center; margin: 0%; padding: .6vw 0% .6vw 0%;">Registration Confirmation</h2> </div> </header> <div style="position: absolute; min-height: 100vh; top: 25%;"> <div style="padding-bottom: 2.5em;">';

    //Insert Client HTML elements here

    clientHTML += '</div></div></body></html>';

    //Send to client and business
    let clientMailOptions = {
        from: {
            name: 'Artand - Math Art Connections',
            address: 'bking5194@gmail.com'
        },
        to: parent1.email1,
        subject: 'Math Art Connections Registration',
        html: clientHTML
    };

    let mailOptions = {
        from: {
            name: 'Artand - Client Archiver',
            address: 'bking5194@gmail.com'
        },
        to: 'bking5194@gmail.com', //replace with angelas email
        subject: 'New Registration!',
        html: archiveHTML
    };

    let confirmation = true;

    const sendToClient = async (transporter, clientMailOptions) => {
        try {
            await transporter.sendMail(clientMailOptions);
        } catch(err) {
            console.log('ERROR WITH CLIENT EMAIL');
            confirmation = false;
            //next(err);
        }
    };

    const sendToArchive = async (transporter, mailOptions) => {
        try {
            await transporter.sendMail(mailOptions);
        } catch (err) {
            console.log('ERROR WITH ARCHIVE EMAIL');
            confirmation = false;
        }
    };

    //uncomment in production
    sendToClient(transporter, clientMailOptions);
    sendToArchive(transporter, mailOptions);

    if (!confirmation || !agreement) {
        res.redirect('/confirmationerror');
    }

    //paypal magic
    //NOT IN THIS VERSION

    //final redirect
    res.redirect('/confirmation');
}