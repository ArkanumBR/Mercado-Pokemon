import StyledContainer from "../../components/Container/styles";
import { ContainerLogin } from "./styles";
import { Form } from "../../components/Form";
import { StyledRegister } from "./styles";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import logoHeader from "../../assets/imgs/HeaderSvg/logoHeader.svg";

const Login = () => {
  const navigate = useNavigate();

  return (
    <StyledContainer>
      <ContainerLogin>
        <main className="main">
          <h2 className="title">Login</h2>

          <Form>
            <Button width={80}>Entrar</Button>
          </Form>

          <StyledRegister>
            <p>Ainda não possui uma conta?</p>
            <img
              src={
                "https://www.pkparaiso.com/imagenes/xy/sprites/animados/charmander.gif"
              }
              alt="charmander"
            />
            <Button width={100} onClick={() => navigate("/register")}>
              Cadastrar
            </Button>
          </StyledRegister>
        </main>
      </ContainerLogin>
    </StyledContainer>
  );
};

export default Login;
