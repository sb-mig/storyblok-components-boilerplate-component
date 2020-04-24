## Requirements to use this component

- ...

## Install

```
npm install @storyblok-components/component-name --save
```

or

```
yarn add @storyblok-components/component-name
```

## Usage

You can immediately use installed components schema with `sb-mig` `sync ext` functionality.

You just need to edit your `storyblok.config.js` and add `'node_modules/@storyblok-components'` which will tell `sb-mig` to look for schema files inside `@storyblok-components` folder.

```
module.exports = {
    ...
    componentsDirectories: ['src', 'storyblok', 'node_modules/@storyblok-components'],
    ...
};

```

then you can just run

```
sb-mig sync components --ext component-name
```

which will sync text-block schema to your storyblok space.
You can also, import schema inside your other schema, and use only part of it:

```
const ComponentName = require("@storyblok-components/ComponentName/component-name.sb");
```

For React part of component

```
import ComponentName from '@storyblok-components/component-name`
```

## FAQ

1. ?
