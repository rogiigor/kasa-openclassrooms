# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
<br>
<br>

# Scenario

<br>
<br>

<img width="768" height="130" alt="image" src="https://github.com/user-attachments/assets/00b9bf76-2ed9-4b2a-a6d6-c153d765fc66" />

<br>
<p>
Kasa is recruiting you as a freelance front-end developer to build its new web platform.
</p>
<br>
<p>
They have been in the apartment rental business for private individuals for almost 10 years now. Kasa is<br> one of France’s leading apartment rental companies, with over 500 listings posted every day.
</p>
<br>
<p>
This is the perfect opportunity for you to add a great reference to your freelance portfolio!
</p>
<br>
<br>
<div  width="768px" style="margin-left: 100px;">
    <img width="180" height="80" alt="image" src="https://github.com/user-attachments/assets/eb6fa72f-e8c4-40b3-bb97-0eb5e3a86ae3" />
</div>
<br>
<br>
<p>
The Kasa website was developed over 10 years ago using ASP.NET, with lots of legacy code.
</p>
<p>
Laura, the CTO, launched a complete redesign to move to a full JavaScript stack with NodeJS on the<br> back-end and React on the front-end. Kasa took this opportunity to request new mockups from its<br> regular freelance designer. A big project for this year!
</p>
<p>
A briefing is scheduled with the CTO later in the week. To help you familiarize yourself with the key<br> issues involved with the project, you receive the following summary by email:
</p>


### 📬 Email from Laura: Kasa Website Redesign Brief

>**Subject:** Kasa Website Redesign Brief
>**From:** Laura                          
>**To:** Me
>
>Hello,
>
>Welcome! We’ve been working on this project for several months, and we’re delighted to have<br> you onboard to help bring it to life.
>
>**Your goal:** Start the React project and build the application, React components, and React Router routes.<br> You should follow the Figma mockups (responsive design, of course!) and all the information<br> provided below. Please be sure to use high-quality code!
>
>**Backend/data:** The back-end developer has not yet been recruited, and this will take longer than expected. So, you’ll have<br> to manage without them for the time being. I’ve extracted the last 20 accommodation listings from this [JSON file](https://course.oc-static.com/projects/Web+Developer+P6/2024/JsonFile+P6.txt),<br> which you can use for reference when building the frontend.
>
>**Technical constraints:** You can find [Kasa’s coding guidelines here](https://course.oc-static.com/projects/Web+Developer+P6/2024/CodingGuidelines+P6.pdf). When creating React<br> applications, we normally use Create React App, but you can use another bundler if you prefer, like<br> Vite for example.
>
>I hope this little recap has given you enough guidance to get started over these next few days.
>
>Have a great day!
>
>**Laura**
>
>*CTO @Kasa*                    

<br>

Later that day, you receive an email from Paul, the designer, giving you more information about the<br> website’s design and features. 

<br>

### 📬 Email from Paul: Features and Design

>**Subject:** Features and Design
>**From:** Paul                         
>**To:* Me
>
>Hi!
>
>Welcome to our team! Laura asked me to bring you up to speed on the design of the new version of<br> the website, so here are the main things you should know.
>
>#### 🎨 Design
> A few more details on the website’s features:
>
>Here are the [mockups in Figma](https://www.figma.com/design/hgenykibkU4PgVgMc4vjrE/Kasa-EN-2024?node-id=0-1&p=f) for the interface design. I usually work with logic components in<br> Figma, and Sandra mentioned that this may be helpful to you when working in React. All the<br> resources you’ll need can be found in the mockup (logo, component icons, etc.). Simply click the<br> resource you want and select “Export” in the required format. I’ve put an orange rectangle over the<br> cover images of the accommodation thumbnails that you can replace with the relevant image.
>
>Use [the website prototypes available here](https://www.figma.com/proto/hgenykibkU4PgVgMc4vjrE/Kasa-EN-2024?type=design&node-id=1-142&t=uodOjlRXKBDsAS7I-0&scaling=scale-down&page-id=0%3A1) to accurately recreate their style in the application. You<br> will be able to see the required animations for the dropdown menus (Collapse).
>
>#### ⚙️ Functional Specifications
> 
>A few more details on the website’s features:
>
>* To scroll through photos in the gallery (Gallery component):<br>
>    - When the user is viewing the first image and clicks “Previous image”, the gallery displays the<br> last image. 
>    - Conversely, when the user is viewing the last image in the gallery and clicks “Next image”, the<br> gallery displays the first > image. 
>    - If there is only one image, the “Next” and “Previous” buttons and numbering are not displayed.
>* The gallery must always be the same height, as shown in the Figma mockup. Therefore, images<br> will be cropped   and centered > within the image frame.
>* Collapse: By default, Collapses are closed on page load.
>* If a Collapse is open, the user can click to close it.
>    - Conversely, if a Collapse is closed, clicking will open it.
>
>**Good luck with the development. I can’t wait to see the results!**
>
>**Paul**

# Kasa - Real Estate Accommodation Platform 🏠

Kasa is a modern web application for apartment and accommodation rentals built with **React**, **React Router**, and **Sass**. This project was developed as a core milestone for the **OpenClassrooms Web Developer / Front-End Application Developer program**. The interface is meticulously crafted following specific desktop and mobile Figma specifications to establish full responsive behavior.

---

## 🚀 Key Features Implemented

*   **Dynamic Routing:** Seamless single-page transitions managed using `react-router-dom`.
*   **Custom Gallery Component:** Smooth photo slider mimicking native asset scaling.
    *   *Looped Bounds:* Navigating backward on the first image loops directly to the final slide, and vice-versa.
    *   *Dynamic Triggers:* Navigation buttons and page counts systematically self-destruct if the target property listing only contains a single photo.
*   **Animated Collapse Containers:** Reusable accordion panels handling property details and custom item arrays (such as unit equipment specifications) with stateful toggle transitions.
*   **Static Mock Database Handling:** Fully decoupled frontend parsing property data natively from local asset extracts for 20 active accommodation targets.

---

## 🛠️ Tech Stack Used

*   **Library:** React (Functional Components + Hooks)
*   **Routing Engine:** React Router (v6)
*   **Style Sheet Preprocessor:** Sass / SCSS (Modular Variables)
*   **Build Bundler Options:** Vite

---

## 💻 Installation & Local Development Setup

To download, install, and execute this web project locally on your machine, follow these steps:

### 1. Clone the Repository
```bash
git clone https://github.com/rogiigor/kasa-openclassrooms
```

### 2. Install Project Dependencies
Run either of these package managers in your root project directory to sync modules:
```bash
npm install
# OR
yarn install
```
Once initialized, navigate your local browser to: `http://localhost:5173`.

---

## 📁 Source Code Directory Structure

```text
src/
├── assets/          # Shared layout logo files and functional icon vector assets
├── components/      # Reusable UI widgets (Header, Footer, Collapse, Gallery, Card)
├── data/            # Local JSON listing data serving as the temporary local API extract
├── pages/           # Base view components (Home, About, AccommodationDetail, NotFound404)
├── styles/          # Universal SCSS styles, colors, layouts, and responsive mixins
├── main.jsx         # Root structural layout mapping React Router route entries
└── index.html       # DOM injection mount entry point
```

---

## 📄 Project Guidelines & Constraints

*   **Responsive Scaling:** Content adapts continuously across explicit desktop, tablet, and mobile device grid points.
*   **Design Prototypes:** Pixel-perfect compliance mapping Figma font systems, margins, elements, and CSS animations.
