import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="mt-3">
                <div className="footer-content">
                    <ul className="socials">
                        <li><a href="$"><i className="fab fa-facebook"></i></a></li>
                        <li><a href="$"><i className="fab fa-instagram"></i></a></li>
                        <li><a href="$"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="$"><i className="fab fa-linkedin"></i></a></li>
                        <li><a href="$"><i className="fab fa-google-plus"></i></a></li>
                    </ul>
                </div>
                <div className="footer-bottom">
                    <p>copyright &copy;2021 The Online Library. designed by <span>Kailash Tuta</span> </p>
                </div>
            </footer>
        </div>
    )
}

export default Footer
