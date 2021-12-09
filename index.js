var leads = [
    {
    id: "61a12a837abe9c19b50ee7ba",
    name: "Siobhan Roy",
    email: "shiv@yopmail.com",
    zipcode: "766655",
    phoneNumber: "+79999999999",
    tags: ["Location - In Person or Virtual"],
    location: "Bangalore",
    projectTypeIds: ["p1"],
    assignedDesigners: [],
    createdOn: new Date("2021-12-26T18:42:11.579Z"),
    },
    {
    id: "61a12a2f7abe9c19b50ee7b8",
    name: "Romulus Roy",
    email: "roman@yopmail.com",
    zipcode: "878990",
    phoneNumber: "+855788888999",
    tags: ["Location - In Person"],
    location: "Bangalore",
    projectTypeIds: ["p2"],
    assignedDesigners: [],
    createdOn: new Date("2022-11-26T18:40:47.441Z"),
    },
    {
    id: "61a11c257abe9c19b50ee7b2",
    name: "Kendell Roy",
    email: "kendell@yopmail.com",
    zipcode: "420001",
    phoneNumber: "+919897867763",
    tags: ["Floor Planning"],
    location: "Hyderabad",
    projectTypeIds: ["p3"],
    assignedDesigners: [],
    createdOn: new Date("2021-11-26T17:40:53.009Z"),
    },
    {
    id: "61a0dc7c4efd08af482841f1",
    name: "Felix Gallardo",
    email: "gallardo@felix.com",
    zipcode: "411011",
    phoneNumber: "+12015557484",
    tags: ["Location - In Person or Virtual"],
    location: "Hyderabad",
    projectTypeIds: ["p3"],
    assignedDesigners: [],
    createdOn: new Date("2021-12-01T13:09:16.090Z"),
    },
    {
    id: "61a0cdc64efd08af482841eb",
    name: "Kiki Camerana",
    email: "camerena@kiki.com",
    zipcode: "400028",
    phoneNumber: "+12015485555",
    tags: ["Floor Planning", "Location - In Person or Virtual"],
    location: "Mumbai",
    projectTypeIds: ["p4", "p1"],
    assignedDesigners: [],
    createdOn: new Date("2021-11-26T12:06:30.583Z"),
    },
    ];
    var designers = [
    {
    id: "61a0f7c7d385ba60c4d4e932",
    projectTypeIds: ["p3"],
    location: "Pune",
    email: "loganroy@yopmail.com",
    phoneNumber: "+917777777777",
    lastLeadAssigned: null,
    portfolio: "https://portfolio.logan.com",
    accountId: "420b8bf1-e7b0-41c1-a991-e17e52907f0f",
    },
    {
    id: "61a0e8a5d385ba60c4d4e931",
    projectTypeIds: ["p5", "p4", "p2", "p3", "p1"],
    location: "Hyderabad",
    email: "pachoharera@yopmail.com",
    phoneNumber: "+917777777774",
    lastLeadAssigned: null,
    portfolio: "https://portfolio.pacho.com",
    accountId: "1525892f-fd85-49b1-b6b9-b16fd8763cc5",
    },
    {
    id: "61a0cd4ad385ba60c4d4e930",
    projectTypeIds: ["p5", "p4", "p2", "p3", "p1"],
    location: "Delhi",
    email: "rebollo@yopmail.com",
    phoneNumber: "+917777777779",
    lastLeadAssigned: null,
    portfolio: "https://portfolio.rebollo.com",
    accountId: "9842e48e-ce5c-485e-b3bc-9b8a6a6ec6a5",
    },
    ];
    
    designers = new Map(designers.map(key => [key.location, key]));  
    
    // O(N)
    for(var i = 0; i < leads.length; i++)
    {
       if(designers.has(leads[i].location))
       {    
         console.log(designers.get(leads[i].location).projectTypeIds.find((val,index) => {
      return leads[i].projectTypeIds.includes(val);
         }));
       }
    }