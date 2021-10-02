/*Reference Details Table*/
// Changes made 10/1/2021:
// Added reviewphoto1 - reviewphoto5 in assets/references-page
// Changed names and descriptions of references
const referenceTable = document.querySelector(".pain");

const references = [
    {
        sl1:1,
        name1 : "Juliana Rodgers",
        designation1 : "Intern Manager at Flipkart",
        image1 : "assets/images/references-page/reviewphoto1.png",
        message1 : "It was a pleasure to work with John, who has a lot of knowledge, experience, and creativity. During his time here as an intern, he made many suggestions and improvements to many of Flipkart’s products, like our product pages and web apps. We really enjoyed his passion for creating AMP pages and the positive attitude he brought to our team.",
        

        sl2:2,
        name2 : "Andy Grant",
        designation2 : "Mentor for Mozilla at Google Summer of Code", 
        image2: "assets/images/references-page/reviewphoto2.png",
        message2 : "John was part of my team (Team Mozilla) during Google’s Summer of Code program. As his mentor, I worked with him on the Extension Activity Monitor for Firefox. I was constantly impressed with his expertise in programming and his dedication he displayed for completing the project.",
        
        
    },

    {
        sl1:3,
        name1 : "Zhao Lan",
        designation1 : "Professor of Computer Science at MIT",
        image1 : "assets/images/references-page/reviewphoto3.png",
        message1 : " I first met John in 2018, when he was placed under my supervision as a teaching assistant. From the start, he showed initiative and developed a quiz app for my classes to use. In his senior year, John became a research assistant for my PhD students. He helped my team with their theories on image decomposition, by creating scripts to compile and sort data. His desire to create quality work has served him well during his time at MIT, and will continue to do so in the future.",
        

        sl2:4,
        name2 : "Joshua Morales",
        designation2 : "PhD Candidate at Columbia University",
        image2 : "assets/images/references-page/reviewphoto4.png",
        message2 : "As John’s research colleague, I’ve benefited from his creative problem solving skills, and his enthusiasm for the work that we do. He is genuinely interested in our computer vision project and has the amazing ability to motivate others. I’m really fortunate to have someone like him as my colleague.",
        
    },

    {
        sl1:5,
        name1 : " Lucy Richardson",
        designation1 : "Mentor, PClub Summer of Code",
        image1 : "assets/images/references-page/reviewphoto5.png",
        message1 : "John was my co-mentor for PClub Summer of Code in 2020. During those two months, he worked tirelessly and patiently with our mentees. He helped them set up their work environments and created a fun environment for them to learn and display their knowledge. I enjoyed working with him, and our mentees definitely cherished the experiences that he provided for them.",
        

        sl2:6,
        name2 : "Dr. Karan Singh",
        designation2 : "Assistant Professor at IIT, Bombay",
        image2: "assets/images/references-page/reviewphoto4.png",
        message2 : "I met John in 2019, December, when he was placed under my supervision as a research intern. I came to know him as an impressive problem solver who is able to address complex issues strategically and confidently. He was a truely valuable asset to our research team and his quiz software is greatly useful even today in IIT Bombay. ",
        
    
        sl1:7,
        name1 : "Hannah D'souza",
        designation1 : "Mentor, GirlScript Summer of Code",
        image1 : "assets/images/references-page/reviewphoto1.png",
        message1 : "John has shown great interest in handling our projects. He is extremely hard-working, honest and dependable. Beyond that, he is an impressive problem solver",
       

        sl2:1,
        name2 : "Krystle Thomas",
        designation2 : "Founder, ULHacks",
        image2: "assets/images/references-page/reviewphoto3.png",
        message2 : "John has been a fantastic judge to the hackathon. Very hardworking, smart, and always a learner!",
        
    },

    {
        sl1:1,
        name1 : "Joey Joshua",
        designation1 : "PhD Candidate at MIT",
        image1 : "assets/images/references-page/reviewphoto2.png",
        message1 : "As John's co-jugde in the Elevate Tech Hackathon, I must say he is an inspiration to thousands. A great learner and a teacher too.",
        

        sl2:1,
        name2 : "Roopa Krishnan",
        designation2 : "Mentor, AtlasHacks",
        image2: "assets/images/references-page/reviewphoto1.png",
        message2 : "John was my co-mentor for AtlasHacks in 2020. It was a pleasure to work with him, a true learner and extremely creative.",
       
    },

    {
        sl1:1,
        name1 : "Nalini Jain",
        designation1 : "Human Resources Director at Flipkart",
        image1 : "assets/images/references-page/reviewphoto3.png",
        message1 : "During the course of his internship at Flipkart, John proved himself to be a dependable employee and a hard worker with solid problem solving and technical skills. I was always impressed by John’s ability to complete the work assigned to him on time. John not only met deadlines but also explains his programs in a way that non-experts can easily understand. ",
        

        sl2:1,
        name2 : "Rayn Jian",
        designation2 : "Assistant Throwball Coach, MIT ",
        image2: "assets/images/references-page/reviewphoto2.png",
        message2 : "John has always demonstrated ambition and maturity on the green and in the classroom. He is genuinely interested in developing his skills and challenging his abilities as well as being a great role model for his peers. He has impressed me with his calm and calculated attitude. He always shows kindness toward other athletes and keeps a positive attitude during tournaments. He definately deserved the 'Athlete of the year award'.",  
    },

    {
        sl1:1,
        name1 : "Dr. Naveen Rai",
        designation1 : "Head of Computer Science Department, MIT",
        image1 : "assets/images/references-page/reviewphoto4.png",
        message1 : "John has demonstrated an ability to support his classmates in my class. During a group project, John offered to tutor a classmate who was struggling with a module of Data Science we were exploring. He successfully helped that student better understand the content, improving the student’s insights during class discussions.",
        
        sl2:1,
        name2 : "Thompson Reed",
        designation2 : " Assistant Intern Manager, Flipkart ",
        image2: "assets/images/references-page/reviewphoto2.png",
        message2 : "John did an excellent job in staying up to date on software developments and thus finding new solutions. He had the most extensive and diverse knowledge of software at our company, and others even sought him out for advice. A reliable and highly capable employee.",
       
    },
    {
        sl1:1,
        name1 : "Elina Gracious",
        designation1 : "Throwball Coach, Columbia University",
        image1 : "assets/images/references-page/reviewphoto1.png",
        message1 : "In addition to his drive for academic excellence, I’ve coached John on the throwball team for the past year where he embodied the essence of humility and sportsmanship. I believe a great athlete is someone who shows positivity even when they lose, and that is exactly how I can describe John. This is why I chose him to be the captain of the Summer Park High Lion’s boy’s throwball team.",
        

        sl2:1,
        name2 : "Esther Tony",
        designation2 : "SDE, Flipkart",
        image2: "assets/images/references-page/reviewphoto4.png",
        message2 : "I had worked with John in research intern team, Flipkart. John would be an asset to have on any team. To say he's a team leader would be an understatement. during his tenure at our company, he's gone out of his way to welcome newcomers and resolve any problems they might have. He pitches innovative ideas at company meetings but also listens to what others have to say, including constructive criticism. When budgetary constraints limited the work our company could complete, John put his highly creative mind to use to come up with alternatives.",
        
    }
];

