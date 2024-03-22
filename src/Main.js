


// The Research button component
const Reserach = () => {

    const playEvent = () =>{
        let ul = document.querySelector("ul");
        let b2c = document.querySelector(".b2c");
        let lastList = document.querySelector(".last-list");

        ul.classList.add("hoverme");
        b2c.classList.remove("b2c2");
        lastList.classList.remove("active-list")
        
    }

    const clearEvent = () => {
        let ul = document.querySelector("ul");
        let b2c = document.querySelector(".b2c");
        let lastList = document.querySelector(".last-list");

        ul.classList.remove("hoverme");
        b2c.classList.remove("b2c2");
        lastList.classList.remove("active-list")

    }

    const showEvent = () => {
        let b2c = document.querySelector(".b2c");
      

        b2c.classList.add("b2c2");
       
    }

    const activeEvent = () => {
        let lastList = document.querySelector(".last-list");
         
        lastList.classList.add("active-list")

    }
    return <>
       <div className="cont" onMouseLeave={clearEvent}>
        <button onClick={playEvent}>Reserach</button>

        <ul className="link">
            <li onClick={showEvent} >External</li>
            <li id="leave">Internal</li>
        </ul>

        <ul className="b2c">
            <li onClick={activeEvent}>B2C</li>
            <li id="leave">B2C</li>
        </ul>

        <ul className="last-list">
            <li>Online</li>
            <li>Interview</li>
            <li>PublicData</li>
            <li>Health</li>
        </ul>
       </div>
    </>
}

// The planning button Component

const Planning = () => {
    const activeHover = () => {
     let plan = document.querySelector(".plan");

      plan.classList.add("hover-Plan");
    }

    const dropHover = () => {
        let plan = document.querySelector(".plan");

      plan.classList.remove("hover-Plan");
    }
    return <>
    <div className="cont" onMouseLeave={dropHover}>
     <button className="planning" onClick={activeHover}>Planning</button>
     <ul className="plan">
        <li>PRD</li>
        <li>Specs</li>
     </ul>
     </div>
    </>
}

// The Desiging button component
const Desiging = () => {
    const activeHover = () => {
     let design = document.querySelector(".design");

      design.classList.add("hover-design");
    }

    const dropHover = () => {
        let design = document.querySelector(".design");

      design.classList.remove("hover-design");
    }
    return <>
    <div className="cont" onMouseLeave={dropHover}>
     <button className="desiging" onClick={activeHover}>Desiging</button>
     <ul className="design">
        <li>Hardware</li>
        <li>Software</li>
     </ul>
     </div>
    </>
}

// The Manufacturing button component
const Manufacturing = () => {
    const activeHover = () => {
     let manu = document.querySelector(".manu");

      manu.classList.add("manu-hover");
    }

    const dropHover = () => {
        let manu = document.querySelector(".manu");

      manu.classList.remove("manu-hover");
    }
    return <>
    <div className="cont" onMouseLeave={dropHover}>
     <button className="manufacturing" onClick={activeHover}>Manufacturing</button>
     <ul className="manu">
        <li>Material</li>
        <li>Production</li>
     </ul>
     </div>
    </>
}


// The Sales button component

const Sales = () => {
    const activeHover = () => {
     let sales = document.querySelector(".sales");

      sales.classList.add("sales-hover");
    }

    const dropHover = () => {
        let sales = document.querySelector(".sales");

      sales.classList.remove("sales-hover");
    }
    return <>
    <div className="cont" onMouseLeave={dropHover}>
     <button className="marketing" onClick={activeHover}>Sales/Marketing</button>
     <ul className="sales">
        <li>Online</li>
        <li>Dealership</li>
     </ul>
     </div>
    </>
}


// Creating the MAin component that hold the other button component

function Main(){
 return (
    <div className="content-container">
      <Reserach />
      <Planning />
      <Desiging />
      <Manufacturing />
      <Sales />

    </div>
 )
}

// export the Main component by default
export default Main;