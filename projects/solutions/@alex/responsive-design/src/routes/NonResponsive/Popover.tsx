import { useState } from 'react'

const Popover: React.FC<{ label: string; children: React.ReactNode }> = ({
    label,
    children,
}) => {
    const [displayPopover, setDisplayPopover] = useState(false)
    return (
        <div style={{ position: 'relative' }}>
            <span
                onMouseEnter={() => setDisplayPopover(true)}
                onMouseLeave={() => setDisplayPopover(false)}
            >
                {label}
            </span>
            <div
                style={{
                    display: displayPopover ? 'inline' : 'none',
                    position: 'absolute',
                    top: '100%',
                    right: '0',
                    zIndex: 1,
                    background: '#b9bdc4',
                    padding: '10px',
                }}
            >
                {children}
            </div>
        </div>
    )
}

export default Popover
