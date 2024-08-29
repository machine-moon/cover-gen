let template1 = `

Tarek Ibrahim
(613)-220-7759, tarekibrahim3@cmail.carleton.ca, www.linkedin.com/in/im-tarek-ibrahim
{%MONTH%} {%DATE%}, 2024		
{%COMPANY_NAME%}
{%LOCATION%}
Ottawa, Ontario, {%POSTAL_CODE%} Canada
Dear hiring manager, 
I am writing to express my interest in the {%POSITION_TITLE%} position at {%COMPANY_NAME%}, as advertised by the Co-operative Education Office at Carleton University. I am currently enrolled in Software Engineering where I have gained substantial software development background such as algorithms, data structures and multiple programming languages. Having learned about this opportunity at {%COMPANY_NAME%}, I am excited to apply my skills and experience to your IT solutions. 
Distinguished by a unique set of skills and experiences, I stand out among my peers. I have experience in C/C++ , Python, Java, and familiarity with multiple industry technologies such as Linux, Docker, Vsphere, and Git, all valuable to {%COMPANY_NAME%}’s projects. My distinct blend of technical skills and hands-on experience positions me uniquely for this role. I have developed data scrapers in Python, designed neural network models for predictive analysis, and recreated Conway's Game of Life in C, demonstrating not just programming skills but also an innovative approach to problem-solving. These projects underline my capability to tackle complex challenges, a quality I am eager to bring to {%COMPANY_NAME%}’s innovative environment. Additionally, in my role as a Grocery Clerk at Sobeys, I was a part of a team, ensuring efficient daily operations and maintaining inventory lists. These experiences refined my cooperation and learning skills, allowing me to be well-prepared for the collaborative environment at {%COMPANY_NAME%}.
After exploring {%COMPANY_NAME%}’s mission, I was interested by the commitment to innovation as this resonates with my own passion for Software Engineering. I am eager for the opportunity to contribute to {%COMPANY_NAME%}’s projects and am keen on bringing my skills and experiences to the company to make a beneficial impact. My dedication to enhancing software performance, improving user experiences, and resolving complex technical challenges strongly aligns with {%COMPANY_NAME%}’s available position. I am confident that my proficient technical foundation, problem-solving abilities, and collaborative nature make me a valuable asset. 
Thank you for considering my application. I am looking forward to contributing to {%COMPANY_NAME%} and working alongside the team on {%A_RESPONSIBILITY%}. I would greatly appreciate the opportunity to discuss how my skills and experiences align with the requirements of the {%POSITION_TITLE%} position and how I would be a well-suited fit.
Best Regards,
Tarek Ibrahim

`;

let template2 = `
Tarek Ibrahim
(613)-220-7759, tarekibrahim3@cmail.carleton.ca, www.linkedin.com/in/im-tarek-ibrahim
{%MONTH%} {%DATE%}, 2024				
Dear hiring manager, 
I am writing to express my interest in the {%POSITION_TITLE%} position at {%COMPANY_NAME%}. I am currently enrolled in Software Engineering  where I have gained substantial software development background such as algorithms, data structures and multiple programming languages. Furthermore, in my freetime I have expanded my knowledge on transformer architecture, types of neural networks, model evaluation, and open source projects and software. Having learned about this opportunity at Infrastructure  Canada, I am excited to learn and apply my skills however I can. 
Distinguished by a unique set of skills and experiences, I stand out among my peers. I have experience in C/C++ , python, and familiarity with multiple industry technologies such as Linux, Docker, Vsphere, and Git, all valuable to {%COMPANY_NAME%}’s projects. My distinct blend of technical skills and hands-on experience positions me uniquely for this role. I have designed several neural network models for predictive analysis, dabbelled in multiple machine learning areas such as swarm, Q learning, Large Language Models, transformer architecture, and genetic algorithms. Demonstrating not just programming skills but also an innovative approach to problem-solving. These projects underline my capability to tackle complex challenges, a quality I am eager to bring to {%COMPANY_NAME%}'s innovative environment. My experience with Tensorflow, Pytorch, Pandas, and Jupyter notebooks aligns with the demands at {%COMPANY_NAME%}, preparing me for immediate contribution to your projects. Additionally, in my role as a Grocery Clerk at Sobeys, I was a part of a team, ensuring efficient daily operations and maintaining inventory lists. These experiences refined my cooperation and learning skills, allowing me to be well-prepared for the collaborative environment at {%COMPANY_NAME%}.
After exploring {%COMPANY_NAME%}’s mission, I was interested by the company's commitment to innovation as this resonates with my own passion for artificial intelligence. I am eager for the opportunity to contribute to {%COMPANY_NAME%}’s projects and am keen on bringing my skills and experiences to the company to make a beneficial impact. My dedication to enhancing software performance, improving user experiences, and resolving complex technical challenges strongly aligns with {%COMPANY_NAME%}’s available position. I am confident that my proficient technical foundation, problem-solving abilities, and collaborative nature make me a valuable asset. 
Thank you for considering my application. I am looking forward to contributing to {%COMPANY_NAME%} and working alongside the team {%A_RESPONSIBILITY%}. I would greatly appreciate the opportunity to discuss how my skills and experiences align with the requirements of the {%POSITION_TITLE%} position  and how I would be a well-suited fit.
Best Regards,
Tarek Ibrahim
`; // Your second template

function updateCoverLetter() {
    let selectedTemplate = document.getElementById('templateSelect').value;
    let template = selectedTemplate === 'template1' ? template1 : template2;

    let coverLetter = template
        .replace(/{%MONTH%}/g, document.getElementById('month').value)
        .replace(/{%DATE%}/g, document.getElementById('date').value)
        .replace(/{%LOCATION%}/g, document.getElementById('location').value)
        .replace(/{%POSTAL_CODE%}/g, document.getElementById('postalCode').value)
        .replace(/{%POSITION_TITLE%}/g, document.getElementById('positionTitle').value)
        .replace(/{%COMPANY_NAME%}/g, document.getElementById('companyName').value)
        .replace(/{%A_RESPONSIBILITY%}/g, document.getElementById('aResponsibility').value)
        .replace(/{%COMPANY_PROJECT%}/g, document.getElementById('companyProject').value);

    document.getElementById('coverLetterDisplay').innerText = coverLetter;
}

function saveInput() {
    localStorage.setItem('coverLetterData', JSON.stringify({
        month: document.getElementById('month').value,
        date: document.getElementById('date').value,
        location: document.getElementById('location').value,
        postalCode: document.getElementById('postalCode').value,
        positionTitle: document.getElementById('positionTitle').value,
        companyName: document.getElementById('companyName').value,
        aResponsibility: document.getElementById('aResponsibility').value,
        companyProject: document.getElementById('companyProject').value,

        // Include all fields
    }));
}

function loadInput() {
    let data = JSON.parse(localStorage.getItem('coverLetterData'));
    if (data) {
        document.getElementById('month').value = data.month;
        document.getElementById('date').value = data.date;
        document.getElementById('location').value = data.location;
        document.getElementById('postalCode').value = data.postalCode;
        document.getElementById('positionTitle').value = data.positionTitle;
        document.getElementById('companyName').value = data.companyName;
        document.getElementById('aResponsibility').value = data.aResponsibility;
        document.getElementById('companyProject').value = data.companyProject;

        // Load all fields similarly
        updateCoverLetter(); // Refresh the display
    }
}

window.onload = loadInput;
