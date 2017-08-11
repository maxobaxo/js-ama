# Ask Me Anything
### An ember.js exercise for Epicodus | 2017.08.11

By Max Scher

## Description

A question and answer message board, similar to Reddit, Quora, StackOverflow or other such sites. Users can submit a question, then other users can respond with answers.

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

3. Architectural Outline
  * Homepage (Index Route)
    * Loop/List containing a Question-Tile Component
      * Question-Tile Component
        * Question Content & Question Author
        * Question Content = Link-to Question-Specific Dynamic Route

  * Question-Specific Route
    * Question-Detail Component
      * Question Content & Question Author
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

* `git clone <repository-url>` this repository
* `cd js-ama`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
