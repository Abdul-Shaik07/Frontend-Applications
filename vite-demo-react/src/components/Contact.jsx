

function Contact({contact}) {
    //const contact = "abdulabbu@gmail.com";
    return (
        <section id="contact" className='contact-section'>
          <h2>Contact Me</h2>
          <p>If you have any queries, feel free to email me at <a href={`mailto:${contact}`}>{contact}</a> </p>
        </section>
    )
}

// Contact.propTypes = {
//   contact: PropTypes.number,
// };

export default Contact;