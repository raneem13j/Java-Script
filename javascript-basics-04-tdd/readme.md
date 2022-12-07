# Javascript Basics 4 - Testing & Specs

This is an example of *TDD* or [Test Driven Development](https://en.wikipedia.org/wiki/Test-driven_development).

Test Driven Development aims to write a *specification* in the form of tests, **before** writing any code.
Once the tests are written, the code is produced in such a way that they conform to the spec.

You will find a series of test which, originally, do not work. The tests are checking functions that are entirely empty, so naturally, the tests fail. Your job is to make each function pass its test, until there are no failures anymore.

3 files are of importance to you:

- `./questions.js`: this is the file containing the functions. You will be working in this file, and this file *only*
- `./questions.spec.js`: this is the testing file. You may open it to read how the tests are written, but do not change it
- `./SpecRunner.html`: this runs the tests in te browser. Open it in Chromium/Firefox to see the tests results.

## Goals:

- Practice a bit of mock-up TDD
- Practice Javascript basics
- **Competencies**: 
  - <kbd>TDD experience</kbd>
  - <kbd>strings manipulation</kbd>
  - <kbd>numbers manipulation</kbd>
  - <kbd>arrays manipulation</kbd>

## Instructions

- Get to your submission folder under the folder exercises/javascript-basics-04

1. Run `SpecRunner.html` in your browser
2. Open `questions.spec.js` in your editor
3. Look at the first test in `questions.spec.js`, which begins with `describe('stringSize', () => { ...`. Try to understand what it does
4. Open `questions.js`, and look at the first function, `const stringSize = (text) => {...`. Fill the function such as the test passes
5. Refresh `specRunner.html` in your browser (<kbd>f5</kbd> or <kbd>ctrl</kbd>+<kbd>r</kbd>)
6. You should see the first red mark become a green mark, which means the first test is passing. If it does, congrats! Go to the next test. If it doesn't, keep trying
7. Once you get to the `createLanguagesArray` function, commit  
8. When you're done, submit a pull request  