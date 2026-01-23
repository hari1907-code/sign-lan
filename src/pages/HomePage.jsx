import IdGenerator from "../components/IdGenerator"
import HomeButtons from "../components/HomeButtons"

const HomePage = (props) => {

    return (
        <>
            <div className="flex h-screen items-center justify-center">
                <div className="flex items-center justify-center p-8 bg-neutral rounded shadow-lg grid grid-cols-2 gap-4">
                    <div className="...">
                        <h1 className="text-2xl">Host</h1>
                        <IdGenerator placeholder = "ID" />
                        <HomeButtons inField = "+" color = "secondary"/>

                    </div>
                    <div className="...">
                        <h1 className="text-2xl">Particpant</h1>
                        <IdGenerator placeholder = "Enter Room Id" />
                        <HomeButtons inField = "->" colo = "secondary"/>
                    </div>
                </div>
            </div>

        </>
    )
}


export default HomePage