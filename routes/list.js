
exports.subscribe = function(req, res, session){
  mc.lists.subscribe({id: '99b4bc97f3', email:{email:req.body.email}}, function(data) {
    req.session.success = 'User subscribed successfully! Look for the confirmation email.';
    console.log(req.session)
    res.render('index', { title: 'ayobagi.org', messages : 'User subscribed successfully! Look for the confirmation email.' });
    },
    function(error) {
      if (error.error) {
        req.session.error_flash = error.code + ": " + error.error;
      } else {
        req.session.error_flash = 'There was an error subscribing that user';
      }
    });
};