import { Link } from "react-router-dom";

const DonationFavCards = ({ donation }) => {
  const {
    id,
    image,
    title,
    category_name,
    catBGColor,
    CatCardBgColor,
    CatTextAndButtonBGColor,
    price,
    description,
  } = donation || {};

  return (
    <div>
      <Link to={`/donations/${id}`}>
        <div
          style={{ backgroundColor: CatCardBgColor }}
          className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full max-w-[48rem] rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
        >
          <div className="relative overflow-hidden rounded-t-xl bg-white bg-clip-border text-gray-700">
            <img src={image} alt="images" />
          </div>
          <div className="p-6">
            <button
              style={{
                backgroundColor: catBGColor,
                color: CatTextAndButtonBGColor,
              }}
              className="font-bold text-sm md:text-sm px-4 py-2 rounded"
            >
              {category_name}
            </button>
            <h4
              style={{
                color: CatTextAndButtonBGColor,
              }}
              className="mt-3 block font-sans md:text-sm lg:text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased"
            >
              ${price}
            </h4>
            <h4 className="mt-2 block font-sans md:text-sm lg:text-xl  font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {title}
            </h4>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DonationFavCards;
