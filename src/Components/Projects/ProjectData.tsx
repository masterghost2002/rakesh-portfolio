import monkey_app_img_light from '../assests/projectImages/monkey_app_img_light.png';
import monkey_app_img_dark from '../assests/projectImages/monkey_app_img_dark.png';
import portfolio_img_light from '../assests/projectImages/portfolio_img_light.jpg';
import portfolio_img_dark from '../assests/projectImages/portfolio_img_dark.jpg';
import engineer_news_img_light from '../assests/projectImages/engineer_news_img_light.jpg';
import engineer_news_img_dark from '../assests/projectImages/engineer_news_img_dark.jpg';
import monkey_weather_img_light from '../assests/projectImages/monkey_weather_img_light.jpg';
const projectsData = [
    {
        projectName:"Monkey App",
        projectType:'Major',
        projectImageLight: monkey_app_img_light,
        projectImageDark: monkey_app_img_dark,
        techUsed: 'MERN Stack, React Redux, React-Router, Chakra UI, Node Mailer, Axios, JODIT',
        projectDescription:`Monkey-App (Blogging Site)\n
            Deployed a full stack blogging web-app release over 11+ versions of it.\n
            Write the logic of 4 digit email OTP verification which is done during password reset and Sign-Up.\n
            Node Mailer is used to send OTP and mjml for responsive email template.\n
            Implemented the logic of auto login if the user leave the site logged in.\n
            JWT encrypted token is used for authorization during auto login, and CRUD operation of blog.\n
            JODIT rich text editor is used for editing of blog use r can also embed video links into blog.\n
            Write the logic to search blog using blog title/user name, can download the blog as PDF in just one click.\n
            Chakra UI is used to build responsive and modern UI , Memorised dark/light theme.\n
            Have the capability to handle approx 100 mb of blog-size at a time.\n
            Performance score (Lighthouse): 96 (Performance), 100 (best practice), 93 (accessibility), 91 (SEO).`,
        buttonLinks: [
            {
                buttonName:'Live Link',
                linkUrl: 'https://monkey-app.netlify.app'
            },
            {
                buttonName:'Api Docs',
                linkUrl: 'https://github.com/masterghost2002/Monkey-Blog'
            },
            {
                buttonName:'Source Code',
                linkUrl: 'https://github.com/masterghost2002/Monkey-Blog'
            }
        ]
    },
    {
        projectName:"Portfolio",
        projectType:'Minor',
        projectImageLight: portfolio_img_light,
        projectImageDark: portfolio_img_dark,
        techUsed: 'React,React-Router, Chakra UI,Email JS, Swiper JS',
        projectDescription:`
            Created and deployed this beautiful portfolio app having simple and sleak design.
            Have light and dark mode.
            Use swiper JS for crausols.
            Node Mailer to send a contact mail.
            Performance score (Lighthouse): 99 (Performance), 100 (best practice), 100 (accessibility), 91 (SEO)`,
        buttonLinks: [
            {
                buttonName:'Live Link',
                linkUrl: 'https://rakeshdhariwal-portfolio.netlify.app'
            },
            {
                buttonName:'Source Code',
                linkUrl: 'https://github.com/masterghost2002/Monkey-Blog'
            }
        ]
    },
    {
        projectName:"Engineer News",
        projectType:'Minor',
        projectImageLight: engineer_news_img_light,
        projectImageDark: engineer_news_img_dark,
        techUsed: 'React, React-Infinite-Loader, News-Api, Top Loader, Bootstrap',
        projectDescription:`
            Created a react app which fetches the news using news api.
            Implemented a button to choose different catagory news.
            Uses React Infinte scroller for continue flow of news.
            Dark and Light theme support.
            Works in local host only because news-api is free of localhost. 
            `,
        buttonLinks: [
            {
                buttonName:'Source Code',
                linkUrl: 'https://github.com/masterghost2002/newsapp_engineernews'
            }
        ]
    },
    {
        projectName:"Monkey Weather",
        projectType:'Minor',
        projectImageLight: monkey_weather_img_light,
        projectImageDark: monkey_weather_img_light,
        techUsed: 'React, AccuWeather-Api, Bootstrap',
        projectDescription:`
            Created a react app which shows the weather of request country/state.
            Implemented a search bar to search weather of different country/state.
            Works in local host only because AccuWeather is free of localhost. 
            `,
        buttonLinks: [
            {
                buttonName:'Source Code',
                linkUrl: 'https://github.com/masterghost2002/monkey_weather'
            }
        ]
    }
]
export {projectsData};