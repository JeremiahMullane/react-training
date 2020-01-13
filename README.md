## Pop Quiz - Day 1

1. What is destructing? Why use it?
   A: It re-references attributes in an object or array to shortcut names, making it easier to reference properties without so many dots.

2. What library renders React for the web?
   A: ReactDOM

3. Var is dead. What should you use intead?
   A: const and let (preference is debatable)

4. How do you copy an object in JS? Is it a deep or shallow copy? What's the diff?
   A: You can use spread syntax (const objA = objB{...objA}. It's a shallow copy, so object subattributes are not copied. You could nest spreads though.
   There are other ways (wrap in json.parse and json.stringify, not recommended)

5. What tool did we use to generate our React app?
   A: create react app. There are many ways to create react apps (Forge, custom scripts, fork existing apps, etc)

6. The tool we used uses Webpack. What's Webpack?
   A: It's a collection of libraries that builds in all the assets you need to make a project readable by a browser.

7. What is Babel? Why do we need it?
   A: It downconverts code to more compatible code. So we can use the newest Javascript, and it will be downconverted for all browsers.

8. What tool am I using to format my code? Why is autoformatting useful?
   A: Prettier. It allows you to spend less time on formatting, and it makes code more uniform and readable in large projects.

9. What hook did we use for handling data that changes over time?
   A: useState()

10. When does React re-render?
    A: When a state change is registered, which is signaled by a hook.

11. What hook did we use to run code once, when the component first loads?
    A: useEffect.

12. We created an infinite loop yesterday with that hook. What was our mistake?
    A: We need to pass in a dependency array. Otherwise it defaults to rerunning every time there is a re-render.

13. What tool did we use to create a mock API? Why not just hardcode some JSON instead?
    A: json-server. It helps us by faking an API to simulate an external database, though it just writes temporarily to hard disk.

14. What did we use to make an HTTP call?
    A: fetch

15. What is the name of React's "flavor" of HTML?
    A: JSX

16. Name at least 3 differences between HTML and answer to 15.
    A: class > className, for > htmlFor, camelCase instead of k-a-b-o-b, wrap blocks in empty tag, comments must be in braces

17. Is JSX required?
    A: Nope. But recommended.

18. What is JSX compiled down to?
    A: Function calls to react.createElement in ReactDOM

19. What tool is checking our code quality? Is it configurable? How do I see its output?
    A: VSCode plugin called ESLint. Configurable in VSCode, so it can show you sqiggly underlines etc

20. Debugging? How do you debug your react app?
    A: You can use debugger() statements, and use in conjunction with developer tab in browser.

21. I can see my original code in the browser. Is my browser running my original code? If not, what technology is allowing me to see my original code?
    A: No, not running original code. But original is viewable with Source Mapping feature.

22. What is a function that returns a boolean?
    A: A predicate. Heavily used in high order array functions

23. Name some useful array methods that are friendly to immutable data?
    A: map, filter, some, every, find

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
