import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer>
      <p>
        Copyright &copy;{" "}
        <a href="https://github.com/VishalMakwana23">Vishal Makwana</a>(2021)
      </p>
      <Link to="/about">About</Link>
    </footer>
  );
}
