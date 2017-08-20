# Description

This is Simple PDF React service example with Express server.

The idea behind this module is to read the pdf file on the server side, where You have access to it and send it to the client. The client read the pdf, parse it and creates React component for You in Your browser. This is how it goes, generally.

This example uses my [simple-react-pdf](https://www.npmjs.com/package/simple-react-pdf) module and shows
how to use it in the client-server architecture avoiding the [Cross-Origin Resource Sharing (CORS) issue](https://github.com/mozilla/pdf.js/wiki/Frequently-Asked-Questions#faq-xhr). Server has been built with [Babel](https://babeljs.io/) and Client is transformed with [Browserify](http://browserify.org/) to be readable by browsers.

Feel free to use it as the idea-template for Your real-life applications.

# Screenshot

Screenshot example (3 x Simple PDF React component):

![demo](https://raw.githubusercontent.com/javascriptiscoolpl/npm-simple-react-pdf-service/master/screenshot.png)

# Install

    npm install simple-react-pdf-service

However, in production or if you do not plan to re-build it, do not install <code>devDependencies</code>. See [npm documentation page](https://docs.npmjs.com/cli/install).

# Usage - quickstart

    cd node_modules/simple-react-pdf-service
    npm run start-server

in other terminal window:

    npm run test-firefox

#### Usage - other browsers

Available shorcuts for browsers:

    npm run test-firefox
    npm run test-chrome
    npm run test-opera

If You want to test the client in Your other favorite browser, just go to the <code>client</code> folder:

    cd node_modules/simple-react-pdf-service/client

and open <code>index.html</code> file in Your favorite browser.

# Re-build

After making Your own changes just go to module folder (if you are not there already):

    cd node_modules/simple-react-pdf-service

and run command:

    npm run build

This should download all packages and build everything again. Should work :-)

# License

MIT
