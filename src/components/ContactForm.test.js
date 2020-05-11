import React from "react";
import { render,fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("the form", () => {
    const { getByPlaceholderText, findAllByText,getByTestId } = render(<ContactForm />);

    const firstNameInput = getByPlaceholderText(/edd/i);
    const lastNameInput = getByPlaceholderText(/burke/i);
    const emailNameInput = getByPlaceholderText(/bluebill1049@hotmail.com/i);
    fireEvent.change(firstNameInput, {
        target: { name: "firstName", placeholder: "edd" }
      });
      // left the max length on to 3
    fireEvent.change(lastNameInput, {
        target: { name: "lastName", placeholder: "burke" }
      }); 
    fireEvent.change(emailNameInput, {
        target: { name: "email", placeholder: "bluebill1049@hotmail.com" }
      });   
      // email was not showing up fixed
       const submitButton = getByTestId(/submit/i);

     fireEvent.click(submitButton);
  
  findAllByText(/Edd/i);
  findAllByText(/Burke/i);
  findAllByText(/bluebill1049@hotmail.com/i);
});