import "./category-item-styles.scss";

const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <div className="inner-items-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="items-body">
        <h2>{title}</h2>
        <p>shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
