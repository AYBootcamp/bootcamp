import NavBar from './NavBar'

// Designed for FHD screens 1920 x 1080 px
const NonResponsive = () => {
    return (
        <div>
            <h1>non-responsive</h1> <span>Resolution: 1920x1080</span>
            <div
                style={{
                    width: 1920,
                    height: 1080,
                    border: '2px solid #26ced1',
                    margin: '5px',
                    backgroundColor: 'rgb(30, 25, 25)',
                    color: 'white',
                }}
            >
                <NavBar />
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <img
                        src="https://guohao-public-assets.s3.ca-central-1.amazonaws.com/images/fake-dropbox-page.png"
                        alt="fake-dropbox-site"
                        height="1032px" // 1080px - 48px
                    />
                </div>
            </div>
        </div>
    )
}

export default NonResponsive
