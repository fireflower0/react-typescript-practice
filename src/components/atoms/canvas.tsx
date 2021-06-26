import React, { useEffect, useState, useRef } from 'react';

const Canvas: React.FC = () => {
  const [drawing, setDrawing] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  type GetContext = {
    (): CanvasRenderingContext2D;
    (): null;
  };

  const getContext = ((): CanvasRenderingContext2D | null => {
    const canvas = canvasRef.current;
    return !(canvas == null) ? canvas.getContext('2d') : null;
  }) as GetContext;

  const startDrawing = (x: number, y: number) => {
    console.log(`startDrawing: x=${x}, y=${y}`);
    setDrawing(true);
    const context = getContext();
    context.moveTo(x, y);
  };

  const draw = (x: number, y: number) => {
    if (!drawing) return;
    const context = getContext();
    context.lineTo(x, y);
    context.stroke();
  };

  const endDrawing = () => {
    console.log('endDrawing');
    setDrawing(false);
  };

  useEffect(() => {
    const context: CanvasRenderingContext2D = getContext();
    console.log(context);
    context.fillRect(0, 0, 500, 500);
    context.save();
  }, []);

  return (
    <canvas
      className="canvas"
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
