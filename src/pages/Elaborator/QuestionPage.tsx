import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAPI } from "../../axios";
import Button from "../../components/Button";

export default function Question() {
    const { id } = useParams();
    const axiosInstance = useAPI();
    const navigate = useNavigate();

    const [question, setQuestion] = useState({});

    async function getQuestion(id: string) {
        const response = await axiosInstance.get("/questions/" + id);
        setQuestion(response.data);
    }

    useEffect(() => {
        if (id) getQuestion(id);
    }, []);

    return (
        <>
            <main className="mt-6 mx-auto max-w-7xl">
                <div className="flex items-center justify-between">
                    <h2 className="text-Blue text-lg font-bold uppercase">
                        {id}
                    </h2>
                    <div className="flex gap-3">
                        <Button onClick={() => navigate(`/questao/${id}/edit`)}>Editar</Button>
                        <Button>Revisar</Button>
                        <Button color="alert">Excluir</Button>
                    </div>
                </div>
                <p>Criado em: {question?.createdAt}</p>
                <p>Status: {question?.status}</p>
                <p>Habilidade: {question?.skill}</p>
                <p>Competência: {question?.competence}</p>
                <p>Área do Conhecimento: {question?.knowledgeArea}</p>
                <p>Nível do Conhecimento: {question?.knowledgeLevel}</p>
                <p>Dificuldade: {question.difficulty}</p>
                <div
                    dangerouslySetInnerHTML={{ __html: question?.content }}
                    className="prose"
                />
                <p>Alternativas: </p>
                {question?.alternatives?.map((alternative, index) => (
                    <div className="ml-5">
                        <input
                            className="mr-2"
                            type="radio"
                            name="alternative"
                            id={alternative.id}
                            checked={alternative.correct}
                        />
                        {alternative.content}
                    </div>
                ))}
            </main>
        </>
    );
}
