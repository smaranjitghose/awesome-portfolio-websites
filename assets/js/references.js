/*Reference Details Table*/
// Changes made 10/1/2021:
// Added reviewphoto1 - reviewphoto5 in assets/references-page
// Changed names and descriptions of references
const referenceTable = document.querySelector(".pain");

const references = [
  {
    sl1: 1,
    name1 : "Smaranjit Ghose",
        designation1 : "Product Manager, Microsoft",
        image1 : "https://avatars.githubusercontent.com/u/46641503?v=4",
        message1 : "John is a conscientious individual whom I mentored during JWOC'2021. His problem-solving skills and a keen interest in learning new skillsets are remarkable. His hardworking nature and team-building abilities make him different from others.",
        

        sl2:2,
        name2 : "Anush Bhatia",
        designation2 : "Senior Analyst, Capgemini", 
        image2: "https://avatars.githubusercontent.com/u/40017559?v=4",
        message2 : "John has the best grasping skills I have seen in a new developer. I got to know him through GSSOC'2021 when I mentored him, and he made an exceptional growth during the competition. He made some incredible contributions and has good experience with Open Source.",
        
        
    },

    {
        sl1:3,
        name1 : "Aditya Jyoti Paul",
        designation1 : "Technical Analyst, Amazon",
        image1 : "https://media-exp1.licdn.com/dms/image/C5603AQGEV-kzawPxjw/profile-displayphoto-shrink_800_800/0/1588602102622?e=1651708800&v=beta&t=8nxhFoR-WB4OKVltyYaVjmRpig_kQcvFsoa-eLjJPBQ",
        message1 : "John and I have worked on several projects. Apart from technical skills, he also has good soft skills. He has good experience with debugging and has excellent leadership qualities.",
        

        sl2:4,
        name2 : "Arnab Dutta Purkayastha",
        designation2 : "Data Scientist, Flipkart",
        image2 : "https://avatars.githubusercontent.com/u/59832779?v=4",
        message2 : "John and I worked together during a hackathon and the thing that surprised me the most about him was his knowledge of fundamentals. He offered sincere help to the team throughout the competition. He is an impressive problem solver who is able to address complex issues strategically and confidently.",
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
