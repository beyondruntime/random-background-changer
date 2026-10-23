# Codex code review instructions — Random Background Color Generator

This repository is a small website built with HTML, CSS, and vanilla JavaScript. Its primary feature is a button that generates a random background color, applies it to the page, and displays RGB and HEX color values that users can copy and paste.

## Review priorities

Review pull-request changes for concrete bugs or regressions affecting the following behavior:

1. **Button and background behavior:** Pressing the generate button triggers one intended color change; the generated color is applied to the intended page background. Check for missing or duplicate event handlers, incorrect element selectors, script-loading failures, and errors that leave the UI out of sync.
2. **RGB and HEX correctness:** RGB components must be integers from 0 through 255 inclusive. A HEX representation must be a valid six-digit `#RRGGBB` value with leading zeros where needed. The shown RGB and HEX values must describe the *same* generated background color, including on repeated clicks. Flag off-by-one errors in random generation or conversion.
3. **Copy-and-paste usability:** Displayed color values must be complete, correctly formatted, selectable or copyable, and usable as CSS color values. If the application has a copy button, verify it copies the expected value, handles clipboard failures when relevant, and does not claim success when copying failed. Do not request a copy button if the design only provides selectable text.
4. **Usable interface:** Check that the generate button and color values remain visible and usable across generated colors and common screen sizes. Flag actual contrast/readability failures, obscured controls, and broken keyboard interaction. Do not require an unrelated redesign.
5. **Real client-side risks:** Flag introduced JavaScript exceptions, broken HTML references, unsafe insertion of untrusted data into the DOM, or other demonstrable security issues. Avoid speculative security or performance findings unrelated to the changed code.

## Review feedback rules

- Focus on bugs introduced by the pull request, not pre-existing issues outside its scope.
- Report only actionable findings with a precise file/line reference, the condition that triggers the issue, its user-visible impact, and a practical suggested correction.
- Prioritize functional correctness and user impact over style preferences; avoid duplicate or purely cosmetic comments.
- Do not assume a feature exists (such as a copy button, notification, or persistent history) unless it is present in the code or requested by the change.
- These are **review instructions only**: do not create, edit, commit, or merge code as part of a review.
