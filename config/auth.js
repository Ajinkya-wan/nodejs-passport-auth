module.exports ={
    ensuteAuthenticated :  (req, res , next) =>{
         console.log(req.isAuthenticated() , "ssssssssssssssssskjbfgksb")
        if(req.isAuthenticated()){
            return next();
        }
        req.flash('error_msg' , "please log in");
        console.log('error_msg' , "please log in");
        res.redirect('/users/login');
    }
}
