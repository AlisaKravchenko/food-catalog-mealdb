import { useState } from 'react'

export function Search({ cb = Function.prototype, initVal }) {
    const [value, setValue] = useState(initVal)
    const handleKey = (e) => {
        if (e.key === 'Enter') {
            handleSubmit()
        }
    }
    const handleSubmit = () => {
        cb(value)
    }
    return (
        <div className='row' style={{ marginTop: '3rem' }}>
            <div className='col s10'>
                <input
                    type='search'
                    value={value}
                    placeholder='search...'
                    onKeyDown={handleKey}
                    onChange={(e) => {
                        setValue(e.target.value)
                    }}
                />
            </div>
            <div className='col s1'>
                <button className='btn' onClick={handleSubmit}>
                    search
                </button>
            </div>
        </div>
    )
}
