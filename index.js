const tabs = document.querySelectorAll('[id$=tab]');
tabs.forEach(tab=>tab.addEventListener('click',(e)=>{
    const name = e.target.id.split("-")[0];

    const activeSection = document.querySelector('[id$=section].active');
    activeSection.classList.remove('active');
    
    const matchingSection = document.querySelector(`#${name}-section`)
    matchingSection.classList.add('active');
    
    const activeTab = document.querySelector('[id$=tab].active');
    activeTab.classList.remove('active');

    tab.classList.add('active');
    
}))