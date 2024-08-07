import {useSelector} from "react-redux";

export default function Rate(props){
    const selectRate = useSelector((state)=>state.rate);
    let r = props.range === undefined?selectRate:props.range;
    let star = [0,1,2];

    function StartRate(p){
        return <>
        <div className={props.range === undefined?"rate-item":"rate-item-list"}>
            {p.count < p.rate?<img width="100%" style={p.count === 1 ? {marginTop: '-30px'} : {}} src="./asset/star/star.png"/>:<img width="100%" style={p.count === 1 ? {marginTop: '-30px'} : {}} src="./asset/star/star lock.png"/>}
        </div>
        </>
    }
    return <>
        <div className="rate">
            {star.map((el)=><div key={el + "star"}><StartRate count = {el} rate = {r} /></div>)}
        </div>
    </>
}


