interface GridPatternProps {
  cellSize?: number;
  opacity?: number;
  color?: string;
  animated?: boolean;
  className?: string;
}

const GridPattern = ({
  cellSize = 40,
  opacity = 0.03,
  color = "rgba(171, 214, 0, 0.5)",
  animated = false,
  className = "",
}: GridPatternProps) => {
  const style = {
    backgroundImage: `
      linear-gradient(${color} 1px, transparent 1px),
      linear-gradient(90deg, ${color} 1px, transparent 1px)
    `,
    backgroundSize: `${cellSize}px ${cellSize}px`,
    opacity,
  };

  return (
    <div
      className={`absolute inset-0 pointer-events-none ${
        animated ? "animate-grid-drift" : ""
      } ${className}`}
      style={style}
    />
  );
};

export default GridPattern;