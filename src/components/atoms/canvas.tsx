import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

const CanvasWrapper = styled.canvas`
  margin: 5px;
`;

interface Props {
  imagePath?: string;
  color?: string;
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

  const isCanvas = (canvas: HTMLCanvasElement | null) => {
    return canvas !== null;
  };

  interface GetContext {
    (canvas: HTMLCanvasElement): CanvasRenderingContext2D;
    (canvas: HTMLCanvasElement): null;
  }

  const getContext = ((
    canvas: HTMLCanvasElement,
  ): CanvasRenderingContext2D | null => {
    return isCanvas(canvas) ? canvas.getContext('2d') : null;
  }) as GetContext;

  const isContext = (context: CanvasRenderingContext2D | null) => {
    return context !== null;
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    const x: number = e.nativeEvent.offsetX;
    const y: number = e.nativeEvent.offsetY;

    console.log(`startDrawing: x=${x}, y=${y}`);

    setDrawing(true);

    const canvas: HTMLCanvasElement = getCanvas();
    if (isCanvas(canvas)) {
      const context: CanvasRenderingContext2D = getContext(canvas);
      context.moveTo(x, y);
    }
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    if (!drawing) return;
    const canvas: HTMLCanvasElement = getCanvas();
    if (isCanvas(canvas)) {
      const context: CanvasRenderingContext2D = getContext(canvas);
      if (isContext(context)) {
        const x: number = e.nativeEvent.offsetX;
        const y: number = e.nativeEvent.offsetY;
        context.lineTo(x, y);
        context.stroke();
      }
    }
  };

  const endDrawing = () => {
    console.log('endDrawing');
    setDrawing(false);
  };

  useEffect(() => {
    const width: number = props.width;
    const height: number = props.height;
    const canvas: HTMLCanvasElement = getCanvas();
    if (isCanvas(canvas)) {
      canvas.width = width;
      canvas.height = height;
      const context: CanvasRenderingContext2D = getContext(canvas);
      if (isContext(context)) {
        if (!(props.imagePath == null)) {
          const img = new Image();
          img.src = props.imagePath;
          img.onload = () => {
            context.drawImage(img, 0, 0, width, height);
          };
        } else {
          const color = props.color;
          context.fillStyle = !(color == null) ? color : 'black';
        }
        context.fillRect(0, 0, width, height);
        context.save();
      }
    }
  }, []);

  return (
    <CanvasWrapper
      ref={canvasRef}
      onMouseDown={e => startDrawing(e)}
      onMouseUp={() => endDrawing()}
      onMouseLeave={() => endDrawing()}
      onMouseMove={e => draw(e)}
    />
  );
};

export default Canvas;
