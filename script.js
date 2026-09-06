const message = document.getElementById("message");

const characterCount =
    document.getElementById("characterCount");

const maxCount =
    document.getElementById("maxCount");

const remaining =
    document.getElementById("remaining");

const wordCount =
    document.getElementById("wordCount");

const warning =
    document.getElementById("warning");

const clearButton =
    document.getElementById("clearButton");

const copyButton =
    document.getElementById("copyButton");

const characterLimit =
    document.getElementById("characterLimit");

const setLimitButton =
    document.getElementById("setLimitButton");

const limitMessage =
    document.getElementById("limitMessage");

const infoLimit =
    document.getElementById("infoLimit");

const infoWords =
    document.getElementById("infoWords");

const infoCharacters =
    document.getElementById("infoCharacters");


let maxCharacters = 200;

const updateCounter = () => {

    const text = message.value;

    const characters = text.length;

    const left = maxCharacters - characters;

    characterCount.textContent = characters;

    maxCount.textContent = maxCharacters;

    infoCharacters.textContent = characters;

    remaining.textContent =
        `${left} characters remaining`;

    const words = text.trim()
        ? text.trim().split(/\s+/).length
        : 0;

    wordCount.textContent =
        `${words} words`;

    infoWords.textContent = words;

    if (left === 0) {

        warning.textContent =
            "⚠️ Character limit reached!";

    } else if (left <= 20) {

        warning.textContent =
            `⚠️ Only ${left} characters remaining`;

    } else if (left <= 50) {

        warning.textContent =
            `⚠️ ${left} characters remaining`;

    } else {

        warning.textContent = "";

    }
    localStorage.setItem(
        "savedMessage",
        text
    );
};

message.addEventListener(
    "input",
    updateCounter
);

setLimitButton.addEventListener(
    "click",
    () => {

        const newLimit =
            Number(characterLimit.value);


        if (newLimit < 1) {

            limitMessage.textContent =
                "Please enter a valid limit.";

            return;
        }


        maxCharacters = newLimit;

        message.maxLength = newLimit;


        if (message.value.length > newLimit) {

            message.value =
                message.value.substring(0, newLimit);

        }


        limitMessage.textContent =
            `Current limit: ${newLimit} characters`;

        infoLimit.textContent =
            newLimit;


        updateCounter();

    }
);

clearButton.addEventListener(
    "click",
    () => {

        message.value = "";

        localStorage.removeItem(
            "savedMessage"
        );

        updateCounter();

        message.focus();

    }
);

copyButton.addEventListener(
    "click",
    async () => {

        if (!message.value.trim()) {

            warning.textContent =
                "⚠️ Please enter a message first.";

            return;
        }


        await navigator.clipboard.writeText(
            message.value
        );


        warning.textContent =
            "✓ Message copied successfully!";

    }
);

document.getElementById("upperButton")
    .addEventListener("click", () => {

        message.value =
            message.value.toUpperCase();

        updateCounter();

    });

document.getElementById("lowerButton")
    .addEventListener("click", () => {

        message.value =
            message.value.toLowerCase();

        updateCounter();

    });

document.getElementById("titleButton")
    .addEventListener("click", () => {

        message.value =
            message.value.toLowerCase()
                .replace(/\b\w/g, (letter) =>
                    letter.toUpperCase()
                );

        updateCounter();

    });

document.getElementById("sentenceButton")
    .addEventListener("click", () => {

        message.value =
            message.value.toLowerCase()
                .replace(/(^\s*\w|[.!?]\s*\w)/g,
                    (letter) => letter.toUpperCase()
                );

        updateCounter();

    });

document.getElementById("trimButton")
    .addEventListener("click", () => {

        message.value =
            message.value
                .split("\n")
                .map(line => line.trim())
                .join("\n")
                .trim();

        updateCounter();

    });

document.getElementById("blankButton")
    .addEventListener("click", () => {

        message.value =
            message.value
                .split("\n")
                .filter(line => line.trim() !== "")
                .join("\n");

        updateCounter();

    });

document.getElementById("reverseButton")
    .addEventListener("click", () => {

        message.value =
            message.value
                .split("")
                .reverse()
                .join("");

        updateCounter();

    });

document.getElementById("copyTextButton")
    .addEventListener("click", async () => {

        if (!message.value.trim()) {

            warning.textContent =
                "⚠️ Please enter a message first.";

            return;
        }


        await navigator.clipboard.writeText(
            message.value
        );


        warning.textContent =
            "✓ Text copied!";

    });

document.getElementById("copyStatsButton")
    .addEventListener("click", async () => {

        const text =
            `${characterCount.textContent}/${maxCharacters} characters, ` +
            `${infoWords.textContent} words, ` +
            `${remaining.textContent}`;


        await navigator.clipboard.writeText(text);


        warning.textContent =
            "✓ Statistics copied!";

    });

document.getElementById("duplicateButton")
    .addEventListener("click", () => {

        const words =
            message.value.toLowerCase()
                .trim()
                .split(/\s+/);


        const duplicates =
            words.filter(
                (word, index) =>
                    word &&
                    words.indexOf(word) !== index
            );


        if (duplicates.length === 0) {

            warning.textContent =
                "✓ No duplicate words found.";

        } else {

            warning.textContent =
                `⚠️ Duplicate words: ${[
                    ...new Set(duplicates)
                ].join(", ")}`;

        }

    });

const savedMessage =
    localStorage.getItem("savedMessage");

if (savedMessage) {

    message.value = savedMessage;

}

updateCounter();