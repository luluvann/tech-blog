const router = require("express").Router();

router.get('/', (req,res)=>{
    res.render('homepage')
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

router.get('/dashboard', (req, res) => {
  res.render('dashboard');
});

router.get('/dashboard/new', (req, res) => {
  res.render('newpost');
});


module.exports = router;