import { Link } from "react-router-dom"
import NavLinks from "./NavLinks"
import RightLinks from "./RightLinks"

import MainLogo from "../../../assets/media/logos/logo-demo2.png"
import MainStickyLogo from "../../../assets/media/logos/logo-demo2-sticky.png";

const TopBar = () => {
    return (
        <div id="kt_header" className="header align-items-stretch" data-kt-sticky="true" data-kt-sticky-name="header" data-kt-sticky-offset="{default: '200px', lg: '300px'}">
            <div className="container-xxl d-flex align-items-center">
                {/* begin::Heaeder menu toggle */}
                <div className="d-flex topbar align-items-center d-lg-none ms-n2 me-3" title="Show aside menu">
                    <div className="btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px" id="kt_header_menu_mobile_toggle">
                        {/* begin::Svg Icon | path: icons/duotune/abstract/abs015.svg */}
                        <span className="svg-icon svg-icon-2x">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z" fill="black" />
                                <path opacity="0.3" d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z" fill="black" />
                            </svg>
                        </span>
                        {/* end::Svg Icon */}
                    </div>
                </div>
                {/* end::Heaeder menu toggle */}
                {/* begin::Header Logo */}
                <div className="header-logo me-5 me-md-10 flex-grow-1 flex-lg-grow-0">
                    <Link to="/">
                        <img alt="Logo" src={MainLogo} className="logo-default h-25px" />
                        <img alt="Logo" src={MainStickyLogo} className="logo-sticky h-25px" />
                    </Link>
                </div>
                {/* end::Header Logo */}
                {/* begin::Wrapper */}
                <div className="d-flex align-items-stretch justify-content-between flex-lg-grow-1">
                    {/* begin::Navbar */}
                    <NavLinks />
                    {/* end::Navbar */}
                    <RightLinks />
                </div>
                {/* end::Wrapper */}
            </div>
        </div>
    )
}

export default TopBar;