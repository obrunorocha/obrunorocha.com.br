import React from "react"
import PostItem from "../PostItem"

const Hit = ({ hit }) => (
  <PostItem
    slug={hit.fields.slug}
    img={hit.img}
    title={hit.title}
    date={hit.date}
    description={hit.description}
    badges={hit.badges}  
  />
)

export default Hit