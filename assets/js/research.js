/*Research Details Table*/

const researchTable = document.querySelector(".main");
const citeTable = document.querySelector(".citeT");

const research = [
    {
        title : "A Batch Normalized Inference Network Keeps the KL Vanishing Away",
        authors : "Qile Zhu, Wei Bi, Xiaojiang Liu, Xiyao Ma, Xiaolin Li and Dapeng Wu",
        conferences : "The 58th Annual Meeting of the Association for Computational Linguistics",
        year : ", 2020",
        researchYr : "2 Jan, 2020",
        image : "assets/images/research-page/inteferenceNetwork.png",
        vancouver : "Qile Zhu, Wei Bi, Xiaojiang Liu, Xiyao Ma, Xiaolin Li and Dapeng Wu. A Batch Normalized Inference Network Keeps the KL Vanishing Away. The 58th Annual Meeting of the Association for Computational Linguistics 2020.",
        bibtex : "Qile Zhu, Wei Bi, Xiaojiang Liu, Xiyao Ma, Xiaolin Li and Dapeng Wu. A Batch Normalized Inference Network Keeps the KL Vanishing Away. The 58th Annual Meeting of the Association for Computational Linguistics 2020."
    },

    {
        title : "A Call for More Rigor in Unsupervised Cross-lingual Learning",
        authors : "Mikel Artetxe, Sebastian Ruder, Dani Yogatama, Gorka Labaka and Eneko Agirre",
        conferences : "The 58th Annual Meeting of the Association for Computational Linguistics",
        year : ", 2020",
        researchYr : "2 Jan, 2020",
        image : "assets/images/research-page/crossLingual.png",
        vancouver : "Mikel Artetxe, Sebastian Ruder, Dani Yogatama, Gorka Labaka and Eneko Agirre. A Call for More Rigor in Unsupervised Cross-lingual Learning. The 58th Annual Meeting of the Association for Computational Linguistics 2020.",
        bibtex : "Mikel Artetxe, Sebastian Ruder, Dani Yogatama, Gorka Labaka and Eneko Agirre. A Call for More Rigor in Unsupervised Cross-lingual Learning. The 58th Annual Meeting of the Association for Computational Linguistics 2020."
    },

    {
        title : "A Comprehensive Analysis of Preprocessing for Word Representation Learning in Affective Tasks",
        authors : "Nastaran Babanejad, Ameeta Agrawal, Aijun An and Manos Papagelis",
        conferences : "The 58th Annual Meeting of the Association for Computational Linguistics",
        year : ", 2020",
        researchYr : "2 Jan, 2020",
        image : "assets/images/research-page/wordRepresentation.png",
        vancouver : "Nastaran Babanejad, Ameeta Agrawal, Aijun An and Manos Papagelis. A Comprehensive Analysis of Preprocessing for Word Representation Learning in Affective Tasks. The 58th Annual Meeting of the Association for Computational Linguistics 2020.",
        bibtex : "Nastaran Babanejad, Ameeta Agrawal, Aijun An and Manos Papagelis. A Comprehensive Analysis of Preprocessing for Word Representation Learning in Affective Tasks. The 58th Annual Meeting of the Association for Computational Linguistics 2020."
    },

    {
        title : "A Contextual Hierarchical Attention Network with Adaptive Objective for Dialogue State Tracking",
        authors : "Yong Shan, Zekang Li, Jinchao Zhang, Fandong Meng, Yang Feng, Cheng Niu and Jie Zhou",
        conferences : "The 58th Annual Meeting of the Association for Computational Linguistics",
        year : ", 2020",
        researchYr : "2 Jan, 2020",
        image : "assets/images/research-page/dialogueState.png",
        vancouver : "Yong Shan, Zekang Li, Jinchao Zhang, Fandong Meng, Yang Feng, Cheng Niu and Jie Zhou. A Contextual Hierarchical Attention Network with Adaptive Objective for Dialogue State Tracking. The 58th Annual Meeting of the Association for Computational Linguistics 2020.",
        bibtex : "Yong Shan, Zekang Li, Jinchao Zhang, Fandong Meng, Yang Feng, Cheng Niu and Jie Zhou. A Contextual Hierarchical Attention Network with Adaptive Objective for Dialogue State Tracking. The 58th Annual Meeting of the Association for Computational Linguistics 2020."
    },

    {
        title : "Dual Super-Resolution Learning for Semantic Segmentation",
        authors : "Wang, Li and Li, Dong and Zhu, Yousong and Tian, Lu and Shan, Yi",
        conferences : "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
        year : ", 2020",
        researchYr : "2 Jan, 2020",
        image : "assets/images/research-page/semanticSegmentation.png",
        vancouver : "Wang, Li and Li, Dong and Zhu, Yousong and Tian, Lu and Shan, Yi. Dual Super-Resolution Learning for Semantic Segmentation. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020.",
        bibtex : "Wang, Li and Li, Dong and Zhu, Yousong and Tian, Lu and Shan, Yi. Dual Super-Resolution Learning for Semantic Segmentation. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020."
    },

    {
        title : "Deep Unfolding Network for Image Super-Resolution",
        authors : "Zhang, Kai and Van Gool, Luc and Timofte, Radu",
        conferences : "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
        year : ", 2020",
        researchYr : "2 Jan, 2020",
        image : "assets/images/research-page/deepNetwork.png",
        vancouver : "Zhang, Kai and Van Gool, Luc and Timofte, Radu. Deep Unfolding Network for Image Super-Resolution. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020.",
        bibtex : "Zhang, Kai and Van Gool, Luc and Timofte, Radu. Deep Unfolding Network for Image Super-Resolution. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020."
    },

    {
        title : "Unsupervised Learning for Intrinsic Image Decomposition From a Single Image",
        authors : "Liu, Yunfei and Li, Yu and You, Shaodi and Lu, Feng",
        conferences : "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
        year : ", 2020",
        researchYr : "2 Jan, 2020",
        image : "assets/images/research-page/imageDecomposition.png",
        vancouver : "Liu, Yunfei and Li, Yu and You, Shaodi and Lu, Feng. Unsupervised Learning for Intrinsic Image Decomposition From a Single Image. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020.",
        bibtex : "Liu, Yunfei and Li, Yu and You, Shaodi and Lu, Feng. Unsupervised Learning for Intrinsic Image Decomposition From a Single Image. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020."
    },

    {
        title : "Forward and Backward Information Retention for Accurate Binary Neural Networks",
        authors : "Qin, Haotong and Gong, Ruihao and Liu, Xianglong and Shen, Mingzhu and Wei, Ziran and Yu, Fengwei and Song, Jingkuan",
        conferences : "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
        year : ", 2020",
        researchYr : "2 Jan, 2020",
        image : "assets/images/research-page/neuralNetworks.jpg",
        vancouver : "Qin, Haotong and Gong, Ruihao and Liu, Xianglong and Shen, Mingzhu and Wei, Ziran and Yu, Fengwei and Song, Jingkuan. Forward and Backward Information Retention for Accurate Binary Neural Networks. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020.",
        bibtex : "Qin, Haotong and Gong, Ruihao and Liu, Xianglong and Shen, Mingzhu and Wei, Ziran and Yu, Fengwei and Song, Jingkuan. Forward and Backward Information Retention for Accurate Binary Neural Networks. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020."
    }
];

const fillData = () => {
    let output = "";
    research.forEach(
        ({image, title, authors, conferences, year, researchYr}) =>
        (output +=`
            <tr> 
            <td class="imgCol"><img src="${image}" class="rImg"></td>
            <td class = "researchTitleName">
            <div><span class="imgResponsive"><img src="${image}" class="imgRes"></span></div>
            <a href="#0" class="paperTitle"> ${title} </a> 
            <div> ${authors} </div> <div class="rConferences"> ${conferences} <span class="resYearDisplay"> ${year} </span>
            </div> 
            
            
            <!--CITE BUTTON-->
            <a href="#popup1" class="button button-accent button-small">CITE</a>

            </td> <td class="researchY">
            <span> ${researchYr} </span> </td></tr>
        `)
        );
    researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);

const citeData = () => {
    let output = "";
    research.forEach(
        ({vancouver, bibtex}) =>
        (output += `
        <tr> <td class="left-cell"> Vancouver </td> <td class="right-cell"> ${vancouver} </td></tr>
                    <tr> <td class="left-cell"> BibTeX </td> <td class="right-cell"> ${bibtex}
                    </td></tr>                     
        `)
    );
    citeTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", citeData);