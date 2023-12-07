import React from "react"
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import Chart from "../../components/chart/Chart"
import "./home.css"
import {userData} from "../../dummyData"
import WidgetSm from "../../components/widgetSm/WidgetSm"
import WidgetLg from "../../components/widgetLg/WidgetLg"
function Home(){
    return(
        <div className="home">
<FeaturedInfo/>
<Chart data={userData} title="user Analytics"  grid  dataKey="uv"/>
<div className="homeWidgets">
    <WidgetSm/>
    <WidgetLg/>
</div>
        </div>
    )
}
export default Home