import { AiOutlinePlus } from "react-icons/ai";
import { TitleSection } from "../../components/TitleSection";
import SearchBar from "../../components/SearchBar/SearchBar";
import StatusOption from "../../components/StatusOption/StatusOption";
import FilterSelect from "../../components/FilterSelect/FilterSelect";
import CreatorPanelTabel from "../../components/CreatorPanelTable/CreatorPanelTable";
import { useNavigate } from "react-router-dom";
import { useQuestion } from "../../context/question/useQuestionContext";
import { useEffect, useState } from "react";
import {
  Question,
  QuestionStatusEnum,
  QuestionAreaEnum,
} from "../../models/Question";

const ElaboratorPanel = () => {
  const statusOptions = Object.values(QuestionStatusEnum);
  const areaOptions = Object.values(QuestionAreaEnum);
  const navigate = useNavigate();
  const { getElaboratorQuestions, elaboratorQuestions } = useQuestion();
  const [search, setSearch] = useState<string>("");
  const [results, setResults] = useState<Question[]>(elaboratorQuestions);

  useEffect(() => {
    getElaboratorQuestions();
  }, []);

  useEffect(() => {
    const results = elaboratorQuestions.filter(
      (element) =>
        element.id.toLowerCase().includes(search.toLowerCase()) ||
        element.knowledgeArea.toLowerCase().includes(search.toLowerCase()) ||
        element.competence.toLowerCase().includes(search.toLowerCase())
    );
    setResults(results);
  }, [elaboratorQuestions, search]);

  const handleSelect = (selectedOption: string) => {
    console.log("Selected option:", selectedOption);
  };

  return (
    <div className="container mx-auto mt-8 p-28">
      <div className="flex items-center justify-between">
        <TitleSection underline title="SUAS QUESTÕES" />
        <button
          className="button outline default py-1 px-5 text-sm flex items-center"
          type="button"
          onClick={() => navigate("/criar-questao")}
        >
          NOVA QUESTÃO
          <AiOutlinePlus className="ml-2" />
        </button>
      </div>
      <div className="flex items-center justify-center">
        <SearchBar setSearch={setSearch} />
      </div>
      <div className="flex w-full mt-4 justify-between items-center">
        <div className="flex w-full  justify-between  items-center">
          <div className=" flex items-center justify-center bg-gray-100">
            <FilterSelect
              placeholder="Filtrar por Area de Conhecimento"
              options={areaOptions}
              onSelect={handleSelect}
            />
          </div>
          <div className=" flex items-center justify-center bg-gray-100">
            <FilterSelect
              placeholder="Filtrar por Status"
              options={statusOptions}
              onSelect={handleSelect}
            />
          </div>
        </div>
        <div className="flex   items-center ml-4">
          <StatusOption variant="outline" color="approved" size="small">
            APROVADO
          </StatusOption>
          <StatusOption variant="outline" color="rejected" size="small">
            REJEITADO
          </StatusOption>
          <StatusOption variant="outline" color="under_review" size="small">
            EM ANÁLISE
          </StatusOption>
          <StatusOption variant="outline" color="draft" size="small">
            RASCUNHO
          </StatusOption>
        </div>
      </div>
      <CreatorPanelTabel data={results} />
    </div>
  );
};

export default ElaboratorPanel;
