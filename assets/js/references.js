/*Reference Details Table*/
// Changes made 10/1/2021:
// Added reviewphoto1 - reviewphoto5 in assets/references-page
// Changed names and descriptions of references
const referenceTable = document.querySelector(".pain");

const references = [
  {
    sl1: 1,
    name1 : "Mr. Darshan Thaker",
        designation1 : "Director, Confidosoft Solutions Pvt. Ltd.",
        //image1 : "https://avatars.githubusercontent.com/u/46641503?v=4",
        message1 : "I have no hesitation in enthusiastically recommending Ms. Drashti Panchal for the Master's program at your esteemed institution. In my role as the director at Confidosoft Solutions Pvt.Ltd, I have known Ms. Drashti for almost Three years and Three Months. She had joined us as a Data Analyst, where I was her direct supervisor. Due to her strong work ethic and professionalism, I am convinced that she would excel in this program and be a true asset to your university.Ms. Drashti is an organized, diligent, and self-motivated individual and has excellent communication skills. She demonstrates the unusual and crucial trait of being a team player, working cooperatively with her coworkers to meet the specified goal. She also quickly learned the technology systems and programming languages that were unfamiliar to her when she first started here, indicating a very quick learning curve for someone so young.In this long association, I had ample opportunity to closely analyze her abilities and I must say that Ms. Drashti is an extraordinary young woman. She is proactive in asking questions and seeking solutions to difficulties, and when she has made a mistake or experienced a difficulty, she has the bravery to recognize it, accept responsibility, and immediately seek to rectify the situation so that it does not occur again. Throughout her time in this position, she constantly strove for excellence.Ms. Drashti's creativity, technical abilities, and commitment to implementing the best solution enable her to achieve significant results within a short time. She has worked on an issue tracking system in eCRF (electronic case report form) that enabled our customers to manage and maintain the issues they encountered while receiving data in their clinical trials.She also worked on an appointment booking system along with her teammates, that allowed the study doctors to book/reschedule appointments for the patients registered in a study trial. During her course of employment, she trained two of the employees and displayed the qualities of a good leader.Ms. Drashti Panchal is a valued member of our organization. Her combination of intelligence, commitment, creativity, and helpfulness will certainly set her apart and excel in any academic program. Hence, I strongly recommend her for admission into your university."


        sl2:2,
        name2 : "Prof. Mitesh Thakkar",
        designation2 : "HOD, LJ. Institute of Engineering & Technology",
        //image2: "https://avatars.githubusercontent.com/u/40017559?v=4",
        message2 : "Drashti Panchal si one of the excellent students of our institution and I ma glad to recommend her for a master's program at your institution where she wishes to pursue a master's degree. I was her course mentor for the subjects Data Structure' and 'Analysis and Design of algorithms' and observed her as very disciplined and sedulous ni her studies. He gave lots of effort into extracurricular work in technical events on campus.Drashti has acclaimed herself as one of the best students in the class. she has consistently performed wel and enhanced useful skills throughout her academics. This stellar performance seems to come effortlessly as he can not only grasp and comprehend quickly but also evaluate practical implications and analyze logically. I have observed her participation ni classroom discussions and activities. And I amazed myself by witnessing her curiosity of learning subjects.Because of all the above facts, I confidently recommend her, without any hesitation for admission into the master's program at your University. I am sure he will be able to contribute positively to the classroom experience and I wish her good luck ni her future endeavors."

    },

    {
        sl1:3,
        name1 : "Ankita K Tiwari",
        designation1 : "Assistant Professor,LJ Institute of Engineering & Technology",
        //image1 : "https://media-exp1.licdn.com/dms/image/C5603AQGEV-kzawPxjw/profile-displayphoto-shrink_800_800/0/1588602102622?e=1651708800&v=beta&t=8nxhFoR-WB4OKVltyYaVjmRpig_kQcvFsoa-eLjJPBQ",
        message1 : " It is with pleasure that I am writing this letter of recommendation for Drashti Panchal to support her application for the MS in Data Analyst course at your esteemed university. I have been teaching her for the three years as a senior professor of the Information Technology Department. Some of the subjects that I taught her are python and Artificial intelligence.The first impression that anyone forms of her are that of a person with outstanding technical knowledge and problem-solving skills. She was an inquisitive student from the first year and asked a lot of questions. Assignments submitted by Drashti demonstrated her out-of-the-box thinking and dedication towards the subject.She participated in all the seminars and Olympiads organized by our university related to computer science. This kept her updated with the latest developments in this field. Her critical thinking ability and collaborative nature made her a favourite among students and professors.Based on the last 10 years of teaching experience, I would place her among the top 10% of the students I have ever taught. I strongly recommend her to be considered as a potential student of MS in Data Analyst at your university.

  },
];

AOS.init();
const fillData = () => {
  let output = "";

  references.forEach(
    ({
      sl1,
      image1,
      name1,
      designation1,
      message1,
      absbox_for_linkedin1,
      sl2,
      image2,
      name2,
      designation2,
      message2,
      absbox_for_linkedin2,
    }) =>
      (output += `<tr data-aos="zoom-in-left"> 
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
                    </tr>`)
  );
  referenceTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
