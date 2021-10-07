import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Button extends React.Component{
    render(){
        return(
            <div className="button">
                <a><img src={this.props.src} alt={this.props.text} /><h2>Gabbie's {this.props.text} Board</h2></a>
            </div>
            
        );
    }
}
class Main extends React.Component{
    constructor(props){
        super(props);
        this.state={
            error: null,
            isLoaded: false,
            data:[]
        };
    }
    componentDidMount() {
        fetch("./data.json")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                data: result
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }

    render(){
        return (
            <div>
                <h1>Makers of Change 2021-2022</h1>
                <div className="grid">
                    {this.state.data.map(item => {
                        console.log(item);
                        return <Button src={item.src} text={item.text} key={item.text}/>;
                    })}
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Main/>,
    document.getElementById("root"),
);