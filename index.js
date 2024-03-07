const tabs = document.querySelectorAll('[id$=tab]');
console.log({tabs})
tabs.forEach(tab=>tab.addEventListener('click',(e)=>{
    const name = e.target.id.split("-")[0];
    const activeSection = document.querySelector('active');
    activeSection.classList.remove('active');
    const matchingSection = document.querySelector(`#${name}-section`)
    matchingSection.classList.add('active')
}))