const OffresDetails = ({ offer}) => {
    return (
        <div className="offer-details">
        <h4>{offer.title}</h4>
        <p><strong>Description: </strong> {offer.description}</p>
        <p><strong>Email: </strong> {offer.contactEmail}</p>
        <p><strong>Telephone: </strong> {offer.contactPhone}</p>

        </div>
    )
}

export default OffresDetails