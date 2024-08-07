import { TitleSection } from "../../components/TitleSection";
import SearchBar from "../../components/SearchBar/SearchBar";
import StatusOption from "../../components/StatusOption/StatusOption";
import FilterSelect from "../../components/FilterSelect/FilterSelect";
import CreatorPanelTabel from "../../components/CreatorPanelTable/CreatorPanelTabel";
import { useQuestion } from "./../../context/question/useQuestionContext";
import { useEffect, useState } from "react";
import {
  Question,
  QuestionStatusEnum,
  QuestionAreaEnum,
} from "../../models/Question";

const ReviewerPanel = () => {
  const statusOptions: string[] = [...Object.values(QuestionStatusEnum)];
  const areaOptions: string[] = [...Object.values(QuestionAreaEnum)];
  const { getElaboratorQuestions, elaboratorQuestions } = useQuestion();
  const [search, setSearch] = useState<string>("");
  const [results, setResults] = useState<Question[]>(elaboratorQuestions);
  const [knowledgeArea, setKnowledgeArea] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  useEffect(() => {
    getElaboratorQuestions();
  }, []);

  useEffect(() => {
    let results = elaboratorQuestions.filter(
      (element) =>
        element.id.toLowerCase().includes(search.toLowerCase()) ||
        element.knowledgeArea.toLowerCase().includes(search.toLowerCase()) ||
        element.competence.toLowerCase().includes(search.toLowerCase())
    );
    if (knowledgeArea) {
      results = results.filter((element) => element.knowledgeArea === knowledgeArea);
    }
    setResults(results);
  }, [elaboratorQuestions, knowledgeArea, search]);

  const handleSelect = (selectedOption: string, filter: string) => {
    if (filter === "knowledgeArea") {
      if (selectedOption === knowledgeArea) {
        selectedOption="";
        setKnowledgeArea("");
      }
      else {
       setKnowledgeArea(selectedOption); 
      }
    } else {
      if (selectedOption === status) {
        selectedOption="";
        setStatus("");
      }
      setStatus(selectedOption);
    }
    console.log("Selected option:", selectedOption);
  };

  return (
    <div className="container mx-auto mt-8 p-28">
      <div className="flex items-center justify-between">
        <TitleSection underline title="SUAS REVISÕES" />
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
              onSelect={(e) => handleSelect(e, "knowledgeArea")}
            />
          </div>
          <div className=" flex items-center justify-center bg-gray-100">
            <FilterSelect
              placeholder="Filtrar por Status"
              options={statusOptions}
              onSelect={(e) => handleSelect(e, "status")}
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

export default ReviewerPanel;
