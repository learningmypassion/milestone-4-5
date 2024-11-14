const NameInput = document.getElementById('Name') as HTMLInputElement;
const jobTitleInput = document.getElementById('jobTitle') as HTMLInputElement;
const phoneInput = document.getElementById('phone') as HTMLInputElement;
const emailinput = document.getElementById('email') as HTMLInputElement;
const addressInput = document.getElementById('address') as HTMLInputElement; 
const facebookaddinput = document.getElementById('facebookadd') as HTMLInputElement;
const instaaddinput = document.getElementById('instaadd') as HTMLInputElement;
const linkaddinput = document.getElementById('linkadd') as HTMLInputElement;
const gitaddinput = document.getElementById('gitadd') as HTMLInputElement;
const aboutInput = document.getElementById('about') as HTMLInputElement;
const matricInput = document.getElementById('matric') as HTMLInputElement;
const intermediateInput = document.getElementById('intermediate') as HTMLInputElement;
const graduationinput = document.getElementById('graduation') as HTMLInputElement;
const mastersinput = document.getElementById('masters') as HTMLInputElement;
const phdinput = document.getElementById('phd') as HTMLInputElement;
const jobTitleExpinput = document.getElementById('jobTitleExp') as HTMLInputElement;
const companyinput = document.getElementById('company') as HTMLInputElement;
const startyearinput = document.getElementById('startyear') as HTMLInputElement;
const endyearinput = document.getElementById('endyear') as HTMLInputElement;
const skill1Input = document.getElementById('skill1') as HTMLInputElement;
const skill2Input = document.getElementById('skill2') as HTMLInputElement;
const skill3Input = document.getElementById('skill3') as HTMLInputElement;
const skill4Input = document.getElementById('skill4') as HTMLInputElement;
const skill5Input = document.getElementById('skill5') as HTMLInputElement;
const skill6Input = document.getElementById('skill6') as HTMLInputElement;
const profilePicInput = document.getElementById('profilePic') as HTMLInputElement;



const form=document.getElementById('resumeForm') as HTMLFormElement;
const generateResumebtn = document.getElementById('generateResumebtn');
form.addEventListener('submit', (e) => {
    e.preventDefault();
  
    localStorage.setItem('form_Name', NameInput.value);
    console.log(localStorage.getItem("form_Name"))

    localStorage.setItem('form_jobTitle', jobTitleInput.value);
    console.log(localStorage.getItem("form_jobTitle"))

    localStorage.setItem('form_phone', phoneInput.value);
    console.log(localStorage.getItem("form_phone"))
    
    localStorage.setItem('form_email', emailinput.value);
    console.log(localStorage.getItem("form_email"))

    localStorage.setItem('form_address', addressInput.value);
    console.log(localStorage.getItem("form_address"))

    localStorage.setItem('form_facebookadd', facebookaddinput.value);
    console.log(localStorage.getItem("form_facebookadd"))

    localStorage.setItem('form_instaadd', instaaddinput.value);
    console.log(localStorage.getItem("form_instaadd"))

    localStorage.setItem('form_linkadd', linkaddinput.value);
    console.log(localStorage.getItem("form_linkadd"))

    localStorage.setItem('form_gitadd', gitaddinput.value);
    console.log(localStorage.getItem("form_gitadd"))

    localStorage.setItem('form_about', aboutInput.value);
    console.log(localStorage.getItem("form_about"))

    localStorage.setItem('form_matric', matricInput.value);
    console.log(localStorage.getItem("form_matric"))

    localStorage.setItem('form_intermediate', intermediateInput.value);
    console.log(localStorage.getItem("form_intermediate"))
    localStorage.setItem('form_graduation', graduationinput.value);
    console.log(localStorage.getItem("form_graduation"))
    localStorage.setItem('form_master', mastersinput.value);
    console.log(localStorage.getItem("form_master"))
    localStorage.setItem('form_PhD', phdinput.value);
    console.log(localStorage.getItem("form_PhD"))
    localStorage.setItem('form_jobTitleExp', jobTitleExpinput.value);
    console.log(localStorage.getItem("form_jobTitleExp"))
    localStorage.setItem('form_company', companyinput.value);
    console.log(localStorage.getItem("form_company"))
    localStorage.setItem('form_startyear', startyearinput.value);
    console.log(localStorage.getItem("form_startyear"))
    localStorage.setItem('form_endyear', endyearinput.value);
    console.log(localStorage.getItem("form_endyear"))
    localStorage.setItem('form_skill1', skill1Input.value);
    console.log(localStorage.getItem("form_skill1"))
    localStorage.setItem('form_skill2', skill2Input.value);
    console.log(localStorage.getItem("form_skill2"))
    localStorage.setItem('form_skill3', skill3Input.value);
    console.log(localStorage.getItem("form_skill3"))
    localStorage.setItem('form_skill4', skill4Input.value);
    console.log(localStorage.getItem("form_skill4"))
    localStorage.setItem('form_skill5', skill5Input.value);
    console.log(localStorage.getItem("form_skill5"))
    localStorage.setItem('form_skill6', skill6Input.value);
    console.log(localStorage.getItem("form_skill6"))
    
    const profilePicInput = document.getElementById('profilePic') as HTMLInputElement;

if (profilePicInput && profilePicInput.files && profilePicInput.files[0]) {
  const reader = new FileReader();
  
  reader.onload = function () {
    const base64Image = reader.result as string;
    localStorage.setItem('form_profilePic', base64Image);
    console.log(localStorage.getItem('form_profilePic'));
    window.location.href = "./preview-resume/dynamicresume.html";
  };
  
  reader.readAsDataURL(profilePicInput.files[0]);
} else {
  window.location.href = "./preview-resume/dynamicresume.html";
}
});
