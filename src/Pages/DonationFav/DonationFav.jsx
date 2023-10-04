import { useEffect, useState } from "react";
import DonationFavCards from "./DonationFavCards";

const DonationFav = () => {
  const [donations, setDonations] = useState([]);
  const [noFound, setNoFound] = useState(false);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const favoriteItems = JSON.parse(localStorage.getItem("donations"));

    if (favoriteItems) {
      setDonations(favoriteItems);
    } else {
      setNoFound("No Data Found");
    }
  }, []);

  const handleRemove = () => {
    localStorage.clear();
    setDonations([]);
    setNoFound("No Donation Available");
  };

  return (
    <div className="mb-52">
      {noFound ? (
        <p className="h-[80vh] text-3xl flex justify-center items-center">
          {noFound}
        </p>
      ) : (
        <div>
          {donations.length > 0 && (
            <div>
              <div className="grid grid-cols-2 gap-5">
                {isShow
                  ? donations.map((donation) => (
                      <DonationFavCards
                        key={donation.id}
                        donation={donation}
                      ></DonationFavCards>
                    ))
                  : donations
                      .slice(0, 4)
                      .map((donation) => (
                        <DonationFavCards
                          key={donation.id}
                          donation={donation}
                        ></DonationFavCards>
                      ))}
              </div>

              {donations.length > 4 && !isShow && (
                <button
                  onClick={() => setIsShow(true)}
                  className="px-8 bg-red-500 text-white block mx-auto my-5 py-4 rounded"
                >
                  See All
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DonationFav;
