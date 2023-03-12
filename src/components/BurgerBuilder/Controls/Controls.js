import React from "react";
import { Button, Card, CardBody, CardFooter, CardHeader } from "reactstrap";

let controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
]

let BuildControl = (props) => {
    return (
        <div className="d-flex">
            <div className="mr-auto ml-5" style={{ fontWeight: 'bolder', fontSize: '1.2rem' }}>{props.label}</div>
            <Button className="btn-danger m-1" onClick={props.removed}>Less</Button>
            <Button className="btn-success m-1" onClick={props.added}>More</Button>
        </div>
    )
}

let Controls = (props) => {

    return (
        <div className="container ml-md-5" style={{ textAlign: "Center" }}>
            <Card style={{
                marginTop: "30px",
                marginBottom: "30px",
                textAlign: "Center"
            }}>
                <CardHeader style={{
                    backgroundColor: "#07f1ab",
                    color: "white"
                }}><h4>Add Ingredient</h4></CardHeader>

                <CardBody>
                    {
                        controls.map(item => {
                            return <BuildControl label={item.label}
                                type={item.type} key={Math.random()}
                                added={() => props.ingredientAdded(item.type)}
                                removed={() => props.ingredientRemoved(item.type)} />
                        })
                    }
                </CardBody>

                <CardFooter><h5>Price: <strong>{props.price}</strong> BDT</h5></CardFooter>
                <Button disabled={!props.purchaseAble} onClick={props.toggleModal}>Order Now</Button>
            </Card>
        </div>
    )
}

export default Controls;