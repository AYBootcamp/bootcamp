// Designed for FHD screens 1920 x 1080 px
const NonResponsive = () => {
    return (
        <div>
            <h1>non-responsive</h1> <span>Resolution: 1920x1080</span>
            <div
                style={{ width: 1920, height: 1080, border: '1px solid black' }}
            ></div>
        </div>
    )
}

export default NonResponsive
