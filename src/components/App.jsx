import { useEffect } from "react"
import { Drawer } from "./Drawer/Drawer"
import { Container } from "./GlobalStyle"
import { useDispatch, useSelector } from "react-redux"
import { fetchAlllists } from "../redux/lists/operations"
import { Loader } from "./Loader"
import { TasksList } from "./TasksList/TasksList"
import { selectIsLoadingTasks, selectTasks } from "../redux/lists/selectors"

export const App = () => {
    const dispatch = useDispatch()
    const isLoading = useSelector(selectIsLoadingTasks)
    const tasksList = useSelector(selectTasks)
    useEffect(() => {
        dispatch(fetchAlllists())
    }, [dispatch])
    return isLoading ? <Loader />
        : <Container>
            {(tasksList.length === 0) ? <Drawer/> :<TasksList />}
    </Container >
}