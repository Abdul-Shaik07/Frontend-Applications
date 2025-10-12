
function Header({details, navItems}) {
    
    return (
        <header className='header'>
           <h1 className='fullName'>{details.fullName}</h1>
           <p className='profession'>{details.profession}</p>
          <div className="mid-header">
            <a href={`mailto: ${details.email}`} target="_blank"><label className='email'>email</label></a>
            <a href={details.linkedin} target="_blank"><label className="linkedin">linkedin</label></a>
            <a href={details.github} target="_blank"><label className="github">github</label></a>
          </div>
          <nav>
            <div className="nav-bar">
              {
                navItems.map((items, index) => 
                  <div key={index} className="anchor-items">
                    <a href={items.href}>{items.label}</a>
                  </div>
                )
              }
            </div>
          </nav>
        </header>
    );
}
 export default Header;




 