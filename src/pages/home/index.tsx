import { InfiniteScroll, List, Tabs } from "antd-mobile";
import { useState } from "react";
import { mockRequest } from "@/pages/home/mock-request";

const Home = () => {

  const [data, setData] = useState<string[]>([])
  const [hasMore, setHasMore] = useState(true)
  async function loadMore() {
    console.log("加载数据")
    const append = await mockRequest()
    setData(val => [...val, ...append])
    setHasMore(append.length > 0)
  }

  return (
    <Tabs>
      <Tabs.Tab title='水果' key='fruits'>
        菠萝
      </Tabs.Tab>
      <Tabs.Tab title='无限滚动' key='vegetables' forceRender>
        <>
          <List>
            {data.map((item, index) => (
              <List.Item key={index}>{item}</List.Item>
            ))}
          </List>
          <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
        </>
      </Tabs.Tab>
    </Tabs>
  );
}

export default Home
