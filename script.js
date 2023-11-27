class FamilyMember {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const familyMembers = [];

function submitFamilyMember() {
  const nameInput = document.getElementById("name");
  const ageInput = document.getElementById("age");
  const genderInput = document.getElementById("gender");
  const name = nameInput.value;
  const age = parseInt(ageInput.value);
  const gender = genderInput.value;

  const familyMember = new FamilyMember(name, age, gender);
  familyMembers.push(familyMember);
  reloadFamilyMembers();
}

function reloadFamilyMembers() {
  const familyList = document.getElementById("family-members").tBodies[0];
  familyList.innerHTML = "";

  for (const familyMember of familyMembers) {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${familyMember.name}</td>
      <td>${familyMember.age}</td>
      <td>${familyMember.gender}</td>
      <td>
        <button onclick="addAge()">Add Age</button>
        <button onclick="changeName()">Change Name</button>
      </td>
    `;

    familyList.appendChild(row);
  }
}

function addAge() {
  const familyMember = familyMembers[familyMembers.length - 1];
  familyMember.age += 1;
  reloadFamilyMembers();
}

function changeName() {
  const familyMember = familyMembers[familyMembers.length - 1];
  const newName = prompt("Enter the new name:");
  familyMember.name = newName;
  reloadFamilyMembers();
}