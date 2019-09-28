import React from 'react';
import Fragment from 'react';
import './splitscreen.css'

class SplitScreen extends React.Component {

    constructor(sidePane, mainPane) {
        super()
        this.sidePane = sidePane
        this.mainPane = mainPane     
    }

    hideSidePane() {
        
    }

    render() {
        return (
            <Fragment>
        <div>{'sidePane'}</div>
        </Fragment>
      )
    }
}


export default SplitScreen;