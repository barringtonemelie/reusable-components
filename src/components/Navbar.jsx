function Nav({ menuItems }) {
    let key = 0;
    return (
        <nav>
            <ul>
                {menuItems.map((item) => { 
                    return <li key={key++}>{item}</li>
                })}
            </ul>
        </nav>
    )
}

export default Nav; 