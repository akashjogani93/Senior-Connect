import '../../assets/css/home.css'
import bannerImage from '../../assets/uploads/banner.png'
import care from '../../assets/uploads/care.png'

export default function HeroSection() {
    return (
        <>
            <section className="banner-section pt-5">
                <div className="top-image-banner position-relative">
                    <img
                        src={bannerImage}
                        alt="Senior Connect Banner"
                        className="img-fluid w-100 banner-img"
                    />

                    {/* Dark Overlay */}
                    <div className="banner-overlay"></div>

                    {/* Banner Content */}
                    <div className="banner-content text-white text-center">
                        <h1 className="fw-bold display-5">Trusted Senior Care Services</h1>
                        <p className="lead">
                            Supporting families with reliable healthcare and assistance solutions.
                        </p>
                        <button className="btn btn-primary-custom mt-3 px-4">
                            Explore Services
                        </button>
                    </div>
                </div>
            </section>
            <section className="hero-section pt-5">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6">
                            <div className="badge bg-primary bg-opacity-10 text-primary fw-semibold px-4 py-2 mb-4 fs-6">
                                ✅ VERIFIED SERVICES ONLY
                            </div>

                            <h1 className="display-3 fw-bold lh-sm mb-4">
                                Connecting Senior Citizens with <span className="text-primary">Essential Services</span>
                            </h1>

                            <p className="lead text-muted mb-5">
                                Find trusted healthcare, caretaking, and community services in your area.
                                Simple, safe, and secure platform designed just for you.
                            </p>

                            <div className="row g-3">
                                <div className="col-md-8">
                                    <div className="input-group input-group-lg">
                                        <span className="input-group-text bg-white border-end-0">📍</span>
                                        <input
                                            type="text"
                                            className="form-control border-start-0"
                                            placeholder="Enter city or zip code"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <button className="btn btn-primary-custom w-100 h-100 fs-5">Search</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="position-relative">
                                <img
                                    src={care}
                                    alt="Happy senior lady"
                                    className="img-fluid hero-image"
                                />
                                <div className="trust-badge position-absolute bottom-0 start-0 m-4">
                                    <div className="d-flex align-items-center gap-3">
                                        <div className="bg-success text-white rounded-3 p-3 fs-1">😊</div>
                                        <div>
                                            <div className="small text-muted">Community Trust</div>
                                            <div className="h3 fw-bold text-success mb-0">10,000+</div>
                                            <div className="small text-dark">Families Helped</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}