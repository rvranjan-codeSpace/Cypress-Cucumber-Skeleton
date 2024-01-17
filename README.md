# Cucummber with Cypress Sekeleton

![image](https://github.com/rvranjan-codeSpace/Cypress-Cucumber-Skeleton/assets/12593934/bbd131bd-0774-4fdc-b377-5b0b626742b3)

## Please add the following dependecies
1. "@bahmutov/cypress-esbuild-preprocessor"
2. "@badeball/cypress-cucumber-preprocessor"
3. @badeball/cypress-cucumber-preprocessor/esbuild

Pleas have a look at cypress.config.json for more details

## Please add the following in package.json
'''
"cypress-cucumber-preprocessor": {
    "stepDefinitions": "cypress/e2e/stepDefinitions/*.js",
    "filterSpecs": true,
    "omitFiltered": true
  }
'''

## create a new file ".cypress-cucumber-preprocessorrc.json" in the root folder and add the below code
'''
{
    "stepDefinitions": [
        "cypress/e2e/stepDefinitions/*.js"
    ]
}
'''


