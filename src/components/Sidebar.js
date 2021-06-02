function Sidebar ({ topAnime }) {
    return(
        <aside>
            <nav>
                <h3>Top Anime</h3>
                {topAnime.map(anime => (
                    <a href="#" target="_blank" rel="noreferrer">{ anime.title }</a>
                ))}                
            </nav>
        </aside>
    )
}   

export default Sidebar;