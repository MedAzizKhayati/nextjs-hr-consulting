export default (body) => `
    <div style="padding: 15px;">
        <h1 style="text-align:center;">${body?.firstName} ${body?.lastName} </h1>
        <h4>Phone Number: ${body?.phonenumber}</h4>
        <br>
        <ul>
            <li><strong>Email:</strong> ${body?.email}</li>
            <li><strong>Domaine d'étude:</strong> ${body?.studyField}</li>
            <li><strong>Domaine de formation:</strong> ${body?.formationField}</li>
        </ul>
        <br>
        <h4>Message:</h4>
        <p>${body?.message || "Pas de message"}</p>
    </div>
`;
