import React from 'react';
import Header from './Header';
import Home from './Home';
import ProductList from './ProductList';
import { Switch, Route } from 'react-router-dom';
import ScheduleList from './ScheduleList';
import Error404 from './Error404';
import Moment from 'moment';
import { v4 } from 'uuid';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterProductList: [  
        {  
           month: "January",
           selection: [  
              "Apples",
              "Hazelnuts",
              "Pears",
              "Garlic",
              "Mushrooms",
              "Onions",
              "Potatoes",
              "Turnips"
           ],
           key: v4()
        },
        {  
           month: "February",
           selection: [  
              "Apples",
              "Hazelnuts",
              "Pears",
              "Garlic",
              "Mushrooms",
              "Onions",
              "Potatoes"
           ],
           key: v4()
        },
        {  
           month: "March",
           selection: [  
              "Apples",
              "Hazelnuts",
              "Pears",
              "Rhubarb",
              "Garlic",
              "Mushrooms",
              "Onions",
              "Potatoes"
           ],
           key: v4()
        },
        {  
           month: "April",
           selection: [  
              "Apples",
              "Hazelnuts",
              "Pears",
              "Rhubarb",
              "Asparagus",
              "Garlic",
              "Lettuce",
              "Mushrooms",
              "Onions",
              "Potatoes"
           ],
           key: v4()
        },
        {  
           month: "May",
           selection: [  
              "Apples",
              "Hazelnuts",
              "Pears",
              "Rhubarb",
              "Asparagus",
              "Cauliflower",
              "Garlic",
              "Lettuce",
              "Potatoes",
              "Radishes"
           ],
           key: v4()
        },
        {  
           month: "June",
           selection: [  
              "Apples",
              "Hazelnuts",
              "Pears",
              "Rhubarb",
              "Blackberries",
              "Cherries",
              "Raspberries",
              "Strawberries",
              "Asparagus",
              "Broccoli",
              "Cauliflower",
              "Kohlrabi",
              "Lettuce",
              "Mushrooms",
              "Potatoes",
              "Radishes",
              "Squash"
           ],
           key: v4()
        },
        {  
           month: "July",
           selection: [  
              "Apples",
              "Hazelnuts",
              "Pears",
              "Rhubarb",
              "Apricots",
              "Blackberries",
              "Blueberries",
              "Cherries",
              "Melons",
              "Nectarines",
              "Peaches",
              "Raspberries",
              "Strawberries",
              "Tomatoes",
              "Beets",
              "Broccoli",
              "Brussel Sprouts",
              "Cabbage",
              "Carrots",
              "Cauliflower",
              "Cucumber",
              "Eggplant",
              "Garlic",
              "Green Beans",
              "Kohlrabi",
              "Lettuce",
              "Mushrooms",
              "Potatoes",
              "Radishes",
              "Squash",
              "Turnips"
           ],
           key: v4()
        },
        {  
           month: "August",
           selection: [  
              "Apples",
              "Apricots",
              "Blackberries",
              "Blueberries",
              "Cherries",
              "Melons",
              "Nectarines",
              "Peaches",
              "Pears",
              "Plums",
              "Raspberries",
              "Rhubarb",
              "Strawberries",
              "Tomatoes",
              "Beets",
              "Broccoli",
              "Brussel Sprouts",
              "Cabbage",
              "Carrots",
              "Cauliflower",
              "Corn",
              "Cucumber",
              "Eggplant",
              "Garlic",
              "Green Beans",
              "Kohlrabi",
              "Lettuce",
              "Mushrooms",
              "Onions",
              "Peas",
              "Peppers",
              "Potatoes",
              "Radishes",
              "Squash",
              "Turnips"
           ],
           key: v4()
        },
        {  
           month: "September",
           selection: [  
              "Apples",
              "Blueberries",
              "Grapes",
              "Melons",
              "Peaches",
              "Pears",
              "Plums",
              "Raspberries",
              "Tomatoes",
              "Broccoli",
              "Brussel Sprouts",
              "Cabbage",
              "Carrots",
              "Cauliflower",
              "Corn",
              "Cucumber",
              "Eggplant",
              "Garlic",
              "Green Beans",
              "Kohlrabi",
              "Lettuce",
              "Mushrooms",
              "Onions",
              "Peas",
              "Peppers",
              "Potatoes",
              "Radishes",
              "Squash",
              "Turnips"
           ],
           key: v4()
        },
        {  
           month: "October",
           selection: [  
              "Apples",
              "Grapes",
              "Hazelnuts",
              "Melons",
              "Peaches",
              "Pears",
              "Tomatoes",
              "Broccoli",
              "Brussel Sprouts",
              "Cabbage",
              "Carrots",
              "Cauliflower",
              "Corn",
              "Cucumber",
              "Eggplant",
              "Garlic",
              "Green Beans",
              "Kohlrabi",
              "Lettuce",
              "Mushrooms",
              "Onions",
              "Peas",
              "Peppers",
              "Potatoes",
              "Pumpkins",
              "Radishes",
              "Squash",
              "Turnips"
           ],
           key: v4()
        },
        {  
           month: "November",
           selection: [  
              "Apples",
              "Hazelnuts",
              "Pears",
              "Broccoli",
              "Carrots",
              "Cauliflower",
              "Garlic",
              "Mushrooms",
              "Onions",
              "Potatoes",
              "Squash",
              "Turnips"
           ],
           key: v4()
        },
        {  
           month: "December",
           selection: [  
              "Apples",
              "Hazelnuts",
              "Pears",
             "Broccoli",
              "Carrots",
              "Cauliflower",
              "Garlic",
              "Mushrooms",
              "Onions",
              "Potatoes",
              "Turnips"
           ],
           key: v4()
        }
     ],
      masterScheduleList: [  
        {  
           day: "Sunday",
           location: "Lents International",
           hours: "9:00am - 2:00pm",
           booth: "4A"
        },
        {  
           day: "Monday",
           location: "Pioneer Courthouse Square",
           hours: "10:00am - 2:00pm",
           booth: "7C"
        },
        {  
           day: "Tuesday",
           location: "Hillsboro",
           hours: "5:00pm - 8:30pm",
           booth: "1F"
        },
        {  
           day: "Wednesday",
           location: "Shemanski Park",
           hours: "10:00am - 2:00pm",
           booth: "3E"
        },
        {  
           day: "Thursday",
           location: "Northwest Portland",
           hours: "2:00pm - 6:00pm",
           booth: "6D"
        },
        {  
           day: "Saturday",
           location: "Beaverton",
           hours: "10:00am - 1:30pm",
           booth: "9G"
        }
       ]
    };
    this.handleDeleteOnClick = this.handleDeleteOnClick.bind(this);
  
  }

  handleDeleteOnClick(key, name) {
    let newState = this.state.masterProductList.slice();
    for(let month of newState) {
      if(month.key === key) {
        for (let i = 0; i <= month.selection.length; i++) {
          if (month.selection[i] === name) {
            month.selection.splice(i, 1);
          }
        }
      }
    }
    this.setState({masterProductList: newState});
  }
  
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/schedulelist' render={() => <ScheduleList scheduleList={this.state.masterScheduleList} /> } />
          <Route path='/productlist' render={() => <ProductList deleteOnClick={this.handleDeleteOnClick} productList={this.state.masterProductList} />} />
          <Route component={Error404} />
        </Switch>

      </div>
    );
  }
}

  

export default App;