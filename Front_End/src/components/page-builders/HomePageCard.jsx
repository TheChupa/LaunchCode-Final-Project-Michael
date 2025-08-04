const HomePageCard = ({ title, description, onClick, className, shimmerImage }) => (
  <div
    className={`homepage-card ${className || ""}`}
    onClick={onClick}
    style={ shimmerImage ? { '--shimmer-image': `url(${shimmerImage})` } : {} }
  >
    <h2>{title}</h2>
    {description && <p>{description}</p>}
  </div>
);
export default HomePageCard;