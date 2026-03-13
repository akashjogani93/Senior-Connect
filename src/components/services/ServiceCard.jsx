export default function ServiceCard({service}) {

  return (
    <div className="service-card">

      <div className="card-top">

        <span className="category">{service.type}</span>

        <span className="status">
          {service.status}
        </span>

      </div>

      <h2>{service.name}</h2>

      <p className="address">{service.address}</p>

      <p className="phone">{service.phone}</p>

      <div className="card-buttons">

        <button className="btn blue">Book</button>
        <button className="btn green">Request</button>
        <button className="btn orange">Chat</button>

      </div>

    </div>
  );
}