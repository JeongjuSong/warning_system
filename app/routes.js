// app/routes.js
module.exports = function (app, passport) {
	var area = passport.area;

	// =====================================
	// HOME PAGE (with login links) ========
	// =====================================
	app.get('/', function (req, res) { // load the index.ejs file
		res.render('login.ejs', {
			message: req.flash('loginMessage')
		});
	});

	// =====================================
	// LOGIN ===============================
	// =====================================
	// show the login form
	app.get('/login', function (req, res) {

		// render the page and pass in any flash data if it exists
		res.render('login.ejs', {
			message: req.flash('loginMessage')
		});
	});

	// process the login form
	app.post('/login', passport.authenticate('local-login', {

			successRedirect: '/index', // redirect to the secure profile section
			failureRedirect: '/login', // redirect back to the signup page if there is an error
			failureFlash: true // allow flash messages
		}),
		function (req, res, area) {
			console.log("hello");

			if (req.body.remember) {
				req.session.cookie.maxAge = 1000 * 60 * 3;
			} else {
				req.session.cookie.expires = false;
			}
			res.redirect('/');
		});

	// =====================================
	// SIGNUP ==============================
	// =====================================
	// show the signup form
	app.get('/register', function (req, res) {
		// render the page and pass in any flash data if it exists
		res.render('register.ejs', {
			message: req.flash('signupMessage')
		});
	});

	// process the signup form
	app.post('/register', passport.authenticate('local-signup', {
		successRedirect: '/login', // redirect to the secure profile section
		failureRedirect: '/register', // redirect back to the signup page if there is an error
		failureFlash: true // allow flash messages
	}));

	// =====================================
	// PROFILE SECTION =========================
	// =====================================
	// we will want this protected so you have to be logged in to visit
	// we will use route middleware to verify this (the isLoggedIn function)
	app.get('/index', isLoggedIn, function (req, res) {
		res.render('index.ejs', {
			user: req.user,
			tts: req.tts,
			message: req.message
			// get the user out of session and pass to template
		});
	});

	// 추가
	
	app.get('/result', isLoggedIn, function (req, res) {
		res.render('result.ejs', {
			user: req.user
		});
	});

	app.get('/edit_tts', isLoggedIn, function (req, res) {
		res.render('edit_tts.ejs', {
			user: req.user
		});
	});

	app.get('/history', isLoggedIn, function (req, res) {
		res.render('history.ejs', {
			user: req.user
		});
	});

	app.get('/add_group', isLoggedIn, function (req, res) {
		res.render('add_group.ejs', {
			user: req.user
		});
	});

	app.get('/check_terminal', isLoggedIn, function (req, res) {
		res.render('check_terminal.ejs', {
			user: req.user
		});
	})
	
	app.get('/edit_message', isLoggedIn, function (req, res) {
		res.render('edit_message.ejs', {
			user: req.user
		});
	})

	// app.post('/warning', isLoggedIn, function (req, res) {
	// 	res.render('warning.ejs', {
	// 		user: req.user
	// 	});
	// })

	app.use(function (err, req, res, next) {
		console.log(err);
		// res.send(err.message);
		res.render('error.ejs');
	})



	// =====================================
	// LOGOUT ==============================
	// =====================================
	app.get('/logout', function (req, res) {
		req.logout();
		res.redirect('/login');
	});
};

// route middleware to make sure
function isLoggedIn(req, res, next) {

	// if user is authenticated in the session, carry on
	if (req.isAuthenticated())
		return next();

	else if (!req.isAuthenticated())
		return next();

}