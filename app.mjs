function startApp() {
  // Your entire app should not necessarily be coded inside this 
  // single function (though there's no penalty for that), 
  // so create and use/call additional functions from here

  // pls remove the below and make some magic in here!
//   console.log('PHONIE PROJECT!');
//   let button = document.getElementById('check');

  // let networks = {
  //   mtn: ['0703', '0706', '0803', '0806', '0810', '0813', '0814', '0816', '0903', '0906'],
  //   airtel: ['0701', '0708', '0802', '0808', '0812', '0902', '0907', '0901'],
  //   etisalat: ['0809', '0817', '0818', '0908', '0909'],
  //   glo: ['0705', '0805', '0807', '0811', '0815', '0905']
  // }
  
  // button.addEventListener('click', function action() {
  //   let num = document.querySelector('#num').value;
  //   console.log(num)
  //   console.log(networks.mtn)
  // });

  const header = document.querySelector('h2');
  if (header) {
    header.textContent = 'PHONIE APP!!';
  }

  
const input = document.getElementById("num")
  const text = document.getElementById("msg");
  const img = document.getElementsByTagName("img")[0];

function check(imgPath) {
    img.style.display = 'inline';
    img.src= imgPath
}

  input.addEventListener("input", (e) => {
    let value = input.value;
    if(value.length > 11) {
      // length exceeded
      img.src = ''
      img.style.display = 'none';
      text.style.color = 'red'
      text.textContent = 'Phone number length exceeded!'
    } else {
    text.style.color = 'inherit'
    text.textContent = 'Please enter your phone number'
    if (value.match(/^(070(3|6)|080(3|6)|081(0|3|4|6)|090(3|6))/)) {
      // MTN Check
      check("./image/MTN logo.png")
  } else if (value.match(/^(0705|080(5|7)|081(1|5)|0905)/)) {
      // GLO Check
      // '0705', '0805', '0807', '0811', '0815', '0905'
      check("./image/glo logo.png")
  } else if (value.match(/^(090(1|2|7)|080(2|8)|070(1|8)|0812)/)) {
      // Airtel Check
      // '0701', '0708', '0802', '0808', '0812', '0902', '0907', '0901'
      check("./image/airtel logo.png")
  } else if (value.match(/^(0809|081(7|8)|090(8|9))/)) {
      // Etisalat Check
      // '0809', '0817', '0818', '0908', '0909'
      check("./image/9mobile logo.png")
      
  }
  else {
    // No Match
    img.src = ''
    img.style.display = 'none';
    if(value.length > 7) {
    text.style.color = 'red'
    text.textContent = 'Phone number invalid' 
    }
  }
    }

    
})
};

  
  

// ======= DO NOT EDIT ============== //
export default startApp;
  // ======= EEND DO NOT EDIT ========= //