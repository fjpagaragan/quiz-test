import { render, screen } from "@testing-library/react";
import NavBar from "@components/NavBar";

describe("NavBar Component", () => {

    it("It shows the Navbar component", () => {
        const { container } = render(<NavBar />);
        expect(container).toBeInTheDocument();
    });

    it("It shows the logo", async () => {
        render(<NavBar />);
        const logo = screen.getByTestId('logo-test-component');
        expect(logo).toBeInTheDocument();
    });

    it("It shows the logo", async () => {
        render(<NavBar />);
        const home = screen.getByText("Home");
        expect(home).toBeInTheDocument();
    });
});