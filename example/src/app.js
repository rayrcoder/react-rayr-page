import 'react-rayr-page/src/RayrPage.scss';

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { RayrPage } from 'react-rayr-page';

class List extends React.Component {
    constructor(props) {
        super(props);
        console.log(props, 999);
        this.state = {
            count: 126 || null,
            currentPage: props.currentPage || 1,
            perPage: props.perPage || 10,
            showPages: props.showPages || 5,
            list: []
        };
    }

    componentWillMount() {
        this.getData();
    }

    // componentWillReceiveProps() {
    //     console.log(2232323);
    //     this.getData();
    // }

    getData() {
        setTimeout(() => {
            // console.log(this.props,544);
            this.setState({
                count: 21
            }, this.initList(1))
        }, 1000);
       
    }
    initList(page) {
        // console.log(this.state.currentPage, 555)
        if (page == '1') {
            this.setState({ list: [2, 3, 4, 4, 44, 4, 4, 4, 2, 56] });
        } else if (page == '2') {
            this.setState({
                list: [5, 3, 3, 2, 2, 22, 34, 2, 66, 23]
            })
        }else if(page=='3'){
            this.setState({
                list:[3,5]
            })
        }
        
    }
    aaa(){
        this.setState({count:21},()=>{
            console.log(this.state);
        })
    }
    render() {
        return (
            <div className="div-test">
            <button onClick={this.aaa.bind(this)}>测试</button>
                {this.state.list.map((item,index) => {
                    return (
                        <p key={index}>{item}</p>
                    )
                })}
                <RayrPage count={126}
                    currentPage={this.state.currentPage}
                    perPage={12}
                    showPages={this.state.showPages}
                    onChange={(page) => {
                        this.setState({currentPage:page});
                        //console.log(page, 34334);//currentPage和page的值不一样
                        this.initList(page);
                    }}
                />
            </div>
        );
    }
}

function App() {
    return (
        <div>
            <List />
        </div>
    )
}

const run = () => {
    ReactDOM.render(<App />, document.getElementById('app'));
};

window.addEventListener('DOMContentLoaded', run);
