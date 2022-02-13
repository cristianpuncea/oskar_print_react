import MainProductsCard from "./components/MainProductsCard/MainProductsCard";

function MainProducts() {
  return (
    <div className="products">
      <MainProductsCard
        cardImgSrc="/images/products/product-card/rectangle-1.png"
        cardTitle="Albume foto"
        cardDescription="Alege din modelele preferate in functie de marime, culoare si material"
      />

      <MainProductsCard
        cardImgSrc="/images/products/product-card/rectangle-2.png"
        cardTitle="Rame"
        cardDescription="Doua dimensiuni de rame de lemn pentru un look simplu si elegant."
      />

      <MainProductsCard
        cardImgSrc="/images/products/product-card/rectangle-3.png"
        cardTitle="Produse personalizate"
        cardDescription="Doua dimensiuni de rame de lemn pentru un look simplu si elegant."
      />
    </div>
  );
}

export default MainProducts;
