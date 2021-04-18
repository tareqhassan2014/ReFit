import React, { useEffect, useState } from 'react';
import ReviewDitails from './ReviewDitails';

const ShowReview = () => {

    const [reciews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://agile-wave-20364.herokuapp.com/reviews',)
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])

    return (
        <section className="bg-img-no-repeat" data-tm-bg-img="images/bg/bg-shape-bconsul1.png" style={{ backgroundImage: `url(&quot;images/bg/bg-shape-bconsul1.png&quot;)` }}>
            <div className="container pt-90">
                <div className="section-title">
                    <div className="row justify-content-md-center">
                        <div className="col-md-8">
                            <div className="text-center mb-60">
                                <div className="tm-sc tm-sc-section-title section-title section-title-style1 text-center line-bottom-style4-attached-double-lines1">
                                    <div className="title-wrapper">
                                        <h2 className="title"> <span className="">Our </span> <span className="text-theme-colored1">Customers </span> Say</h2>
                                        <div className="title-seperator-line"></div>
                                        <div className="paragraph">
                                            <p>Explore Our Completed Projects! Consectetur adipiscing elitt elit tellus, luctus pulvinar dapibus leoconsectetur luctus nec.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-content">
                    {reciews.length > 0 ||
                        <div className="d-flex justify-content-center">
                            <div className="spinner-border text-danger" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    }
                    <div className="row">
                        {
                            reciews.map(ser => <ReviewDitails service={ser} key={ser._id} />)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShowReview;