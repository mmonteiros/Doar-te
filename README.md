# [Doar-te](https://demos.creative-tim.com/material-kit-react)

![version](https://img.shields.io/badge/version-1.0.0-blue.svg) ![license](https://img.shields.io/badge/license-MIT-blue.svg)

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in massa ac arcu vulputate elementum. Aliquam rutrum eu leo sed hendrerit. Vivamus quam risus, rutrum non tortor et, ornare aliquet libero. Nulla facilisi. Aenean vel sagittis enim. Nunc quis molestie nulla. Praesent lobortis ex sit amet purus vestibulum, quis varius felis finibus. Etiam molestie quam odio, quis porta mauris dictum commodo. Pellentesque convallis ullamcorper magna, sed pellentesque eros sodales ut. Nunc fringilla auctor mollis. Suspendisse ultricies elit nec porta ullamcorper. Nam risus neque, placerat sit amet nulla vitae, accumsan dignissim nisi. In luctus, quam non sollicitudin scelerisque, justo ante imperdiet ipsum, sit amet gravida velit velit sed libero. Duis viverra pulvinar nisl sed porta. Nullam a egestas nulla, ut pellentesque tortor.

Proin ornare quam eget ipsum pharetra, in dignissim turpis vehicula. Vivamus imperdiet mi vitae feugiat auctor. Aenean malesuada fermentum felis. Etiam iaculis at neque molestie dapibus. Duis et luctus orci. Donec auctor non quam a consectetur. Sed sit amet odio lacus. Nam semper maximus enim id lobortis. Aenean molestie ullamcorper dictum.

Quisque eget dolor feugiat, sodales mauris eget, consequat dui. Cras aliquet diam tellus. Nam vel est nisi. Morbi laoreet velit eget erat pharetra, ut tempor metus egestas. Etiam aliquet dolor at suscipit ullamcorper. Phasellus facilisis ipsum orci, nec feugiat risus consectetur bibendum. Aenean sodales enim eget urna maximus, eget posuere leo interdum.

## Table of Contents

* [Quick Start](#quick-start)
* [Documentation](#documentation)
* [File Structure](#file-structure)
* [Browser Support](#browser-support)
* [Resources](#resources)
* [Licensing](#licensing)


## Quick start

- Clone the repo: `git clone https://github.com/YodaDevs/Doar-te.git`.
- `cd Doar-te`
- `npm install`
- You can install with [Bower](https://bower.io/): ```bower install```.
- If you have vulnerabilities use: `npm audit -fix`
- `npm start`


## Documentation
The documentation for the Project is hosted at our [repository](https://github.com/YodaDevs/Doar-te/tree/master/Documentation).


## File Structure
Within the download you'll find the following directories and files:

```
Doar-te
.
├── CHANGELOG.md
├── ISSUE_TEMPLATE.md
├── LICENSE
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


## Licensing

- Licensed under MIT (https://github.com/YodaDevs/Doar-te/blob/master/LICENSE)


### Social Media

Twitter: <https://twitter.com/CreativeTim>

Instagram: <https://www.instagram.com/CreativeTimOfficial>
