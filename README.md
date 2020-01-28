# [Material Kit React](https://demos.creative-tim.com/material-kit-react) [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social&logo=twitter)](https://twitter.com/home?status=Material%20Kit%20PRO%20is%20a%20Bootstrap%20UI%20Kit%20with%20a%20fresh,%20new%20design%20inspired%20by%20Google's%20Material%20Design%20%E2%9D%A4%EF%B8%8Fhttps%3A//demos.creative-tim.com/material-kit-pro/presentation.html%20%23bootstrap%20%23material%20%23design%20%23uikit%20%23premium%20%20via%20%40CreativeTim)

![version](https://img.shields.io/badge/version-1.8.0-blue.svg) ![license](https://img.shields.io/badge/license-MIT-blue.svg) [![GitHub issues open](https://img.shields.io/github/issues/creativetimofficial/material-kit-react.svg?maxAge=2592000)](https://github.com/creativetimofficial/material-kit-react/issues?q=is%3Aopen+is%3Aissue) [![GitHub issues closed](https://img.shields.io/github/issues-closed-raw/creativetimofficial/material-kit-react.svg?maxAge=2592000)](https://github.com/creativetimofficial/material-kit-react/issues?q=is%3Aissue+is%3Aclosed) [![Join the chat at https://gitter.im/NIT-dgp/General](https://badges.gitter.im/NIT-dgp/General.svg)](https://gitter.im/creative-tim-general/Lobby) [![Chat](https://img.shields.io/badge/chat-on%20discord-7289da.svg)](https://discord.gg/E4aHAQy)

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in massa ac arcu vulputate elementum. Aliquam rutrum eu leo sed hendrerit. Vivamus quam risus, rutrum non tortor et, ornare aliquet libero. Nulla facilisi. Aenean vel sagittis enim. Nunc quis molestie nulla. Praesent lobortis ex sit amet purus vestibulum, quis varius felis finibus. Etiam molestie quam odio, quis porta mauris dictum commodo. Pellentesque convallis ullamcorper magna, sed pellentesque eros sodales ut. Nunc fringilla auctor mollis. Suspendisse ultricies elit nec porta ullamcorper. Nam risus neque, placerat sit amet nulla vitae, accumsan dignissim nisi. In luctus, quam non sollicitudin scelerisque, justo ante imperdiet ipsum, sit amet gravida velit velit sed libero. Duis viverra pulvinar nisl sed porta. Nullam a egestas nulla, ut pellentesque tortor.

Proin ornare quam eget ipsum pharetra, in dignissim turpis vehicula. Vivamus imperdiet mi vitae feugiat auctor. Aenean malesuada fermentum felis. Etiam iaculis at neque molestie dapibus. Duis et luctus orci. Donec auctor non quam a consectetur. Sed sit amet odio lacus. Nam semper maximus enim id lobortis. Aenean molestie ullamcorper dictum.

Quisque eget dolor feugiat, sodales mauris eget, consequat dui. Cras aliquet diam tellus. Nam vel est nisi. Morbi laoreet velit eget erat pharetra, ut tempor metus egestas. Etiam aliquet dolor at suscipit ullamcorper. Phasellus facilisis ipsum orci, nec feugiat risus consectetur bibendum. Aenean sodales enim eget urna maximus, eget posuere leo interdum.

## Table of Contents

* [Versions](#versions)
* [Demo](#demo)
* [Quick Start](#quick-start)
* [Documentation](#documentation)
* [File Structure](#file-structure)
* [Browser Support](#browser-support)
* [Resources](#resources)
* [Reporting Issues](#reporting-issues)
* [Licensing](#licensing)
* [Useful Links](#useful-links)


## Quick start

- `npm i material-kit-react`
- [Download from Github](https://github.com/creativetimofficial/material-kit-react/archive/master.zip).
- [Download from Creative Tim](https://www.creative-tim.com/product/material-kit-react).
- Install with [Bower](https://bower.io/): ```bower install material-kit-react```.
- Clone the repo: `git clone https://github.com/creativetimofficial/material-kit-react.git`.


## Documentation
The documentation for the Material Kit React is hosted at our [website](https://demos.creative-tim.com/material-kit-react/#/documentation/tutorial).


## File Structure
Within the download you'll find the following directories and files:

```
material-kit-react
.
├── CHANGELOG.md
├── ISSUE_TEMPLATE.md
├── LICENSE.md
├── README.md
├── bower.json
├── gulpfile.js
├── jsconfig.json
├── package.json
├── Documentation
│   ├── assets
│   │   ├── css
│   │   ├── img
│   │   │   └── faces
│   │   └── js
│   └── tutorial-components.html
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── index.js
    ├── logo.svg
    ├── assets
    │   ├── css
    │   │   └── material-kit-react.css.map
    │   ├── img
    │   │   ├── examples
    │   │   └── faces
    │   ├── jss
    │   │   ├── material-kit-react
    │   │   │   ├── components
    │   │   │   └── views
    │   │   │       ├── componentsSections
    │   │   │       ├── landingPageSections
    │   │   └── material-kit-react.js
    │   └── scss
    │       ├── core
    │       │   ├── mixins
    │       │   └── variables
    │       ├── plugins
    │       └── material-kit-react.scss
    ├── components
    │   ├── Badge
    │   │   └── Badge.js
    │   ├── Card
    │   │   ├── Card.js
    │   │   ├── CardBody.js
    │   │   ├── CardFooter.js
    │   │   └── CardHeader.js
    │   ├── Clearfix
    │   │   └── Clearfix.js
    │   ├── CustomButtons
    │   │   └── Button.js
    │   ├── CustomDropdown
    │   │   └── CustomDropdown.js
    │   ├── CustomInput
    │   │   └── CustomInput.js
    │   ├── CustomLinearProgress
    │   │   └── CustomLinearProgress.js
    │   ├── CustomTabs
    │   │   └── CustomTabs.js
    │   ├── Footer
    │   │   └── Footer.js
    │   ├── Grid
    │   │   ├── GridContainer.js
    │   │   └── GridItem.js
    │   ├── Header
    │   │   ├── Header.js
    │   │   └── HeaderLinks.js
    │   ├── InfoArea
    │   │   └── InfoArea.js
    │   ├── NavPills
    │   │   └── NavPills.js
    │   ├── Pagination
    │   │   └── Pagination.js
    │   ├── Parallax
    │   │   └── Parallax.js
    │   ├── Snackbar
    │   │   └── SnackbarContent.js
    │   └── Typography
    │       ├── Danger.js
    │       ├── Info.js
    │       ├── Muted.js
    │       ├── Primary.js
    │       ├── Quote.js
    │       ├── Small.js
    │       ├── Success.js
    │       └── Warning.js
    └── views
        ├── Components
        │   ├── Components.js
        │   └── Sections
        │       ├── SectionBasics.js
        │       ├── SectionCarousel.js
        │       ├── SectionCompletedExamples.js
        │       ├── SectionDownload.js
        │       ├── SectionExamples.js
        │       ├── SectionJavascript.js
        │       ├── SectionLogin.js
        │       ├── SectionNavbars.js
        │       ├── SectionNotifications.js
        │       ├── SectionPills.js
        │       ├── SectionTabs.js
        │       └── SectionTypography.js
        ├── LandingPage
        │   ├── LandingPage.js
        │   └── Sections
        │       ├── ProductSection.js
        │       ├── TeamSection.js
        │       └── WorkSection.js
        ├── LoginPage
        │   └── LoginPage.js
        └── ProfilePage
            └── ProfilePage.js
```



## Browser Support

At present, we officially aim to support the last two versions of the following browsers:

<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/chrome-logo.png?raw=true" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/firefox-logo.png" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/edge-logo.png" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/safari-logo.png" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/opera-logo.png" width="64" height="64">


## Resources
- Demo: <https://demos.creative-tim.com/material-kit-react/#/>
- Download Page: <https://www.creative-tim.com/product/material-kit-react>
- Documentation: <https://demos.creative-tim.com/material-kit-react/#/documentation/tutorial>
- License Agreement: <https://www.creative-tim.com/license>
- Support: <https://www.creative-tim.com/contact-us>
- Issues: [Github Issues Page](https://github.com/creativetimofficial/material-kit-react/issues)


## Licensing

- Copyright 2019 Creative Tim (https://www.creative-tim.com/)

- Licensed under MIT (https://github.com/creativetimofficial/material-kit/blob/master/LICENSE.md)


### Social Media

Twitter: <https://twitter.com/CreativeTim>

Facebook: <https://www.facebook.com/CreativeTim>

Dribbble: <https://dribbble.com/creativetim>

Instagram: <https://www.instagram.com/CreativeTimOfficial>
