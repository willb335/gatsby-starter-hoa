import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

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
    </>
  );
}

export default Contact;
