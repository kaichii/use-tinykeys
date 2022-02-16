# use-tinykeys

react hooks for [tinykeys](https://github.com/jamiebuilds/tinykeys)

## Install

```sh
pnpm add use-tinykeys
// or
yarn add use-tinykeys
// or
npm i use-tinykeys
```

## Usage

```tsx
import useTinykeys from 'use-tinykeys';

function App() {
  useTinykeys({
    'Shift+D': () => {
      alert("The 'Shift' and 'd' keys were pressed at the same time");
    },
    'y e e t': () => {
      alert("The keys 'y', 'e', 'e', and 't' were pressed in order");
    },
    '$mod+KeyD': (event) => {
      event.preventDefault();
      alert("Either 'Control+d' or 'Meta+d' were pressed");
    },
  });

  return (
    // ...
  );
}
```
