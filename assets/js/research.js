/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
    {
        title : "A Batch Normalized Inference Network Keeps the KL Vanishing Away",
        authors : "Qile Zhu, Wei Bi, Xiaojiang Liu, Xiyao Ma, Xiaolin Li and Dapeng Wu",
        conferences : "The 58th Annual Meeting of the Association for Computational Linguistics",
        researchYr : 2020,
        citebox : "#popup1",
        image : "assets/images/research-page/inteferenceNetwork.png",
        citation: {
            vancouver: "Qile Zhu, Wei Bi, Xiaojiang Liu, Xiyao Ma, Xiaolin Li and Dapeng Wu. A Batch Normalized Inference Network Keeps the KL Vanishing Away. The 58th Annual Meeting of the Association for Computational Linguistics 2020."
        },
        abstract: "This is currently left empty and this can be considered as a dummy data 1",
        absbox: "#absPopup1"
    },

    {
        title : "A Call for More Rigor in Unsupervised Cross-lingual Learning",
        authors : "Mikel Artetxe, Sebastian Ruder, Dani Yogatama, Gorka Labaka and Eneko Agirre",
        conferences : "The 58th Annual Meeting of the Association for Computational Linguistics",
        researchYr : 2020,
        citebox : "#popup2",
        image : "assets/images/research-page/crossLingual.png",
        citation: {
            vancouver: "Mikel Artetxe, Sebastian Ruder, Dani Yogatama, Gorka Labaka and Eneko Agirre. A Call for More Rigor in Unsupervised Cross-lingual Learning. The 58th Annual Meeting of the Association for Computational Linguistics 2020."
        },
        abstract: "This is currently left empty and this can be considered as a dummy data 2",
        absbox: "#absPopup2"
    },

    {
        title : "A Comprehensive Analysis of Preprocessing for Word Representation Learning in Affective Tasks",
        authors : "Nastaran Babanejad, Ameeta Agrawal, Aijun An and Manos Papagelis",
        conferences : "The 58th Annual Meeting of the Association for Computational Linguistics",
        researchYr : 2020,
        citebox : "#popup3",
        image : "assets/images/research-page/wordRepresentation.png",
        citation: {
            vancouver: "Nastaran Babanejad, Ameeta Agrawal, Aijun An and Manos Papagelis. A Comprehensive Analysis of Preprocessing for Word Representation Learning in Affective Tasks. The 58th Annual Meeting of the Association for Computational Linguistics 2020."
        },
        abstract: "This is currently left empty and this can be considered as a dummy data 3",
        absbox: "#absPopup3"
    },

    {
        title : "A Contextual Hierarchical Attention Network with Adaptive Objective for Dialogue State Tracking",
        authors : "Yong Shan, Zekang Li, Jinchao Zhang, Fandong Meng, Yang Feng, Cheng Niu and Jie Zhou",
        conferences : "The 58th Annual Meeting of the Association for Computational Linguistics",
        researchYr : 2020,
        citebox : "#popup4",
        image : "assets/images/research-page/dialogueState.png",
        citation: {
            vancouver: "Yong Shan, Zekang Li, Jinchao Zhang, Fandong Meng, Yang Feng, Cheng Niu and Jie Zhou. A Contextual Hierarchical Attention Network with Adaptive Objective for Dialogue State Tracking. The 58th Annual Meeting of the Association for Computational Linguistics 2020."
        },
        abstract: "This is currently left empty and this can be considered as a dummy data 4",
        absbox: "#absPopup4"
    },

    {
        title : "Dual Super-Resolution Learning for Semantic Segmentation",
        authors : "Wang, Li and Li, Dong and Zhu, Yousong and Tian, Lu and Shan, Yi",
        conferences : "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
        researchYr : 2020,
        citebox : "#popup5",
        image : "assets/images/research-page/semanticSegmentation.png",
        citation: {
            vancouver: "Wang, Li and Li, Dong and Zhu, Yousong and Tian, Lu and Shan, Yi. Dual Super-Resolution Learning for Semantic Segmentation. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020."
        },
        abstract: "This is currently left empty and this can be considered as a dummy data 5",
        absbox: "#absPopup5"
    },

    {
        title : "Deep Unfolding Network for Image Super-Resolution",
        authors : "Zhang, Kai and Van Gool, Luc and Timofte, Radu",
        conferences : "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
        researchYr : 2020,
        citebox : "#popup6",
        image : "assets/images/research-page/deepNetwork.png",
        citation: {
            vancouver: "Zhang, Kai and Van Gool, Luc and Timofte, Radu. Deep Unfolding Network for Image Super-Resolution. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020."
        },
        abstract: "This is currently left empty and this can be considered as a dummy data 6",
        absbox: "#absPopup6"
    },

    {
        title : "Unsupervised Learning for Intrinsic Image Decomposition From a Single Image",
        authors : "Liu, Yunfei and Li, Yu and You, Shaodi and Lu, Feng",
        conferences : "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
        researchYr : 2020,
        citebox : "#popup7",
        image : "assets/images/research-page/imageDecomposition.png",
        citation: {
            vancouver: "Liu, Yunfei and Li, Yu and You, Shaodi and Lu, Feng. Unsupervised Learning for Intrinsic Image Decomposition From a Single Image. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020."
        },
        abstract: "This is currently left empty and this can be considered as a dummy data 7",
        absbox: "#absPopup7"
    },
    {
        title : "Forward and Backward Information Retention for Accurate Binary Neural Networks",
        authors : "Qin, Haotong and Gong, Ruihao and Liu, Xianglong and Shen, Mingzhu and Wei, Ziran and Yu, Fengwei and Song, Jingkuan",
        conferences : "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
        researchYr : 2020,
        citebox : "#popup8",
        image : "assets/images/research-page/neuralNetworks.jpg",
        citation: {
            vancouver: "Qin, Haotong and Gong, Ruihao and Liu, Xianglong and Shen, Mingzhu and Wei, Ziran and Yu, Fengwei and Song, Jingkuan. Forward and Backward Information Retention for Accurate Binary Neural Networks. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020."
        },
        abstract: "This is currently left empty and this can be considered as a dummy data 8",
        absbox: "#absPopup8"
    }
];
   
