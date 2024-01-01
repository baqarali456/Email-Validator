var myHeaders = new Headers();
myHeaders.append("apikey", "jsq1M73I4XdttXpEpleYbikjps4ESw3W");

var requestOptions = {
  method: "GET",
  redirect: "follow",
  headers: myHeaders,
};

let str = "";

btn.addEventListener("click", async (e) => {
  e.preventDefault();
  let email = document.getElementById("Email").value;

  let response = await fetch(
    `https://api.apilayer.com/email_verification/check?email=${email}`,
    requestOptions
  );
  let result = await response.json();

  // Email Valid is true
  if (result.format_valid === true) {
    str = "";
    for (key in result) {
      str += `<div class="emailinform">${key} : ${result[key]}</div>`;
    }
    emailInfo.innerHTML = str;
  }

  // Email not Valid 
  else if (result.success === false) {
    str = "";
    const { error } = result;
    for (key in error) {
        emailInfo.innerHTML = " ";
      str += `<div>${key} : ${error[key]}</div>`;
    }
    emailInfo.innerHTML = str;
  }

  
});
