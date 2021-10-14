const langEl = document.querySelector('.langChange')
const shortIntroEl = document.querySelector('.shortIntro')
const link = document.querySelectorAll('a.lang')
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("defaultLang").click();
})
link.forEach(el =>{
    el.addEventListener('click',()=>{
        langEl.querySelector('.active').classList.remove('active');
        el.classList.add('active');
        const attr = el.getAttribute('language');

        shortIntroEl.textContent = data[attr].shortIntro;
          
        });
    });
var data = {
    "english":
        {
            "shortIntro":"A software developer who wants to prove his skills and knowledge to the world of IT",

        },
    "deutsch":
        {
            "shortIntro":"Ein Softwareentwickler, der seine Fähigkeiten und Kenntnisse in der Welt der IT unter Beweis stellen möchte",

        },
    "vietnamese":
        {
            "shortIntro":"Một nhà phát triển phần mềm muốn chứng minh kỹ năng và kiến thức của mình với thế giới CNTT"
        },
}