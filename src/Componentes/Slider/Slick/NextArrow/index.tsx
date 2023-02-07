import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"

export const NextArrow = (props: any, slidesToShow: any) => {
    const { className, onClick, slideCount, currentSlide, style } = props;
    return (
        <>
            {currentSlide !== slideCount - slidesToShow && (
                <div
                    className={className}
                    style={{ ...style, display: "block" }}
                    onClick={onClick}
                >
                    {/* <MdKeyboardArrowRight size="3rem" className="slick-arrow-icon-right" /> */}
                    <FontAwesomeIcon icon={faChevronRight} size="3x" className="slick-arrow-icon-right" />
                </div>
            )
            }
        </>
    );
}