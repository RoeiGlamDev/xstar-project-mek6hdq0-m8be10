import { useEffect, useRef } from 'react';

const use3D = (modelUrl: string) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('webgl');
    if (!context) return;

    // Initialize 3D model loading and rendering here
    const loadModel = async () => {
      // Load the model from modelUrl
      // Implement loading logic
    };

    loadModel();

    return () => {
      // Cleanup resources if necessary
    };
  }, [modelUrl]);

  return canvasRef; // Return the ref to be used in components
};

export default use3D;