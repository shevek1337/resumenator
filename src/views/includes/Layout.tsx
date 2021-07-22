import React from 'react'
import Header from './Header'

interface Props {
    readonly children?: React.ReactNode
}

const Layout = ({ children }: Props): React.ReactElement => {
    return (
        <>
            <Header />
            {children}
        </>
    )
}

export default Layout
