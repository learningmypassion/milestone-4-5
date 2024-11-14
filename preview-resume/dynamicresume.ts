window.addEventListener('load', ()=> {
    const Name = localStorage.getItem('form_Name');
    console.log("🚀 ~ window.addEventListener ~ Name:", Name)
    const jobTitle = localStorage.getItem('form_jobTitle');
    console.log("🚀 ~ window.addEventListener ~ jobTitle:", jobTitle)
    const phone = localStorage.getItem('form_phone');
    console.log("🚀 ~ window.addEventListener ~ phone:", phone)
    const email = localStorage.getItem('form_email');
    console.log("🚀 ~ window.addEventListener ~ email:", email)
    const address = localStorage.getItem('form_address');
    console.log("🚀 ~ window.addEventListener ~ address:", address)
    const facebookadd = localStorage.getItem('form_facebookadd');
    console.log("🚀 ~ window.addEventListener ~ facebookadd:", facebookadd)
    const instaadd = localStorage.getItem('form_instaadd');
    console.log("🚀 ~ window.addEventListener ~ instaadd:", instaadd)
    const linkadd = localStorage.getItem('form_linkadd');
    console.log("🚀 ~ window.addEventListener ~ linkadd:", linkadd)
    const gitadd = localStorage.getItem('form_gitadd')
    console.log("🚀 ~ window.addEventListener ~ gitadd:", gitadd)
    const about = localStorage.getItem('form_about');
    console.log("🚀 ~ window.addEventListener ~ about:", about)
    const matric = localStorage.getItem('form_matric');
    console.log("🚀 ~ window.addEventListener ~ matric:", matric)
    const intermediate = localStorage.getItem('form_intermediate');
    console.log("🚀 ~ window.addEventListener ~ intermediate:", intermediate)
    const graduation = localStorage.getItem('form_graduation');
    console.log("🚀 ~ window.addEventListener ~ graduation:", graduation)
    const masters = localStorage.getItem('form_master');
    console.log("🚀 ~ window.addEventListener ~ masters:", masters)
    const PhD = localStorage.getItem('form_PhD');
    console.log("🚀 ~ window.addEventListener ~ PhD:", PhD)
    const jobTitleExp = localStorage.getItem('form_jobTitleExp');
    console.log("🚀 ~ window.addEventListener ~ jobTitleExp:", jobTitleExp)
    const company = localStorage.getItem('form_company');
    console.log("🚀 ~ window.addEventListener ~ company:", company)
    const startyear = localStorage.getItem('form_startyear');
    console.log("🚀 ~ window.addEventListener ~ startyear:", startyear)
    const endyear = localStorage.getItem('form_endyear');
    console.log("🚀 ~ window.addEventListener ~ endyear:", endyear)
    const skill1 = localStorage.getItem('form_skill1');
    console.log("🚀 ~ window.addEventListener ~ skill1:", skill1)
    const skill2 = localStorage.getItem('form_skill2');
    console.log("🚀 ~ window.addEventListener ~ skill2:", skill2)
    const skill3 = localStorage.getItem('form_skill3');
    console.log("🚀 ~ window.addEventListener ~ skill3:", skill3)
    const skill4 = localStorage.getItem('form_skill4');
    console.log("🚀 ~ window.addEventListener ~ skill4:", skill4)
    const skill5 = localStorage.getItem('form_skill5');
    console.log("🚀 ~ window.addEventListener ~ skill5:", skill5)
    const skill6 = localStorage.getItem('form_skill6');    
    console.log("🚀 ~ window.addEventListener ~ skill6:", skill6)
    const profilePic = localStorage.getItem('form_profilePic');
    console.log("🚀 ~ window.addEventListener ~ profilePic:", profilePic)

    
    document.getElementById('Name')!.textContent = Name;
    document.getElementById('jobTitle')!.textContent = jobTitle;
    document.getElementById('phone')!.textContent = phone;
    document.getElementById('email')!.textContent = email;
    document.getElementById('address')!.textContent = address;
    document.getElementById('aboutMe')!.textContent = about;
    document.getElementById('facebookadd')!.textContent = facebookadd;
    document.getElementById('instaadd')!.textContent = instaadd;
    document.getElementById('linkadd')!.textContent = linkadd;
    document.getElementById('gitadd')!.textContent = gitadd;
    document.getElementById('matric')!.textContent = matric;
    document.getElementById('intermediate')!.textContent = intermediate;
    document.getElementById('graduation')!.textContent = graduation;
    document.getElementById('masters')!.textContent = masters;
    document.getElementById('phd')!.textContent = PhD;
    document.getElementById('myJobTitle')!.textContent = jobTitleExp;
    document.getElementById('company')!.textContent = company;
    document.getElementById('startyear')!.textContent = startyear;
    document.getElementById('endyear')!.textContent = endyear;
    document.getElementById('skill1')!.textContent = skill1;
    document.getElementById('skill2')!.textContent = skill2;
    document.getElementById('skill3')!.textContent = skill3;
    document.getElementById('skill4')!.textContent = skill4;
    document.getElementById('skill5')!.textContent = skill5;
    document.getElementById('skill6')!.textContent = skill6;
    // document.getElementById('profilePic')!.src = profilePic;
   
    if (profilePic) {
      (document.getElementById('profilePic') as HTMLImageElement).src = profilePic;
    }
    const username = Name ? Name.toLowerCase().replace(/\s+/g, '-') : 'user'; // Generate username from the name
    const baseUrl = 'http://127.0.0.1:5500/preview-resume/dynamicresume.html'; // Your Vercel deployment URL
    const uniqueResumeUrl = `${baseUrl}?/${username}`; // Create unique URL
  
    // Set the resume link in the DOM
    const resumeLink = document.getElementById('resumeLink') as HTMLAnchorElement;
    resumeLink.setAttribute('href', uniqueResumeUrl);
  
   // Copy link to clipboard functionality
   document.getElementById('copyLinkBtn')!.addEventListener('click', () => {
     navigator.clipboard.writeText(uniqueResumeUrl).then(() => {
       alert('Resume link copied to clipboard!');
     });
   });
  
  })
  
  
  document.getElementById('editBtn')!.addEventListener('click', () => {
    window.history.back();
  });
  
  document.getElementById('printBtn')!.addEventListener('click', () => {
    window.print(); // Simply trigger the print action
  });
