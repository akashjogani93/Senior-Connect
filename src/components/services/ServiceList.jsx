import ServiceCard from "./ServiceCard";

export default function ServiceList() {

  const services = [
    {
      id:1,
      type:"Hospital",
      name:"City General Hospital",
      address:"123 Maple Avenue",
      phone:"+1 (555) 012-3456",
      status:"Available"
    },
    {
      id:2,
      type:"Caretaker",
      name:"Sarah Jenkins",
      address:"45 Oak Lane",
      phone:"+1 (555) 987-6543",
      status:"Busy"
    },
    {
      id:3,
      type:"Medical Store",
      name:"Wellness Pharmacy",
      address:"88 Pine Street",
      phone:"+1 (555) 333-2222",
      status:"Open"
    },
    {
      id:4,
      type:"Volunteer",
      name:"Community Helpers",
      address:"Serving All City Areas",
      phone:"+1 (555) 111-9999",
      status:"Active"
    }
  ];

  return (
    <div>

      <div className="result-header">
        <h3>Showing 6 results</h3>
        <span>Sort by: Recommended</span>
      </div>

      <div className="service-grid">
        {services.map((service)=>(
          <ServiceCard key={service.id} service={service}/>
        ))}
      </div>

    </div>
  );
}