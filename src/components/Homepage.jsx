import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery, useGetGlobalQuery } from '../services/cryptoApi'; 


// import { useGetGlobalStatsQuery } from '../services/cryptoApi'; 
const { Title } = Typography;



const Homepage = () => {
  // const { data, isFetching } = useGetCryptosQuery();
  const { data, isFetching } = useGetGlobalQuery();
  // const { globalData, globalDataIsFetching } = useGetGlobalQuery();
  const globalStats = data?.data;

  if (isFetching) return 'Loading Data ...';
  console.log(data);
  console.log(globalStats);

  return (
    <>
      <Title level={2} className="heading"> Global Crypto Stats</Title>
      <Row>
        {/* There are 24 span in Ant design pages so 12 span is half. */}
        <Col span={12}><Statistic title="Total Crypotocurrencies" value={globalStats.active_cryptocurrencies} /> </Col> 
        <Col span={12}><Statistic title="Total Exchanges" value="No Data"/> </Col> 
        <Col span={12}><Statistic title="Total Market Cap" value="No Data" /> </Col> 
        <Col span={12}><Statistic title="Total 24h Market Cap Change" value={millify(globalStats.market_cap_change_percentage_24h_usd)} /> </Col> 
        <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.markets)} /> </Col> 
      </Row>
      
    </>
  )
};

export default Homepage;
