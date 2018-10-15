import React from 'react';
import { NavLink } from 'react-router-dom';
import { getNews } from '../actions/NewsActions';
import { connect } from 'react-redux';
import { addNewsList } from '../actions/redux/news';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            articles: [],
            errors: [],
            searchText: null,
            filteredArticles: []
        }
    }
    
    componentDidMount() {        
        this.getNewsList();
    }

    getNewsList = () => {
        this.setState({ errors: [] });

        getNews()
            .then(({ articles }) => {
                if (articles) {
                    let editedArticles = articles;
                    editedArticles.map((article, index) => article.source.id = index);
                    console.log(editedArticles);
                    this.setState({ articles:editedArticles });
                    this.props.dispatch(addNewsList(editedArticles));
                }
                return Promise.resolve();
            }).catch((errors) => {
                this.setState({ errors: errors });
                console.log(errors);
            });
    }

    renderArticle = (article, index) => {
        return (
            <div key={index} className="col-md-4">
                <div className="thumbnail">
                    <NavLink to={"/newsdetail/" + article.source.id } >
                        <img className="img-responsive img-rounded" src={article.urlToImage} />
                        <div className="caption">
                            <p>{ article.title }</p>
                        </div>
                    </NavLink>
                </div>
            </div>
            );
    }

    searchBar = () => {
        return (            
            <div className="row">
                <div className="input-group mb-3 col-lg-4 col-lg-offset-4">
                    <span className="input-group-addon">
                        <i className="glyphicon glyphicon-search"></i>
                    </span>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Search" 
                        onChange={ this.filter }
                    />
                </div>
                <hr />
            </div>
        );
    }

    filter = (e) => {        
        let text = e.target.value.toUpperCase();        
        //console.log("Filter :: " + text);
        let filteredArticles = this.state.articles.filter((article) => article.title.toUpperCase().match(text) ? true : false );
        this.setState({ filteredArticles, searchText: text });
    }

    articlePane = () => {
        
        return (
            <div>
                <div>
                    {
                        this.state.searchText === null ?
                            this.state.articles.map((article, index) => {
                                return this.renderArticle(article, index);
                            })
                            :
                            this.state.filteredArticles.map((article, index) => {
                                return this.renderArticle(article, index);
                            })
                    }
                </div>
            </div>
            );
    }

    render() {
        return (
            <div>
                {this.searchBar()}                
                {this.articlePane()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    }
};

export default connect(mapStateToProps)(HomePage);
