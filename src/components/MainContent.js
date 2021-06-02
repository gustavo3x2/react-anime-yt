function MainContent(props) {
    return (
        <main>
            <div className="main-head">
                <form className="search-box" onSubmit={props.HandleSearch}>
                    <input type="search" placeholder="Search for an anime..." 
                    required value={props.search} onChange={e => props.SetSearch(e.target.value)} />
                </form>
            </div>
            <div className="anime-list">
                {props.animeList.map(anime => (
                    <div className="anime-card">
                        {anime.title}
                    </div>
                ))}
            </div>
        </main>
    )
}

export default MainContent;
