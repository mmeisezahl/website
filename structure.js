//// header ////
let scrollTop = 10;
window.onscroll = function() { minimiseHeader(scrollTop) };

function minimiseHeader(scrollTop) {
    const windowWidth = window.matchMedia('(min-width: 820px)');

    let header = document.querySelector('.header');
    let ipa = document.querySelector('.ipa');
    let logo = document.querySelector('.title');
    let body = document.body;

    if (document.body.scrollTop > scrollTop || document.documentElement.scrollTop > scrollTop) {
        header.style.paddingBottom = 0;
        ipa.style.display = 'none';
        if (windowWidth.matches) {
            logo.style.fontSize = '30pt';
            logo.style.paddingTop = '20px';
        } else {
            logo.style.paddingTop = '15px';
        }
    } else {
        header.style.paddingBottom = '15px'
        ipa.style.display = 'inline-block';
        if (windowWidth.matches) {
            logo.style.fontSize = '60pt';
            logo.style.paddingTop = '0';
        } else {
            logo.style.paddingTop = '0'
        }
    };

    if (body.scrollHeight <= body.clientHeight) {
        body.style.minHeight = '104vh';
    }

};

window.addEventListener('resize', (e) => { document.body.style.minHeight = '100vh' });

//// footer //// 
document.addEventListener('DOMContentLoaded', (event) => {
    // retrieve footer //
    const footer = document.querySelector('.footer-general');
    const footerList = document.createElement('ul');
    footerList.setAttribute('class', 'footer-list');
    footer.appendChild(footerList);

    // social media //
    const socialMedia = document.createElement('li');
    socialMedia.setAttribute('class', 'socialmedia');

    // twitter
    const twitterLink = document.createElement('a');
    twitterLink.setAttribute('href', 'https://twitter.com/MMeisezahl');
    twitterLink.setAttribute('target', '_blank');

    const twitterIcon = document.createElement('img');
    twitterIcon.setAttribute('alt', 'Twitter logo');
    twitterIcon.setAttribute('src', 'img/twitter_dark.png');

    twitterLink.appendChild(twitterIcon);
    socialMedia.appendChild(twitterLink);


    // github
    const githubLink = document.createElement('a');
    githubLink.setAttribute('href', 'https://github.com/mmeisezahl');
    githubLink.setAttribute('target', '_blank');

    const githubIcon = document.createElement('img');
    githubIcon.setAttribute('alt', 'GitHub logo');
    githubIcon.setAttribute('src', 'img/github_light_32px.png');

    githubLink.appendChild(githubIcon);
    socialMedia.appendChild(githubLink);


    // name + date //
    const copyright = document.createElement('li');
    copyright.setAttribute('class', 'copyright');
    copyright.textContent = '\u00A9 Marc Meisezahl ' + new Date().getFullYear();

    // add footer elements to DOM
    footerList.appendChild(socialMedia);
    footerList.appendChild(copyright);
});

// function setAttributes(el, attributes) {
//     Object.keys(attributes).forEach(key => el.setAttribute(key, attributes[key]));
// }

//// window height ////