import React, { useState } from 'react';

interface Props {
  labelElement: React.ReactNode;
  tooltipElement: React.ReactNode;
}

const Tooltip = ({ labelElement, tooltipElement }: Props) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const handleMouseEnter = () => {
    setTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="inline-block cursor-pointer"
      >
        {labelElement}
      </div>
      {isTooltipVisible && (
        <div className="z-100 absolute">
          <div
            className={`${labelElement ? 'mt-2' : 'mb-2'} ${
              window.innerHeight - window.pageYOffset < 200
                ? 'bottom-0'
                : 'top-0'
            } border border-gray-300 bg-white px-4 py-2 shadow-2xl`}
          >
            {tooltipElement}
          </div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
