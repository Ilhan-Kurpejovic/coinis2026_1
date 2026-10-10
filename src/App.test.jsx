import "@testing-library/jest-dom/vitest";
import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App.jsx";

describe("DevelopersLab landing page", () => {
  it("renders the core brand, workshop format, and CTA", () => {
    render(<App />);

    expect(screen.getAllByText("DevelopersLab").length).toBeGreaterThan(0);
    expect(screen.getByText(/Free technology classes in Montenegro/i)).toBeInTheDocument();
    expect(screen.getByText(/30 polaznika po grupi/i)).toBeInTheDocument();
    expect(screen.getByText(/3-4 sata po radionici/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Kontaktiraj tim/i })).toHaveAttribute(
      "href",
      "mailto:info@developers-lab.me",
    );
  });
});
