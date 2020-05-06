import React from 'react' 

class Offices extends React.Component {
  render() {
    const { params } = this.props.match

    return (
        <div>
            <h1>Offices</h1>
            <p>I am office having id value {params.id}</p>
        </div>
        );

  }
}
export default Offices