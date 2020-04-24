import ComponentNotFound from './component_not_found';

import ComponentName from './component-name';

const ComponentList = {
  'component-name': ComponentName,
};

const Components = (type) => {
  if (typeof ComponentList[type] === 'undefined') {
    return ComponentNotFound;
  }
  return ComponentList[type];
};

export { ComponentName, ComponentNotFound, Components, ComponentList };
