import { useDispatch, useSelector } from "react-redux"
import SubChild2 from "./SubChild2"
import increment  from "../features/counter/counterSlice"

const SubChild1 = () => {
  const dispatch = useDispatch();
  const data = useSelector((c)=>{
    console.log(c.show.value,"dataaaaaaaaa");
    return c.show.value
  })
  return (
    <>
    <h1>SubChild1 :{data}</h1>
    <button onClick={()=>dispatch(increment())}>Click Here</button>
    <SubChild2 />
    
    </>
  )
}

export default SubChild1