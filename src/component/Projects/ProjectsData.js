import monkey_app_img_light from '../../assets/project_images/web_dev/monkey_app_img_light.png'
import monkey_app_img_dark from '../../assets/project_images/web_dev/monkey_app_img_dark.png';
import portfolio_img_light from '../../assets/project_images/web_dev/portfolio_img_light.jpg';
import portfolio_img_dark from '../../assets/project_images/web_dev/portfolio_img_dark.jpg';
import engineer_news_img_light from '../../assets/project_images/web_dev/engineer_news_img_light.jpg';
import engineer_news_img_dark from '../../assets/project_images/web_dev/engineer_news_img_dark.jpg';
import monkey_weather_img_light from '../../assets/project_images/web_dev/monkey_weather_img_light.jpg';
import catkart_img_light from '../../assets/project_images/web_dev/catkart_img_light.png';
import meow_chat_img_light from '../../assets/project_images/web_dev/meow_chat_img_light.png';
const WebDevProjectsData = [
    {
        projectName: "MEOWCHAT (Real Time Chat App with storage)",
        projectType: 'Major',
        projectImageLight: meow_chat_img_light,
        projectImageDark: meow_chat_img_light,
        techUsed: ['MERN Stack', 'React Context', 'React-Router', 'Chakra UI','Node Mailer','Axios', 'web-socket', 'Cloudinary','JWT','Crypto JS','MJML'],
        projectDescription: `The project is a fully responsive full stack chat app that uses web-sockets for
        Full-duplex communication between the users. It has the functionality to show
        last online time of user. OTP based signup is used with node mailerto send OTP
        to user. File attachment (images with preview, pdf) is supported and cloudinary
        was used to store the uploaded files. The debounce function was implemented
        to show the real-time availability of username. Tokenized email verification and
        password reset were used with node-mailerto send emails and mjml for
        responsive email format.`,
        buttonLinks: [
            {
                buttonName: 'Live',
                linkUrl: 'https://meowchat.netlify.app/'
            },
            {
                buttonName: 'Source Code',
                linkUrl: 'https://github.com/masterghost2002/meowchat'
            }
        ]
    },
    {
        projectName: "CATKART (E-Commerce)",
        projectType: 'Major',
        projectImageLight: catkart_img_light,
        projectImageDark: catkart_img_light,
        techUsed: ['React', 'Styled Component', 'Router Dom','ReCharts','Cloudinary','Redux-Toolkit','ReduxPersist','Axios','Cloudinary','Express','Mongoose','Razorpay','crypto-js'],
        projectDescription: `The project is a fullstack e-commerce web-app which allows users to purchase
        products and pay using razorpay gateway. File upload is implemented using
        cloudinary to upload product and user profile images. MonkeyDashboard
        (admin panel) is integrated for admin access. Cyrpto-js is used for password
        encryption. JS-webtoken is used for building an accessToken which is further
        used to authenticate api calls. Cart and wishlist work with synchronization in
        multiple devices.`,
        buttonLinks: [
            {
                buttonName: 'Live',
                linkUrl: 'https://catkart.netlify.app/'
            },
            {
                buttonName: 'Source Code',
                linkUrl: 'https://github.com/masterghost2002/catkart'
            }
        ]
    },
    {
        projectName: "Monkey App",
        projectType: 'Major',
        projectImageLight: monkey_app_img_light,
        projectImageDark: monkey_app_img_dark,
        techUsed: ['MERN Stack', 'React Redux', 'React-Router', 'Chakra UI', 'Node Mailer', 'Axios', 'JODIT'],
        projectDescription: `Monkey-App (Blogging Site)\n
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
                buttonName: 'Live',
                linkUrl: 'https://monkey-app.netlify.app'
            },
            {
                buttonName: 'Source Code',
                linkUrl: 'https://github.com/masterghost2002/Monkey-Blog'
            }
        ]
    },
    {
        projectName: "Portfolio",
        projectType: 'Minor',
        projectImageLight: portfolio_img_light,
        projectImageDark: portfolio_img_dark,
        techUsed: ['React','React-Router', 'Chakra UI','Email JS', 'Swiper JS'],
        projectDescription: `
            Created and deployed this beautiful portfolio app having simple and sleak design.
            Have light and dark mode.
            Use swiper JS for crausols.
            Node Mailer to send a contact mail.
            Performance score (Lighthouse): 99 (Performance), 100 (best practice), 100 (accessibility), 91 (SEO)`,
        buttonLinks: [
            {
                buttonName: 'Live',
                linkUrl: 'https://rakeshdhariwal-portfolio.netlify.app'
            },
            {
                buttonName: 'Source Code',
                linkUrl: 'https://github.com/masterghost2002/Monkey-Blog'
            }
        ]
    },
    {
        projectName: "Engineer News",
        projectType: 'Minor',
        projectImageLight: engineer_news_img_light,
        projectImageDark: engineer_news_img_dark,
        techUsed: ['React', 'React-Infinite-Loader', 'News-Api', 'Top Loader', 'Bootstrap'],
        projectDescription: `
            Created a react app which fetches the news using news api.
            Implemented a button to choose different catagory news.
            Uses React Infinte scroller for continue flow of news.
            Dark and Light theme support.
            Works in local host only because news-api is free of localhost. 
            `,
        buttonLinks: [
            {
                buttonName: 'Source Code',
                linkUrl: 'https://github.com/masterghost2002/newsapp_engineernews'
            }
        ]
    },
    {
        projectName: "Monkey Weather",
        projectType: 'Minor',
        projectImageLight: monkey_weather_img_light,
        projectImageDark: monkey_weather_img_light,
        techUsed: ['React', 'AccuWeather-Api', 'Bootstrap'],
        projectDescription: `
            Created a react app which shows the weather of request country/state.
            Implemented a search bar to search weather of different country/state.
            Works in local host only because AccuWeather is free of localhost. 
            `,
        buttonLinks: [
            {
                buttonName: 'Source Code',
                linkUrl: 'https://github.com/masterghost2002/monkey_weather'
            }
        ]
    }
]
export { WebDevProjectsData };