function signUp(){

  app.get("/signup", function (req,res)
  {
    res.render("first.ejs");
  });
}
