import React from 'react';
import AnimatedCursor from 'react-animated-cursor';

const Cursor = () => {
  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={16}
        color="127,127,127"
        outerAlpha={0.8}
        innerScale={1.2}
        outerScale={3}
      />
    </>
  );
};

export default Cursor;
