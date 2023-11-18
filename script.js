document.addEventListener('DOMContentLoaded', () => {

    function showAlertOnFirstVisit() 
    {
        const hasVisitedBefore = localStorage.getItem('hasVisited');
        if( !hasVisitedBefore ) 
        {
            alert('To play the video, hover over the image\n\nЧтобы воспроизвести видео наведитесь на картинку');

            localStorage.setItem('hasVisited', 'true');
        }
    }


    function handleHover( event ) 
    {
        const img = event.target;
        const currentSrc = img.src;

        let newSrc;
        if( currentSrc.includes("/img/") && currentSrc.endsWith('.png') )
        {
            newSrc = currentSrc.replace("/img/", "/gifs/").replace('.png', '.gif');
        }
        else if( currentSrc.includes("/gifs/") && currentSrc.endsWith('.gif') )
        {
            newSrc = currentSrc.replace("/gifs/", "/img/").replace('.gif', '.png');
        }
        else 
        {
            return;
        }

        img.src = newSrc;
    }

    showAlertOnFirstVisit()// Вызываем функцию показа алерта на первом визите

    const sectionImages = document.querySelectorAll('section img');
    sectionImages.forEach((img) => {
        img.addEventListener('mouseover', handleHover);
        img.addEventListener('mouseout', handleHover);
    });

})
