# NodeJS/JavaScript Cucumber example

Small example for structuring Cucumber with NodeJS using promises.

## Structure

How this project is structured

```
|-- facade.js
|-- implementation.js
|-- features
    |-- do-rest-call.feature
    |-- step_definitions
    |   |-- rest-call-definitions.js
        |-- support
            |-- world.js
```

- `/features/do-rest-call.feature`, A feature containing acceptance criteria
- `/features/step_definitions/rest-call-definitions.js`, Glue code to connect JavaScript code with acceptance criteria
- `/features/step_definitions/support/world.js`, Container to share state for every scenario/acceptance test
- `/facade.js`, Abstraction between data and technology. (Allows for changing implementation without changing tests)
- `/implementation.js`, An actual implementation for getting data from a remote source.


