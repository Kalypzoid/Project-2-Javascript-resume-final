var work = {
    "jobs": [
        {
            "employer" : "Bob Teseniar",
            "title" : "BJT Landscaping",
            "location" : "Chattanooga, TN",
            "dates_worked" : 2010,
            "description" : "Worked as an assistant for my grandfather's landscaping business."
        },
        {
            "employer" : "Jeff Teseniar",
            "title" : "Name-out Marketing",
            "location" : "Charlotte, NC",
            "dates_worked" : 2012,
            "description" : "Executive assistant for my dad's SEO company."
        }
    ]
};

work.display = function() {
    work.jobs.forEach(function (job) {
        $("#workExperience").append(HTMLworkStart);
        var formattedworkEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedworkTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedworkDates = HTMLworkDates.replace("%data%", job.dates_worked);
        var formattedworkDescription = HTMLworkDescription.replace("%data%", job.description);
        var formattedworkEmployerTitle = formattedworkEmployer + formattedworkTitle;
        $(".work-entry:last").append(formattedworkEmployerTitle);
        $(".work-entry:last").append(formattedworkDates);
        $(".work-entry:last").append(formattedworkDescription);
    });
};

var bio = {
    "name": "Justin Teseniar",
    "role": "Web Developer",
    "welcomeMessage": "Hello, and welcome!",
    "contacts": {
        "mobile_number": "704-293-7417",
        "email" : "justinbteseniar@gmail.com",
        "github" : "https://github.com/kalypzoid",
        "location" : "Charlotte, NC"
    },
    "pictureURL":"images/me.jpg",
    "skills" : ["HTML","CSS", "JavaScript"]
};


bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%",bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
    $("#header").prepend(formattedRole).prepend(formattedName);
    var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile_number);
    var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);

    $("#topContacts").append(formattedMobile)
        .append(formattedEmail)
        .append(formattedGithub)
        .append(formattedLocation);

    $("#footerContacts").append(formattedMobile)
        .append(formattedEmail)
        .append(formattedGithub)
        .append(formattedLocation);

    var formattedBioPic = HTMLbioPic.replace("%data%",bio.pictureURL);
    var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").append(formattedBioPic).append(formattedWelcomeMsg);

    if (bio.skills.length > 0) {
        $('#header').append(HTMLskillsStart);
        bio.skills.forEach(function (skill) {
            var formattedSkill = HTMLskills.replace("%data%", skill);
            $('#skills').append(formattedSkill);
        });
    }
};


var education = {
    "schools": [
        {
            "name" : "Central Piedmont Community College",
            "location": "Charlotte, NC",
            "degree": "Computer Science",
            "majors" : ["Computer Science"],
            "dates_attended": "Fall 2013",
            "url": "http://www.cpcc.edu/"
        }],
    "onlineCourses":[
        {
            "title": "The Complete Web Developer Course",
            "school": "Udemy",
            "dates_attended":"November 2014 - March 2015",
            "url":"https://www.udemy.com/complete-web-developer-course/#/"
        },{
            "title": "Front-end Web Developer",
            "school": "Udacity",
            "dates_attended":"March 2015 - present",
            "url":"https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        }]
};

education.display = function(){
    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%", school.name).replace('#', school.url);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates_attended);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        $(".education-entry:last").append(formattedSchoolName);
        $(".education-entry:last a").append(formattedSchoolDegree);
        $(".education-entry:last").append(formattedSchoolLocation).append(formattedSchoolDates);

        school.majors.forEach(function(major) {
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", major);
            $(".education-entry:last").append(formattedSchoolMajor);
        });
    });

    if (education.onlineCourses.length > 0) {
        $(".education-entry").append(HTMLonlineClasses);
        education.onlineCourses.forEach(function (course) {
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", course.title).replace('#', course.url);;
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", course.dates_attended);

            $(".education-entry:last")
                .append(formattedOnlineTitle + formattedOnlineSchool)
                .append(formattedOnlineDates)
                .append('<br>');
        });
    }
};

var projects = {
    "projects" : [
        {
            "title" : "Hello World",
            "dates_worked" : "March 16 - 20, 2015",
            "description" : "This is my first project. It taught me a great deal about website developement!",
            "images" : ["images/hello-world-sm.jpg"]
        },
        {
            "title" : "Portfolio Site",
            "dates_worked" : "March 23 - 27, 2015",
            "description" : "This is my portfolio site. May it help get me a great job!",
            "images" : ["images/portfolio.jpg"]
        }
    ]
};

projects.display = function() {
    projects.projects.forEach(function(project){
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%",project.title);
        var formattedDates = HTMLprojectDates.replace("%data%",project.dates_worked);
        var formattedDescription = HTMLprojectDescription.replace("%data%",project.description);
        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(formattedDescription);
        if (project.images.length > 0) {
            project.images.forEach(function(image){
                var formattedImage = HTMLprojectImage.replace("%data%",image);
                $(".project-entry:last").append(formattedImage);
            });
        }
    })
};

function inName() {
    var name = $("#name").html();
    name = name.trim().split(" ");
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    name[1] = name[1].toUpperCase();
    return name[0] + " " + name[1];
}

work.display();
bio.display();
education.display();
projects.display();

$('#main').append(internationalizeButton);
$("#mapDiv").append(googleMap);