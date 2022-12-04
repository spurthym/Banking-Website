const loan = require('../schemas/loan');
const APIFeatures = require('../dataBaseManager/DBContext');

exports.getAllloans =   async (req, res) => {
  
  try {
    
    // EXECUTE QUERY
    const features = new APIFeatures(loan.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const loans = await features.query;
    
    res.status(200).render('allLoans', {// this well render allLoans.pug
      loans
    
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.getloan = async (req, res) => {
  try {
    const loan1 = await loan.find({"userID":req.user._id});
    // loan.findOne({ _id: req.params.id })
    console.log(loan1)
    res.status(200).render("displayLoans",{loan1,userauthorised:req});
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.createLoan= async  (req, res) => {
  console.log("request",JSON.stringify(req.body))
  try {
   
    // const newloan = new loan({})
    // newloan.save()
    
    let interest=0
    if (req.body.loanType=="Home"){
      interest=5;
    }
    else if(req.body.loanType=="Car"){
      interest=8;
    }
    else if(req.body.loanType=="Boat"){
      interest=15;
    }
    else{
      interest=2;
    }
    console.log("in try request",JSON.stringify(req.body))
    
    const newloan = await loan.create({
      userID:req.user._id,
      loanType:req.body.loanType,
      amount:req.body.amount,
      interestRate:interest,
      loanTerm:req.body.loanTerm,
      startDate:req.body.startDate,
      description:req.body.description
    });
    
    res.status(200).render("loginbase",{userauthorised:req});

  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};

exports.updateLoan = async (req, res) => {
  try {
    const loan2 = await loan.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      status: 'success',
      data: {
        loan2
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.deleteLoan = async (req, res) => {
  try {
    await loan.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'success',
      data: null
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};