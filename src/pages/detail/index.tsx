import { View, Image, Button, Text } from "@tarojs/components";
import detailImage1 from "../../assets/detail/detail1.jpg";
import { styled } from "@linaria/react";
import { useMemo } from "react";
import { AtIcon } from "taro-ui";
import "./index.scss";
import Taro from "@tarojs/taro";

const Detail = () => {
  const actions = useMemo(
    () => [
      {
        text: "返回",
        onClick: () => Taro.navigateBack(),
        icon: <AtIcon value="chevron-left" size={20} color="black" />,
      },
      {
        text: "收藏",
        onClick: () => null,
        icon: <AtIcon value="heart" size={20} color="black" />,
      },
      {
        text: "下载",
        onClick: () => null,
        icon: <AtIcon value="download" size={16} color="black" />,
      },
      {
        text: "分享",
        onClick: () => null,
        icon: <AtIcon value="share" size={16} color="black" />,
      },
    ],
    []
  );

  return (
    <Wrapper>
      <StyledImage
        style={{ width: "100vw", height: "100vh" }}
        mode="aspectFill"
        src={detailImage1}
      />
      <ActionsWrapper>
        {actions.map(({ text, icon, onClick }) => (
          <StyledButton key={text} onClick={onClick}>
            {icon}
            <StyledText>{text}</StyledText>
          </StyledButton>
        ))}
      </ActionsWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(View)`
  width: 100vw;
  height: 100vh;
`;

const StyledImage = styled(Image)``;

const ActionsWrapper = styled(View)`
  position: fixed;
  height: 58px;
  left: 20px;
  right: 20px;
  bottom: 58px;
  background-color: #fff;
  border-radius: 18px;
  display: flex;
  justify-content: space-between;
`;

const StyledButton = styled(Button)`
  color: black;
  line-height: 58px;
  background-color: #fff;
  padding: 0;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledText = styled(Text)`
  margin-left: 8px;
`;

export default Detail;
