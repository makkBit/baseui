// @flow
import * as React from 'react';
import {Button} from 'baseui/button';
import {Drawer, SIZE} from 'baseui/drawer';

export default () => {
  let initialState = {};
  for (let size in SIZE) {
    initialState[size] = false;
  }
  const [isOpen, setIsOpen] = React.useState(initialState);

  function close(sizeType) {
    setIsOpen({...isOpen, [sizeType]: false});
  }

  return (
    <React.Fragment>
      {Object.keys(SIZE).map(eachSize => (
        <React.Fragment>
          <Button
            style={{margin: 12}}
            onClick={() => setIsOpen({...isOpen, [eachSize]: true})}
          >
            Open Drawer of {eachSize} size
          </Button>
          <Drawer
            onClose={() => close(eachSize)}
            isOpen={isOpen[eachSize]}
            size={eachSize}
          >
            Proin ut dui sed metus pharetra hend rerit vel non mi.
            Nulla ornare faucibus ex, non facilisis nisl. Maecenas
            aliquet mauris ut tempus.
          </Drawer>
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};
