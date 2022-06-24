import React from "react"
import PropTypes from "prop-types";
import StoreProvider from "./StoreProvider";

function Article(props) {
    const {article, author} = props;
    return (
        <div>
            <div>{article.title}</div>
            <div>{article.date}</div>
            <div>
                <a href={author.website}>
                    {author.firstName} {author.lastName}
                </a>
            </div>
            <div>{article.body}</div>
        </div>
    )
}

const extraProps = (store, originalProps) => {
    return {
        author: store.lookupAuthor(originalProps.article.authorId)
    }
}

Article.propTypes = {
    article: PropTypes.shape({
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired
    })
}

export default StoreProvider(extraProps)(Article);
