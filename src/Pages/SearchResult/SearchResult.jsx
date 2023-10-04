import DonationFavCards from "../DonationFav/DonationFavCards";

const SearchResult = ({ filteredDonations }) => {
  return (
    <div>
      {filteredDonations.map((donation) => (
        <DonationFavCards key={donation.id} donation={donation} />
      ))}
    </div>
  );
};

export default SearchResult;
