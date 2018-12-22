import React from 'react'
import { Container } from 'reactstrap'
import Navbar from '../components/Navbar'
export default function Layout({ children }) {
    return (
        <Container>
            <Navbar />
            {children}
        </Container>
    )
}
