/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
    {
        title: "Introduction to AWS Cloud Computing",
        image: "assets/images/events-page/1.png",
        institution: "Amazon Web Services",
        description: "The event was very exciting! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        date: "March 24, 2020",
    },
    {
        title: "Join the future of enterprise AI",
        image: "assets/images/events-page/2.png",
        institution: "Google Cloud",
        description: "The event was very exciting! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        date: "April 10, 2020",
    },
    {
        title: "Explore Blueprint",
        image: "assets/images/events-page/3.png",
        institution: "FaceBook",
        description: "The event was very exciting! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        date: "April 15, 2020",
    },
    {
        title: "Introduction to AWS Cloud Computing",
        image: "assets/images/events-page/1.png",
        institution: "Qile Zhu, Wei Bi, Xiaojiang Liu, Xiyao Ma, Xiaolin Li and Dapeng Wu",
        description: "The event was very exciting! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        date: "The 58th Annual Meeting of the Association for Computational Linguistics",
    },
    {
        title: "Introduction to AWS Cloud Computing",
        image: "assets/images/events-page/1.png",
        institution: "Qile Zhu, Wei Bi, Xiaojiang Liu, Xiyao Ma, Xiaolin Li and Dapeng Wu",
        description: "The event was very exciting! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        date: "The 58th Annual Meeting of the Association for Computational Linguistics",
    },
    {
        title: "Introduction to AWS Cloud Computing",
        image: "assets/images/events-page/1.png",
        institution: "Qile Zhu, Wei Bi, Xiaojiang Liu, Xiyao Ma, Xiaolin Li and Dapeng Wu",
        description: "The event was very exciting! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        date: "The 58th Annual Meeting of the Association for Computational Linguistics",
    },
    {
        title: "Introduction to AWS Cloud Computing",
        image: "assets/images/events-page/1.png",
        institution: "Qile Zhu, Wei Bi, Xiaojiang Liu, Xiyao Ma, Xiaolin Li and Dapeng Wu",
        description: "The event was very exciting! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        date: "The 58th Annual Meeting of the Association for Computational Linguistics",
    }


];

const fillData = () => {
    let output = "";
    research.forEach(
        ({ image, title, institution, date, description }) =>
        (output += `
            <tr> 
                <td class="imgCol"><img src="${image}" height=150 width=220></td>
                <td class = "researchTitleName">
                    <div>
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div> ${institution} </div> <div class="rConferences"> ${date} 
                    </div>
                    <div class="rConferences"> ${description} 
                    </div>
        
                    
                </td>
            </tr>`)
    );
    researchTable.innerHTML = output;

};
document.addEventListener("DOMContentLoaded", fillData);

