import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, reset, incrementByAmount} from "./counterSlice.js";
import {useState} from "react";


const Counter = () => {

    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()

    const [amount, setAmount] = useState(0)

   const addValue =Number(amount) || 0


   const restAll=()=>{

        setAmount(0)
       dispatch(reset())

    }

    return (
        <>
            <section className={" w-[100%] h-[100vh] flex items-center justify-center gap-3 flex-col"}>
                <div><p className={""}>{count}</p></div>

                <div className={"gap-[15px]"}>
                    <button className={"px-5 py-2  border-solid border-3 bg-blue-900 m-2 text-white"}
                            onClick={() => dispatch(increment())}>+
                    </button>
                    <button className={"px-5 py-2 border-solid border-3 bg-blue-900 text-white"}
                            onClick={() => dispatch(decrement())}>-
                    </button>
                </div>

                <div>
                    <input type="text" className={"border-2 border-solid border-black text-center"}
                           value={amount}
                           onChange={(e) => setAmount(e.target.value)}/>
                </div>

                <div>
                    <button className={"px-5 py-2 border-solid border-3 bg-orange-300 text-white"}
                            onClick={() => dispatch(incrementByAmount(addValue))}>Add amount
                    </button>

                    <button className={"px-5 py-2  border-solid border-3 bg-orange-300 m-2 text-white"}
                            onClick={() => dispatch(restAll)}>Rest
                    </button>
                </div>

                <div>

                </div>
            </section>
        </>
    )
}

export default Counter;