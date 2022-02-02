# SeBi Theme

This is a Hugo theme created for use in courses at Fontys Venlo.

## Structure

`Archetypes` These define the default [front matter](https://gohugo.io/content-management/front-matter/) for newly created docs/pages.

`Assets` These define the `CSS` (`SCSS`/`PostCSS`) and the `JavaScript` (`TypeScript`).

`Layouts` These define the layouts of the different pages and make sure the correct assets are included.

## Building

To build the project make sure to have the extended version of [Hugo](https://gohugo.io/) installed.

To build in development mode: `hugo server -D`  
To build for production: `hugo`

## Variables

The theme defines a couple of variables that can be set under the `params` section:

- **github**: Defines the `URL` to the Github repository
- **highlight**: Whether to include [highlight.js](https://highlightjs.org/) javascript and css
- **fontawesome**: Whether to include [font-awesome v4](https://fontawesome.com/v4.7/) css and font
