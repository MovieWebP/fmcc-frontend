import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"

export const PrevArrow = (props: any) => {
    const { className, style, onClick, currentSlide } = props;
    return (
        <>
            {currentSlide !== 0 && (
                <div
                    className={className}
                    onClick={onClick}
                    style={{ ...style, display: "block" }}
                >
                    {/* <MdKeyboardArrowLeft size="3rem" className="slick-arrow-icon-left" /> */}
                    <FontAwesomeIcon icon={faChevronLeft} size="3x" className="slick-arrow-icon-left" />
                </div>
            )}
        </>
    );
}