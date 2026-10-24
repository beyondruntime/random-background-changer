# Contributing

Thanks for your interest in contributing to Random Background Changer. Whether you are fixing a bug, improving the interface, or suggesting a small enhancement, your help is appreciated.

This project is independently maintained by [@beyondruntime](https://github.com/beyondruntime), who is responsible for reviewing, approving, and merging contributions. Review timing and final decisions may vary depending on maintainer availability.

## Code of Conduct

This project is governed by our [Code of Conduct](./CODE_OF_CONDUCT.md). By participating, you agree to uphold it.

## Ways to Contribute

You can contribute by:

- Reporting bugs or usability issues
- Suggesting practical feature ideas
- Improving documentation
- Fixing frontend behavior or styling
- Refactoring code to improve readability or maintainability
- Adding tests or validation steps for the app

## Before You Start

1. Check whether an issue already exists for the change you want to propose.
2. For a significant change, open an issue first to explain the idea and discuss the approach.
3. Keep your changes focused and avoid unrelated modifications.
4. If you are unsure whether a change fits the project, open an issue to ask.

## Local Development Setup

This is a static web app built with HTML, CSS, and vanilla JavaScript. It has no package installation or build step.

### Run the project

Open `index.html` in a browser to launch the application. The page loads its CSS and JavaScript files automatically.

Some browsers may restrict clipboard access when a page is opened as a local file. If you are testing the copy buttons, use a browser context that allows clipboard access.

## Project Structure

```text
random-background-changer/
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── LICENSE
├── README.md
├── index.html
├── css/
│   └── style.css
└── js/
    └── script.js
```

## Contribution Workflow

1. Fork the repository and create a branch for your change.
2. Make a focused change that follows the existing project conventions.
3. Open the page in a browser and validate the affected behavior.
4. Commit your changes with a clear message.
5. Open a pull request describing what changed and why.

Example branch names:

```bash
git checkout -b fix-color-copy
git checkout -b feature-color-history
```

## Commit Messages

Use clear, descriptive commit messages.

Examples:

```bash
git commit -m "Fix HEX value formatting"
git commit -m "Improve button styling for accessibility"
git commit -m "Add contribution guidelines"
```

## Pull Request Guidelines

Before submitting a pull request:

- Ensure the app still works as expected in a browser.
- Keep the change scoped and easy to review.
- Include a summary of the update and the problem it addresses.
- Mention screenshots or visual changes, if relevant.
- Reference related issues when applicable.

A good pull request description explains what changed, why it was needed, and how it was validated.

## Styling and Code Quality

This project is intentionally lightweight. Please help keep it readable and maintainable:

- Use clear variable and function names.
- Keep functions and logic straightforward.
- Avoid unnecessary complexity or dependencies.
- Preserve the simple static nature of the application.
- Follow existing conventions unless a change clearly improves them.

## Testing

This repository does not currently include automated tests. Validate changes manually in a browser and describe the checks you performed in your pull request.

For changes to color generation or display, check that:

- Clicking the generate button changes the page background.
- The displayed RGB components are integers from 0 through 255.
- The HEX value is a six-digit `#RRGGBB` color matching the background.
- The RGB and HEX copy buttons copy their corresponding values after a color is generated.
- The page and controls remain readable and usable with different generated colors.

## Reporting Issues

When submitting an issue, include:

- A concise title
- Steps to reproduce the problem
- Expected and actual behavior
- Browser name and version, if relevant
- Screenshots or examples, if helpful

## Feature Requests

Feature requests are welcome. Please keep suggestions practical and aligned with this project's goal of providing a lightweight random background color changer.

## Licensing

By contributing to this project, you agree that your contributions will be distributed under the project's [MIT License](./LICENSE).

## Questions?

If you are unsure about anything, open an issue with your question or suggestion.
