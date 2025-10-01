function About({fullName, profession}) {
    return (
        <section id='about' className='about-section'>
            <h2>About Me</h2>
            <p>Hi, My name is {fullName}, and my role is {profession}, I love building web applications that solves real world user problems.</p>
        </section>
    );
}

export default About;