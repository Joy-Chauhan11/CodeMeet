import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useAuth } from "@clerk/clerk-react";

export default function SessionPage() {

    const { roomId } = useParams();

    const { getToken } = useAuth();

    const [session, setSession] = useState(null);

    useEffect(() => {

        const loadSession = async () => {

            const token = await getToken();

            const response = await axios.get(
                `http://localhost:8080/api/sessions/${roomId}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setSession(response.data.session);
        };

        loadSession();

    }, []);

    if (!session) return <h1>Loading...</h1>;

    return (
        <>
            <h1>{session.problem}</h1>

            <p>{session.difficulty}</p>

            <p>Host: {session.host.name}</p>

            <p>
                Participant:
                {session.participant
                    ? session.participant.name
                    : "Waiting..."}
            </p>
        </>
    );
}