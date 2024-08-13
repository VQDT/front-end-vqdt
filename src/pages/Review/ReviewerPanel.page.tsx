import { TitleSection } from "../../components/TitleSection";
import SearchBar from "../../components/SearchBar/SearchBar";
import StatusOption from "../../components/StatusOption/StatusOption";
import FilterSelect from "../../components/FilterSelect/FilterSelect";
import CreatorPanelTabel from "../../components/CreatorPanelTable/CreatorPanelTable";
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
  const { getReviewerQuestions, reviewerQuestions } = useQuestion();
  const [search, setSearch] = useState<string>("");
  const [results, setResults] = useState<Question[]>(reviewerQuestions);
  const [knowledgeArea, setKnowledgeArea] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  //remova de statusOptions o status RASCUNHO e EM_ANALISE
  statusOptions.splice(3, 1);
  statusOptions.splice(2, 1);

  useEffect(() => {
    getReviewerQuestions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let results = reviewerQuestions.filter(
      (element) =>
        element.id.toLowerCase().includes(search.toLowerCase()) ||
        element.knowledgeArea.toLowerCase().includes(search.toLowerCase()) ||
        element.competence.toLowerCase().includes(search.toLowerCase())
    );
    if (knowledgeArea) {
      results = results.filter(
        (element) => element.knowledgeArea === knowledgeArea
      );
    }
    setResults(results);
  }, [reviewerQuestions, knowledgeArea, search]);

  const handleSelect = (selectedOption: string, filter: string) => {
    if (filter === "knowledgeArea") {
      if (selectedOption === knowledgeArea) {
        selectedOption = "";
        setKnowledgeArea("");
      } else {
        setKnowledgeArea(selectedOption);
      }
    } else {
      if (selectedOption === status) {
        selectedOption = "";
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
            APROVADA
          </StatusOption>
          <StatusOption variant="outline" color="rejected" size="small">
            REJEITADA
          </StatusOption>
          <StatusOption variant="outline" color="pendent" size="small">
            PENDENTE
          </StatusOption>
        </div>
      </div>
      <CreatorPanelTabel data={results} role={"reviewer"} />
    </div>
  );
};

export default ReviewerPanel;
