import express from "express";
let app = express();

// Add public folder
app.use(express.static("public"));

//Middleware to parse the body of the request as JSON
// Als ik dit niet doe kan ik de data niet ophalen zodra het verstuurd wordt via het formulier
app.use(express.urlencoded({ extended: true }));

// add ejs
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index" ,{courses});
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

const courses = [
  {
    id: 'project1',
    courseName: 'Project 1 - squadpage',
    teacherName: 'Sanne & Vasilis',
    courseWeeks: 'Week 0'
  },
  {
      id: 'wafs',
      courseName: 'Web App from Scratch',
      teacherName: 'Robert & Joost',
      courseWeeks: 'Week 1 t/m Week 3'
  },
  {
      id: 'cssTTR',
      courseName: 'CSS to the Rescue',
      teacherName: 'Sanne & Vasilis',
      courseWeeks: 'Week 1 t/m Week 3'
  },
  {
    id: 'project2',
    courseName: 'Project 2',
    teacherName: 'Joost en Robert',
    courseWeeks: 'Week 4'
  },
  {
      id: 'pwa',
      courseName: 'Progressive Web Apps',
      teacherName: 'Janno & Declan',
      courseWeeks: 'Week 5 t/m Week 8'
  },
  {
      id: 'browserTech',
      courseName: 'Browser Technologies',
      teacherName: 'Vasilis & Peter-Paul',
      courseWeeks: 'Week 5 t/m Week 8"'
  },
  {
    id: 'project3',
    courseName: 'Project 3',
    teacherName: 'Joost en Robert',
    courseWeeks: 'Week 9'
  },
  {
      id: 'realTimeWeb',
      courseName: 'Real-Time Web',
      teacherName: 'Joost & Koop',
      courseWeeks: 'Week 10 t/m Week 13'
  },
  {
      id: 'humanCenteredDesign',
      courseName: 'Human-Centered Design',
      teacherName: 'Koop & Vasilis',
      courseWeeks: 'Week 10 t/m Week 13'
  },
  {
      id: 'project4',
      courseName: 'Meesterproef',
      teacherName: 'Koop & Robert',
      courseWeeks: 'Week 14'
  }
]