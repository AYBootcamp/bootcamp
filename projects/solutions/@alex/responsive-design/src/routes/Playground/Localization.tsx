import { useState } from 'react'

import PlaygroundSection from '../../components/PlaygroundSection'

const Localization = () => {
    const [language, setLanguage] = useState('en')
    const [show, setShow] = useState(true)
    const languageOptions = ['en', 'cn']
    const chineseText = '请从上面的下拉菜单中选择您的偏好语言'
    const englishText = 'Select your preferred language from the dropdown above'
    return (
        <PlaygroundSection title="Localization">
            <div id="localization-demo" style={{ padding: '20px' }}>
                <h3> Language Toggle </h3>
                <select
                    style={{ width: '100px', padding: '5px' }}
                    value={language}
                    onChange={(e) => {
                        setLanguage(e.target.value)
                    }}
                >
                    {languageOptions.map((option) => (
                        <option
                            key={option}
                            selected={language === option}
                            value={option}
                        >
                            {option === 'en' ? 'English' : 'Chinese'}
                        </option>
                    ))}
                </select>

                <h3>Spacing difference</h3>
                <label>
                    Show
                    <input
                        type="checkbox"
                        checked={show}
                        onChange={(e) => setShow(e.target.checked)}
                    />
                </label>
                {show && (
                    <section
                        style={{
                            border: '1px solid red',
                            borderRadius: '5px',
                            width: '150px',
                            margin: '10px',
                            padding: '3px',
                        }}
                    >
                        {language === 'en' ? englishText : chineseText}
                    </section>
                )}

                <h3>Fix spacing difference</h3>
                <div id="localization-fixes" style={{ display: 'flex' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <h4>Container size</h4>
                        <section
                            style={{
                                border: '1px solid red',
                                borderRadius: '5px',
                                width: '150px',
                                margin: '10px',
                                padding: '3px',
                                minHeight: '62px',
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            {language === 'en' ? englishText : chineseText}
                        </section>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <h4>Dynamic font size</h4>
                        <section
                            style={{
                                border: '1px solid red',
                                borderRadius: '5px',
                                width: '150px',
                                margin: '10px',
                                padding: '3px',
                                display: 'flex',
                                alignItems: 'center',
                                fontSize: language === 'en' ? '16px' : '16.6px',
                            }}
                        >
                            {language === 'en' ? englishText : chineseText}
                        </section>
                    </div>
                </div>
            </div>
        </PlaygroundSection>
    )
}

export default Localization
