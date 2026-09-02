import Counter from "../Class12/Counter"
import InfoCard from "../Class12/InfoCard"


function Class12Page() {


    return (
        <div>
            <Counter initialValue={0} />
            <InfoCard text="This is an info card" priority="high" />

        </div>
    )
}

export default Class12Page