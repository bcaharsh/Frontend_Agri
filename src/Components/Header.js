import React from 'react'

export default function Header() {
    return (
        <>
            <div className="full_bg">
                {/* <!-- top --> */}
                <div className="slider_main">
                    {/* <!-- carousel code --> */}
                    <div id="banner1" className="carousel slide carousel-fade" data-ride="carousel" data-interval="6000">
                        <ol className="carousel-indicators">
                            <li data-target="#banner1" data-slide-to="0" className="active"></li>
                            <li data-target="#banner1" data-slide-to="1"></li>
                            <li data-target="#banner1" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner" role="listbox">
                            <div className="carousel-item active">
                                <picture>
                                    <source srcSet="images/banner.jpg" />

                                    <img srcSet="images/banner.jpg" alt="responsive image" className="d-block img-fluid" />
                                </picture>
                                <div className="carousel-caption relative">

                                </div>
                            </div>
                            {/* <!-- /.carousel-item --> */}
                            <div className="carousel-item">
                                <picture>

                                    <img srcSet="images/banner.jpg" alt="responsive image" className="d-block img-fluid" />
                                </picture>
                                <div className="carousel-caption relative">
                                </div>
                            </div>
                            {/* <!-- /.carousel-item --> */}
                            <div className="carousel-item">
                                <picture>
                                    <source srcSet="images/banner.jpg" />
                                    <source srcSet="images/banner.jpg" />
                                    <source srcSet="images/banner.jpg" />
                                    <img srcSet="images/banner.jpg" alt="responsive image" className="d-block img-fluid" />
                                </picture>
                                <div className="carousel-caption relative">

                                </div>
                            </div>
                            {/* <!-- /.carousel-item --> */}
                        </div>
                        {/* <!-- /.carousel-inner --> */}
                        {/* <a className="carousel-control-prev" href="#banner1" role="button" data-slide="prev">
                            <i className="fa fa-angle-left" aria-hidden="true"></i>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#banner1" role="button" data-slide="next">
                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                            <span className="sr-only">Next</span>
                        </a> */}
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="willom">
                                    <h1> Agronomy With Farm</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