const fillData = () => {
    let output = "";
    research.forEach(
        ({image, title, authors, conferences, researchYr, citebox, absbox}) =>
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
            
            <a href="${absbox}" class="button button-accent button-small text-right button-abstract">ABSTRACT</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="${citebox}" class="button button-accent button-small button-cite">CITE</a

            </div>
            </td>
            </tr>
            `)

        );
    researchTable.innerHTML = output;

    //clearing the output variable
    output = ''

    //popup wrapper
    var citePopWrap = document.querySelector('.cite-popup-wrapper')
    
    //loop to insert values for the popup accordingly
    for (let i = 0; i < research.length; i++) {
        output += `<div id="popup${i+1}" class="overlay pt-5">
                      <div class="popup">
                        <h5>Cite</h5>
                        <a class="close" href="#!">&times;</a>
                        <div class="content">
                          <table id="citing">
                            <tbody class="citeT${i+1}">
                            <tr> <td class="left-cell"> Vancouver </td> <td class="right-cell">${research[i].citation.vancouver} </td></tr>
                          </tbody>
                          </table>
                        </div>
                      </div>
                    </div>`        
    }

    //filling the wraper
    citePopWrap.innerHTML = output

    //clearing the output variable
    output = ''

    //popup wrapper
    var absPopWrap = document.querySelector('.abstract-popup-wrapper')

    //loop to insert values for the popup accordingly
    for (let i = 0; i < research.length; i++) {
        output += `<div id="absPopup${i + 1}" class="overlay pt-5">
                      <div class="popup">
                        <h5>Abstract</h5>
                        <a class="close" href="#!">&times;</a>
                        <div class="content">
                          <table id="citing">
                            <tbody class="citeT${i + 1}">
                            <tr> <td class="left-cell"> Abstract </td> <td class="right-cell">${research[i].abstract} </td></tr>
                          </tbody>
                          </table>
                        </div>
                      </div>
                    </div>`
    }

    //filling the wraper
    absPopWrap.innerHTML = output
      
};
document.addEventListener("DOMContentLoaded", fillData);
