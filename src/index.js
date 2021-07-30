import React from "react";
import ReactDOM from "react-dom";


const ParentComponent = () => {
  return(
    <>
      <LoaderSection/>
    </>
  )
}


const LoaderSection = () => {
  return(

    <section className="loaderSection">
      <div className="container  loaderContainer">
        <LoaderWrapper/>
      </div>
    </section>
  
  )
}



const LoaderWrapper = () => {
  return(

    <div className="loaderWrapper">
      <Loader/>
    </div>
  
  )
}



const Loader = () => {

  const loaderHolder = ['' , '' , ''] ;

  loaderHolder.map(items => <div className="loaderItems"></div>)

}

console.log("Hello World")


ReactDOM.render(<ParentComponent/> , document.body) ;

