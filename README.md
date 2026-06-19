# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

<img width="1600" height="271" alt="image" src="https://github.com/user-attachments/assets/00b9bf76-2ed9-4b2a-a6d6-c153d765fc66" />

Kasa is recruiting you as a freelance front-end developer to build its new web platform.

They have been in the apartment rental business for private individuals for almost 10 years now. Kasa is one of France’s leading apartment rental companies, with over 500 listings posted every day.

This is the perfect opportunity for you to add a great reference to your freelance portfolio!

<img width="180" height="80" alt="image" src="https://github.com/user-attachments/assets/eb6fa72f-e8c4-40b3-bb97-0eb5e3a86ae3" />

The Kasa website was developed over 10 years ago using ASP.NET, with lots of legacy code.

Laura, the CTO, launched a complete redesign to move to a full JavaScript stack with NodeJS on the back-end and React on the front-end. Kasa took this opportunity to request new mockups from its regular freelance designer. A big project for this year!

A briefing is scheduled with the CTO later in the week. To help you familiarize yourself with the key issues involved with the project, you receive the following summary by email:

Subject: Kasa Website Redesign Brief
From: Laura
To: Me

Hello,

Welcome! We’ve been working on this project for several months, and we’re delighted to have you onboard to help bring it to life.

 

Your goal: Start the React project and build the application, React components, and React Router routes. You should follow the Figma mockups (responsive design, of course!) and all the information provided below. Please be sure to use high-quality code! 

 

Backend/data: The back-end developer has not yet been recruited, and this will take longer than expected. So, you’ll have to manage without them for the time being. I’ve extracted the last 20 accommodation listings from this JSON file, which you can use for reference when building the frontend.

 

Technical constraints: You can find Kasa’s coding guidelines here. When creating React applications, we normally use Create React App, but you can use another bundler if you prefer, like Vite for example.

 

I hope this little recap has given you enough guidance to get started over these next few days.

Have a great day!

Laura

CTO @Kasa

Later that day, you receive an email from Paul, the designer, giving you more information about the website’s design and features. 

Subject: Features and Design
From: Paul
To: Me

Hi!

Welcome to our team! Laura asked me to bring you up to speed on the design of the new version of the website, so here are the main things you should know.

 

Design

Here are the mockups in Figma for the interface design. I usually work with logic components in Figma, and Sandra mentioned that this may be helpful to you when working in React. All the resources you’ll need can be found in the mockup (logo, component icons, etc.). Simply click the resource you want and select “Export” in the required format. I’ve put an orange rectangle over the cover images of the accommodation thumbnails that you can replace with the relevant image.

Use the website prototypes available here to accurately recreate their style in the application. You will be able to see the required animations for the dropdown menus (Collapse).

 

Functional Specifications

A few more details on the website’s features:

    To scroll through photos in the gallery (Gallery component):
        When the user is viewing the first image and clicks “Previous image”, the gallery displays the last image. 
        Conversely, when the user is viewing the last image in the gallery and clicks “Next image”, the gallery displays the first image. 
        If there is only one image, the “Next” and “Previous” buttons and numbering are not displayed.
    The gallery must always be the same height, as shown in the Figma mockup. Therefore, images will be cropped and centered within the image frame.
    Collapse: By default, Collapses are closed on page load. 
    If a Collapse is open, the user can click to close it.
        Conversely, if a Collapse is closed, clicking will open it.

 

Good luck with the development. I can’t wait to see the results!

Paul
