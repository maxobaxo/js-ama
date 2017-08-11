# Ask Me Anything
### An ember.js exercise for Epicodus | 2017.08.11

By Max Scher

## Description

A question and answer message board for parents working in web development. Users can submit a question, then other users can respond with answers.

## Planning

1. Configuration/Dependencies
  * You will need the following things properly installed on your computer.
    * [Git](https://git-scm.com/)
    * [Node.js](https://nodejs.org/) (with NPM)
    * [Bower](https://bower.io/)
    * [Ember CLI](https://ember-cli.com/)
    * [PhantomJS](http://phantomjs.org/)

2. Specifications
  * It can allow users to submit a question, and display the question and author name on the homepage.
  * It can list all questions with their respective author names on the homepage.
  * It can allow users to click a question, which will route them to another page containing additional information about said question.
  * It can allow users to edit an existing question.
  * It can allow users to submit answers to an existing question, and display the submitted answer on the page containing additional question-specific information.
  * It can allow users to delete a question.

3. Architectural Outline
  * Header/Footer
    * Link to Homepage
    * Link to LinkedIn
  * Homepage (Index Route)
    * Add-Question Component
      * Conditional statement displaying an 'Add' button or Question-Submission Form
    * Loop/List containing a Question-Tile Component
      * Question-Tile Component
        * Question Content & Question Author
        * Question Content = Link-to Question-Specific Dynamic Route

  * Question-Specific Route
    * Question-Detail Component
      * Question Content & Question Author
      * Edit-Question Component
        * Conditional statement displaying an 'Edit' button or a form to edit question content or author
      * Question Additional Details
      * Loop/List containing an Answer-Tile Component
        * Answer-Tile Component
          * Answer Content & Answer Author

4. UX/UI
  * Bootstrap Styling

5. Polish
  * Look for opportunities to refactor/DRY-up code
  * Delete any unused templates/components
  * Flesh-out rest of README

## Installation
In Terminal,
  * `git clone https://github.com/maxobaxo/js-ama`
  * `cd js-ama`
  * `npm install`
  * `bower install`
  * `ember serve`
In Browser,
  * Visit the app at [http://localhost:4200](http://localhost:4200).

## Known Bugs
* When a user updates one attribute of a post, but leaves another blank. The blank submission is captured as 'undefined', then converts to an empty string and overwrites the existing value.

## Technologies Used
* [ember.js](http://emberjs.com/)
* [Firebase](https://firebase.google.com/)
* [Bootstrap](http://getbootstrap.com/)
* Languages: HTML, CSS, JavaScript, Git

## License Information
This web application is free to use under the MIT License. |
&copy; Max Scher 2017
