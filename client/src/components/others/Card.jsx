const Card = ({ image, title }) => {
  return (
    <div className="card bg-white">
      <img src={image} alt={title} className="w-full img-auto" />
    </div>
  );
};
export default Card;
