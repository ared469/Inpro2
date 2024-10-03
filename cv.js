document.getElementById("cvForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const linkedin = document.getElementById("linkedin").value;
    const objective = document.getElementById("objective").value;

    // Build LaTeX document string
    const latex = `
\\documentclass[a4paper,10pt]{article}
\\usepackage{parskip}
\\usepackage{geometry}
\\geometry{left=1in,right=1in,top=1in,bottom=1in}

\\begin{document}

\\begin{center}
    {\\Huge ${name}} \\\\
    \\vspace{0.1cm}
    ${email} | ${phone} | ${linkedin} \\\\
\\end{center}

\\section*{Objective}
${objective}

\\end{document}
    `;

    // Send LaTeX content to server
fetch('/generate-cv', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({ latex })
})
.then(response => response.blob())
.then(blob => {
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'cv.pdf';
    link.click();
})
.catch(error => console.error('Error:', error));
