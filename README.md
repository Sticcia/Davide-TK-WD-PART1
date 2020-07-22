# Davide-TK-WD-PART1
TravelPerk Front-End Assessment

## Clarifications
### Conventions
To layout the structure I've created various `div` containers, the CSS code of these containers can be found at the start of the `style.scss` file.

There are some generic containers:
- `.center`: code that centers the content in the page.
- `.card`: padded content with max-width.
- `.flex-wrap`: horizontal flexible responsive layout structure with wrap enabled.
- `.grid`: grid-based layout system.

And each section of the page also has a specific container, for example `.header`, `.testimonials`, `.author`... This way I can edit the CSS code of the elements inside the container to add more specific changes to elements like `p`, `h1`, `img`, etc..

At the end of the file I added some code for a responsive layout for screens less than 700px wide, most of it makes the padding and fonts smaller.

The `.hide-sm` container is used to hide elements in small screens, for example for the white boxes in the customers section and some text in the footer.

### Choices
I mostly used flexible containers to make the layout as responsive as possible and tried to keep the code specific for each element, this might make for some repetition but easier to edit in case of needed changes.

In general I spent a lot of time repeating edits because of my uncertainty with CSS code. I'm never really sure on what is the best way to go about for a specific layout, but I can get it working in various ways.
For example for the header section (the blue part) I've created a git branch where I use `.grid` instead of `.flex-wrap` to layout the content. This makes it possible to change the order of the elements on small screens (like the mobile layout shows on Figma) but I've decided to keep it as is for the delivery because of some issues. I would be able to solve them but didn't have the time to.

## Scripts
The `script.js` file contains comments that clear most of what the code does. I'm using a `form` container and added code to ignore the default submit functionality.

There are 2 methods:
- `searchAuthor()`: Search and add author to the layout, given first name and last name. This method is called by the `submit` element of the form.
- `addWork()`: Add works to the layout, given the id and a boolean to hide on mobile. This method is called in a `for` loop inside of `searchAuthor()`.

The only line of code that might need mentioning is: `xhttp.setRequestHeader('Accept', 'application/json');`. This is needed to receive a JSON response instead of the default XML format, as requested in the assessment.


## Assessment
### Part 1: HTML5 + SASS
Recreate the following design:
https://www.figma.com/file/Zk5xuUH3sioMdfnkevzw52/Content-platform-Technical-assessment?node-id=276%3A50

Important: you might need to create a free account to access the assets and measures.

Follow these rules:
- Use semantic HTML5 for the content.
- Do not use any frameworks or libraries for neither the CSS3 or JavaScript.
- Use SASS (using the SCSS syntax) for styling the webpage and make sure to upload the SCSS files to the repository too, not just the compiled CSS.
- Make sure the web page works in all browsers down to Internet Explorer 11.
- The max container width should be 1286px.
- Use the Graphik font attached to this email.
- Briefly explain on the README the tools you used and anything else you might consider that requires clarification (syntax choices, CSS naming conventions, etc.).

(Deliver the code in a Git repository - name you repository: YOUR_FIRST_NAME-TK-WD-PART1)

### Part 2: JAVASCRIPT + API
Include in the previous page a section with the biography and book titles of your favourite writer, using this API: http://www.penguinrandomhouse.biz/webservices/rest/
Follow these rules:
- Use vanilla JavaScript.
- Use the JSON response to work with.

(Deliver the code in a Git repository - name you repository: YOUR_FIRST_NAME-TK-WD-PART1)
