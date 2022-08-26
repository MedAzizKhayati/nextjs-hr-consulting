export default (body) => `
    <div style="padding: 15px;">
        <h1 style="text-align:center;">${body?.firstName} ${body?.lastName} </h1>
        <h4>Phone Number: ${body?.phonenumber}</h4>
        <h4>Formation Souhaitée: ${body?.formationTitle}</h4>
        <br>
        <h4>Message:</h4>
        <p>${body?.message || "Pas de message"}</p>
    </div>
`;
