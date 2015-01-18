var bio = {
  'name'     : 'heiko mattern',
  'role'     : 'Software Developer',
  'contacts' : {
      'mobile'   : '+49176-84274895',
      'email'    : 'matternheiko@gmail.com',
      'github'   : 'https://github.com/TheMightyHoltzman',
      'twitter'  : 'NA',
      'location' : 'Cologne, Germany'
  },
  'welcomeMessage': 'Welcome earthlings!',
  'skills'        : ['web-dev', 'rock-climbing', 'awesomeness'],
  'bioPic'        : 'images/fry.jpg',
  'display'       : {}
};

var education = {
    'schools' : [
        {
            'name' : 'RUB',
            'city' : 'Bochum',
            'degree' : 'BA',
            'majors' : ['mathematics', 'computer science'],
            'dates' : 2010,
            'location' : 'Bochum, Germany'
        }
    ],
    'onlineCourses' : [
        {
            'title': 'Frontend Web Developer',
            'school' : 'Udacity',
            'date' : 2015,
            'url' : 'http://www.udacity.com'
        }
    ]
};

var work = {
    'jobs' : [
        {
            'employer' : 'miamed',
            'title' : 'Software Developer',
            'dates' : 'June 2014 - now',
            'description' : 'Developing an e-learning software for medicine students amongst other things.',
            'location' : 'Cologne, Germany'
        }
    ]
};

var projects = {
    'projects' : [
        {
            'title' : 'Shadow over Illsmouth',
            'dates' : '2015 - now',
            'description' : 'Yet another runners game',
            'images' : ['images/fry.jpg', 'images/fry.jpg']
        }
    ]
};

function displayBio()
{
    $('#header').prepend(internationalizeButton);
    $('#header').prepend(HTMLheaderRole.replace('%data%', bio.role));
    $('#header').prepend(HTMLheaderName.replace('%data%', bio.name));

    $('#header').append(HTMLWelcomeMsg.replace('%data%', bio.welcomeMessage));

    $('#topContacts').append(HTMLmobile.replace('%data%', bio.contacts.mobile));
    $('#topContacts').append(HTMLemail.replace('%data%', bio.contacts.email));
    $('#topContacts').append(HTMLgithub.replace('%data%', bio.contacts.github));
    $('#topContacts').append(HTMLtwitter.replace('%data%', bio.contacts.twitter));
    $('#topContacts').append(HTMLlocation.replace('%data%', bio.contacts.location));

    $('#header').append(HTMLbioPic.replace('%data%', bio.bioPic));
    $('#header').append(HTMLskillsStart);
    for (var skill in bio.skills) {
        $('#skills').append(HTMLskills.replace('%data%', bio.skills[skill]));
    }
}

function displayEducation()
{
    if (education != null) {
        for (var school in education.schools) {
            $('#education').append(HTMLschoolStart);
            var strSchool = HTMLschoolName.replace('%data%', education.schools[school].name);
            strSchool = strSchool +  HTMLschoolLocation.replace('%data%', education.schools[school].city);
            strSchool = strSchool +  HTMLschoolDegree.replace('%data%', education.schools[school].degree);
            strSchool = strSchool +  HTMLschoolDates.replace('%data%', education.schools[school].dates);
            strSchool = strSchool +  HTMLschoolMajor.replace('%data%', education.schools[school].majors);
            strSchool = strSchool +  HTMLschoolLocation.replace('%data%', education.schools[school].location);
            $('.education-entry:last').append(strSchool);
        }
        $('#education').append(HTMLonlineClasses);
        for (var onlineCourse in education.onlineCourses) {
            $('#education').append(HTMLschoolStart);
            var strSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[onlineCourse].school);
            strSchool = strSchool + HTMLonlineTitle.replace('%data%', education.onlineCourses[onlineCourse].title);
            $('.education-entry:last').append(strSchool);
        }
    }
}

function displayWork()
{
    if (work != null) {
        for (var job in work.jobs) {
            $('#workExperience').append(HTMLworkStart);
            var strJob = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
            strJob = strJob + HTMLworkLocation.replace('%data%', work.jobs[job].location);
            strJob = strJob + HTMLworkTitle.replace('%data%', work.jobs[job].title);
            strJob = strJob +  HTMLworkDates.replace('%data%', work.jobs[job].dates);
            strJob = strJob + HTMLworkDescription.replace('%data%', work.jobs[job].description);
            $('.work-entry:last').append(strJob);
        }
    }
};

function displayProjects()
{
    if (projects.projects != null) {
        for (var project in projects.projects) {
            $('#projects').append(HTMLprojectStart);
            var strProject = HTMLprojectTitle.replace('%data%', projects.projects[project].title);
            strProject = strProject + HTMLprojectDates.replace('%data%', projects.projects[project].dates);
            strProject = strProject + HTMLprojectDescription.replace('%data%', projects.projects[project].description);
            // strProject = strProject + HTMLprojectDescription.replace('%data%', projects[project].description);
            for (var image in projects.projects[project].images) {
                strProject = strProject + HTMLprojectImage.replace('%data%', projects.projects[project].images[image]);
            }
            $('.project-entry:last').append(strProject);
        }
    }
}

function displayFooter()
{
    $('#footerContacts').append(HTMLmobile.replace('%data%', bio.contacts.mobile));
    $('#footerContacts').append(HTMLemail.replace('%data%', bio.contacts.email));
    $('#footerContacts').append(HTMLgithub.replace('%data%', bio.contacts.github));
    $('#footerContacts').append(HTMLtwitter.replace('%data%', bio.contacts.twitter));
    $('#footerContacts').append(HTMLlocation.replace('%data%', bio.contacts.location));
}

function displayAll()
{
    displayBio();
    displayWork();
    displayProjects();
    displayEducation();
    displayFooter();
    $('#mapDiv').append(googleMap);
}

displayAll();