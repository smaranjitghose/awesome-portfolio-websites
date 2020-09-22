/*Research Details Table*/

const researchTable = document.querySelector(".main");
const citeTable1 = document.querySelector(".citeT1");
const citeTable2 = document.querySelector(".citeT2");
const citeTable3 = document.querySelector(".citeT3");
const citeTable4 = document.querySelector(".citeT4");
const citeTable5 = document.querySelector(".citeT5");
const citeTable6 = document.querySelector(".citeT6");
const citeTable7 = document.querySelector(".citeT7");
const citeTable8 = document.querySelector(".citeT8");

const research = [
    {
        title : "A Batch Normalized Inference Network Keeps the KL Vanishing Away",
        authors : "Qile Zhu, Wei Bi, Xiaojiang Liu, Xiyao Ma, Xiaolin Li and Dapeng Wu",
        conferences : "The 58th Annual Meeting of the Association for Computational Linguistics",
        researchYr : 2020,
        citebox : "#popup1",
        image : "assets/images/research-page/inteferenceNetwork.png"
    },

    {
        title : "A Call for More Rigor in Unsupervised Cross-lingual Learning",
        authors : "Mikel Artetxe, Sebastian Ruder, Dani Yogatama, Gorka Labaka and Eneko Agirre",
        conferences : "The 58th Annual Meeting of the Association for Computational Linguistics",
        researchYr : 2020,
        citebox : "#popup2",
        image : "assets/images/research-page/crossLingual.png"
    },

    {
        title : "A Comprehensive Analysis of Preprocessing for Word Representation Learning in Affective Tasks",
        authors : "Nastaran Babanejad, Ameeta Agrawal, Aijun An and Manos Papagelis",
        conferences : "The 58th Annual Meeting of the Association for Computational Linguistics",
        researchYr : 2020,
        citebox : "#popup3",
        image : "assets/images/research-page/wordRepresentation.png"
    },

    {
        title : "A Contextual Hierarchical Attention Network with Adaptive Objective for Dialogue State Tracking",
        authors : "Yong Shan, Zekang Li, Jinchao Zhang, Fandong Meng, Yang Feng, Cheng Niu and Jie Zhou",
        conferences : "The 58th Annual Meeting of the Association for Computational Linguistics",
        researchYr : 2020,
        citebox : "#popup4",
        image : "assets/images/research-page/dialogueState.png"
    },

    {
        title : "Dual Super-Resolution Learning for Semantic Segmentation",
        authors : "Wang, Li and Li, Dong and Zhu, Yousong and Tian, Lu and Shan, Yi",
        conferences : "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
        researchYr : 2020,
        citebox : "#popup5",
        image : "assets/images/research-page/semanticSegmentation.png"
    },

    {
        title : "Deep Unfolding Network for Image Super-Resolution",
        authors : "Zhang, Kai and Van Gool, Luc and Timofte, Radu",
        conferences : "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
        researchYr : 2020,
        citebox : "#popup6",
        image : "assets/images/research-page/deepNetwork.png"
    },

    {
        title : "Unsupervised Learning for Intrinsic Image Decomposition From a Single Image",
        authors : "Liu, Yunfei and Li, Yu and You, Shaodi and Lu, Feng",
        conferences : "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
        researchYr : 2020,
        citebox : "#popup7",
        image : "assets/images/research-page/imageDecomposition.png"
    },

    {
        title : "Forward and Backward Information Retention for Accurate Binary Neural Networks",
        authors : "Qin, Haotong and Gong, Ruihao and Liu, Xianglong and Shen, Mingzhu and Wei, Ziran and Yu, Fengwei and Song, Jingkuan",
        conferences : "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
        researchYr : 2020,
        citebox : "#popup8",
        image : "assets/images/research-page/neuralNetworks.jpg"
    }
];

const cite1 = [{
    vancouver : "Qile Zhu, Wei Bi, Xiaojiang Liu, Xiyao Ma, Xiaolin Li and Dapeng Wu. A Batch Normalized Inference Network Keeps the KL Vanishing Away. The 58th Annual Meeting of the Association for Computational Linguistics 2020.",
    bibtex : "Qile Zhu, Wei Bi, Xiaojiang Liu, Xiyao Ma, Xiaolin Li and Dapeng Wu. A Batch Normalized Inference Network Keeps the KL Vanishing Away. The 58th Annual Meeting of the Association for Computational Linguistics 2020."
}];

const cite2 = [{
    vancouver : "Mikel Artetxe, Sebastian Ruder, Dani Yogatama, Gorka Labaka and Eneko Agirre. A Call for More Rigor in Unsupervised Cross-lingual Learning. The 58th Annual Meeting of the Association for Computational Linguistics 2020.",
    bibtex : "Mikel Artetxe, Sebastian Ruder, Dani Yogatama, Gorka Labaka and Eneko Agirre. A Call for More Rigor in Unsupervised Cross-lingual Learning. The 58th Annual Meeting of the Association for Computational Linguistics 2020."
}];

const cite3 = [{
    vancouver : "Nastaran Babanejad, Ameeta Agrawal, Aijun An and Manos Papagelis. A Comprehensive Analysis of Preprocessing for Word Representation Learning in Affective Tasks. The 58th Annual Meeting of the Association for Computational Linguistics 2020.",
    bibtex : "Nastaran Babanejad, Ameeta Agrawal, Aijun An and Manos Papagelis. A Comprehensive Analysis of Preprocessing for Word Representation Learning in Affective Tasks. The 58th Annual Meeting of the Association for Computational Linguistics 2020."
}];

