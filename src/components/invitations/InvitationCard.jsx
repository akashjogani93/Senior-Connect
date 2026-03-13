export default function InvitationCard({event}){

return(

<div className="event-card">

<div className="card-head">

<span className="event-tag">{event.tag}</span>

</div>

<h3>{event.title}</h3>

<p className="event-desc">
{event.desc}
</p>

<div className="event-info">

<div>{event.date}</div>
<div>{event.location}</div>
<div>Host: {event.host}</div>

</div>

</div>

)

}