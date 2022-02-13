import ActionArrowButton from "./ActionArrowButton";

function MainProductsCard({ cardImgSrc, cardTitle, cardDescription }) {
  return (
    <div className="prod-card">
      <div className="prod-img">
            <img src={cardImgSrc} alt="" />
      </div>
      <div className="details">
        <span>{cardTitle}</span>
        <p className="font-14">{cardDescription}</p>
      </div>
     <ActionArrowButton />
    </div>
  );
}

export default MainProductsCard;