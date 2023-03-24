import express from "express";
let app = express();

// Add public folder
app.use(express.static("public"));

//Middleware to parse the body of the request as JSON
app.use(express.urlencoded({ extended: true }));

// add ejs
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

//The API endpoint that the form will POST to
app.post("/form", (req, res) => {
    //Destructure the request body
    let resData = {
      serverData: req.body,
    };
  
    //Console log the response data (for debugging)
    console.log(resData);
    //Send the response as JSON with status code 200 (success)
    // res.status(200).json(resData);

    res.render("form", {resData});

  });

app.listen(3000, () => console.log("we're live 🎉"));
