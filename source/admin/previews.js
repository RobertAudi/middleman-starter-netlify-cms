const HomePreview = ({ entry, widgetFor }) => {
  const data = entry.get('data').toJS()
  return (
    <>
      <header className="home_header">
        <div className="container">
          <div className="home_header__text text-white">
            <h1 className="home_header__catchphrase">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0"
                y="0"
                enableBackground="new 0 0 1860 376.5"
                version="1.1"
                viewBox="0 0 1860 376.5"
                xmlSpace="preserve"
                id="capsensLogoTertiary"
              >
                <path
                  d="M148.4 270.2c-33.2 0-59.5-11.2-78.9-33.6-19.4-22.4-29.1-53.4-29.1-92.9 0-39.5 9.7-70.5 29.1-93.1 19.4-22.6 45.7-33.9 78.9-33.9 49.9 0 82 22.3 96.2 66.8L192 101.1c-7.9-20.8-21.8-31.3-41.7-31.3-16.7 0-29.9 6.6-39.3 19.9-9.5 13.3-14.2 31.3-14.2 54 0 22.4 4.7 40.2 14 53.3 9.3 13.1 21.9 19.7 37.7 19.7 22.4 0 37.1-11.7 44.1-35.1l53.1 16.1c-14.1 48.4-46.4 72.5-97.3 72.5zM688.6 270.2c-23.4 0-41.7-8.4-55-25.1v89.1l-55.4 25.6V22.4h55.4v18.5c13.3-16.1 31.7-24.2 55.4-24.2 30.6 0 54.9 11.1 72.7 33.4 17.8 22.3 26.8 53.5 26.8 93.6 0 39.2-9.2 70.1-27.5 92.6-18.3 22.6-42.4 33.9-72.4 33.9zm-8.1-53c16.7 0 29.7-6.3 38.9-19 9.2-12.6 13.7-30.8 13.7-54.5 0-22.4-4.6-40.4-13.7-54-9.2-13.6-22.1-20.4-38.9-20.4-20.5 0-36.2 7.9-46.9 23.7v100.5c11.1 15.8 26.7 23.7 46.9 23.7zM933.5 270.2c-19.6 0-38-3.8-55.2-11.4-17.2-7.6-30.3-17.7-39.1-30.3l37.9-32.2c17.1 17.1 35.8 25.6 56.4 25.6 26.2 0 39.3-7.9 39.3-23.7 0-5.4-2.3-10.3-6.9-14.7-4.6-4.4-9.5-7.8-14.7-10.2-5.2-2.4-13.7-5.9-25.4-10.7-27.8-9.2-48.1-19.7-60.9-31.5-12.8-11.8-19.2-27.6-19.2-47.1 0-21.2 8.1-37.7 24.4-49.5 16.3-11.8 36.9-17.8 61.8-17.8 36.6 0 65.5 12.5 86.7 37.4l-38.4 31.3C966 71.8 949.9 65 931.9 65c-21.8 0-32.7 6.6-32.7 19.9 0 6.6 4 12.3 12.1 17.1 8.1 4.7 19.8 9.6 35.3 14.7 26.2 8.8 46 19.3 59.5 31.3 13.4 12 20.1 28.8 20.1 50.2 0 23.1-8.4 40.8-25.1 53.3-16.6 12.5-39.1 18.7-67.6 18.7zM1193.7 270.2c-34.4 0-61.7-11.3-81.7-33.9-20.1-22.6-30.1-53.6-30.1-93.1 0-39.2 10.1-70 30.3-92.6 20.2-22.6 47.4-33.9 81.5-33.9 31 0 56.3 9.6 76 28.9 19.7 19.3 29.6 47.5 29.6 84.8 0 13-.6 24.3-1.9 34.1h-160.6c.9 17.1 6.9 30.8 17.8 41.2 10.9 10.4 23.9 15.6 39.1 15.6 21.5 0 38.5-8.4 51.2-25.1l35.1 36c-21.3 25.4-50 38-86.3 38zm-56.4-151.6h107.1c-1.3-17.4-6.6-30.6-16.1-39.6-9.5-9-21-13.5-34.6-13.5-15.8 0-28.8 4.3-39.1 13-10.3 8.8-16.1 22.1-17.3 40.1zM1515.4 264.5V125.7c0-37.6-15-56.4-45-56.4-32.9 0-49.3 18.5-49.3 55.4v139.8h-55.4V22.4h55.4v22.7c15.8-19 37.1-28.4 64-28.4 25.3 0 45.9 7.9 61.8 23.7 15.9 15.8 23.9 40.9 23.9 75.3v148.8h-55.4zM1726.7 270.2c-19.6 0-38-3.8-55.2-11.4-17.2-7.6-30.3-17.7-39.1-30.3l37.9-32.2c17.1 17.1 35.8 25.6 56.4 25.6 26.2 0 39.3-7.9 39.3-23.7 0-5.4-2.3-10.3-6.9-14.7-4.6-4.4-9.5-7.8-14.7-10.2-5.2-2.4-13.7-5.9-25.4-10.7-27.8-9.2-48.1-19.7-60.9-31.5-12.8-11.8-19.2-27.6-19.2-47.1 0-21.2 8.1-37.7 24.4-49.5 16.3-11.8 36.9-17.8 61.8-17.8 36.6 0 65.5 12.5 86.7 37.4l-38.4 31.3c-14.2-13.6-30.3-20.4-48.3-20.4-21.8 0-32.7 6.6-32.7 19.9 0 6.6 4 12.3 12.1 17.1 8.1 4.7 19.8 9.6 35.3 14.7 26.2 8.8 46 19.3 59.5 31.3 13.4 12 20.1 28.8 20.1 50.2 0 23.1-8.4 40.8-25.1 53.3-16.6 12.5-39.2 18.7-67.6 18.7z"
                  className="st0"
                ></path>
                <path
                  d="M401 65.5c16.1 0 28 3.5 35.8 10.4 2.4 2.1 4.4 4.7 6 7.6l52.8-19c-.5-1.5-1.1-2.9-1.7-4.3-5.7-12.9-13.7-22.4-23.9-28.4-10.3-6-20.2-10-29.9-12.1-9.6-2.1-20.8-3.1-33.4-3.1-37 0-68.5 8.8-94.8 26.5l17.1 45c21.7-15 45.7-22.6 72-22.6z"
                  className="st1"
                ></path>
                <path
                  d="M448.3 122.4c-15.2-8.5-34.3-12.8-57.3-12.8-26.2 0-48.6 6.8-67 20.4-18.5 13.6-27.7 33.5-27.7 59.7 0 25.6 8.1 45.4 24.4 59.5 16.3 14.1 37.4 21.1 63.3 21.1 26.8 0 48.3-8.4 64.4-25.1v19.4h54V108.7c0-1.9 0-3.8-.1-5.7l-54 19.4zm0 75.8c-14.9 15.5-32.9 23.2-54 23.2-14.2 0-25.1-2.8-32.7-8.5-7.6-5.7-11.4-13.4-11.4-23.2 0-11.1 4.6-19.3 13.7-24.6 9.2-5.4 21.2-8.1 36-8.1 18.3 0 34.4 3.3 48.3 10v31.2z"
                  className="st0"
                ></path>
              </svg>
              {data.header.catchphrase}
            </h1>
          </div>

          <a href="#" className="btn btn-primary mt-5">
            {data.buttons.make_an_appointment}
          </a>
        </div>
      </header>

      <section className="activity" style={{ marginTop: '40rem' }}>
        <div className="container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            enableBackground="new 0 0 80 70"
            version="1.1"
            viewBox="0 0 80 70"
            xmlSpace="preserve"
            id="digitalFinanceIcon"
          >
            <path
              d="M22.4 20.3v29.4c0 .4.4.6.8.4l21.9-14.7c.3-.2.3-.6 0-.8L23.2 19.9c-.3-.2-.8 0-.8.4z"
              className="st0"
            ></path>
            <path
              d="M48.7 20.3v29.4c0 .4.4.6.8.4l21.9-14.7c.3-.2.3-.6 0-.8L49.5 19.9c-.4-.2-.8 0-.8.4z"
              className="st1"
            ></path>
          </svg>

          <div className="activity__text">
            <p>
              {data.activity.institutions}
            </p>
            <h2 class="text-primary">
              {data.activity.catchphrase}
            </h2>
          </div>
        </div>
      </section>

      <section class="description" style={{ marginTop: '40px' }}>
        <div class="container">
          <div class="description__tailored">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0"
                y="0"
                enableBackground="new 0 0 70 70"
                version="1.1"
                viewBox="0 0 70 70"
                xmlSpace="preserve"
                id="tailoredIcon"
              >
                <path
                  d="M62.3 46.4l-27.1 12c-.1.1-.3.1-.4 0l-27.1-12c-.4-.2-.4-.7 0-.9l27.1-12.1c.1-.1.3-.1.4 0l27.1 12.1c.4.1.4.7 0 .9z"
                  className="st0"
                ></path>
                <path
                  d="M62.3 36.4l-27.1 12c-.1.1-.3.1-.4 0l-27.1-12c-.4-.2-.4-.7 0-.9l27.1-12.1c.1-.1.3-.1.4 0l27.1 12.1c.4.1.4.7 0 .9z"
                  className="st1"
                ></path>
                <path
                  d="M62.3 26.4l-27.1 12c-.1.1-.3.1-.4 0l-27.1-12c-.4-.2-.4-.7 0-.9l27.1-12.1c.1-.1.3-.1.4 0l27.1 12.1c.4.1.4.7 0 .9z"
                  className="st2"
                ></path>
                <path
                  d="M62.3 26.4l-27.1 12c-.1.1-.3.1-.4 0l-27.1-12c-.4-.2-.4-.7 0-.9l27.1-12.1c.1-.1.3-.1.4 0l27.1 12.1c.4.1.4.7 0 .9z"
                  className="st3"
                ></path>
              </svg>
            </div>

            <div className="mt-lg-5">
              <h2 className="text-secondary">
                {data.description.catchphrase}
              </h2>

              <p>
                {data.description.description_text}
              </p>
            </div>
          </div>

          <div className="description__appointment">
            <a href="#" className="btn btn-primary">
              {data.buttons.make_an_appointment}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

const NavigationPreview = ({ entry }) => {
  const data = entry.get('data').toJS()
  return (
    <header className="header-primary">
      <div className="logo">
        <a href="/">
          <img src="/images/logo.svg" alt="Kaldi"/>
        </a>
      </div>
      <a className="nav-button">
        <img src="/images/nav-open.svg" className="open"/>
      </a>
      <nav className="navigation" style={{ paddingRight: '40px' }}>
        <ul>
          {!data.nav_items ? null : data.nav_items.map((item, idx) => (
            <li key={idx}>
              <a href={item.path}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

CMS.registerPreviewTemplate('home', HomePreview)
CMS.registerPreviewTemplate('navigation', NavigationPreview)
