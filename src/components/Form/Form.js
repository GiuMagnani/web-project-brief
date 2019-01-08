import React, { useState } from "react";
import FormInput from "./FormInput";
import styled from "styled-components";
import FormSelect from "./FormSelect";
import FormCheckboxes from "./FormCheckboxes";

export default () => {
  const defaultValues = {
    honeypot: "",
    name: ""
  };

  const [values, setValues] = useState(defaultValues);
  const [isFormSuccess, setFormState] = useState(false);
  const [isFormLoading, setFormLoading] = useState(false);

  const handleOnChange = e => {
    const name = e.target.name;
    const target = e.target;
    const value = target.value;

    setValues({
      ...values,
      [name]: value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (values.honeypot !== "") return;
    setFormLoading(true);
    fetch(`url`, {
      method: "POST",
      body: JSON.stringify({
        ses_address: "",
        send_to: "",
        subject: "",
        name: values.name
      }),
      headers: new Headers({
        "Content-Type": "application/json; charset=utf-8",
        Accept: "application/json; charset=utf-8"
      })
    })
      .then(() => {
        setFormState(true);
        setFormLoading(false);
        setTimeout(() => setFormState(false), 4000);
        setValues(defaultValues);
      })
      .catch(err => {
        setFormState(false);
        setFormLoading(false);
        console.log(err);
      });
  };

  return (
    <div>
      <FormWrapper onSubmit={onSubmit}>
        <input
          type="input"
          name="honeypot"
          readOnly={true}
          value=""
          style={{ display: "none" }}
          tabIndex="-1"
          autoComplete="off"
        />
        <FormInput
          required
          label="Your name"
          type="text"
          name="name"
          value={values.name}
          onChange={handleOnChange}
        />
        <FormInput
          required
          label="Tell me about your project"
          type="text"
          name="name"
          value={values.name}
          onChange={handleOnChange}
        />
        <FormInput
          required
          label="Do you have a current website?"
          type="text"
          name="name"
          value={values.name}
          onChange={handleOnChange}
        />
        <FormInput
          required
          label="Is this a redesign or a completely new design?"
          type="text"
          name="name"
          value={values.name}
          onChange={handleOnChange}
        />
        <FormInput
          required
          label="If you have any initial ideas/references for this project,
        please provide them. You can also include a few examples of designs you
        don’t like (explain what you like or don’t like)"
          type="text"
          name="name"
          value={values.name}
          onChange={handleOnChange}
        />
        <FormInput
          required
          label="Deadline: When do you need this done by?"
          type="text"
          name="name"
          value={values.name}
          onChange={handleOnChange}
        />
        <FormInput
          required
          label="Where are you located or what is your time zone?"
          type="text"
          name="name"
          value={values.name}
          onChange={handleOnChange}
        />
        <FormSelect
          required
          label="Choose the option that best describes the website you are looking for"
          name="designType"
          value={values.name}
          options={["Landing page (One page)", "Small blog", "Small to medium-sized", "E-Commerce", "Not sure"]}
          onChange={handleOnChange}
        />
        <FormSelect
          required
          label="What type of Design are you looking for?"
          name="designType"
          value={values.name}
          options={["Minimalist Design", "Custom Design", "High End Custom Design"]}
          onChange={handleOnChange}
        />
        {/*(put example images)*/}

        {/*Landing page - Small blog - Small to medium-sized company - Large*/}
        {/*company website - Small to medium-sized digital e-commerce stores -*/}
        {/*Large e-commerce stores with physical and digital products - (not sure)*/}

        {/*1. design type theme custom design high end custom design*/}
        <FormInput
          required
          label="How many interior pages (not counting the homepage) you would need?"
          type="text"
          name="name"
          value={values.name}
          onChange={handleOnChange}
        />
        <FormInput
          required
          label="How many interior pages (not counting the homepage) you would need?"
          type="text"
          name="name"
          value={values.name}
          onChange={handleOnChange}
        />
        <FormSelect
          required
          label="Home page slider design (reference)?"
          name="designType"
          value={values.name}
          options={["No Slider", "Basic slider (simple image transition)", "Fully animated slider (image and text transition)"]}
          onChange={handleOnChange}
        />
        <FormSelect
          required
          label="Would you need a Photo gallery page?"
          name="designType"
          value={values.name}
          options={["No", "Basic photo gallery (simple grid and one category)", "complex photo gallery (special layout and more than 1 category)"]}
          onChange={handleOnChange}
        />
        <FormInput
          required
          label="Would you need stock images for your website? minimum 5"
          type="number"
          name="name"
          value={values.name}
          onChange={handleOnChange}
        />
        <FormInput
          required
          label="Do you have already Google Analytics? If yes, please send me the ID. If not, please let me know if you help creating one."
          type="number"
          name="name"
          value={values.name}
          onChange={handleOnChange}
        />
        - Social Sharing 30 - Social Media Following counter 30
        <FormCheckboxes
          required
          label="Would you like social media integration?"
          type="number"
          name="name"
          value={values.name}
          onChange={handleOnChange}
        />

        Would you need a shop for your website?
        no eCommerce a - Simple PayPal button (100) b - Advanced eCommerce solution with WooCommerce
        {/*if paypal*/}
        9.a. 1. How many PayPal products? quantity * 30
        {/*if woocommerce*/}
        How many products? quantity * 100 2. Payment processing - PayPal checkout (60) -
        Card checkout 300 3. Shipping - Flat rate or free shipping (0) -
        Integration with courier (400)

        10. Extra website add-ons - Contact form
        60 - Form with file upload 100 - Newsletter Signup - Mailchimp
        Integration - Google map display 30 - Store locator (with Google Maps)
        150 - Live chat 100

        11. Additional comments Please add missing features
        you would like to see in your website

        {/*2. how many*/}
        {/*custom designed interior pages (less than the 70% of the content is*/}
        {/*text)? 3. how many regular interior pages (70% or more of the content is*/}
        {/*text)?*/}
        {/*4. Home page slider design (reference)? no slider simple slider*/}
        {/*(simple image transition) fully animated slider (image and text*/}
        {/*transition)*/}
        {/*5. Would you need a Photo gallery page? no photo gallery*/}
        {/*simple photo gallery (simple grid one category) complex photo gallery*/}
        {/*(special layout and more than 1 category)*/}
        {/*6. Would you need stock images*/}
        {/*for your website? (quantity x 10usd) min: 5 7. Do you have already*/}
        {/*Google Analytics? If yes, please send me the ID. If not, please let me*/}
        {/*know if you help creating one. - textarea 8.*/}
        {/*Would you like social media*/}
        {/*integration?*/}
        {/*- Social Sharing 30 - Social Media Following counter 30 9.*/}
        {/*Would you need an eCommerce for your website? - no eCommerce a - Simple*/}
        {/*PayPal button (100) b - Advanced eCommerce solution with WooCommerce*/}
        {/*(650)*/}
        <button>SEND</button>
      </FormWrapper>
    </div>
  );
};

const FormWrapper = styled.form``;
