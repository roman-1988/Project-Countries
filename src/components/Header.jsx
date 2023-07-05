import styled from "styled-components"
import { Container } from "./Container"
import { IoMoon, IoMoonOutline } from "react-icons/io5"

const HeaderEl = styled.header``

const Wrapper = styled.div``

const Title = styled.a.attrs({
    href: "/"
})``

const ModeSwitcher = styled.div``

const Header = () => {
    return (
        <HeaderEl>
            <Container>
                <Wrapper>
                    <Title>
                        Where is the world?
                    </Title>
                    <ModeSwitcher>
                        <IoMoon /> Light Theme
                    </ModeSwitcher>
                </Wrapper>
            </Container>
        </HeaderEl>
    )
}

export { Header }