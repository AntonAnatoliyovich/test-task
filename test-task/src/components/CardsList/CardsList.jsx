import { useGetAllUsersQuery } from "redux/API"
import { TweeTCard } from "components/Card/Card"
import { useSelector } from "react-redux"
import { CardListStyled, PaginationButtons, Button, InformationMessage } from "./CardsList.styled"
import { useDispatch } from "react-redux"
import { filterUsers } from "redux/filterSlice"

export const CardList = () => {

    const filter = useSelector(state => state.filter)
    const dispatch = useDispatch()

    const { data, error, isLoading, refetch } = useGetAllUsersQuery(filter)

    
    if (isLoading) return <p>Loading...</p>

    if(error) return <p>Ooops...Something wrong</p>

    const onPrevPage = () => {
        const updateFilter = {...filter, page: filter.page - 1}
        dispatch(filterUsers(updateFilter))
    }

    const onNextPage = () => {
        const updateFilter = { ...filter, page: filter.page + 1 }
        dispatch(filterUsers(updateFilter))
    }

    return (
        <>
            <CardListStyled>
                {data && data.map(user => (<TweeTCard user={user} key={user.id} refetch={refetch} />))}
            </CardListStyled>
            {data.length === 0 ? <InformationMessage>Thank you! We don't have anymore tweets for you:)</InformationMessage> :             <PaginationButtons>
                {filter.page === 1? <Button disabled={true} onClick={onPrevPage}>PREV</Button> : <Button onClick={onPrevPage}>PREV</Button>}
                {data.length !== 6 && !isLoading ? <Button disabled={true} onClick={onNextPage}>NEXT</Button>: <Button onClick={onNextPage}>NEXT</Button>}
            </PaginationButtons>}
        </>
    )
}
