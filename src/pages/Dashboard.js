import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <img src="/logo.png" alt="DealerTeam Logo" className="hero-logo" />
                    <h1 className='text-center' style={{ padding: "0 5rem" }}>Turn Leads into Deals with DealerTeam <span className="highlight">Sales App</span></h1>
                    <p className='text-center'>Build your dealership's sales pipeline with our powerful CRM solution. Turn your leads into sales, then track and manage everything in one place.</p>
                </div>
                {/* <div className="hero-image">
          <img src="/images/logo.png" alt="DealerTeam App" />
          <div className="tag">NEW</div>
        </div> */}
            </section>

            {/* Advantage Section */}
            <section className="advantage-section">
                <div className='hero-content'>
                    <h1 className='text-center'>The DealerTeam Advantage <span className="highlight">Transforming Your Sales</span> Workflow</h1>
                    <p className='text-center'>The sales team management solution that streamlines your processes from lead to close. Our intuitive interface makes it easy to manage your entire sales cycle.</p>
                </div>

                <div className="advantage-content">
                    <div className="advantage-features">
                        <div className="feature-item">
                            <h3>Lead Management</h3>
                            <p>Capture and organize leads</p>
                        </div>
                        <div className="feature-item">
                            <h3>Pipeline Management</h3>
                            <p>Track deals through every stage</p>
                        </div>
                        <div className="feature-item">
                            <h3>Reporting & Analytics</h3>
                            <p>Gain insights into your sales</p>
                        </div>
                        <div className="feature-item">
                            <h3>Mobile Compatibility</h3>
                            <p>Access from anywhere</p>
                        </div>
                    </div>
                    <div className="advantage-image">
                        <img src="/images/advantageImage.png" alt="DealerTeam Advantage" />
                    </div>
                </div>
            </section>

            {/* Tools Section */}
            <section className="tools-section">
                <div className='hero-content'>
                    <h1 className='text-center'>Empower Your Sales Team with <span className="highlight">Industry-Leading Tools</span></h1>
                    <p className='text-center'>The DealerTeam Sales App provides your team with powerful tools to boost productivity and close more deals. Our comprehensive dashboard gives you a complete overview of your sales pipeline, performance metrics, and team activity.</p>
                </div>

                <div className="dashboard-preview">
                    <img src="/images/Frame 182.png" alt="DealerTeam Dashboard" className="dashboard-image" />
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <div className='hero-content'>
                    <h1 className='text-center'>Smarter Tools, <span className="highlight">Happier Customers</span> for a Stronger Bottom Line</h1>
                    <p className='text-center'>DealerTeam empowers your sales team to close deals faster, more digitally and profitably, and deliver a better customer experience.</p>
                </div>

                <div className="features-grid">
                    <div className="feature-card">
                        <div className="icon">
                            <img src="/images/icon-management.svg" alt="Management Icon" />
                        </div>
                        <h3>Pipeline Deal Management</h3>
                    </div>

                    <div className="feature-card">
                        <div className="icon">
                            <img src="/images/icon-crm.svg" alt="CRM Icon" />
                        </div>
                        <h3>Industry-leading CRM</h3>
                    </div>

                    <div className="feature-card">
                        <div className="icon">
                            <img src="/images/icon-inventory.svg" alt="Inventory Icon" />
                        </div>
                        <h3>Real-Time Inventory Visibility</h3>
                    </div>

                    <div className="feature-card">
                        <div className="icon">
                            <img src="/images/icon-integration.svg" alt="Integration Icon" />
                        </div>
                        <h3>Lead App Integration</h3>
                    </div>

                    <div className="feature-card">
                        <div className="icon">
                            <img src="/images/icon-structure.svg" alt="Structure Icon" />
                        </div>
                        <h3>Smarter Deal Structuring</h3>
                    </div>

                    <div className="feature-card">
                        <div className="icon">
                            <img src="/images/icon-reporting.svg" alt="Reporting Icon" />
                        </div>
                        <h3>Comprehensive Reporting</h3>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <h2>Ready to See the DealerTeam <span className="highlight">Sales App</span> in Action?</h2>
                <button className="cta-button">GET STARTED</button>
                <p className="cta-subtitle">Take the first step to simplifying your dealership's sales process</p>
            </section>

            {/* Footer */}
            <footer className="dashboard-footer">
                <div className="footer-logo">
                    <img src="/logo_footer.png" alt="DealerTeam Logo" />
                    <p>© 2023 DealerTeam</p>
                </div>

                <div className="footer-links">
                    <div className="footer-column">
                        <h4>About DealerTeam</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">News</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Learn More</h4>
                        <ul>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Demo</a></li>
                            <li><a href="#">Support</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Resources</h4>
                        <ul>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Community</a></li>
                            <li><a href="#">Partners</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Dashboard;