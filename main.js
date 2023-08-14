document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();
    data();
    document.getElementById("form").reset();
});

function data() {
    const form = document.getElementById("form");
    const elements = form.elements;
    const show = document.querySelector(".show");

    const div1 = document.createElement("div");
    div1.classList.add("box");

    const div2 = document.createElement("div");
    div2.classList.add("div2");

    const name = document.createElement("div");
    name.innerHTML = "NAME: " + elements[0].value;

    const en = document.createElement("div");
    en.innerHTML = "Enroll. No.: " + elements[1].value;

    const branch = document.createElement("div");
    branch.innerHTML = "BRANCH: " + elements[2].value;

    const email = document.createElement("div");
    email.innerHTML = "EMAIL: " + elements[3].value;

    const mobile = document.createElement("div");
    mobile.innerHTML = "MOBILE: " + elements[4].value;

    const skills = document.createElement("div");
    let skillsText = "SKILLS: ";
    if (elements[5].checked) {
        skillsText += "HTML";
    }
    if (elements[6].checked) {
        skillsText += (skillsText === "SKILLS: " ? "" : ", ") + "CSS";
    }
    if (elements[7].checked) {
        skillsText += (skillsText === "SKILLS: " ? "" : ", ") + "JavaScript";
    }
    skills.innerHTML = skillsText;

    div2.appendChild(name);
    div2.appendChild(en);
    div2.appendChild(branch);
    div2.appendChild(email);
    div2.appendChild(mobile);
    div2.appendChild(skills);

    div1.appendChild(div2);
    show.appendChild(div1);

    show.classList.add("show");
}
