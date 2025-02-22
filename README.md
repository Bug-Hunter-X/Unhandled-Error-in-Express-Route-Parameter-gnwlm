# Unhandled Error in Express Route Parameter

This repository demonstrates a common error in Express.js route handlers:  failure to handle invalid or missing parameters.  The `bug.js` file shows the problematic code. The `bugSolution.js` demonstrates a robust solution.

## Bug

The `/users/:id` route does not check if `req.params.id` is valid before attempting to use it. This can lead to unexpected crashes or errors if an invalid ID is passed.

## Solution

The `bugSolution.js` file addresses the issue by validating the `userId` parameter before proceeding.  It checks if the parameter is present and if it meets expected format requirements. Appropriate error handling is implemented to respond with meaningful error messages to the client.