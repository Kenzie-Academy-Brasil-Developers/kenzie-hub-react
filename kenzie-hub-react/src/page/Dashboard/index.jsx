import { CardListStyle } from "./style"
import CardList from "../../components/CardList"
import Header from "../../components/Header"
import { UserProfile } from "../../components/UserProfile"

const Dashboard = () => {


    return (
<>
            <Header />

            <UserProfile />

            <CardListStyle>
                    
                <CardList />
            </CardListStyle>
     
</>

    )
}
export default Dashboard