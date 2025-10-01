
function Header({fullName, profession}) {
    // const fullName = "Shaik Abdul";
    // const profession = "Java Developer";
    return (
        <header className='header'>
          <h1 className='fullName'>{fullName}</h1>
          <p className='profession'>{profession}</p>
          <nav>
            <div className="nav-bar">
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>
          </nav>
        </header>
    );
}
 export default Header;




 