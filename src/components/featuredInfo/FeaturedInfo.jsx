import React from "react"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import NorthIcon from '@mui/icons-material/North';
import "./featuredInfo.css"
function FeaturedInfo(){
    return(
        <div className="featured">
<div className="featuredItem">
<span  className="featuredTitle">Revenu</span>
<div className="featuredMoneyContainer">
<span className="featuredMoney">$2,415</span>
<span className="featuredMoneyRate">-11.4<ArrowDownwardIcon className="featuredIcon negative"/></span>
</div>
<div className="featureSub">compared to Last month</div>
</div>
<div className="featuredItem">
<span  className="featuredTitle">Sales</span>
<div className="featuredMoneyContainer">
<span className="featuredMoney">$4,415</span>
<span className="featuredMoneyRate">-1.4<ArrowDownwardIcon  className="featuredIcon negative"/></span>
</div>
<div className="featureSub">compared to Last month</div>
</div>
<div className="featuredItem">
<span  className="featuredTitle">Cost</span>
<div className="featuredMoneyContainer">
<span className="featuredMoney">$2,225</span>
<span className="featuredMoneyRate">-1.4<NorthIcon  className="featuredIcon"/></span>
</div>
<div className="featureSub">compared to Last month</div>
</div>
        </div>
    )
}
export default FeaturedInfo