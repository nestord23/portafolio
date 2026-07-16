const GRID_BACKGROUND_STYLE = {
  backgroundImage: `
    linear-gradient(rgba(171, 214, 0, 0.5) 1px, transparent 1px),
    linear-gradient(90deg, rgba(171, 214, 0, 0.5) 1px, transparent 1px)
  `,
  backgroundSize: "40px 40px",
};

const GridBackground = () => (
  <div
    className="absolute inset-0 opacity-[0.03] pointer-events-none animate-grid-drift"
    style={GRID_BACKGROUND_STYLE}
  />
);

export default GridBackground;