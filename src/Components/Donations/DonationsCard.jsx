import { Link } from "react-router-dom";

const DonationsCard = ({ donation }) => {
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
          className=" flex flex-col rounded-xl  bg-clip-border text-gray-700 shadow-md pt   "
        >
          <div className=" ">
            <img className="rounded" src={image} alt="image" />
          </div>

          <div className="px-6 pt-4">
            <button
              style={{
                backgroundColor: catBGColor,
                color: CatTextAndButtonBGColor,
              }}
              className=" font-bold text-sm  px-4 py-2 rounded"
            >
              {category_name}
            </button>
          </div>
          <div
            className="px-6 py-2"
            style={{
              color: CatTextAndButtonBGColor,
            }}
          >
            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {title}
            </h5>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DonationsCard;
