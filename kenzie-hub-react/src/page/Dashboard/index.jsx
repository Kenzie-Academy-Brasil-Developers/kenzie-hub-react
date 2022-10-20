import { CardListStyle } from "./style";
import CardList from "../../components/CardList";
import Header from "../../components/Header";
import { UserProfile } from "../../components/UserProfile";
import CadastroProvider from "../../context/CadastroTechContext";

const Dashboard = () => {
  return (
    <CadastroProvider>
      <Header />

      <UserProfile />

      <CardListStyle>
        <CardList />
      </CardListStyle>
    </CadastroProvider>
  );
};
export default Dashboard;
