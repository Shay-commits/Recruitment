# Welcome

Welcome to this Tech Visionaries 2021 challenge!

This is a starter repository - it contains code for a very simple & generic mobile app. It's up to your team to change this code how you see fit and make the app into what you want it to be!

If you're already comfortable with this type of development, you'll be able to skip many sections of this ReadMe. If you're not, don't worry - it contains all you need to get started!

## Contents

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Hints & Tips](#hints-&-tips)
- [Stretch Goals](#stretch-goals)
- [Technical Resources & Docs](#technical-resources-&-docs)
- [Design Resources](#design-resources)

# Installation

<<<<<<< HEAD
This start point assumes you have successfully cloned the repository and are reading this from your Cloud9 IDE.
=======
This start point assumes you have successfully cloned the repository and are reading this from your Cloud9 IDE. You only need to run the instructions below once - if you've already done so as part of the IDE Set Up instructions, you can skip ahead.
>>>>>>> d52b7c1c607ab5ed6e126721ac2e1697c1b259f5

First, make sure you are using the right version of node. To do that, enter `nvm use node` into your terminal. You should see a message that starts like this: `Now using node`.

Second, run `yarn install` in the terminal. This might take a minute to complete. You should see a long output that ends with something like `success` and `✨ Done in...`.

You are now ready to run the app! See the next section to learn how, and to get familiar with its content.

# Getting Started

This section provides a high level overview of some of the tools used to run this project as well as the overall project structure. We have added enough information in the ReadMe to help get you started, however where relevant please refer to the linked documentation for further detail.

### Contents

- [AWS Cloud9 Basics](#aws-cloud9-basics)
- [Running the app](#running-the-app)
- [Using yarn](#using-yarn)
- [Folder structure](#folder-structure)
- [Starting goals](#starting-goals)

## AWS Cloud9 Basics

To ensure a consistent development experience and environment for all Tech Visionaries participants, you've been provided with a cloud IDE called Cloud9, which is an AWS service. If you've already used other IDEs, such as Visual Studio Code, Eclipse or IntelliJ, this one is not that different - you just access it through your browser instead of having to download it.

If you want to take a tour of the IDE: https://docs.aws.amazon.com/cloud9/latest/user-guide/tour-ide.html

## Running the app

<<<<<<< HEAD
_TODO - to be updated based on use of Amplify or not and possible ssh instructions to get it to run properly in Cloud9 / Cloud9 browser preview. Maybe some instructions on what happens after yarn start and how they get to a preview?_

To run the application in Cloud9, enter `yarn start` in the terminal.
=======
To run the application in Cloud9, enter `yarn start` in the terminal.
Then make sure to scan the QR code with your phone (directly with the Expo Go app on android or through the camera on iPhone).
>>>>>>> d52b7c1c607ab5ed6e126721ac2e1697c1b259f5

## Using Yarn

Yarn is a package manager that helps you use and share code.

In this project you will use it to run your app and install any additional packages.
For example, use the following command in the terminal `yarn add [package name]` to install a package and add it to your package.json file.

View the full documentation [here]('https://classic.yarnpkg.com/en/')

## Folder structure

If you're not familiar with JS development, or want to make sure you get a head start on how this app is structured, this section will walk you through the organisation of the code at a high level.

<<<<<<< HEAD
First, you can ignore the following folders:
=======
First, you can ignore the following folders & files:
>>>>>>> d52b7c1c607ab5ed6e126721ac2e1697c1b259f5

- `/.expo`
- `/.expo-shared`
- `/node_modules`
<<<<<<< HEAD
=======
- `setup.sh`
>>>>>>> d52b7c1c607ab5ed6e126721ac2e1697c1b259f5

Second, the files that sit outside the `/src` folder might come in handy if you are looking to do any of the following:

- To change the app slpash screen, favicon, or name, check `app.json`
- To see the list of app dependencies, change the app entry point file, or change yarn scripts, check `package.json`
- To change what files get committed and what files get ignored by your version control, check `.gitignore`

Third, the code for the app is inside the `/src` folder.

Now onto the details of the folder structure inside `/src`.

- Currently, `App.js` is the entry point for this app - where the first instructions are executed.
- The `/screens` folder contains the 4 screen components of the app (one for each tab of the navigator bar at the bottom of the app - Home, Content, Sign Up, and Settings). If you want to start by making small visual changes to the app code while it runs in order to get more familiar with it, open one of the files in this folder while looking at the corresponding tab in the app.
- These screens use a mixture of `react-native-paper` components, `react-native` components, and smaller custom components that can be found in the `/components` folder.
- One component in the `/components` folder that is not specific to a particular screen is the `Navigator` component found in `Navigator.js` - this is where the `react-navigation` component for the navigation bar (`MaterialBottomTabNavigator`) is created and configured, by passing it the app screens.
- The `/redux` folder contains the code for managing the store - see redux documentation (links can be found in the [Redux](#redux) section) for an explanation of each of its parts.
- The `/assets` folder contains static app assets such as images or logos - it could also contain fonts for example.

This folder structure is a starting point - you can grow it by adding new folders or change it how you and your team see fit.

## Starting goals

If, after brainstorming with your team about the challenge, you're unsure where to start with this app, here's a list of some ideas that might help. You don't have to do any of them, they are here for inspiration. For ideas that are more challenging, you can check out the [Stretch Goals](#stretch-goals) section.

- Update the Home screen and the Content screen to show content that fits with your team's concept
- Update the styling and theming of the app, as well as the app name and logo to fit with your team's concept
- Change screens entirely / replace them with something else if they don't fit with your team's concept, adding new components

If you're not sure how to start doing these, you can check out helpful resources in the [Technical Resources & Docs](#technical-resources-&-docs) section.

# Hints & Tips

- When rendering content to the app, such as in one of the screens, use React Native SafeAreaView for iOS. This automatically applies padding to reflect the portion of the screen not covered by navigation bars and other inherited views. This is currently only applicable to iOS devices. More information is available here: https://reactnative.dev/docs/safeareaview
- Most components can be customised by applying different properties. Be sure to check the full list of available properties for React Native components to see if they meet your needs. For example the React Native Button component has the available properties listed in the documentation here: https://reactnative.dev/docs/button and the React Native Paper Button component documentation has available properties listed here: https://callstack.github.io/react-native-paper/button.html
- React Native Paper allows you to apply a theme by using the Provider component. By specifiying a theme property in this Provider component you are able to apply primary and accent colours to your whole app, for example. If no theme property is provided the DefaultTheme is applied. For an example on how to use a custom theme with React Native Paper you can refer to this documentation: https://callstack.github.io/react-native-paper/theming.html
- Be sure to check out the components available with React Native Paper to see if they meet your needs. For example if you wanted to apply a top navigation bar the Appbar component could be a good option: https://callstack.github.io/react-native-paper/appbar.html
- We don't always get things right the first time. If something goes wrong be sure to check your browser console and expo console for error messages. Often these are very informative and able to point you in the right direction. Remember to utilise the inbuilt code linting in your IDE to check for any syntax errors as well. You may also find that some parts of your code work in your web browser but not in mobile - be sure to check for both.

# Stretch Goals

If you're looking for more challenging ways to make this app functional, here's a list of ideas. You don't have to implement any of these - you and your team can decide to take the app in a completely different direction! They are here if you need inspiration.

However, remember you have limited time and that you are building a prototype - make sure you prioritise what is both feasible and important for your team's concept. You can always stub or mock features you don't have time or resources to build, or just wireframe\* them and present them at the end!

\*NB: if you're not sure what a wireframe is, have a look in the [Design Resources](#design-resources) section!

## Stretch Goal Ideas

- Allow users to change the theme of the app from light to dark from the 'Settings' tab
- Collect the information from the 'Sign Up' tab into a storage system on the cloud using AWS
- Make the 'Sign Up' tab dynamic, so that users get a confirmation when they've successfully signed up
- Design and/or develop (partially or fully) a login system for signed-up users
- Add animations to your app
- Think about accessibility and the impact on your app in terms design, code, and features
- Create a (static or dynamic) welcome experience for first time users of the app
- Store the content for your app (text, images, other data...) in the cloud, and load it dynamically

# Technical Resources & Docs

This starter app is built using a combination of tools & frameworks. You can read about them below & find the links to their documentation.

If you're not familiar with any of the technologies, don't worry. You're not expected to be an expert now and you're not expected to become one in three days. As you start exploring, some might become familiar thanks to other coding you might have done.

In addition, the code of the app itself is simple, and you can see it in action by running the app. If you're lost when looking at the code, try changing small visible things to start, like the text on a button, and you will gradually understand what the code does and how you can make it do what you want.

Finally, you and your team can also choose to focus on other ways of presenting your concept at the end of the challenge, be it clickable wireframes, slides or something else.

## Sections

- [React Native](#react-native)
- [Expo](#expo)
- [React Native Paper](#react-native-paper)
- [Redux](#redux)
- [Redux Thunk](#redux-thunk)
- [React Navigation](#react-navigation)
- [CSS in React Native](#css-in-react-native)
- [AWS Cloud9](#aws-cloud9)
- [Git and Git Panel](#git-and-git-panel)

<<<<<<< HEAD
_TODO_

- amplify?

=======
>>>>>>> d52b7c1c607ab5ed6e126721ac2e1697c1b259f5
## React Native

> React Native is an open-source mobile application framework enabling developers to create native apps for Android and iOS using React.

> React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces.

Tutorial: https://reactnative.dev/docs/tutorial

Docs on getting started: https://reactnative.dev/docs/getting-started

Core components docs: https://reactnative.dev/docs/components-and-apis - Useful when you want to go beyond what the react native paper docs tell you about a component

## Expo

> Expo is a framework and a platform for universal React applications. It is a set of tools and services built around React Native and native platforms that help you develop, build, deploy, and quickly iterate on iOS, Android, and web apps from the same JavaScript/TypeScript codebase.

It will allow you to run your application directly on your own mobile phone by downloading the Expo Client app and scanning a QR code generated by the code. You'll be able to see changes to the app happen live as you edit the code.

Expo docs: https://docs.expo.io/

Expo Glossary of Terms: https://docs.expo.io/workflow/glossary-of-terms/

Expo help forums: https://forums.expo.io/

Some useful Expo Guides:

- Splash Screens -> https://docs.expo.io/guides/splash-screens/
- Icons -> https://docs.expo.io/guides/icons/
- Authentication -> https://docs.expo.io/guides/authentication

## React Redux

> Redux is a predictable state container for JavaScript apps.

> It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience

> You can use Redux together with React, or with any other view library

> React Redux is the official React binding for Redux. It lets your React components read data from a Redux store, and dispatch actions to the store to update data.

Redux Tutorial: https://redux.js.org/tutorials/essentials/part-1-overview-concepts

React Redux Tutorial: https://react-redux.js.org/introduction/basic-tutorial

## Redux Thunk

> With a plain basic Redux store, you can only do simple synchronous updates by dispatching an action. Middleware extends the store's abilities, and lets you write async logic that interacts with the store.

> Thunks are the recommended middleware for basic Redux side effects logic, including complex synchronous logic that needs access to the store, and simple async logic like AJAX requests.

The repository's ReadMe: https://github.com/reduxjs/redux-thunk

Introduction to redux middleware: https://redux.js.org/tutorials/fundamentals/part-4-store#middleware

Redux documentation on using Redux Thunk for asynchronous logic: https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware

## React Native Paper

> Paper is a collection of customizable and production-ready components for React Native, following Google’s Material Design guidelines.

_(See the [Material Design](#material-design) part of the in Design Resources section to learn more about this design system)_

It will fast-track the design and build of a beautiful, functional app for you.

The docs: https://callstack.github.io/react-native-paper/

An example: https://snack.expo.io/@react-native-paper/github.com-callstack-react-native-paper:example - See how each react native paper component works dynamically, in expo snack (use web version of the preview to avoid errors).

> Paper also allows you to apply a custom theme to your app using the provider component for an example view the documentation here: https://callstack.github.io/react-native-paper/theming.html

## React Navigation

> Routing and navigation for your React Native apps

> In a web browser, you can link to different pages using an anchor (\<a\>) tag. When the user clicks on a link, the URL is pushed to the browser history stack. When the user presses the back button, the browser pops the item from the top of the history stack, so the active page is now the previously visited page. React Native doesn't have a built-in idea of a global history stack like a web browser does -- this is where React Navigation enters the story.

Expo docs on navigation: https://docs.expo.io/guides/routing-and-navigation/

Getting started: https://reactnavigation.org/docs/getting-started

Introduction: https://reactnavigation.org/docs/hello-react-navigation

This app's current navigator: https://reactnavigation.org/docs/material-bottom-tab-navigator

## CSS in React Native

> With React Native, you add style to your application using JavaScript. Components have a property named style which can accept a JavaScript object. Style names and values closely match how CSS works normally, however names should be in camel case. For example, 'background-color' becomes backgroundColour. For more information review the documentation: https://reactnative.dev/docs/style

> In this project we have utilised the [React-Native Stylesheet API](https://reactnative.dev/docs/stylesheet) to add styles to the screen pages. As your app grows you may want to consider moving the styles into a separate stylesheet and importing into your component files as required.

You may also find learning about flexbox useful to get your layout right: https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox

## Git and Git Panel

> Git is a version control system, more information available at: https://git-scm.com/

> Git panel for AWS Cloud9 provides an interface for using Git. From here you can manage the complete source control lifecycle of your app and implement core project management features of Git such as creating and merging branches. More information on how to access and use Git panel from AWS Cloud9 is available here: https://docs.aws.amazon.com/cloud9/latest/user-guide/source-control-gitpanel.html

You can use git to make collaboration on the code with your teammates seamless, and to be able to easily rollback any changes that break your app.

# Design Resources

It's up to you & your team to divide up the work how you see fit - and to decide how much time to invest in the design of your prototype. Below is a list of resources that might help you.

If you want to agree with your team what your app should look like (at a high-level) before you start building it, it can be a good idea to work on some wireframes. What are wireframes?

> A wireframe is a low-fidelity design layout that serves three simple but exact purposes: It presents the information that will be displayed on the page. It gives an outline of structure and layout of the page. It conveys the overall direction and description of the user interface

You can wireframe on paper or using a range of digital tools. Some of those tools can also help you create higher-fidelity designs, that will look very similar to the end result.

## Figma

One example you can use in browser is [Figma](https://www.figma.com/) - you can sign up for free. You can use it for wireframing, including high-fidelity wireframes or even 'clickable' prototypes that look like the real thing. You can fast-track your designs by using the ready-made Figma wireframing template for mobile, or the Material Design Kit, since this app uses Material Design components (through React Native Paper).

A snapshot of what you can do in Figma: https://www.figma.com/design/

Wireframing in Figma: https://www.figma.com/templates/wireframe-kits/

Prototyping in Figma: https://www.figma.com/prototyping/

Figma Material Design Kits: https://www.figma.com/@materialdesign

## Material Design

> Material is a design system created by Google to help teams build high-quality digital experiences for Android, iOS, Flutter, and the web.

> Material Components are interactive building blocks for creating a user interface.

The links below concern Material Design as a design system, in abstraction of the implementation. If you're looking for documentation on how to use it in the code of the app, check out the [React Native Paper](#react-native-paper) section of this ReadMe.

Material Design System: https://material.io/design

Material Components: https://material.io/components

Material Icons: https://material.io/resources/icons/?style=baseline

## Undraw & Unsplash

If you want to use photos or illustrations in your app (whether in the Figma designs or in the code itself), make sure you take advantage of freely-usable resources rather than copyrighted ones.

For photos, use [Unsplash](https://unsplash.com/): it is full of high resolution pictures that are freely-usable. Use the search function to narrow down the list - you'll be surprised by how broad its catalogue is.

For illustrations, use [Undraw](https://undraw.co/illustrations): it is full of free high-quality SVG illustrations on hundreds of themes and keywords (again, the search functionality should be your go to). You can even import them into Figma to customise these illustrations - they are fully editable (you can changes shapes, colors, remove or add elements, combine them, etc).

## Google Fonts

Just like Unsplash and Undraw provide open images and illustrations, for fonts, a good resource is [Google Fonts](https://fonts.google.com/).

> All the fonts in our catalog are free and open source, making beautiful type accessible to anyone for any project.
