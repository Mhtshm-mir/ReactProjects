
// Function to handle user registration
exports.signup = (req, res, next) => {
    console.log('signed in')
};

// Function to handle user login

exports.login = (req, res, next) => {
    console.log('logged in')
};

exports.nothing =(eq,res,next) => {
    res.send("nothing")
}