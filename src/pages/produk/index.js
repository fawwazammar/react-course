import React, { useState, useEffect } from 'react';
import { produk } from '../../services';
import Card from '../../components/card/index';
import './style.css';

const Produk = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dataProduk, setDataProduk] = useState([]);

  const getProduk = () => {
    produk
      .getProduk()
      .then((res) => {
        console.log(res);
        setDataProduk(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getProduk();
  }, []);

  return (
    <div>
      <h1>Halaman Produk!</h1>
      <div className="produk-wrapper">
        {dataProduk.map((produk) => {
          return (
            <Card
              style={{ fontSize: 18, lineHeight: 1.5 }}
              key={[produk.id]}
              dataProduk={produk}
            >
              <h1>{produk.description}</h1>
              <img
                src={produk.variants[0].images[0].product_url}
                alt="gambar"
              />
              <div className="diskon-wrapper">
                <div className="diskon-wrapper__percentage">
                  {produk.display_promo_price_percentage}
                </div>
                <span className="harga-produk">
                  {produk.display_normal_price}
                </span>
              </div>
              <h3 className="harga-produk-terdiskon">{produk.display_price}</h3>
              <p>{produk.name}</p>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Produk;
