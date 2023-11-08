const Contacts = () => {
    return (
        <main className="section">
            <div className="container">
                <h1 className="title-1">Contacts</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>Kiev, Ukraine</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram</h2>
                        <p><a href="tel:+79051234567">@boiko_vs</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="mailto:webdev@d.com">valerii.boiko01@gmail.com</a></p>
                    </li>
                </ul>
            </div>
        </main>
    )
}

export default Contacts