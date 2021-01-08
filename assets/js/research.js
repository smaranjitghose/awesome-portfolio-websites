/*Research Details Table*/

const researchTable = document.querySelector(".main");
const citeTable1 = document.querySelector(".citeT1");

const research = [
    {
        title : "Coming Soon!",
        authors : "",
        conferences : "",
        researchYr : 2021,
        citebox : "#popup1",
        image : ""
    },

];

const cite1 = [{
    vancouver : "Qile Zhu, Wei Bi, Xiaojiang Liu, Xiyao Ma, Xiaolin Li and Dapeng Wu. A Batch Normalized Inference Network Keeps the KL Vanishing Away. The 58th Annual Meeting of the Association for Computational Linguistics 2020.",
    bibtex : "Qile Zhu, Wei Bi, Xiaojiang Liu, Xiyao Ma, Xiaolin Li and Dapeng Wu. A Batch Normalized Inference Network Keeps the KL Vanishing Away. The 58th Annual Meeting of the Association for Computational Linguistics 2020."
}];




const fillData = () => {
    let output = "";
    research.forEach(
        ({image, title, authors, conferences, researchYr, citebox}) =>
        (output +=`
            <tr>
            <td class="imgCol"><img src="${image}" class="rImg"></td>
            <td class = "researchTitleName">
            <div><span class="imgResponsive"><img src="${image}" class="imgRes"></span></div>
            <a href="#0" class="paperTitle"> ${title} </a>
            <div> ${authors} </div> <div class="rConferences"> ${conferences}
            <div class="researchY">${researchYr}</div>
            </div>

            <!--CITE BUTTON-->
            <div class="d-flex justify-content-end" style="margin-right:5%;">

            <a href="#" class="button button-accent button-small text-right button-abstract">ABSTRACT</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="${citebox}" class="button button-accent button-small button-cite">CITE</a

            </div>
            </td>
            </tr>
            `)
        );
    researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);

const citeData1 = () => {
    let output = "";
    cite1.forEach(
        ({vancouver, bibtex}) =>
        (output += `
        <tr> <td class="left-cell"> Vancouver </td> <td class="right-cell">${vancouver} </td></tr>
                    <tr> <td class="left-cell"> BibTeX </td> <td class="right-cell"> ${bibtex}
                    </td></tr>
        `)
    );
    citeTable1.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", citeData1);


document.addEventListener("DOMContentLoaded", citeData8);
