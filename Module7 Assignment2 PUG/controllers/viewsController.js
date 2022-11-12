

exports.getLandingPAge = async (req, res) => {
    res.status(200).render('overview', {
      title: `Over View`
    
    });
  };

  exports.getAllLoans = async (req, res) => {
    res.status(200).render('allLoans', {
      title: `Over View of Loans`
    
    });
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
    res.status(200).render('signIn', {
      title: 'Sign in New User'
    });
  };
  exports.getLoginForm = (req, res) => {
    res.status(200).render('login', {
      title: 'Log into your account'
    });
  };
  
  