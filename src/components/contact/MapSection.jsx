import '../../assets/css/contact.css';

export default function MapSection() {
  return (
    <section className="map-section">
      <div className="container-fluid px-0">

        <div className="map-container animate-fade">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9377567843896!2d77.594562!3d12.971598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c2d9db57%3A0xdeb18e4d40c88001!2sBangalore!5e0!3m2!1sen!2sin!4v1700000000000"
            width="100%"
            height="380"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
    </section>
  );
}