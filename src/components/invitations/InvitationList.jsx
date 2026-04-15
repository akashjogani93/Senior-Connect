import { useEffect } from "react";
import { useInvitationStore } from "../../store/invitationStore";
import InvitationCard from "./InvitationCard";

export default function InvitationList() {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const {
        invitations,
        fetchInvitations,
        loading,
    } = useInvitationStore();
    useEffect(() => {
        fetchInvitations();
    }, []);
    return (
        <div className="event-grid">
            {invitations?.map((inv) => (
                <InvitationCard key={inv.Invitation_id} event={inv} />
            ))}
        </div>
    )

}