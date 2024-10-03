document.getElementById("cvForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const linkedin = document.getElementById("linkedin").value;
    const objective = document.getElementById("objective").value;

    // Build LaTeX document string
    const latex = `
\documentclass[a4paper,10pt]{article}
\usepackage{parskip}
\usepackage{geometry}
\geometry{left=1in,right=1in,top=1in,bottom=1in}

% Start Document
\begin{document}

% Name and Contact Information
\begin{center}
    {\Huge Jane Doe} \\
    \vspace{0.1cm}
    janedoe@example.com | +1 (555) 555-5555 | www.linkedin.com/in/janedoe \\
\end{center}

% Objective Section
\section*{Objective}
Experienced software engineer specializing in machine learning, cloud computing, and backend development. Eager to contribute to a leading Big Tech company, applying expertise in Python, C++, and cloud architecture.

% Work Experience Section
\section*{Work Experience}

\textbf{Senior Software Engineer} \\
Big Tech Company, Inc. \hfill Mar 2019 -- Present \\
\emph{Key Responsibilities:}
\begin{itemize}
    \item Developed scalable backend services using Python and Kubernetes, optimizing service performance by 40\%.
    \item Led a team of 10 engineers in the deployment of cloud-native applications on AWS, ensuring reliability and security.
    \item Collaborated with the machine learning team to build data pipelines that improved model performance by 20\%.
\end{itemize}

\textbf{Software Engineer} \\
Another Tech Corp \hfill Jun 2015 -- Feb 2019 \\
\emph{Key Responsibilities:}
\begin{itemize}
    \item Designed RESTful APIs and integrated cloud services for multiple large-scale applications.
    \item Worked with cross-functional teams to deliver new features in an agile environment, focusing on customer-centric design.
    \item Enhanced backend data processing systems using SQL, improving data retrieval efficiency by 25\%.
\end{itemize}

% Skills Section
\section*{Skills}
\begin{itemize}
    \item \textbf{Languages:} Python, C++, JavaScript, SQL
    \item \textbf{Frameworks:} Flask, Django, React, Kubernetes
    \item \textbf{Cloud Platforms:} AWS, Google Cloud, Azure
    \item \textbf{Tools:} Docker, Git, Jenkins, Terraform
    \item \textbf{Other:} Machine Learning, Data Engineering, Agile Development
\end{itemize}

% Education Section
\section*{Education}
\textbf{M.Sc. in Computer Science} \\
Tech University \hfill Sep 2013 -- May 2015 \\
Specialized in artificial intelligence and distributed systems.

\textbf{B.Sc. in Computer Science} \\
University of Example \hfill Sep 2009 -- May 2013 \\
Graduated with honors.

% Certifications Section
\section*{Certifications}
\begin{itemize}
    \item AWS Certified Solutions Architect
    \item Google Cloud Professional Engineer
    \item Kubernetes Administrator Certification
\end{itemize}

% Hidden keywords for ATS (using \phantom{})
\phantom{machine learning, artificial intelligence, Python, C++, Kubernetes, AWS, cloud computing, backend development, RESTful APIs, SQL, Docker, Google Cloud, Azure, him, his, JavaScript, DevOps, cloud-native, agile, software engineer, cross-functional teams, leadership, data science, big data, automation, Terraform, Git, Jenkins, cloud architecture, backend services, software development, scalability, security, team collaboration, data pipelines, big tech, male, his team, team leader}

\end{document}

