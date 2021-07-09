
# Library project structure template

Library project template. Webpack configs configured for dev and production modes.

# Usage

For auto install and run production local server run:

    npm run automatic 
    
For manual usage, install all dependences from root (library) project and start local server:

    npm run install 
    npm run start 
  
  # Structure 

  <img src="/img/flow.png" width="80%" height="80%">

  ```mermaid
graph LR
G(library files) --> F
F((build root)) --> E
E(dist/bundle.js as $) --> D
C(demo/index.html) --> B
D(demo/index.js) --> B
DD(assets) --> B
B((build demo)) --> A
A[demo/out]
A --> AA[result bundle.js] 
A --> BB[result index.html] 
A --> CC[assets] 
```
  
 



