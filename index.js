const bioBody = document.querySelector('#bio-body')
const portfolioBody = document.querySelector("#portfolio-body");
const recycleBody = document.querySelector("#recycle-body");
const contactBody = document.querySelector("#contact-body");
const poemBody = document.querySelector("#poem-body");

const sections = [
    {title:"About Me",body:bioBody,color:'blue',ext:'doc'},
    {title:"Portfolio",pinned:true, body:portfolioBody,color:'green',ext:'xls'},
    {title:"Contact", body:contactBody,color:'blue',ext:'json'},
    {title:"Chaucer's Fortune", body:poemBody},
    {},{},{},{},
    {title:'Recycle',body:recycleBody,ext:'recycle'},
    {},{},{},{},{},{},{},{},{},
    {},{},{},{},{},{},{},{},{},
    {},{},{},{},{},{},{},{},{},
    {},{},{},{},{},{},{},{},{},
    {},{},{},{},{},{},{},{},{},
    {},{},{},{},{},{},{},{},{},
    {},{},{},{},{},{},{},{},{},
    {},{},{},{},{},{},{},{},{},
    {},{},{},{},{},{},{},{},{},
    {},{},{},{},{},{},{},{},{},
];

let maxZIndex = 1;

const bringToFront = (windowObject) => {
    maxZIndex++;
    windowObject.style.zIndex = maxZIndex;
}

const openWindow = (windowObject, toolbarIcon) => {
    windowObject.classList.add("open");
    toolbarIcon.classList.add('show');
    toggleActiveToolbarIcon(toolbarIcon);
}

const closeWindow = (windowObject, toolbarIcon) => {
    windowObject.classList.remove("open");
    toolbarIcon.classList.remove('show');
    toggleActiveToolbarIcon()
}

const minimizeWindow = (windowObject,toolbarIcon) => {
    windowObject.classList.remove("open");
    toggleActiveToolbarIcon(toolbarIcon);
}

const toggleWindow = (windowObject,toolbarIcon) => {
    windowObject.classList.toggle('open');
    bringToFront(windowObject);
    toggleActiveToolbarIcon(toolbarIcon);
}

const handleDesktopIconClick = ({e,windowObject,toolbarIcon,desktopIcon}) => {
    bringToFront(windowObject);
    openWindow(windowObject,toolbarIcon);
}

const toggleActiveToolbarIcon = (toolbarIcon) => {
    console.log({toolbarIcon})
    const activeToolbarIcon = document.querySelector('.active');
    activeToolbarIcon?.classList.remove('active');
    toolbarIcon?.classList.toggle('active');
}

const desktopIcons = document.querySelector("#icons");
const toolbarUL = document.querySelector('#start-bar ul');
const windowObjects = document.querySelector("#window-objects");

const srcs = {
    txt: 'text-logo.png',
    xls: 'excel-logo.png',
    doc: 'word-logo.png',
    ppt: 'ppt-logo.png',
    jsx:'vscode-logo.png',
    json:'vscode-logo.png',
    recycle: 'recycle.png'
}

sections.forEach(({title,pinned,body,color,ext},i)=>{
    ext = ext || 'txt'
    color = color || "grey";
    const src = `/project-week3/images/${srcs[ext]}`
    const desktopIcon = document.createElement('div');
    desktopIcon.className='desktop-icon'
    desktopIcons.append(desktopIcon)
    
    if(!title){
        return;
    }
    
    desktopIcon.innerHTML = `
    <img src=${src} alt=${title} class=${ext} />
    <div>${title}</div>
    `;


    const toolbarIcon = document.createElement('li');
    toolbarIcon.innerHTML = `<img src=${src} alt=${title} class=${ext} />`
    toolbarIcon.className=`toolbar-icon${pinned?" pinned":""}`
    toolbarUL.append(toolbarIcon)
    
    
    const minimizeIcon = document.createElement('li');
    minimizeIcon.className = "minimize-icon";
    minimizeIcon.innerHTML = "-";
    
    const closeIcon = document.createElement("li");
    closeIcon.className = "close-icon";
    closeIcon.innerHTML = "X";
    
    
    const borderBarUL = document.createElement('ul');
    borderBarUL.append(minimizeIcon,closeIcon);
    
    const nameElement = document.createElement('span');
    nameElement.className="title";
    nameElement.innerHTML = "Cedrick Catalan"
    
    const titleElement = document.createElement('span');
    titleElement.className ="title";
    titleElement.innerHTML = `${title}.${ext}`;
    
    const borderBar = document.createElement('container');
    borderBar.append(nameElement, titleElement,borderBarUL);
    borderBar.className='border-bar';
    borderBar.style.backgroundColor=color;

    const bodyElement = document.createElement('div');
    bodyElement.className='body';
    bodyElement.append(body);
    
    const windowObject = document.createElement('container');
    windowObject.className="window-object closed maximized";
    windowObject.append(borderBar,bodyElement);
    
    windowObjects.append(windowObject)
    
    toolbarIcon.addEventListener('click',(e)=>toggleWindow(windowObject,toolbarIcon))
    desktopIcon.addEventListener('click',(e)=>handleDesktopIconClick({e,windowObject,toolbarIcon,desktopIcon}));
    minimizeIcon.addEventListener('click',(e)=>minimizeWindow(windowObject, toolbarIcon));
    closeIcon.addEventListener('click',(e)=>closeWindow(windowObject,toolbarIcon))

})