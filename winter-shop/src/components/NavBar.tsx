import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Navbar, Container, Form, Button, Badge } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import { useCartUI } from "../context/CartUIContext";

export default function NavBar() {
  const { totalItems } = useCart();
  const { open } = useCartUI();
  const [params] = useSearchParams();
  const [term, setTerm] = useState<string>(params.get("q") ?? "");
  const navigate = useNavigate();

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const query = term.trim();
    navigate(query ? `/?q=${encodeURIComponent(query)}` : "/");
  };

  return (
    <Navbar expand="lg" bg="body-tertiary" className="border-bottom sticky-top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          WinterShop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="mainNavbar" />
        <Navbar.Collapse id="mainNavbar" className="justify-content-end gap-2">
          <Form className="d-flex" role="search" onSubmit={onSubmit}>
            <Form.Control
              type="search"
              placeholder="Search winter gear"
              className="me-2"
              aria-label="Search"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
            />
            <Button variant="outline-primary" type="submit">
              <i className="bi bi-search"></i>
            </Button>
          </Form>
          <div className="ms-lg-2 mt-2 mt-lg-0">
            <Button variant="primary" onClick={open} className="position-relative">
              <i className="bi bi-cart3 me-1"></i>
              Cart
              {totalItems > 0 && (
                <Badge bg="danger" pill className="position-absolute top-0 start-100 translate-middle">
                  {totalItems}
                </Badge>
              )}
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
