import React from 'react'
import {connect} from "react-redux"

interface TestArr {
    arr: {name: String, age: number}
}
 function Test(props: any) {
     console.log(props.arr);
     
    return (
        <div>
            
        </div>
    )
}

const mapStateToProps = (state: testReducer) => {
   return {
     arr: state.testReducer.arr1
   }
}
const mapDispatchToProps = () => {

}


export default connect(mapStateToProps, mapDispatchToProps)(Test)
