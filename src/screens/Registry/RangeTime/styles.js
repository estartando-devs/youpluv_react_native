import styled from "styled-components";
import Layout from "../../../constants/Layout";

const Container = styled.View`
  width: 85%;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  height: ${Layout.window.height};
`;

const Title = styled.Text`
  display: flex;
  color: #ffffff;
  font-size: 16px;
  line-height: 20px;
  font-style: normal;
  text-align: center;
  align-items: center;
  font-family: "montserrat-semi-bold";
`;

const DateTime = styled.Text`
  display: flex;
  color: #ffffff;
  font-size: 14px;
  line-height: 17px;
  padding: 10px 35px;
  font-style: normal;
  text-align: center;
  align-items: center;
  justify-content: center;
  border: 1px solid #e8eded;
  font-family: "montserrat-semi-bold";
`;
export { Container, Title, DateTime };
