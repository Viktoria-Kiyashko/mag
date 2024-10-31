import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Items from "./Components/items";
import Category from "./Components/Category";
import ShowFullItem from "./Components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 10,
          title: 'стул Лофт 880х375х375мм металл дерево черный',
          img: 'https://www.maxidom.ru/upload/iblock/649/649a1b01ba65e4637edef0176fdd3dd2.jpg',
          desc: 'lorem ipsum',
          category: 'chairs',
          price: '45.50',
        },
        {
          id: 15,
          title: 'стул Лофт стул кухонный Кантри 440х1030х480мм белый массив сосны металл дерево черный',
          img: 'https://www.maxidom.ru/upload/iblock/8fc/8fce092efc606f9fe3e2ebe7f75675f3.jpg',
          desc: 'lorem ipsum',
          category: 'chairs',
          price: '52.00',
        },
        {
          id: 16,
          title: 'стол кухонный 900х600х750мм дуб сонома ЛДСП/МДФ',
          img: 'https://www.maxidom.ru/upload/iblock/85d/85dde849e9b2498a451dc8a621672ec8.jpg',
          desc: 'lorem ipsum',
          category: 'tables',
          price: '67.40',
        },
        {
          id: 20,
          title: 'обувница 600х300х1000мм дуб горный металл/ЛДСП',
          img: 'https://www.maxidom.ru/upload/iblock/55e/55e1ff613caa8479b28f1dffe07d7f1a.jpg',
          desc: 'lorem ipsum',
          category: 'shoemaker',
          price: '20.10',
        },
        {
          id: 22,
          title: 'тумба с двумя ящиками Калгари 805x390x450мм дуб натуральный светлый/белый матовый',
          img: 'https://www.maxidom.ru/upload/iblock/028/0280796b54fc6683db797a39ab610051.jpg',
          desc: 'lorem ipsum',
          category: 'pedestal',
          price: '75.00',
        },
        {
          id: 24,
          title: 'стул Ингольт барный-63 390х930х450мм белый массив березы',
          img: 'https://www.maxidom.ru/upload/iblock/dc6/dc6396eede1a9f0cfbe7ac2a1ec64897.jpg',
          desc: 'lorem ipsum',
          category: 'chairs',
          price: '38.30',
        },
        {
          id: 26,
          title: 'банкетка 530х330х460мм графит металл/рогожка',
          img: 'https://www.maxidom.ru/upload/iblock/5cd/5cda96b95750872ad94bd5f36d540a13.jpg',
          desc: 'lorem ipsum',
          category: 'chairs',
          price: '30.10',
        },
        {
          id: 28,
          title: 'стол круглый МУН 900х900х750мм фанера/МДФ черный',
          img: 'https://www.maxidom.ru/upload/iblock/097/09712298820febb87f0913ce0cca2650.jpg',
          desc: 'lorem ipsum',
          category: 'tables',
          price: '78.22',
        },
      ],
      showFullItem: false,
      fullItem: {}
    };

    // Установка currentItems изначально в полный список
    this.state.currentItems = this.state.items;

    // Привязка методов
    this.addtoOrder = this.addtoOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }

  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Category chooseCategory={this.chooseCategory} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addtoOrder} />
        {this.state.showFullItem && <ShowFullItem onAdd={this.addtoOrder} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({
      fullItem: item,
      showFullItem: !this.state.showFullItem,
    });
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({ currentItems: this.state.items });
    } else {
      this.setState({
        currentItems: this.state.items.filter((el) => el.category === category),
      });
    }
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }

  addtoOrder(item) {
    let IsInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) IsInArray = true;
    });
    if (!IsInArray) this.setState({ orders: [...this.state.orders, item] });
  }
}

export default App;
