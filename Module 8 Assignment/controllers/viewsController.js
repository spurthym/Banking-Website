const { isLoggedIn } = require("./authController");


exports.getLandingPAge = async (req, res) => {
    res.status(200).render('overview', {
      title: `Over View`
    
    });
  };

  exports.displayLoginBase = async (req, res) => {
    console.log("displayloginbase",JSON.stringify(req.user))
    if(req.user){
      res.render('loginbase',{userauthorised:true})
      
    }
    else{
    res.status(200).render('logout', {
      title: `Over View of Loans`,
      data:"Please Login"
    
    });
  }
  };
  exports.requestloan = async (req, res) => {
    res.status(200).render('createloan', {
      title: `Request For New Loan`,
      userauthorised:true
    
    });
  };

  exports.getAllLoans = async (req, res) => {
    if(!isLoggedIn(req,res)){
      res.render('login')
      
    }
    else{
    res.status(200).render('allLoans', {
      title: `Over View of Loans`
    
    });
  }
  };
  
  exports.getCourse = async (req, res) => {
    res.status(200).render('Course', {
      title: `Get Course`
    });
  };
  exports.createNewCourse = async (req, res) => {
    res.status(200).render('newCourse', {
      title: `Create New Course`
    });
  };
  
  exports.getSignInForm = (req, res) => {
    res.status(200).render('signup', {
      title: 'Sign in New User'
    });
  };
  exports.getLoginForm = (req, res) => {
    res.status(200).render('login', {
      title: 'Log into your account'
    });
  };
  
  