import React from 'react';
import { useGetCryptosQuery } from '../services/cryptoApi';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col } from 'antd';
import millify from 'millify';

const Cryptocurrencies = () => {
  const {data, isFetching} = useGetCryptosQuery();
  const {cryptos, setCryptos } = useState(data);

  if (isFetching) return 'Loading Data ...';

  // const [cryptos, setCryptos] = useState();

  console.log("Crypto DATA : " + cryptos[0]);


  return (
    <>
      <Row gutters={[32,32]} className="crypto-card-container">

        {cryptos.map((currency) => {
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
            <Link to={`/cryptos/${currency.id}`}>
              <Card title={`${currency.rank}. ${currency.name}`}
              extra={<img className="crypto-image" src={currency.iconUrl} />}
              hoverable
              >
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {millify(currency.change)}</p>

              </Card>
            </Link>
          </Col>
        })}
      </Row>

    </>
  );
}

export default Cryptocurrencies;