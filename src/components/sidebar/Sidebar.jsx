import { SlArrowRight } from "react-icons/Sl";
import { Link } from "react-router-dom";

const Sidebar = ( { item } ) => {
    
    return (
        <>
            <Link>
                <li>
                    <div className="flex justify-between items-center  gap-20">
                        <p>{item}</p>
                        <SlArrowRight />
                    </div>
                </li>
            </Link>

        </>
    );
};

export default Sidebar;