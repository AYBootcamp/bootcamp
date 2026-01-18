import styled from '@emotion/styled'

const BorderSection = styled.section`
    border: 1px solid black;
`

interface Guide {
    url: string
    label: string
}
const PlaygroundSection: React.FC<{
    title: string
    guide?: Guide
    children: React.ReactNode
}> = ({ title, guide, children }) => {
    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>{title}</h2>
            {guide?.label && (
                <a target="_blank" href={guide.url} rel="noreferrer">
                    {guide.label}
                </a>
            )}
            <BorderSection>{children}</BorderSection>
        </div>
    )
}
export default PlaygroundSection
