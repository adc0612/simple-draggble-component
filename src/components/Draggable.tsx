import React from 'react';

interface ParentCompProps {
  component?: React.ReactNode;
}

const Draggable = ({ component }: ParentCompProps) => {
  let offSetX: number, offSetY: number;

  const dragMove = (event: MouseEvent): void => {
    const eventTarget = event.target as HTMLElement;
    eventTarget.style.left = `${event.pageX - offSetX}px`;
    eventTarget.style.top = `${event.pageY - offSetY}px`;
  };

  const addMovement = (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    const eventTarget = event.target as HTMLElement;
    offSetX = event.clientX - eventTarget.getBoundingClientRect().left;
    offSetY = event.clientY - eventTarget.getBoundingClientRect().top;
    eventTarget.addEventListener('mousemove', dragMove);
  };

  const removeMovement = (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    const eventTarget = event.target as HTMLElement;
    eventTarget.removeEventListener('mousemove', dragMove);
  };

  return (
    <div onMouseDown={addMovement} onMouseUp={removeMovement}>
      {component}
    </div>
  );
};

export default Draggable;