const cite4 = [{
    vancouver : "Yong Shan, Zekang Li, Jinchao Zhang, Fandong Meng, Yang Feng, Cheng Niu and Jie Zhou. A Contextual Hierarchical Attention Network with Adaptive Objective for Dialogue State Tracking. The 58th Annual Meeting of the Association for Computational Linguistics 2020.",
    bibtex : "Yong Shan, Zekang Li, Jinchao Zhang, Fandong Meng, Yang Feng, Cheng Niu and Jie Zhou. A Contextual Hierarchical Attention Network with Adaptive Objective for Dialogue State Tracking. The 58th Annual Meeting of the Association for Computational Linguistics 2020."
}];

const cite5 = [{
    vancouver : "Wang, Li and Li, Dong and Zhu, Yousong and Tian, Lu and Shan, Yi. Dual Super-Resolution Learning for Semantic Segmentation. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020.",
    bibtex : "Wang, Li and Li, Dong and Zhu, Yousong and Tian, Lu and Shan, Yi. Dual Super-Resolution Learning for Semantic Segmentation. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020."
}];

const cite6 = [{
    vancouver : "Zhang, Kai and Van Gool, Luc and Timofte, Radu. Deep Unfolding Network for Image Super-Resolution. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020.",
    bibtex : "Zhang, Kai and Van Gool, Luc and Timofte, Radu. Deep Unfolding Network for Image Super-Resolution. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020."
}];

const cite7 = [{
    vancouver : "Liu, Yunfei and Li, Yu and You, Shaodi and Lu, Feng. Unsupervised Learning for Intrinsic Image Decomposition From a Single Image. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020.",
    bibtex : "Liu, Yunfei and Li, Yu and You, Shaodi and Lu, Feng. Unsupervised Learning for Intrinsic Image Decomposition From a Single Image. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020."
}];

const cite8 = [{
    vancouver : "Qin, Haotong and Gong, Ruihao and Liu, Xianglong and Shen, Mingzhu and Wei, Ziran and Yu, Fengwei and Song, Jingkuan. Forward and Backward Information Retention for Accurate Binary Neural Networks. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020.",
    bibtex : "Qin, Haotong and Gong, Ruihao and Liu, Xianglong and Shen, Mingzhu and Wei, Ziran and Yu, Fengwei and Song, Jingkuan. Forward and Backward Information Retention for Accurate Binary Neural Networks. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020."
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
            <span class = "resCite">
            <a href="${citebox}" class="button button-accent button-small">CITE</a>
            </span>
            </td>

            <td class="researchCite">
            <!--CITE BUTTON-->
            <a href="${citebox}" class="button button-accent button-small">CITE</a>
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

const citeData2 = () => {
    let output = "";
    cite2.forEach(
        ({vancouver, bibtex}) =>
        (output += `
        <tr> <td class="left-cell"> Vancouver </td> <td class="right-cell">${vancouver} </td></tr>
                    <tr> <td class="left-cell"> BibTeX </td> <td class="right-cell"> ${bibtex}
                    </td></tr>                     
        `)
    );
    citeTable2.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", citeData2);

const citeData3 = () => {
    let output = "";
    cite3.forEach(
        ({vancouver, bibtex}) =>
        (output += `
        <tr> <td class="left-cell"> Vancouver </td> <td class="right-cell">${vancouver} </td></tr>
                    <tr> <td class="left-cell"> BibTeX </td> <td class="right-cell"> ${bibtex}
                    </td></tr>                     
        `)
    );
    citeTable3.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", citeData3);

const citeData4 = () => {
    let output = "";
    cite4.forEach(
        ({vancouver, bibtex}) =>
        (output += `
        <tr> <td class="left-cell"> Vancouver </td> <td class="right-cell">${vancouver} </td></tr>
                    <tr> <td class="left-cell"> BibTeX </td> <td class="right-cell"> ${bibtex}
                    </td></tr>                     
        `)
    );
    citeTable4.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", citeData4);

const citeData5 = () => {
    let output = "";
    cite5.forEach(
        ({vancouver, bibtex}) =>
        (output += `
        <tr> <td class="left-cell"> Vancouver </td> <td class="right-cell">${vancouver} </td></tr>
                    <tr> <td class="left-cell"> BibTeX </td> <td class="right-cell"> ${bibtex}
                    </td></tr>                     
        `)
    );
    citeTable5.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", citeData5);

const citeData6 = () => {
    let output = "";
    cite6.forEach(
        ({vancouver, bibtex}) =>
        (output += `
        <tr> <td class="left-cell"> Vancouver </td> <td class="right-cell">${vancouver} </td></tr>
                    <tr> <td class="left-cell"> BibTeX </td> <td class="right-cell"> ${bibtex}
                    </td></tr>                     
        `)
    );
    citeTable6.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", citeData6);

const citeData7 = () => {
    let output = "";
    cite7.forEach(
        ({vancouver, bibtex}) =>
        (output += `
        <tr> <td class="left-cell"> Vancouver </td> <td class="right-cell">${vancouver} </td></tr>
                    <tr> <td class="left-cell"> BibTeX </td> <td class="right-cell"> ${bibtex}
                    </td></tr>                     
        `)
    );
    citeTable7.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", citeData7);

const citeData8 = () => {
    let output = "";
    cite8.forEach(
        ({vancouver, bibtex}) =>
        (output += `
        <tr> <td class="left-cell"> Vancouver </td> <td class="right-cell">${vancouver} </td></tr>
                    <tr> <td class="left-cell"> BibTeX </td> <td class="right-cell"> ${bibtex}
                    </td></tr>                     
        `)
    );
    citeTable8.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", citeData8);