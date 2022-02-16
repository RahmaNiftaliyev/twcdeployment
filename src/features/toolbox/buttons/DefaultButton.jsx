import React from "react";

const DefaultButton = ({ classData, contentData, handleNavigation }) => {
  return (
    <div>
      <button onClick={handleNavigation} className={classData}>
        {contentData}
      </button>
    </div>
  );
};

export default DefaultButton;
