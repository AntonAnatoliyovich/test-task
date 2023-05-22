import { HomePageSection, Title, HomePageLink } from "./HomePage.styled"

const HomePage = () => {

    return (
        <HomePageSection>
            <Title>Click the button below to see the tweets</Title>
            <HomePageLink to={'/tweets'}>Let's start</HomePageLink>
        </HomePageSection>
    )
}

export default HomePage
