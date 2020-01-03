const teleProgramVideo = () => {
    const getProgramVideo = document.querySelector('.teleprogram__video'),
        teleProgramTitle = document.querySelectorAll('.teleprogram__title'),
        teleProgramButton = document.querySelector('.teleprogram__button'),
        teleButton = teleProgramButton.querySelectorAll('.teleprogram__button-image'),
        iframe = getProgramVideo.querySelector('iframe'),
        video1 = "https://vk.com/video_ext.php?oid=-16446518&id=170576515&hash=842ba39e3baead27",
        video2 = 'https://my.mail.ru/video/embed/707635629118194115?rel=0',
        video3 = "https://ok.ru/videoembed/524186489139?rel=0",
        video4 = 'https://www.youtube.com/embed/XWgiuQfCWk0?rel=0',
        video5 = 'https://ok.ru/videoembed/878612384386?rel=0',
        videoLinks = [video1, video2, video3, video4, video5];

    let index = 0;
    teleProgramTitle.forEach((elem, i) => {
        elem.addEventListener('click', () => {
            if (!event.target.closest('#current-tv')) {
                teleProgramTitle[i].setAttribute('id', 'current-tv');
                teleButton[i].style.display = 'none';
                iframe.removeAttribute('src');
                teleProgramTitle[index].removeAttribute('id', 'current-tv');
                iframe.setAttribute('src', videoLinks[i]);
                teleButton[index].style.display = 'inline-block';
                teleProgramButton.insertBefore(teleButton[index], teleButton[5]);
                index = i;
            };
        });
    });

    teleButton.forEach((elem, i) => {
        elem.addEventListener('click', () => {
            teleProgramTitle[i].setAttribute('id', 'current-tv');
            elem.style.display = 'none';
            iframe.removeAttribute('src');
            teleProgramTitle[index].removeAttribute('id', 'current-tv');
            iframe.setAttribute('src', videoLinks[i]);
            teleButton[index].style.display = 'inline-block';
            teleProgramButton.insertBefore(teleButton[index], teleButton[5]);
            index = i;
        });
    });
};

export default teleProgramVideo;
