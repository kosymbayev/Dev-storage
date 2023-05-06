const logo = document.querySelector(".logo");
const sections = document.querySelectorAll("section");

function getCurrentSection() 
{
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    for (let i = sections.length - 1; i >= 0; i--) 
    {
        const section = sections[i];
        const sectionTop = section.offsetTop;
        const sectionBottom = section.offsetTop + section.offsetHeight;

        if (scrollY >= sectionTop && scrollY < sectionBottom) 
        {
            return section;
        }
    }
}

window.addEventListener("scroll", function() 
{
    const currentSection = getCurrentSection();
    //console.log("Current section:", currentSection);

    if (currentSection === undefined) 
    {
        logo.innerHTML = 'Storage'
    } 
    else 
    {
        logo.innerHTML = currentSection.getAttribute("title");
    }
});