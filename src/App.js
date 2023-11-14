import logo from './logo.svg';
import './App.css';
import { CreatePriceCard } from './CreatePriceCard';

function App() {

  const cardData=[
{
  plan:"FREE",
  price:"$0/month",
  featureList:[
    {
      name: "Single User",
      isEnabled: true
    },
    {
      name: "50GB Storage",
      isEnabled: true
    },
    {
      name: "Unlimited Public Projects",
      isEnabled: true
    },
    {
      name: "Community Access",
      isEnabled: true
    },
    {
      name: "Unlimited Private Projects",
      isEnabled: false
    },
    {
      name: "Dedicated Phone Support",
      isEnabled: false
    },
    {
      name: "Free Subdomain",
      isEnabled: false
    },
    {
      name: "Monthly Status Reports",
      isEnabled: false
    }
  ]  
},
{
  plan: "PLUS",
  price: "$9/month",
  featureList: [
    {
      name: "5 Users",
      isEnabled: true
    },
    {
      name: "50GB Storage",
      isEnabled: true
    },
    {
      name: "Unlimited Public Projects",
      isEnabled: true
    },
    {
      name: "Community Access",
      isEnabled: true
    },
    {
      name: "Unlimited Private Projects",
      isEnabled: true
    },
    {
      name: "Dedicated Phone Support",
      isEnabled:true        },
    {
      name: "Free Subdomain",
      isEnabled:true        },
    {
      name: "Monthly Status Reports",
      isEnabled: false        }
  ]
},
{
  plan: "PRO",
  price: "$49/month",
  featureList: [
    {
      name: "Unlimited Users",
      isEnabled: true
    },
    {
      name: "50GB Storage",
      isEnabled: true
    },
    {
      name: "Unlimited Public Projects",
      isEnabled: true
    },
    {
      name: "Community Access",
      isEnabled: true
    },
    {
      name: "Unlimited Private Projects",
      isEnabled: true
    },
    {
      name: "Dedicated Phone Support",
      isEnabled: true
    },
    {
      name: "Free Subdomain",
      isEnabled: true
    },
    {
      name: "Monthly Status Reports",
      isEnabled: true
    }
  ]
}
  ];
  return (
    <div className="App">
     {cardData.map((eachCardCata)=>(
      <CreatePriceCard plan={eachCardCata.plan} price={eachCardCata.price} featureList ={eachCardCata.featureList} />
     ))}
    </div>
  );
}

export default App;
