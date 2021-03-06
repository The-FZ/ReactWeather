var React = require('react');
var createReactClass = require('create-react-class');

var WeatherForm = createReactClass({
  onFormSubmit:function(event){
    event.preventDefault();
    var location = this.refs.location.value;
    if(location.length>0){
      this.refs.location.value='';
      this.props.onSearch(location);
    }
  },
  render:function(){
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type='search' placeholder='Search weather by City' ref='location'/>
          <button className='button expanded hollow'>Get Weather</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
