const myProjects = [
  { title: "To-Do List App", desc: "Baro sida loo maareeyo xogta iyo Local Storage." },
  { title: "Weather App", desc: "Baro sida API looga keeno xogta cimilada dhabta ah." },
  { title: "Quiz App", desc: "Baro logic-ga su'aalaha iyo dhibco ururinta." },
  { title: "Currency Converter", desc: "Baro xisaabinta iyo sarifka lacagaha aduunka." },
  { title: "Expense Tracker", desc: "Baro sida loo xakameeyo dakhliga iyo kharashka." }
];

const projectList = document.getElementById('project-list');

myProjects.forEach(p => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `<h3>${p.title}</h3><p>${p.desc}</p>`;
  projectList.appendChild(card);
});

const form = document.getElementById('orderForm');
const message = document.getElementById('responseMessage');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  message.style.display = "block";

  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const project = document.getElementById('projectChoice').value;

  let errors = [];

  if (/\d/.test(name)) {
    errors.push("Magaca laguma dari karo lambar.");
  }

  if (isNaN(phone)) {
    errors.push("Taleefanka waa inuu lambar kaliya ahaadaa.");
  }

  if (errors.length === 0) {
    message.style.background = "#dcfce7";
    message.style.color = "#15803d";
    message.innerHTML = `Guul! ${name}, codsigaaga barashada '${project}' waa nala soo gaaray.`;
    form.reset();
  } else {
    message.style.background = "#fee2e2";
    message.style.color = "#b91c1c";
    message.innerHTML = `<strong>Fadlan sax:</strong><br>${errors.join("<br>")}`;
  }
});
