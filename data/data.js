module.exports=[
    {
        testCase : "Fill the form without providing the first name",
        firstName: "",
        lastName: "sfsdfsd",
        phone: "00201019147836",
        email: "youseff"+ Math.floor(Math.random() * 5000) +"@gmail.com",
        password: "sadfsadasdasdadwqfwqfwfw",
        expected:"Please, fill in the following fields:\nName"
    },
    {
        testCase : "Fill the form without providing the last name",
        firstName: "dsfsdfds",
        lastName: "",
        phone: "00201019147836",
        email: "youseff"+ Math.floor(Math.random() * 5000) +"@gmail.com",
        password: "sadfsadasdasdadwqfw",
        expected:"Please, fill in the following fields:\nName"
    },
    {
        testCase : "Fill the form without providing the phone",
        firstName: "dsfsdfds",
        lastName: "dsfdsfdsfds",
        phone: "",
        email: "youseff"+ Math.floor(Math.random() * 5000) +"@gmail.com",
        password: "sadfsadasdasdadwqfw",
        expected:"Please, fill in the following fields:\nName"
    },
    {
        testCase : "Fill the form without providing the email",
        firstName: "dsfsdfds",
        lastName: "dsfsdfdsfdsfdsf",
        phone: "00201019147836",
        email: "",
        password: "sadfsadasdasdadwqfw",
        expected:"Please, fill in the following fields:\nName"
    },
    {
        testCase : "Fill the form without providing the password",
        firstName: "dsfsdfds",
        lastName: "sdfgsdfdsfdsfsdffsd",
        phone: "00201019147836",
        email: "youseff"+ Math.floor(Math.random() * 5000) +"@gmail.com",
        password: "",
        expected:"Please, fill in the following fields:\nName"
    },
]