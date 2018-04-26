### Description
#### the pagination plugin for react. 
&nbsp;&nbsp;&nbsp;&nbsp;1.support jumping to a page where you want to (when the number of pages is more than 5)

&nbsp;&nbsp;&nbsp;&nbsp;2.can change the counts that each page show

### Install
    npm install react-rayr-page --save

### Params
| param | type | descript | default | 
| - | :-: | :-: | :-:|
| count | Number| the sum of data (required)| null
| currentPage | Number | current page | 1 
| perPage | Number | the counts that each page shows | 10
### Use Demo
 ```javascript
 import {RayrPage} from 'react-rayr-page';

<RayrPage count={this.state.count}
    currentPage={this.state.currentPage}
    perPage={this.state.perPage}
    onChange={(page) => {
        this.setState({currentPage:page});
    }}
/>
```
####  &nbsp;&nbsp; tips:don`t forget to import the css file



