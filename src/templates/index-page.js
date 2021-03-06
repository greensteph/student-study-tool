import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features'



export const IndexPageTemplate = ({
  title,
  science,
  language,
  math,
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
    >
      <div
        style={{
          display: 'flex',
          backgroundColor: '#8f8a71',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {title}
        </h1>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 style={{fontSize: '3em', color: '#8f8a71', marginBottom: '1em'}} >{science.heading}</h1>
                  </div>
                  <div className="tile">
                  <Features gridItems={science.flashcards} />
                  </div>
                </div>
                <div className="content">
                  <div className="tile">
                    <h1 style={{fontSize: '3em', color: '#8f8a71', marginBottom: '1em', marginTop: '2em'}}>{language.heading}</h1>
                  </div>
                  <div className="tile">
                  <Features gridItems={language.flashcards} />
                  </div>
                </div>
                <div className="content">
                  <div className="tile">
                    <h1 style={{fontSize: '3em', color: '#8f8a71', marginBottom: '1em', marginTop: '2em'}}>{math.heading}</h1>
                  </div>
                  <div className="tile">
                    <Features gridItems={math.flashcards} />
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  science: PropTypes.shape({
    flashcards: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        science={frontmatter.science}
        language={frontmatter.language}
        math={frontmatter.math}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
query IndexPageTemplate {
  markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
    frontmatter {
      title
      heading
      science {
        heading
        flashcards {
          question
          answer
        }
      }
      language {
        heading
        flashcards {
          question
          answer
        }
      }
      math {
        heading
        flashcards {
          question
          answer
        }
      }
    }
  }
}

`