AOS.init();   
const fillData = () => {
    let output = "";
    
    references.forEach(
        (
            { sl1, image1, name1, designation1, message1, absbox_for_linkedin1,
             sl2, image2, name2, designation2, message2, absbox_for_linkedin2 }
        ) =>
           (output +=
            `<tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image1}" class="rImg"></td>
                <td class = "referenceTitleName">
                    <div>
                        <span class="imgResponsive">
                            <img src="${image1}" class="imgRes">
                        </span>
                    </div>
                    <img src="https://img.icons8.com/fluency/48/000000/quote-left.png"/>
                    <a href="#0" class="paperTitle"> ${name1} </a> 
                    <div> ${designation1} </div> <div class="rConferences">  
                        <div class="referenceY">${message1}</div>
                    </div>  
                </td>
            </tr> 
            
            <tr data-aos="zoom-in-left"> 
                       
                        <td class = "referenceTitleName">
                            <div>
                                <span class="imgResponsive">
                                    <img src="${image2}" class="imgRes">
                                </span>
                            </div>
                            <img src="https://img.icons8.com/fluency/48/000000/quote-left.png"/>
                            <a href="#0" class="paperTitle">${name2} </a> 
                            <div> ${designation2} </div> <div class="rConferences">
                                <div class="referenceY">${message2}</div>
                            </div>
                
                            
                            
                           
                        </td>
                        <td class="imgCol"><img src="${image2}" class="rImg1"></td>
                    </tr>`
                )
            );
            referenceTable.innerHTML = output;
        }
document.addEventListener("DOMContentLoaded", fillData);
