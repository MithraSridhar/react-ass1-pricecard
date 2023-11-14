import { Button } from 'react-bootstrap';
import Card from "react-bootstrap/Card";

export function CreatePriceCard({ plan, price, featureList }) {
  console.log(featureList);
  return (
    <div className="cardcontainer">
      <Card className="text-center">
        <Card.Header>{plan}</Card.Header>
        <Card.Body>
          <Card.Title><b>{price}</b></Card.Title>
          <hr></hr>
          <Card.Text>
            <ul className="fa-ul">
              {featureList.map((feature) => {
                return <li className={feature.isEnabled ? "" : "text-muted"}>               {/* this line is to disable the text (text-muted) */}
                  <span className="fa-li">
                    <i class={`fa ${feature.isEnabled ? 'fa-check' : 'fa-times'}`}></i>        {/* this line to font awesome icon ✔ and ✖ icon */}
                  </span>{feature.name}             {/* this line is to other content in card  */}
                </li>;
              })}
            </ul>
          </Card.Text>
          <Button variant="primary">Button</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CreatePriceCard;
