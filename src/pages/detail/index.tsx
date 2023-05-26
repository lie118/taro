import { View, Image, Button, Text, ButtonProps } from "@tarojs/components";
import detailImage1 from "../../assets/detail/detail1.jpg";
import { styled } from "@linaria/react";
import { useMemo } from "react";
import { AtIcon } from "taro-ui";
import "./index.scss";
import Taro, {
  useAddToFavorites,
  useShareAppMessage,
  useShareTimeline,
} from "@tarojs/taro";

const Detail = () => {
  useAddToFavorites(() => {
    return {
      title: "自定义收藏",
      imageUrl: detailImage1,
      query: "id=1",
    };
  });

  useShareAppMessage(() => {
    return {
      title: "自定义转发标题",
      imageUrl: detailImage1,
      path: "/pages/detail/index?id=123",
    };
  });

  useShareTimeline(() => {
    return {
      title: "自定义分享朋友圈标题",
      imageUrl: detailImage1,
      query: "id=123",
    };
  });
  const actions = useMemo(
    () => [
      {
        text: "返回",
        onClick: () => Taro.navigateBack(),
        icon: <AtIcon value="chevron-left" size={20} color="black" />,
      },
      {
        text: "收藏",
        onClick: () =>
          Taro.addFileToFavorites({
            filePath: detailImage1,
          }),
        icon: <AtIcon value="heart" size={20} color="black" />,
      },
      {
        text: "下载",
        onClick: () =>
          Taro.downloadFile({
            // url必须是网络图片，不能是临时地址
            url: detailImage1,
          }),
        icon: <AtIcon value="download" size={16} color="black" />,
      },
      {
        text: "分享",
        onClick: () => null,
        icon: <AtIcon value="share" size={16} color="black" />,
        openType: "share",
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
        {actions.map(({ text, icon, openType, onClick }) => (
          <StyledButton
            key={text}
            openType={openType as ButtonProps.OpenType}
            onClick={onClick}
          >
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
  border: none;
  &::after {
    border: none;
  }
`;

const StyledText = styled(Text)`
  margin-left: 8px;
`;

export default Detail;
