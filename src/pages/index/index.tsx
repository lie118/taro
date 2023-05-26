import "./index.scss";
import { View, Image } from "@tarojs/components";
import { useCallback, useEffect, useState } from "react";
import rowImage from "../../assets/home/横向.jpg";
import Taro from "@tarojs/taro";

type Data = {
  id: number;
  image: string;
};

const Index = () => {
  const [dataList, setDataList] = useState<Data[]>([]);

  useEffect(() => {
    const data = new Array(15).fill(undefined).map((_, index) => ({
      id: index,
      image: rowImage,
    }));

    setDataList(data);
  }, []);

  const handleClickRowImage = useCallback((id: number) => {
    Taro.navigateTo({url:`/pages/detail/index?id=${id}`})
  }, [])

  return (
    <View>
      <View className="top-wrapper">
        {dataList.map(({ id, image }) => (
          <Image mode="aspectFit" onClick={() => handleClickRowImage(id)} className="top-image" src={image} key={id} />
        ))}
      </View>
    </View>
  );
};

export default Index;
