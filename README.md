## My Portfolio

## Sections

✔️ Summary and About me\
✔️ Skills\
✔️ Education\
✔️ Work Experience\
✔️ Feedbacks\
✔️ Projects\
✔️ Github Profile

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

You'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer.
<br>
**For Windows** Install Visual C++ Build Environment: [Visual Studio Build Tools](https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=BuildTools)

```
node@v10.16.0 or higher
npm@6.9.0 or higher
git@2.17.1 or higher
```

## How To Use

1. Fork this repoistory and clone it to your local machine.

```bash
$ git clone https://github.com/<your-username>/developer-portfolio.git
```

2. Go into the repository

```bash
$ cd developer-portfolio
```

3. Install dependencies

```bash
$ yarn
```

4. Edit `portfolio.js`

5. Start's development server

```bash
$ yarn dev
```

## Linking Portfolio to Github

```javascript
  //  portfolio.js
  githubUserName: 'YOUR GITHUB USERNAME HERE',
```

#### Using Emojis

For adding emoji 😃 into the texts in `Portfolio.js`, use the `emoji()` function and pass the text you need as an argument. This would help in keeping emojis compatible across different browsers and platforms.

## Technologies Used

- [Next.js](https://nextjs.org/)
- [axios](https://www.npmjs.com/package/axios)
- [reactstrap](https://reactstrap.github.io/)
- [react-reveal](https://www.react-reveal.com/)
- [react-lottie](https://www.npmjs.com/package/react-lottie)
- [react-easy-emoji](https://github.com/appfigures/react-easy-emoji)
- [react-headroom](https://github.com/KyleAMathews/react-headroom)
- [color-thief](https://github.com/lokesh/color-thief)

## Illustrations

- [Lottie File Source](https://lottiefiles.com)

## Icons

Iconify Icons are used in skill section. You can find all the icons here: [Iconify](https://icon-sets.iconify.design/).

## Author

👤 **Akira Chan**

- Website: https://crazyportfolio.web.app
- Github: [@czy30121](https://github.com/czy30121)
- LinkedIn: [@czy30121](https://linkedin.com/in/czy30121)

## Show your support

## Deploy way

- `npm install -g firebase-tools`
- `firebase login`
- `firebase init`
    * Are you ready to proceed? Y
    * Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys (space & enter)
    * what do you want to use your public directory? out
    * configure as a single-page app: no
    * Set up automatic builds and deploys with GitHub? no
    * File out/404.html already exists, Overwrite? y
    * File out/index.html already exists, Overwrite? y
- `npm run build` : “build”: “next build && next export”,
- `firebase deploy --only hosting`