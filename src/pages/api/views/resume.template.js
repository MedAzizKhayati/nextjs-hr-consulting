export default (body) => `
    <div style="padding: 15px;">
        <h1 style="text-align:center;">${body?.firstName} ${body?.lastName} </h1>
        <h4>Phone Number: ${body?.phonenumber}</h4>
        <br>
        <ul>
            <li><strong>Email:</strong> ${body?.email}</li>
            <li><strong>Field Of Study:</strong> ${body?.studyField}</li>
            <li><strong>Formation Domain:</strong> ${body?.formationField}</li>
        </ul>
        <br>
        <h4>Message:</h4>
        <p>${body?.message}</p>
    </div>
`;
