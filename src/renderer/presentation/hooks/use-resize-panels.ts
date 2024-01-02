import { useRef, useState } from 'react';

export const useResizePanels = (initialWidths: [number, number, number]) => {
  const [panelWidths, setPanelWidths] =
    useState<[number, number, number]>(initialWidths);
  const [isResizing, setIsResizing] = useState<boolean>(false);
  const [resizeIndex, setResizeIndex] = useState<number>(-1);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (index: number) => (e) => {
    setIsResizing(true);
    setResizeIndex(index);
  };

  const handleMouseMove = (e: { clientX: number }) => {
    if (!isResizing || resizeIndex === -1) return;

    const containerRect = containerRef.current?.getBoundingClientRect();

    if (!containerRect) return;

    const mouseX = e.clientX - containerRect.left;

    const newWidths: [number, number, number] = [...panelWidths];

    newWidths[resizeIndex] = Math.max(
      10,
      Math.min(mouseX, containerRect.width - 10)
    );

    setPanelWidths(newWidths);
  };

  const handleMouseUp = () => {
    setIsResizing(false);
    setResizeIndex(-1);
  };

  return {
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    containerRef,
    panelWidths,
  };
};
