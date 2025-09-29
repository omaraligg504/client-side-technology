function Person(name, position, office,age, startDate){
    this.age=age
    this.name=name;
    this.position=position
    this.office=office
    this.startDate=startDate
}

const Employees=[
    new Person("Omar Ali", "Backend Developer", "Cairo", 21, "2022-01-15"),
  new Person("Sara Mohamed", "Frontend Developer", "Giza", 24, "2021-06-10"),
  new Person("Omar Mosleh", "Supervisor", "Alexandria", 28, "2018-09-01"),
]
const headerRow = document.getElementById("table-header");
const body = document.getElementById("table-body");

const keys = ["name","position","office","age","startDate"]; 
keys.forEach(key => {
  const th = document.createElement("th");

  const container = document.createElement("div");
  container.className = "header-cell";

  const label = document.createElement("span");
  label.className="my-span"
  label.textContent = key;
    const div =document.createElement("div")
    div.className = "sort-buttons";
  const upBtn = document.createElement("button");
  upBtn.textContent = "▲";
  upBtn.className = "sort-btn";
  upBtn.onclick = () => sortTable(key, "asc");

  const downBtn = document.createElement("button");
  downBtn.textContent = "▼";
  downBtn.className = "sort-btn";
  downBtn.onclick = () => sortTable(key, "desc");
  div.appendChild(upBtn);
  div. appendChild(downBtn);
  container.appendChild(label);
  container.appendChild(div)

  th.appendChild(container);   
  headerRow.appendChild(th);
});

function renderTable() {
  body.innerHTML = "";
  Employees.forEach(emp => {
    const tr = document.createElement("tr");
    keys.forEach(key => {
      const td = document.createElement("td");
      td.textContent = emp[key];
      tr.appendChild(td);
    });
    body.appendChild(tr);
  });
}
renderTable();
function sortTable(field, order) {
  Employees.sort((a, b) => {
    let vala = a[field];
    let valb = b[field];

    if (field === "startDate") {
      vala = new Date(vala);
      valb = new Date(valb);
    }

    if (vala < valb) return order === "asc" ? -1 : 1;
    if (vala > valb) return order === "asc" ? 1 : -1;
    return 0;
  });
  renderTable();
}