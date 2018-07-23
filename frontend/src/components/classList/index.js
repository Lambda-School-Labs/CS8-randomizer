import React from 'react';
import { Button, Jumbotron, Container, NavLink, Nav } from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getClasses } from '../../actions';
// import { ClassCard } from '../classCard';

import './index.css';

// function mapStateToProps(state){
//     return { 
//         classes: state.classes,
//         user: state.user    
//     };
// }

// classAmount = this.state.classes.length();

export default class ClassList extends React.Component {
    componentDidMount() {
        // this.props.getClasses(this.props.user);
    }
 
    render(){

        return(
            <div className='jumbo-div'>
                <Jumbotron fluid id="jumb">
                    <Container fluid>
                        <h1 className="display-3">Start By Adding A Class</h1>
                        <Nav>
                        <NavLink className="NewClass" id="nc" href='/classes/create'> + </NavLink>
                        </Nav>
                    </Container>
                </Jumbotron>
            {/* </div> */}
            
            {/* <div>
                 {this.props.classes.map(class => {
                    return (
                        <div>
                            <ClassCard />
                        </div>
                    );
                })}
            </div>

        } */}
            </div>


        )
    }
}