function validate() {
  var name = document.forms["details-Form"]["name"].value;
  var email = document.forms["details-Form"]["email"].value;
  var mobileNumber = document.forms["details-Form"]["mobileNumber"].value;
  //validating Name
  var pattern = new RegExp(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?0123456789]/); //unacceptable chars
  if (pattern.test(name)) {
    alert("Please only use Alphabets for name");
  }
  //Validating Mobile Number
  if (mobileNumber.length > 0 && mobileNumber.length != 10) {
    alert("Please enter correct Mobile Number");
  }
  var isMatch = mobileNumber.match(/^[0-9\s(-)]*$/);
  if (!isMatch) {
    alert("The mobile number contains invalid characters.");
  }
  // Validating Email
  var atPosition = email.indexOf("@");                                            
  var dotPosition = email.lastIndexOf(".");
  if (atPosition < 1 || dotPosition < atPosition + 2 || dotPosition + 2 >= email.length) {
    alert("Invalid email address.");
    return false;
  } 
  // Storing the data in local storage if all entries are correct
  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
  localStorage.setItem("mobileNumber", mobileNumber);
  create_table();
  //return true;
}


function create_table() {
  let tableBody = document.getElementById("tableBody");
  let tr = document.createElement("tr");

  //creating first (name) node
  let td1 = document.createElement("td");
  let nameNode = document.createTextNode(localStorage.getItem("name"));
  td1.appendChild(nameNode);
 
  //creating second (email) node
  let td2 = document.createElement("td");
  let emailNode = document.createTextNode(localStorage.getItem("email"));
  td2.appendChild(emailNode);

  //creating third (mobile number) node
  let td3 = document.createElement("td");
  let mobileNumberNode = document.createTextNode(localStorage.getItem("mobileNumber"));
  td3.appendChild(mobileNumberNode);
  tr.append(td1);
  tr.append(td2);
  tr.append(td3);
  tableBody.append(tr);
}
