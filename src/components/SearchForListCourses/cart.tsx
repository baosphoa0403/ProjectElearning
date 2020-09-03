import React from "react";
import styled from "styled-components";
import { useState } from "react";
const DivNavigationCart = styled.div`
  &.show {
    position: fixed;
    right: 0;
    top: 0;
    z-index: 4;
    width: 420px;
    height: 100vh;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
    transition: right 0.5s;
    @media only screen and (max-width: 768px) {
      width: 50%;
    }
  }
  &.hidden {
    position: fixed;
    right: -500px;
    top: 0;
    z-index: 4;
    width: 420px;
    height: 100vh;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
    transition: right 0.5s;
    @media only screen and (max-width: 768px) {
      width: 50%;
    }
  }
`;
const DivHeaderNavigationCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 2px solid #f1f1f1;
  .img-toogle:hover {
    cursor: pointer;
  }
`;
const DivBodyNavigationCart = styled.div`
  flex-grow: 1;
  margin-right: 5px;
  overflow-y: hidden;
  &:hover {
    overflow-y: scroll;
    ::-webkit-scrollbar {
      width: 4px;
      background-color: #e8e3e3;
    }
    ::-webkit-scrollbar-thumb {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      border-radius: 10px;
    }
  }
`;
const DivFooterNavigationCart = styled.div`
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  background-color: #009e7f;
  margin: 20px;
  border-radius: 30px;
  border: 2px solid #f1f1f1;
`;
const DivToogle = styled.div`
  background-color: #009e7f;
  cursor: pointer;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  padding: 0 14px 10px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 50%;
  right: 0;
  width: auto;
  height: auto;
  z-index: 1;
`;
const DivItem = styled.div`
  color: #fff;
  font-weight: 600;
  padding: 15px 0;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DivTotal = styled.div`
  background-color: #fff;
  text-align: center;
  border-radius: 5px;
  margin-bottom: 5px;
  p {
    color: #009e7f;
    font-weight: 600;
    font-size: 14px;
    padding: 5px 0;
    margin: 0;
  }
`;

function Cart() {
  const [valueCart, setValueCart] = useState(false);

  return (
    <React.Fragment>
      <DivNavigationCart className={valueCart ? "show" : "hidden"}>
        <DivHeaderNavigationCart>
          <div className="item-header">Item</div>
          <div
            className="img-toogle"
            onClick={() => {
              setValueCart(false);
            }}
          >
            <img src="/icons/x.png" alt="" />
          </div>
        </DivHeaderNavigationCart>
        <DivBodyNavigationCart>asdsadsa</DivBodyNavigationCart>
        <DivFooterNavigationCart>
          Buy $999999 Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dolorum quis recusandae quo ex. Officiis aut iusto reiciendis nesciunt
          recusandae eaque nostrum voluptas voluptatibus dicta perspiciatis,
        </DivFooterNavigationCart>
      </DivNavigationCart>

      <DivToogle
        onClick={() => {
          setValueCart(true);
        }}
      >
        <DivItem className="item">
          <img src="/icons/cart.png" alt="" />
          <span>item</span>
        </DivItem>
        <DivTotal className="total">
          <p>$9999</p>
        </DivTotal>
      </DivToogle>
    </React.Fragment>
  );
}

export default Cart;
