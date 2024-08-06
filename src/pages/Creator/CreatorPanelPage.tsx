import { AiOutlinePlus } from "react-icons/ai";
import { TitleSection } from "../../components/TitleSection";
import SearchBar from "../../components/SearchBar/SearchBar";
import StatusOption from "../../components/StatusOption/StatusOption";
import FilterSelect from "../../components/FilterSelect/FilterSelect";
import CreatorPanelTabel from "../../components/CreatorPanelTable/CreatorPanelTabel";
import { useNavigate } from "react-router-dom";

const CreatorPanel = () => {

    const navigate = useNavigate();

    const suggestions = [
        "Apple",
        "Banana",
        "Cherry",
        "Date",
        "Elderberry",
        "Fig",
        "Grape",
        "Honeydew"
    ];

    const handleSelect = (selectedOption: string) => {
        console.log("Selected option:", selectedOption);
      };

    return (
        <div className="container mx-auto mt-8 p-28">
            <div className="flex items-center justify-between">
                <TitleSection underline title="SUAS QUESTÕES" />
                <button className="button outline default py-1 px-5 text-sm flex items-center" type="button" onClick={()=>navigate("/alter-criar-questao")} >
                    NOVA QUESTÃO
                    <AiOutlinePlus className="ml-2" />
                </button>
            </div>
            <div className="flex items-center justify-center">
                <SearchBar suggestions={suggestions} />
            </div>
           <div className="flex w-full mt-4 justify-between items-center">
             <div className="flex w-full  justify-between  items-center">
                <div className=" flex items-center justify-center bg-gray-100">
                     <FilterSelect
                        options={['Option 1', 'Option 2', 'Option 3']}
                        onSelect={handleSelect}
                        />
                 </div>
                <div className=" flex items-center justify-center bg-gray-100">
                    <FilterSelect
                         options={['Option 1', 'Option 2', 'Option 3']}
                         onSelect={handleSelect}
                        />
                 </div>
            </div>
                <div className="flex   items-center ml-4">
                    <StatusOption  variant="outline" color="approved" size="small" >APROVADO</StatusOption>
                         <StatusOption variant="outline" color="rejected" size="small">REJEITADO</StatusOption>
                        <StatusOption variant="outline" color="under_review" size="small">EM ANÁLISE</StatusOption>
                    <StatusOption variant="outline" color="draft" size="small">RASCUNHO</StatusOption>
                </div>
            </div>
            <CreatorPanelTabel/>

        </div>
    );
};

export default CreatorPanel;
