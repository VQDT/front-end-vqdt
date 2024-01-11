import { CgSpinner } from "react-icons/cg";

const OnLoad = () => {
    return (
        <div className="w-full min-h-screen bg-Blue flex justify-center items-center">
            <button type="button" className="bg-white rounded-lg flex p-4" disabled>
                <CgSpinner className="animate-spin mx-2" size={24} />
                Carregando...
            </button>
        </div>
    );
}

export default OnLoad;