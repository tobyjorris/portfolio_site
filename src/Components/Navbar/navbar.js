import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from 'react-scroll'
import './navbar.css';

class toolbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            status: "top"
        }
    }

    handleScroll() {
        const scrolled = document.scrollingElement.scrollTop;
        if (scrolled >= 120) {
            if (this.state.status !== "scrolled") {
                this.setState({ status: "scrolled" });
            }
        } else {
            if (this.state.status !== "top") {
                this.setState({ status: "top" });
            }
        }
    }

    handleBrandClick(event) {
        event.preventDefault();
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

    componentDidMount() {
        document.addEventListener('scroll', this.handleScroll.bind(this));
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.handleScroll)
    }

    render() {
        return (
                <Navbar className="toolbar" collapseOnSelect expand="md" fixed="top"
                        style={{
                            backgroundColor: this.state.status === "top" ? "rgba(0, 0, 0, 0.0)" : "rgba(0, 0, 0, 1)",
                            transition: "400ms"
                        }} fluid>
                    <Navbar.Brand id="brand_text" href="/" onClick={this.handleBrandClick.bind(this)} style={{color: this.state.status === "top" ? "black" : "white", transition: "400ms"}}>Toby Jorris</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav className="mr-auto">
                            <Link className="link" to="about"
                                  spy={true} offset={-100} delay={0} smooth={false} duration={200}
                                  style={{color: this.state.status === "top" ? "black" : "white", transition: "400ms"}}
                            >About</Link>
                            <Link className="link" to="experience"
                                  spy={true} offset={-100} delay={0} smooth={false} duration={200}
                                  style={{color: this.state.status === "top" ? "black" : "white", transition: "400ms"}}
                            >Portfolio</Link>
                            <Link className="link" to="testimonials"
                                  spy={true} offset={-100} delay={0} smooth={false} duration={200}
                                  style={{color: this.state.status === "top" ? "black" : "white", transition: "400ms"}}
                            >Hobbies</Link>
                        </Nav>
                        <Nav>
                            <Link className="link" to="contact" spy={true} smooth={false} duration={200}
                                  style={{color: this.state.status === "top" ? "black" : "white", transition: "400ms"}}
                            >Connect</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
        )
    }
}

export default toolbar;
