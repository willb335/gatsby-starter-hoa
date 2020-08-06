import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useForm } from "react-hook-form";

import ContactForm from "../components/contactForm";

function Contact() {
  const data = useStaticQuery(graphql`
    query {
      contentfulContact {
        title
        contactInformation {
          json
        }
      }
    }
  `);

  console.log("data", data);

  const { title } = data.contentfulContact;
  const { json } = data.contentfulContact.contactInformation;
  console.log(title);

  return (
    <>
      <div>{title}</div>
      <div>{documentToReactComponents(json)}</div>
      <ContactForm />
    </>
  );
}

export default Contact;
