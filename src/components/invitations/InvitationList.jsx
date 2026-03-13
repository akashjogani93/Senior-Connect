import InvitationCard from "./InvitationCard";

export default function InvitationList(){

const events = [
{
id:1,
title:"Sunday Morning Bingo",
desc:"Join us for a lively game of bingo with prizes and refreshments. Meet new friends and enjoy a relaxing morning together.",
date:"Oct 12 • 10:00 AM",
location:"Portland, OR",
host:"Westside Center",
tag:"Social"
},
{
id:2,
title:"Intro to Digital Banking",
desc:"Learn how to safely manage your finances online with expert guidance. Perfect for beginners exploring digital tools.",
date:"Oct 14 • 1:00 PM",
location:"Portland, OR",
host:"Tech Seniors",
tag:"Education"
},
{
id:3,
title:"Community Potluck",
desc:"Bring your favorite dish and share a meal with neighbors. A wonderful opportunity to connect with your community.",
date:"Oct 15 • 5:30 PM",
location:"Beaverton, OR",
host:"Sarah Jenkins",
tag:"Community"
},
{
id:4,
title:"Garden Club Meetup",
desc:"Discuss seasonal planting tips and exchange seeds with fellow gardeners. Perfect for nature lovers.",
date:"Oct 18 • 9:00 AM",
location:"Gresham, OR",
host:"Green Thumbs",
tag:"Hobbies"
},
{
id:5,
title:"Chair Yoga Session",
desc:"Gentle movements to improve flexibility and balance. Suitable for all levels and perfect for seniors.",
date:"Oct 20 • 11:00 AM",
location:"Portland, OR",
host:"Wellness First",
tag:"Health"
},
{
id:6,
title:"Book Club: The Great Gatsby",
desc:"Monthly discussion of classic literature with fellow readers. Copies available at the front desk.",
date:"Oct 22 • 2:00 PM",
location:"Lake Oswego, OR",
host:"City Library",
tag:"Education"
}
];

return(
<div className="event-grid">

{events.map((event)=>(
<InvitationCard key={event.id} event={event}/>
))}

</div>
)

}