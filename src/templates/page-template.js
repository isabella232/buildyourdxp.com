import React from "react";
import Markdown from "markdown-to-jsx";

import Header from "../components/Header";
import { graphql } from "gatsby";

function PageTemplate({ data: { graphCmsPage } }) {
  const { content } = graphCmsPage;

  return (
    <React.Fragment>
      <Header {...graphCmsPage} />

      <section className="py-6 md:py-12 bg-gray-50">
        <div className="md:max-w-3xl mx-auto prose px-4 sm:px-6 lg:px-8">
          <Markdown children={content} />
        </div>
      </section>
    </React.Fragment>
  );
}

export const pageQuery = graphql`
  query PageQuery($id: String!) {
    graphCmsPage(id: { eq: $id }) {
      title
      subTitle
      content
      ctaText
      ctaTo
      coverImage {
        localFile {
          childImageSharp {
            fluid(maxWidth: 1120) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default PageTemplate;
