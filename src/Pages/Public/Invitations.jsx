import InvitationSearch from "../../components/invitations/InvitationSearch";
import InvitationList from "../../components/invitations/InvitationList";
import "../../assets/css/invitations.css";

export default function Invitations() {
  return (
    <div className="invitation-page">

      <div className="hero">
        <div className="container">
          <h1>Community Invitations</h1>
          <p>
            Browse upcoming events and connect with your local community.
            Find gatherings that match your interests and meet new friends nearby.
          </p>
        </div>
      </div>

      <div className="container">
        <InvitationSearch />
        <InvitationList />
      </div>

    </div>
  );
}