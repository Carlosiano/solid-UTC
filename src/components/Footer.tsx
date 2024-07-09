import * as gambar from "../assets/images";

export default function Footer() {
  return (
    <>
      <footer
        className="footer"
        style={`background-image: url(${gambar.footerBg})`}
      >
        <div className="footer-top section">
          <div className="container grid-list">
            <div className="footer-brand">
              <a href="#" className="logo">
                <img
                  src={gambar.logoFooter}
                  width="162"
                  height="50"
                  alt="UTC logo"
                />
              </a>

              <p className="footer-brand-text">
                Alamat Kampus: Jl. Ring Road Utara, Condong Catur, Sleman,
                Yogyakarta
              </p>

              <div className="wrapper">
                <span className="span">Add:</span>

                <address className="address">70-80 Upper St Norwich NR2</address>
              </div>

              <div className="wrapper">
                <span className="span">Call:</span>

                <a href="tel:+011234567890" className="footer-link">
                  +01 123 4567 890
                </a>
              </div>

              <div className="wrapper">
                <span className="span">Email:</span>

                <a href="mailto:info@utc.com" className="footer-link">
                  info@utc.com
                </a>
              </div>
            </div>

            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Profil</p>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Tentang UTC
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Sejarah
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Visi Misi
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Sambutan Rektor
                </a>
              </li>

              <li></li>
            </ul>

            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Pendaftaran</p>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Reguler & Internasional
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Alih Jalur
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Biaya Kuliah
                </a>
              </li>
            </ul>

            <div className="footer-list">
              <p className="footer-list-title">Tanya Kami</p>

              <p className="footer-list-text">Masukkan alamat email Anda</p>

              <form action="" className="newsletter-form">
                <input
                  type="email"
                  name="email_address"
                  placeholder="Email Anda"
                  required
                  className="input-field"
                />

                <button type="submit" className="btn has-before">
                  <span className="span">Kirim</span>

                  <ion-icon
                    name="arrow-forward-outline"
                    aria-hidden="true"
                  ></ion-icon>
                </button>
              </form>

              <ul className="social-list">
                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-instagram"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-youtube"></ion-icon>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <p className="copyright">
              Copyright 2023 Universitas Teknologi Condongcatur
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
