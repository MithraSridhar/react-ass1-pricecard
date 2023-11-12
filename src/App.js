import logo from './logo.svg';
import './App.css';
import {Button} from 'react-bootstrap'
import Card from "react-bootstrap/Card";

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

function CreatePriceCard({plan,price,featureList}){
console.log(featureList)
return(
  <div className ="cardcontainer">
{/* <h1>
 {plan} {price} {featureList.map((feature) => <li>{feature.name}</li>)}
</h1> */}
<Card className="text-center">
      <Card.Header>{plan}</Card.Header>
      <Card.Body>
        <Card.Title><b>{price}</b></Card.Title>
        <hr></hr>
        <Card.Text>

        <ul className="fa-ul">
             {
    featureList.map((feature) =>{
       return <li className={feature.isEnabled ? "" : "text-muted"}>               {/* this line is to disable the text (text-muted) */}
    <span className="fa-li">
        <i class={`fa ${feature.isEnabled ? 'fa-check' : 'fa-times'}`}></i>        {/* this line to font awesome icon ✔ and ✖ icon */}
        </span>{feature.name}             {/* this line is to other content in card  */}
    </li> 
    })
   }
 </ul>
          {/* <ul className="fa-ul">
            {
                featureList.map((feature)=>{
                //  console.log(feature.isEnabled )
                  return <li className={ feature.isEnabled ? "": 'text-muted'}>
                  <span>
                    <i className={`fa ${feature.isEnabled ? 'fa-check':'fa-times'} `}></i>

                  </span>{feature.name} 
                  </li>
                })
            }
</ul> */}
        {/* {featureList.map((feature) => <ul>{feature.name} </ul>)} */}
        </Card.Text>
        <Button variant="primary">Button</Button>
      </Card.Body>
    </Card>

{/* <div className="card" >
  <div className="card-body">
    <h5 className="card-title">{plan}</h5>
    <p className="card-text">{price}.</p>
  </div>
  <ul className="list-group list-group-flush">
  {featureList.map((feature) => <li>{feature.name}</li>)}
  </ul>
  <div className="card-body">
   <button>Button</button>
  </div>
</div> */}

</div>
);
}
export default App;
