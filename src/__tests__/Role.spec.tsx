import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Role from "../widgets/userRole/Role";
import { store } from "../app/store/store";
import { Provider } from "react-redux";
import styles from "../widgets/userRole/Role.module.scss"

describe("Role", () => {
  it("Should render component", () => {
    render(
      <Provider store={store}>
        <Role />
      </Provider>
    );
    const element = screen.getByTestId("role");
    expect(element).toBeInTheDocument();
  });

  it("should change button className after click", () => {
    render(
        <Provider store={store}>
          <Role />
        </Provider>
      );
      const button = screen.getByTestId("button");
      expect(button).not.toHaveClass(`${styles.role}`);
      fireEvent.click(button);
      expect(button).toHaveClass(`${styles.role} ${styles.clicked}`);
  });
});
