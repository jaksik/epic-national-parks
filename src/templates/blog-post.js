import React from "react"
import Img from 'gatsby-image'
import { Link, graphql } from "gatsby"
import { Row, Col, Button } from 'reactstrap'
import Layout from "../components/layout"
import SEO from "../components/seo"
import HorzShareBar from "../components/HorzShareBar"
import "./blog.css"

export default ({ data }) => {
  const info = data.markdownRemark

  return (
    <Layout>
      <SEO title={info.frontmatter.title} keywords={info.frontmatter.tags} />

      <Row className="no-gutters">
        <Col xs={12} lg={3}>

        </Col>
        <Col xs={12} xl={6}>
          <h1 className="blog-post-title text-center mt-3">{info.frontmatter.title}</h1>
          <div className="d-flex justify-content-center align-items-center mb-4">
            <div className="post-meta-item">
              <em>written By:</em><br />
              <a href="https://facebook.com/connorjaksik" target="_blank" rel="noopener noreferrer">Connor Jaksik</a>
            </div>
            <div className="post-meta-item">
              <em>published on:</em><br />
              <b>October 9, 2020</b>
            </div>
            <div className="post-meta-item d-none d-md-block">/</div>
            <div className="post-meta-item d-none d-md-block">
              <HorzShareBar />
            </div>
          </div>
          <div className="d-md-none mb-4">
            <HorzShareBar />
          </div>
        </Col>

        <Col xs={12} xl={8} className="offset-xl-2 pl-5 pr-5 p-xl-0">
          <div style={{ overflow: `hidden` }} className="blog-image-container">
            <Img fluid={info.frontmatter.image.childImageSharp.fluid} />
          </div>

        </Col>

        <Col xs={12} xl={3}>
          <div className="d-none d-xl-block" style={{marginTop:400}}>
            <div className="w-100 d-flex justify-content-center">
              <iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=49&l=ur1&category=health&banner=152P4WD5QBHDV1R52X02&f=ifr&linkID=49cd8c4d4c024f53c4f0baa08fb12cfc&t=epicnationalp-20&tracking_id=epicnationalp-20" width="300" height="600" scrolling="yes" border="0" marginwidth="0" style={{ border: `none` }} frameborder="0"></iframe>
            </div>

            <div className="w-100 d-flex justify-content-center">
              <iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=12&l=ur1&category=gearshop&banner=1Z73Q963NN6XNCX2SJ82&f=ifr&linkID=7924c1601c70bbc4c088f0df0b46f6d8&t=epicnationalp-20&tracking_id=epicnationalp-20" width="300" height="250" scrolling="yes" border="0" marginwidth="0" style={{ border: `none` }} frameborder="0"></iframe>
            </div>
          </div>

        </Col>

        <Col xs={12} lg={9} xl={6}>
          <div className="blog-content-container">
            <article>
              <div dangerouslySetInnerHTML={{ __html: info.html }} />
            </article>
          </div>
        </Col>

        <Col xs={12} lg={3} xl={2} style={{ padding: 20 }}>
          <aside>
            <div className="side-email-form">
              <p className="text-center p-3"><b>Want access to 100's of free maps? Sign up for our email list. </b></p>
              <div className="w-100 d-flex justify-content-center">
                <input placeholder="Your email" />
              </div>
              <div className="w-100 mt-3 d-flex justify-content-center">
                <Button color="success">Free Maps</Button>
              </div>
            </div>

            <div className="side-blog-list">
              <b>You might also enjoy:</b>
              {data.blogPosts.edges.map((post, index) => (
                <li key={index}>
                  <Link to={post.node.fields.slug} className="">
                    {post.node.frontmatter.title}
                  </Link>
                </li>
              ))}
            </div>
            <div className="d-none d-xl-block" style={{marginTop:400}}>
            <div className="w-100 d-flex justify-content-center">
              <iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=49&l=ur1&category=health&banner=152P4WD5QBHDV1R52X02&f=ifr&linkID=49cd8c4d4c024f53c4f0baa08fb12cfc&t=epicnationalp-20&tracking_id=epicnationalp-20" width="300" height="600" scrolling="yes" border="0" marginwidth="0" style={{ border: `none` }} frameborder="0"></iframe>
            </div>

            <div className="w-100 d-flex justify-content-center">
              <iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=12&l=ur1&category=gearshop&banner=1Z73Q963NN6XNCX2SJ82&f=ifr&linkID=7924c1601c70bbc4c088f0df0b46f6d8&t=epicnationalp-20&tracking_id=epicnationalp-20" width="300" height="250" scrolling="yes" border="0" marginwidth="0" style={{ border: `none` }} frameborder="0"></iframe>
            </div>
          </div>
          </aside>
        </Col>
      </Row>
      {/* 
      <Row className="no-gutters">
        <Col lg="3" className="justify-content-center">
          <div className="w-100 d-flex justify-content-center">

          </div>
        
          <div className="w-100 d-flex justify-content-center">
          <iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=14&l=ur1&category=autorv&banner=1E3KPR268PJ6ZNSG7SG2&f=ifr&linkID=7f2da8b647811f08c71a95ae14921bd4&t=epicnationalp-20&tracking_id=epicnationalp-20" width="160" height="600" scrolling="yes" border="0" marginwidth="0" style={{ border: `none` }} frameborder="0"></iframe>
          </div>

          <div className="w-100 d-flex justify-content-center">
          <iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=49&l=ur1&category=mostwishforitem&banner=00TB4X24YWEJ5M688S82&f=ifr&linkID=ad0f3f6265c724568823e0b3885e395a&t=epicnationalp-20&tracking_id=epicnationalp-20" width="300" height="600" scrolling="yes" border="0" marginwidth="0" style={{ border: `none` }} frameborder="0"></iframe>        
            </div>
            <div className="w-100 d-flex justify-content-center">
          <iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=29&l=ur1&category=outdoorrecreation&banner=054N4NGXCVYM010KSC02&f=ifr&linkID=8e7ee1e017e7fd0669315e6e454c29fb&t=epicnationalp-20&tracking_id=epicnationalp-20" width="120" height="600" scrolling="yes" border="0" marginwidth="0" style={{ border: `none` }} frameborder="0"></iframe>

          </div>
          <div className="w-100 d-flex justify-content-center">
          <iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=49&l=ur1&category=health&banner=152P4WD5QBHDV1R52X02&f=ifr&linkID=49cd8c4d4c024f53c4f0baa08fb12cfc&t=epicnationalp-20&tracking_id=epicnationalp-20" width="300" height="600" scrolling="yes" border="0" marginwidth="0" style={{ border: `none` }} frameborder="0"></iframe>
          </div>

          <div className="w-100 d-flex justify-content-center">
          <iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=12&l=ur1&category=gearshop&banner=1Z73Q963NN6XNCX2SJ82&f=ifr&linkID=7924c1601c70bbc4c088f0df0b46f6d8&t=epicnationalp-20&tracking_id=epicnationalp-20" width="300" height="250" scrolling="yes" border="0" marginwidth="0" style={{ border: `none` }} frameborder="0"></iframe>      
              </div>

          <div className="w-100 d-flex justify-content-center">
          <iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=14&l=ur1&category=autorv&banner=1E3KPR268PJ6ZNSG7SG2&f=ifr&linkID=7f2da8b647811f08c71a95ae14921bd4&t=epicnationalp-20&tracking_id=epicnationalp-20" width="160" height="600" scrolling="yes" border="0" marginwidth="0" style={{ border: `none` }} frameborder="0"></iframe>
          </div>

          <div className="w-100 d-flex justify-content-center">
          <iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=49&l=ur1&category=mostwishforitem&banner=00TB4X24YWEJ5M688S82&f=ifr&linkID=ad0f3f6265c724568823e0b3885e395a&t=epicnationalp-20&tracking_id=epicnationalp-20" width="300" height="600" scrolling="yes" border="0" marginwidth="0" style={{ border: `none` }} frameborder="0"></iframe>        
            </div>



        </Col>

        <Col lg="6">
          <h1 className="blog-post-title">{info.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: info.html }} />
        </Col>


        <Col lg="3" className="justify-content-center">
          <div className="w-100 d-flex justify-content-center">
          <iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=29&l=ur1&category=outdoorrecreation&banner=054N4NGXCVYM010KSC02&f=ifr&linkID=8e7ee1e017e7fd0669315e6e454c29fb&t=epicnationalp-20&tracking_id=epicnationalp-20" width="120" height="600" scrolling="yes" border="0" marginwidth="0" style={{ border: `none` }} frameborder="0"></iframe>

          </div>
          <div className="w-100 d-flex justify-content-center">
          <iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=49&l=ur1&category=health&banner=152P4WD5QBHDV1R52X02&f=ifr&linkID=49cd8c4d4c024f53c4f0baa08fb12cfc&t=epicnationalp-20&tracking_id=epicnationalp-20" width="300" height="600" scrolling="yes" border="0" marginwidth="0" style={{ border: `none` }} frameborder="0"></iframe>
          </div>

          <div className="w-100 d-flex justify-content-center">
          <iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=12&l=ur1&category=gearshop&banner=1Z73Q963NN6XNCX2SJ82&f=ifr&linkID=7924c1601c70bbc4c088f0df0b46f6d8&t=epicnationalp-20&tracking_id=epicnationalp-20" width="300" height="250" scrolling="yes" border="0" marginwidth="0" style={{ border: `none` }} frameborder="0"></iframe>      
              </div>

          <div className="w-100 d-flex justify-content-center">
          <iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=14&l=ur1&category=autorv&banner=1E3KPR268PJ6ZNSG7SG2&f=ifr&linkID=7f2da8b647811f08c71a95ae14921bd4&t=epicnationalp-20&tracking_id=epicnationalp-20" width="160" height="600" scrolling="yes" border="0" marginwidth="0" style={{ border: `none` }} frameborder="0"></iframe>
          </div>

          <div className="w-100 d-flex justify-content-center">
          <iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=49&l=ur1&category=mostwishforitem&banner=00TB4X24YWEJ5M688S82&f=ifr&linkID=ad0f3f6265c724568823e0b3885e395a&t=epicnationalp-20&tracking_id=epicnationalp-20" width="300" height="600" scrolling="yes" border="0" marginwidth="0" style={{ border: `none` }} frameborder="0"></iframe>        
            </div>
            <div className="w-100 d-flex justify-content-center">
          <iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=29&l=ur1&category=outdoorrecreation&banner=054N4NGXCVYM010KSC02&f=ifr&linkID=8e7ee1e017e7fd0669315e6e454c29fb&t=epicnationalp-20&tracking_id=epicnationalp-20" width="120" height="600" scrolling="yes" border="0" marginwidth="0" style={{ border: `none` }} frameborder="0"></iframe>

          </div>
          <div className="w-100 d-flex justify-content-center">
          <iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=49&l=ur1&category=health&banner=152P4WD5QBHDV1R52X02&f=ifr&linkID=49cd8c4d4c024f53c4f0baa08fb12cfc&t=epicnationalp-20&tracking_id=epicnationalp-20" width="300" height="600" scrolling="yes" border="0" marginwidth="0" style={{ border: `none` }} frameborder="0"></iframe>
          </div>

          <div className="w-100 d-flex justify-content-center">
          <iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=12&l=ur1&category=gearshop&banner=1Z73Q963NN6XNCX2SJ82&f=ifr&linkID=7924c1601c70bbc4c088f0df0b46f6d8&t=epicnationalp-20&tracking_id=epicnationalp-20" width="300" height="250" scrolling="yes" border="0" marginwidth="0" style={{ border: `none` }} frameborder="0"></iframe>      
              </div>

          <div className="w-100 d-flex justify-content-center">
          <iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=14&l=ur1&category=autorv&banner=1E3KPR268PJ6ZNSG7SG2&f=ifr&linkID=7f2da8b647811f08c71a95ae14921bd4&t=epicnationalp-20&tracking_id=epicnationalp-20" width="160" height="600" scrolling="yes" border="0" marginwidth="0" style={{ border: `none` }} frameborder="0"></iframe>
          </div>

          <div className="w-100 d-flex justify-content-center">
          <iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=49&l=ur1&category=mostwishforitem&banner=00TB4X24YWEJ5M688S82&f=ifr&linkID=ad0f3f6265c724568823e0b3885e395a&t=epicnationalp-20&tracking_id=epicnationalp-20" width="300" height="600" scrolling="yes" border="0" marginwidth="0" style={{ border: `none` }} frameborder="0"></iframe>        
            </div>



        </Col>
      </Row> */}

    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title  
        description
        tags
        date
        image {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
    blogPosts: allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "blog-post"}}}, limit: 4) {
      edges {
        node {
          fields {
            slug
          }
          id
          frontmatter {
            title
          }
        }
      }
    }
  }
`