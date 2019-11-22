# Local module development example

## Why
Local development is uncomfortable in a project I'm working on, especially
 when trying to test local changes integrated with the final client or
  consumer. 
  
## What
This example provides basic configuration to build a library with Webpack and
 mock a published package with Yalc in order to test how the library
  integrates with the client or consumer.
  
## How
- In the root directory, run `yarn develop`.
- In the client directory, run `yarn develop`.

Now every change in the library's code will trigger a rebuild and a publish
 event which in turn will trigger the client to rebuild.
 
## Remember
- To run the client's `yarn removeLocalDependencies` to avoid pushing a
 `package.json` file referencing local dependencies. 


