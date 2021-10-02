/*Reference Details Table*/
// Changes made 10/1/2021:
// Added reviewphoto1 - reviewphoto5 in assets/references-page
// Changed names and descriptions of references
const referenceTable = document.querySelector(".pain");

const references = [
    {
        slnumber1:1,
        name_of_person1 : "Juliana Rodgers",
        designation_of_person1 : "Intern Manager at Flipkart",
        
        image_of_person1 : "assets/images/references-page/reviewphoto1.png",
        message_reference1 : "It was a pleasure to work with John, who has lots of knowledge, experience, and creativity. During his time here as an intern, he made many suggestions and improvements to many of Flipkart’s products, like our product pages and web apps. We really enjoyed his passion for creating AMP pages and the positive attitude he brought to our team.",
        

        slnumber2:2,
        name_of_person2 : "Andy Grant",
        designation_of_person2 : "Mentor for Mozilla at Google Summer of Code",
        
        image_of_person2: "assets/images/references-page/reviewphoto2.png",
        message_reference2 : "John was part of my team (Team Mozilla) during Google’s Summer of Code program. As his mentor, I worked with him on the Extension Activity Monitor for Firefox. I was constantly impressed with his expertise in programming and his dedication he displayed for completing the project.",
        
        
    },

    {
        slnumber1:3,
        name_of_person1 : "Zhao Lan",
        designation_of_person1 : "Professor of Computer Science at MIT",
                image_of_person1 : "assets/images/references-page/reviewphoto3.png",
        message_reference1 : " I first met John in 2018, when he was placed under my supervision as a teaching assistant. From the start, he showed initiative and developed a quiz app for my classes to use. In his senior year, John became a research assistant for my PhD students. He helped my team with their theories on image decomposition, by creating scripts to compile and sort data. His desire to create quality work has served him well during his time at MIT, and will continue to do so in the future.",
        

        slnumber2:4,
        name_of_person2 : "Joshua Morales",
        designation_of_person2 : "PhD Candidate at Columbia University",
                image_of_person2 : "assets/images/references-page/reviewphoto4.png",
        message_reference2 : "As John’s research colleague, I’ve benefited from his creative problem solving skills, and his enthusiasm for the work that we do. He is genuinely interested in our computer vision project and has the amazing ability to motivate others. I’m really fortunate to have someone like him as my colleague.",
        
    },

    {
        slnumber1:1,
        name_of_person1 : " Lucy Richardson",
        designation_of_person1 : "Mentor, PClub Summer of Code",
                image_of_person1 : "assets/images/references-page/reviewphoto5.png",
        message_reference1 : "John was my co-mentor for PClub Summer of Code in 2020. During those two months, he worked tirelessly and patiently with our mentees. He helped them set up their work environments and created a fun environment for them to learn and display their knowledge. I enjoyed working with him, and our mentees definitely cherished the experiences that he provided for them.",
        

        slnumber2:1,
        name_of_person2 : "Elina Thomas",
        designation_of_person2 : "CEO, ABC International Multinational Comapny",
                image_of_person2: "assets/images/references-page/team.png",
        message_reference2 : "A professional reference letter is usually written by a supervisor, colleague, client, teacher, or professor that is well-acquainted with their accomplishments in a work-type setting.1 It typically includes a description of their position and responsibilities, the duration of their time at the company, and their abilities, qualifications, and contributions to the organization.",
        
    },

    {
        slnumber1:1,
        name_of_person1 : "Elina Thomas",
        designation_of_person1 : "CEO, ABC International Multinational Comapny",
                image_of_person1 : "assets/images/references-page/team.png",
        message_reference1 : "A professional reference letter is usually written by a supervisor, colleague, client, teacher, or professor that is well-acquainted with their accomplishments in a work-type setting.1 It typically includes a description of their position and responsibilities, the duration of their time at the company, and their abilities, qualifications, and contributions to the organization.",
       

        slnumber2:1,
        name_of_person2 : "Elina Thomas",
        designation_of_person2 : "CEO, ABC International Multinational Comapny",
                image_of_person2: "assets/images/references-page/team.png",
        message_reference2 : "A professional reference letter is usually written by a supervisor, colleague, client, teacher, or professor that is well-acquainted with their accomplishments in a work-type setting.1 It typically includes a description of their position and responsibilities, the duration of their time at the company, and their abilities, qualifications, and contributions to the organization.",
        
    },

    {
        slnumber1:1,
        name_of_person1 : "Elina Thomas",
        designation_of_person1 : "CEO, ABC International Multinational Comapny",
                image_of_person1 : "assets/images/references-page/team.png",
        message_reference1 : "A professional reference letter is usually written by a supervisor, colleague, client, teacher, or professor that is well-acquainted with their accomplishments in a work-type setting.1 It typically includes a description of their position and responsibilities, the duration of their time at the company, and their abilities, qualifications, and contributions to the organization.",
        

        slnumber2:1,
        name_of_person2 : "Elina Thomas",
        designation_of_person2 : "CEO, ABC International Multinational Comapny",
       
        image_of_person2: "assets/images/references-page/team.png",
        message_reference2 : "A professional reference letter is usually written by a supervisor, colleague, client, teacher, or professor that is well-acquainted with their accomplishments in a work-type setting.1 It typically includes a description of their position and responsibilities, the duration of their time at the company, and their abilities, qualifications, and contributions to the organization.",
       
    },

    {
        slnumber1:1,
        name_of_person1 : "Elina Thomas",
        designation_of_person1 : "CEO, ABC International Multinational Comapny",
                image_of_person1 : "assets/images/references-page/team.png",
        message_reference1 : "A professional reference letter is usually written by a supervisor, colleague, client, teacher, or professor that is well-acquainted with their accomplishments in a work-type setting.1 It typically includes a description of their position and responsibilities, the duration of their time at the company, and their abilities, qualifications, and contributions to the organization.",
        

        slnumber2:1,
        name_of_person2 : "Elina Thomas",
        designation_of_person2 : "CEO, ABC International Multinational Comapny",
                image_of_person2: "assets/images/references-page/team.png",
        message_reference2 : "A professional reference letter is usually written by a supervisor, colleague, client, teacher, or professor that is well-acquainted with their accomplishments in a work-type setting.1 It typically includes a description of their position and responsibilities, the duration of their time at the company, and their abilities, qualifications, and contributions to the organization.",
        
    },

    {
        slnumber1:1,
        name_of_person1 : "Elina Thomas",
        designation_of_person1 : "CEO, ABC International Multinational Comapny",
                image_of_person1 : "assets/images/references-page/team.png",
        message_reference1 : "A professional reference letter is usually written by a supervisor, colleague, client, teacher, or professor that is well-acquainted with their accomplishments in a work-type setting.1 It typically includes a description of their position and responsibilities, the duration of their time at the company, and their abilities, qualifications, and contributions to the organization.",
        
        slnumber2:1,
        name_of_person2 : "Elina Thomas",
        designation_of_person2 : "CEO, ABC International Multinational Comapny",
                image_of_person2: "assets/images/references-page/team.png",
        message_reference2 : "A professional reference letter is usually written by a supervisor, colleague, client, teacher, or professor that is well-acquainted with their accomplishments in a work-type setting.1 It typically includes a description of their position and responsibilities, the duration of their time at the company, and their abilities, qualifications, and contributions to the organization.",
       
    },
    {
        slnumber1:1,
        name_of_person1 : "Elina Thomas",
        designation_of_person1 : "CEO, ABC International Multinational Comapny",
                image_of_person1 : "assets/images/references-page/team.png",
        message_reference1 : "A professional reference letter is usually written by a supervisor, colleague, client, teacher, or professor that is well-acquainted with their accomplishments in a work-type setting.1 It typically includes a description of their position and responsibilities, the duration of their time at the company, and their abilities, qualifications, and contributions to the organization.",
        

        slnumber2:1,
        name_of_person2 : "Elina Thomas",
        designation_of_person2 : "CEO, ABC International Multinational Comapny",
                image_of_person2: "assets/images/references-page/team.png",
        message_reference2 : "A professional reference letter is usually written by a supervisor, colleague, client, teacher, or professor that is well-acquainted with their accomplishments in a work-type setting.1 It typically includes a description of their position and responsibilities, the duration of their time at the company, and their abilities, qualifications, and contributions to the organization.",
        
    }
];
AOS.init();   
const fillData = () => {
    let output = "";
    
    references.forEach(
        ({slnumber1, image_of_person1, name_of_person1, designation_of_person1, message_reference1, absbox_for_linkedin1, slnumber2, image_of_person2, name_of_person2, designation_of_person2, message_reference2, absbox_for_linkedin2}) =>
        
        (output +=`
        
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image_of_person1}" class="rImg"></td>
                <td class = "referenceTitleName">
                    <div>
                        <span class="imgResponsive">
                            <img src="${image_of_person1}" class="imgRes">
                        </span>
                    </div>
                    <img src="https://img.icons8.com/fluency/48/000000/quote-left.png"/>
                    <a href="#0" class="paperTitle"> ${name_of_person1} </a> 
                    <div> ${designation_of_person1} </div> <div class="rConferences">  
                        <div class="referenceY">${message_reference1}</div>
                    </div>
        
                    
                    
                   
                </td>
            </tr> 
            
            <tr data-aos="zoom-in-left"> 
                       
                        <td class = "referenceTitleName">
                            <div>
                                <span class="imgResponsive">
                                    <img src="${image_of_person2}" class="imgRes">
                                </span>
                            </div>
                            <img src="https://img.icons8.com/fluency/48/000000/quote-left.png"/>
                            <a href="#0" class="paperTitle">${name_of_person2} </a> 
                            <div> ${designation_of_person2} </div> <div class="rConferences">
                                <div class="referenceY">${message_reference2}</div>
                            </div>
                
                            
                            
                           
                        </td>
                        <td class="imgCol"><img src="${image_of_person2}" class="rImg1"></td>
                    </tr> 
            
            
            `)
            );

    
            referenceTable.innerHTML = output;

                      
                      
                        
                        
                        



        }
    




document.addEventListener("DOMContentLoaded", fillData);
