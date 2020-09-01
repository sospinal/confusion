import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component {
    
    // onDishSelect(dish) {
    //     this.setState({ selectedDish: dish });
    // }

    renderDish() {

        let dish = this.props.selectedDish;

        if (dish != null) {
            return(
                <Card>
                    <CardImg width='100%' src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        } else {
            return(
                <div></div>
            );
        }
    }

    render() {
        return(
            <div className='col-12 col-md-5 m-1'>
                {this.renderDish()}
            </div>
        );
    }
}

export default Dishdetail;