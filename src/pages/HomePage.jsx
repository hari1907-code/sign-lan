import IdGenerator from "../components/IdGenerator"
import HomeButtons from "../components/HomeButtons"

const HomePage = () => {

    return (
        <>
            <div className="flex h-screen items-center justify-center">
                <div className=" p-8 bg-neutral rounded shadow-lg grid grid-cols-2 place-items-center gap-4">
                    <div className="border-r-4 pl-4 pr-4">
                        <h1 className="font-bold text-2xl m-4">Host</h1>
                        <IdGenerator margin = "m-2" placeholder = "ID" />
                        <HomeButtons inField = "+" color = "secondary"/>
                        <br />
                        <HomeButtons inField = "New Meet" color = "primary"/>

                    </div>
                    <div className="pl-4">
                        <h1 className="font-bold text-2xl m-4">Particpant</h1>
                        <IdGenerator margin = "m-2" placeholder = "Enter Room Id" />
                        <HomeButtons inField = "->" color = "secondary"/>
                        <br />
                        <HomeButtons inField = "Join Meet" color = "primary"/>
                    </div>
                </div>
            </div>

        </>
    )
}


export default HomePage