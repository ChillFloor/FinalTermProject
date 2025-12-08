# Term Project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Description

Final Term Project about myself showcasing a majority of the material covered in the course.

## Noteworthy Parts

I combined aspects from several assignments into one project. The signup form from Assignment1 appears on the 
Contact page, although it is now implemented as a React component written in JSX. GitHub Pages recommends having a 
404.html when used with React because it is a static host. Since it doesn't support wildcard routing request rewriting,
I had to create a 404.html file in the public folder in addition to a NotFound react component.  I also added an 
optional drag and drop quiz about me based off of Assignment2 on the 404.html page. My Assignment 3 Nav links had an 
animated underline on hover using the ::after pseudo-element along with the transform and transition CSS properties. 
Finally, I reused the view details aspect of Assignment 6 as part of my gallery

## Sources:

I mainly referenced the facilitator session videos and course provided materials. I used a computer SVG from svgviewer 
for the logo. It is its own React component in /components/ as Logo.js. All non-gallery images shown are from a site 
called freepiks. I used code from tutotorialkart for the animated underline on link hover.

https://www.svgviewer.dev/

https://www.freepik.com

https://www.tutorialkart.com/css/how-to-display-animated-underline-on-hover-for-a-link-using-css/