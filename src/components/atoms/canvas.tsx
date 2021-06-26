import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

const CanvasWrapper = styled.canvas`
  margin: 5px;
  border: none;
  border-radius: 3px;
`;

interface Props {
  color: string;
  width: number;
  height: number;
}

const Canvas: React.FC<Props> = props => {
  const [drawing, setDrawing] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  interface GetCanvas {
    (): HTMLCanvasElement;
    (): null;
  }

  const getCanvas = ((): HTMLCanvasElement | null => {
    return !(canvasRef == null) ? canvasRef.current : null;
  }) as GetCanvas;

  interface GetContext {
    (canvas: HTMLCanvasElement): CanvasRenderingContext2D;
    (canvas: HTMLCanvasElement): null;
  }

  const getContext = ((
    canvas: HTMLCanvasElement,
  ): CanvasRenderingContext2D | null => {
    return !(canvas == null) ? canvas.getContext('2d') : null;
  }) as GetContext;

  const startDrawing = (x: number, y: number) => {
    console.log(`startDrawing: x=${x}, y=${y}`);
    setDrawing(true);
    const canvas: HTMLCanvasElement = getCanvas();
    if (!(canvas == null)) {
      const context: CanvasRenderingContext2D = getContext(canvas);
      context.moveTo(x, y);
    }
  };

  const draw = (x: number, y: number) => {
    if (!drawing) return;
    const canvas: HTMLCanvasElement = getCanvas();
    if (!(canvas == null)) {
      const context: CanvasRenderingContext2D = getContext(canvas);
      context.lineTo(x, y);
      context.stroke();
    }
  };

  const endDrawing = () => {
    console.log('endDrawing');
    setDrawing(false);
  };

  useEffect(() => {
    const canvas: HTMLCanvasElement = getCanvas();
    canvas.width = props.width;
    canvas.height = props.height;
    if (!(canvas == null)) {
      const context: CanvasRenderingContext2D = getContext(canvas);
      context.fillStyle = props.color;
      context.fillRect(0, 0, props.width, props.height);
      context.save();
    }
  }, []);

  return (
    <CanvasWrapper
      ref={canvasRef}
      onMouseDown={e =>
        startDrawing(e.nativeEvent.offsetX, e.nativeEvent.offsetY)
      }
      onMouseUp={() => endDrawing()}
      onMouseLeave={() => endDrawing()}
      onMouseMove={e => draw(e.nativeEvent.offsetX, e.nativeEvent.offsetY)}
    />
  );
};

export default Canvas;
