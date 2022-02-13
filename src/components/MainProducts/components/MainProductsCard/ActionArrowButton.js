import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

function ActionArrowButton() {
  return (
    <div className="action no-price">
      <i className="fas fa-long-arrow-alt-right">
        <FontAwesomeIcon
          icon={faArrowRightLong}
          className="fas fa-long-arrow-alt-right"
        />
      </i>
    </div>
  );
}

export default ActionArrowButton;
