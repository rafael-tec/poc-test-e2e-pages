// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import addContext from 'mochawesome/addContext'

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

Cypress.on('test:after:run', (test, runnable) => {
    if (test.state === 'failed') {
        let item = runnable
        const nameParts = [runnable.title]

        while (item.parent) {
            nameParts.unshift(item.parent.title)
            
            if (item.parent._beforeEach.length > 0) {
                nameParts.push('before each hook')
            }

            item = item.parent
        }

        const fullTestName = nameParts.filter(Boolean).join(' -- ')
        const imageUrl = `${Cypress.config('screenshotsFolder')}/${fullTestName} (failed)`

        addContext({ test }, imageUrl)
    }
})
