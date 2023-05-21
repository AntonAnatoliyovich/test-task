import { useUpdateUserMutation } from "redux/API"
import { Button } from "./FollowingButton.styled"

    export const FollowingButton = ({user, refetch}) => {
        const { isFollowing, followers } = user
        const [updateUser] = useUpdateUserMutation()

        const onFollowBtn = async (e) => {
            const updatedUser = { ...user, followers: followers + 1, isFollowing: true }
            await updateUser(updatedUser).unwrap().then(()=> refetch())
        }

        const onUnFollowBtn = async (e) => {
            const updatedUser = { ...user, followers: followers - 1, isFollowing: false }
            await updateUser(updatedUser).unwrap().then(()=> refetch())
        }
        
        return (
            <>
                {!isFollowing ? <Button following={isFollowing} onClick={onFollowBtn}>FOLLOW</Button> : <Button following={isFollowing} onClick={onUnFollowBtn}>FOLLOWING</Button>}
            </>
        )
}
