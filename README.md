# invalid-hooks-repro

This is a yarn workspace with two packages: `app` and `components-lib`. 

Lib is a pared-down version of my component library. App is just a CRA (with TS template) with minimal changes. These changes include:
Added lib as a dependency in the package.json to include the lib as a dependency.

```
"components-lib": "link:../components-lib/dist",
```

and:
```
// App.tsx
import React from 'react';
import { HookComponent } from 'components-lib';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <HookComponent />
    </div>
  );
}

export default App;

```

1. Install dependencies: `yarn`
2. Build components: `yarn workspace components-lib build`
3. Start app: `yarn workspace app start`

[SO question that is currently unsolved but feels related:
](https://stackoverflow.com/questions/57455200/cant-use-hooks-with-my-react-component-library-invariant-violation-invalid-hoo)