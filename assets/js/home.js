//main container as where we should add the data
var aboutContainer = document.querySelector('.about-myself')
//array containing objects with details to be shown
var aboutCards = [
    {
        icon: 'fa fa-4x fa-user-friends',
        title: 'Mentoring',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, illum. Lorem ipsum dolor sit amets.'
    },
    {
        icon: 'fa fa-4x fa-search',
        title: 'Academic Reasearch',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, illum. Lorem ipsum dolor sit amets.'
    },
    {
        icon: 'fa fa-4x fa-code-branch',
        title: 'Open Source Dev',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, illum. Lorem ipsum dolor sit amets.'
    },
    {
        icon: 'fa fa-4x fa-laptop',
        title: 'Building Softwares',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, illum. Lorem ipsum dolor sit amets.'
    }
]

//function to display cards on the home page
function displayCards(){
    console.log('ok');
    let output = ""
    aboutCards.forEach(({icon, title, desc}) => {
        output += `<div class="col">
                <div class="card">
                    <div style="width:120px;height:120px"
                        class="card-img mx-auto mt-5 d-flex justify-content-center align-items-center rounded-circle">
                        <i class="${icon}"></i>
                    </div>
                    <div class="card-body">
                        <h5 class="font-weight-bold">${title}</h5>
                        <p>${desc}</p>
                    </div>
                </div>
            </div>`
    })
    //ading contents to the container
    aboutContainer.innerHTML = output
}

document.addEventListener("DOMContentLoaded", displayCards);