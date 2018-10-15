import React from 'react';
import { getNews } from '../actions/NewsActions';
import { connect } from 'react-redux';
import { addNewsList } from '../actions/redux/news';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Card from './Card';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            articles: [],
            article: {},
            errors: [],
            appear: true
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
                    editedArticles.map((article, index) => article.index = index);
                    console.log(editedArticles);
                    this.setState({ articles:editedArticles, article:editedArticles[0] });
                    this.props.dispatch(addNewsList(editedArticles));
                }

                console.log('Article::' + JSON.stringify(this.state.article));
                return Promise.resolve();
            }).catch((errors) => {
                this.setState({ errors: errors });
                console.log(errors);
            });
    }

    toggleAppear = () => {
        this.setState({appear: !this.state.appear});
    }

    nextNews = () => {
        const newIndex = this.state.article.index+1;
        this.setState({ article:this.state.articles[newIndex]});
    }

    prevNews = () => {
        const newIndex = this.state.article.index-1;
        this.setState({article:this.state.articles[newIndex]});        
    }

    render() {
        const {appear, article, articles } = this.state;
        return (
            <div className="container">
                <div className="row">
                    <button className="btn btn-primary col-md-2 col-md-offset-3 gap" onClick={()=> this.toggleAppear()}>Appear: {`${appear}`}</button>                    
                    <button className="btn btn-primary col-md-2 gap" onClick={()=> this.prevNews()} disabled={article.index===0}>Prev</button>
                    <button className="btn btn-primary col-md-2 gap" onClick={()=> this.nextNews()} disabled={article.index===articles.length-1}>Next</button>                        
                </div>
                <TransitionGroup>
                    <CSSTransition
                    key={article.index}
                    in={appear}
                    appear={true}
                    timeout={300}
                    classNames="fade"
                    >
                        <Card article={article} />
                    </CSSTransition>
                </TransitionGroup>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    }
};

export default connect(mapStateToProps)(HomePage);
