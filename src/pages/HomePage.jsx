import IdField from "../components/IdField"
import HomeButtons from "../components/HomeButtons"

const HomePage = () => {

    return (
        <>
            <div className="flex h-screen items-center justify-center">
                <div className=" p-8 bg-base-200 rounded shadow-lg grid grid-cols-2 place-items-center gap-4">
                    <div className="border-r-4 pl-4 pr-4">
                        <h1 className="font-bold text-2xl m-4">Host</h1>
                        <IdField margin="m-2" placeholder="Enter Room Id" logo={'->'} />
                        <br />
                        <HomeButtons inField="New Meet" color="primary" />

                    </div>
                    <div className="pl-4">
                        <h1 className="font-bold text-2xl m-4">Particpant</h1>
                        <IdField margin="m-2" placeholder="Enter Room Id" logo={'->'} />
                        <br />
                        <HomeButtons inField="Join Meet" color="primary" />
                    </div>
                </div>
            </div>

        </>
    )
}


export default HomePage