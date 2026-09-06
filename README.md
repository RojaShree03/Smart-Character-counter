# Smart Character Counter

Smart Character Counter is a simple and responsive web-based text utility created using HTML, CSS, and JavaScript.

The project allows users to type or paste text and view the character count, word count, and remaining characters in real time. It also provides useful text formatting and text management tools.

## Features

- Real-time character counting
- Word counting
- Custom character limit
- Remaining character display
- Character limit warning
- Clear text option
- Copy text option
- Uppercase conversion
- Lowercase conversion
- Title Case conversion
- Sentence Case conversion
- Trim Spaces
- Remove Blank Lines
- Reverse Text
- Duplicate word detection
- Copy Text
- Copy Statistics
- LocalStorage auto-save
- Responsive design

## Text Tools

The project provides several tools to quickly modify or manage the entered text:

- UPPERCASE - Converts the text to uppercase.
- lowercase - Converts the text to lowercase.
- Title Case - Converts the first letter of each word to uppercase.
- Sentence Case - Formats the text as sentences.
- Trim Spaces - Removes unnecessary spaces from the beginning and end of lines.
- Remove Blank Lines - Removes empty lines from the text.
- Reverse Text - Reverses the entered text.
- Highlight Duplicates - Finds duplicate words in the entered text.
- Copy Text - Copies the current text to the clipboard.
- Copy Stats - Copies the character and word statistics.

## How It Works

Users can enter text in the textarea and the application automatically updates:

- Current character count
- Maximum character limit
- Remaining characters
- Word count

Users can also set a custom character limit. The textarea automatically prevents entering more characters than the selected limit.

The entered text is automatically saved in the browser using LocalStorage so that it can be restored when the page is opened again.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Browser LocalStorage
- Clipboard API

## Project Structure

```text
Smart-Character-Counter/
│
├── index.html
├── style.css
├── script.js
└── README.md
