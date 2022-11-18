import { graphql } from 'gatsby'
import Blog from '../components/Posts'

export default Blog

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allWpPost(limit: $limit, skip: $skip, sort: [{date: DESC}]) {
      nodes {
        ...PostTemplateFragment
      }
    }
  }
`
