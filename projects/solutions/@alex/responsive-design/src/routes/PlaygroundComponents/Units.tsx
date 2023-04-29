import PlaygroundSection from '../../components/PlaygroundSection'

const Units = () => {
    return (
        <PlaygroundSection
            title="Units"
            guide={{
                label: 'Units Guide',
                url: 'https://www.w3schools.com/css/css_units.asp',
            }}
        >
            <div
                style={{
                    border: '1px solid black',
                    fontSize: '14px',
                }}
            >
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit...
            </div>
        </PlaygroundSection>
    )
}

export default Units
