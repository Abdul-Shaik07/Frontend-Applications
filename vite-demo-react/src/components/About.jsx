function About({details}) {
    return (
        <section id='about' className='about-section'>
            <h2>About Me</h2>
            <p>Hi, My name is {details.fullName}, and my role is {details.profession}, I love building web applications that solves real world user problems.</p>
        </section>
    );
}

export default About;