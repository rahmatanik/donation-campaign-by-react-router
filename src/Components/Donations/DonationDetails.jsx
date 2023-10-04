import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const DonationDetails = ({ donation }) => {
  const { image, title, id, CatTextAndButtonBGColor, price, description } =
    donation || {};

  const handleAddToDonation = () => {
    const addedDonationsArray = [];
    const favouriteItems = JSON.parse(localStorage.getItem("donations"));

    if (!favouriteItems) {
      addedDonationsArray.push(donation);
      localStorage.setItem("donations", JSON.stringify(addedDonationsArray));
      Swal.fire("Thank You!", "You have DONATED!", "success");
    } else {
      const isExists = favouriteItems.find((donation) => donation.id === id);
      if (!isExists) {
        addedDonationsArray.push(...favouriteItems, donation);
        localStorage.setItem("donations", JSON.stringify(addedDonationsArray));
        Swal.fire("Thank You!", "You have DONATED!", "success");
      } else {
        Swal.fire("Sorry!", "You have DONATED already!", "error");
      }
    }
  };
  return (
    <div>
      <div className="relative bg-cover bg-no-repeat">
        <img
          style={{ backgroundSize: "cover" }}
          className="bg-cover bg-no-repeat w-full"
          src={image}
          alt="image"
        />

        <div className="absolute  bottom-0 w-full bg-black bg-opacity-60 p-4">
          <Link>
            <button
              onClick={handleAddToDonation}
              style={{ backgroundColor: CatTextAndButtonBGColor }}
              className="btn text-white p-3 font-bold rounded-lg "
            >
              Donate ${price}
            </button>
          </Link>
        </div>
      </div>
      <h1
        style={{ color: CatTextAndButtonBGColor }}
        className="text-3xl font-bold py-6"
      >
        {title}
      </h1>
      <p>{description}</p>
    </div>
  );
};

export default DonationDetails;
