1. Create a folder app. 
2. Install React using `npx create-react-app components --template typescript`. 
3. Remove the following file after installation 
   1. app.css
   2. index.css
   3. index.tsx
   4. reportWebVitals
4. Intalling Storybook
   1. Execute the command `npx storybook init`. Wait for the cli to install.
   2. Go to this link `https://storybook.js.org/docs/react/get-started/install/` && `https://storybook.js.org/docs/react/configure/overview`
   3. inside .storybook main.js, use this link to configure webpack `https://storybook.js.org/docs/react/builders/webpack`
      1. set storyStoreV7 to true (features)
      2. lazyCompilation & fsCache to true (core > options)
      3. create a webpack.config.js inside .storybook
      4. Take the defaut config for webpack on storybook and move it to webpack config. 
      5. 