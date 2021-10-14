const langEl = document.querySelector('.langChange')
const link = document.querySelectorAll('a.lang')
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("defaultLang").click();
})

const shortIntroEl = document.querySelector('.shortIntro')
const IntroEl = document.querySelector('.introduction')

link.forEach(el =>{
    el.addEventListener('click',()=>{
        langEl.querySelector('.active').classList.remove('active');
        el.classList.add('active');
        const attr = el.getAttribute('language');
        shortIntroEl.textContent = data[attr].shortIntro;
        IntroEl.textContent = data[attr].introduction;
        });
    });
var data = {
    "english":
        {
            "shortIntro":"A software developer who wants to prove his skills and knowledge to the world of IT",
            "introduction":"Throughout my Bachelor of Engineering (Electrical Engineering and Information Technology)" +
                "and Master of Computer Science (High Integrity System) studies, I worked on a variety of\n" +
                "projects and research projects that required me to learn and use a wide range of tools\n" +
                "(Git, Docker, Flask framework, MySQL), programming languages(C, C#, C++, Java, Python, JavaScript, PHP)\n" +
                "and project management process (Agile, Scrum). \n" +
                "With my practical and academic expertise gained via researches and projects,\n" +
                "I am looking for new challenges in software development field to test and improve myself.\n" +
                "About my status, I am fully available for work at the moment, and I am ready to relocate if it is necessary for the job.\n" +
                "If you have any questions, please contact me via my email."

        },
    "deutsch":
        {
            "shortIntro":"Ein Softwareentwickler, der seine Fähigkeiten und Kenntnisse in der Welt der IT unter Beweis stellen möchte",
            "introduction":"Während meines Studiums zum Bachelor of Engineering (Elektrotechnik und Informationstechnik)\n" +
                "\t\t\t\t\t\t\t\t\tund Master of Computer Science (High Integrity System) arbeitete ich an einer Vielzahl von\n" +
                "\t\t\t\t\t\t\t\t\tProjekten und Forschungsvorhaben gearbeitet, bei denen ich eine breite Palette von <u>Werkzeugen</u> erlernen und einsetzen musste\n" +
                "\t\t\t\t\t\t\t\t\t<b>(Git, Docker, Flask framework, MySQL)</b>, <u>Programmiersprachen</u> <b>(C, C#, C++, Java, Python, JavaScript, PHP)</b>\n" +
                "\t\t\t\t\t\t\t\t\tund <u>Projektmanagementprozess</u> <b>(Agile, Scrum)</b>. <br><br>\n" +
                "\t\t\t\t\t\t\t\t\tMit meiner praktischen und akademischen Expertise, die ich durch Recherchen und Projekte erworben habe,\n" +
                "\t\t\t\t\t\t\t\t\tIch bin auf der Suche nach neuen Herausforderungen im Bereich der Softwareentwicklung, um mich zu testen und zu verbessern.\n" +
                "\t\t\t\t\t\t\t\t\tWas meinen Status betrifft, so stehe ich derzeit voll für die Arbeit zur Verfügung und bin bereit, umzuziehen, wenn es für den Job notwendig ist.<br><br>\n" +
                "\t\t\t\t\t\t\t\t\tWenn Sie irgendwelche Fragen haben, kontaktieren Sie mich bitte über meine E-Mail.\n" +
                "\n"

        },
    "vietnamese":
        {
            "shortIntro":"Một nhà phát triển phần mềm muốn chứng minh kỹ năng và kiến thức của mình với thế giới CNTT",
            "introduction":"Trong suốt bằng Cử nhân Kỹ thuật của tôi (Kỹ thuật Điện và Công nghệ Thông tin)\n" +
                "và Thạc sĩ Khoa học Máy tính (Hệ thống Toàn vẹn Cao), tôi đã nghiên cứu nhiều loại\n" +
                "các dự án và công trình nghiên cứu yêu cầu tôi phải học và sử dụng nhiều loại <u> công cụ </u>\n" +
                "<b> (Git, Docker, khung Flask, MySQL) </b>, <u> ngôn ngữ lập trình </u> <b> (C, C #, C ++, Java, Python, JavaScript, PHP) </b>\n" +
                "và <u> quy trình quản lý dự án </u> <b> (Agile, Scrum) </b>. <br> <br>\n" +
                "Với chuyên môn thực tế và học thuật của tôi có được thông qua các nghiên cứu và dự án,\n" +
                "Tôi đang tìm kiếm những thách thức mới trong lĩnh vực phát triển phần mềm để thử nghiệm và cải thiện bản thân.\n" +
                "Về tình trạng của tôi, hiện tại tôi hoàn toàn sẵn sàng cho công việc và tôi sẵn sàng chuyển nơi làm việc nếu cần thiết. <br> <br>\n" +
                "Nếu bạn có bất kỳ câu hỏi nào, vui lòng liên hệ với tôi qua email của tôi."
        },
}