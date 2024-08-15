import { useNavigate } from "react-router-dom";
import { Question } from "../../models/Question";
import StatusOption from "../StatusOption/StatusOption";
import IconButton from "@mui/material/IconButton";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

type CreatorPanelTableProps = {
  data: Question[];
  role?: string;
};

const CreatorPanelTable = ({ data, role }: CreatorPanelTableProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "APROVADA":
        return "approved";
      case "REJEITADA":
        return "rejected";
      case "EM_ANALISE":
        return "under_review";
      case "RASCUNHO":
        return "draft";
      case "PENDENTE":
        return "pendent";
      default:
        return "default";
    }
  };

  const navigate = useNavigate();

  return (
    <div className="overflow-x-auto mt-4 border border-gray-300 rounded-lg w-full">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="border-b border-gray-300">
            <th className="px-4 py-2 text-center text-sky-400">ID</th>
            <th className="px-4 py-2 text-center text-sky-400">Criação</th>
            <th className="px-4 py-2 text-center text-sky-400">
              Última Alteração
            </th>
            <th className="px-4 py-2 text-center text-sky-400">
              Área de Conhecimento
            </th>
            <th className="px-4 py-2 text-center text-sky-400">Competência</th>
            <th className="px-4 py-2 text-center text-sky-400">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map(
              (item) => (
                item.status === "EM_ANALISE" && role === "reviewer"
                  ? (item.status = "PENDENTE")
                  : item.status,
                (
                  <tr
                    key={item.id}
                    className={
                      role === "reviewer" ? undefined : "hover:bg-blue-100"
                    }
                    onClick={() =>
                      role === "reviewer"
                        ? null
                        : navigate("/editar-questao", {
                            state: { questionId: item.id },
                          })
                    }
                  >
                    <td className="px-4 py-2 text-center">{item.id}</td>
                    <td className="px-4 py-2 text-center">
                      {new Date(item.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-2 text-center">
                      {new Date(item.updatedAt).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-2 text-center">
                      {item.knowledgeArea.charAt(0).toUpperCase() +
                        item.knowledgeArea
                          .slice(1)
                          .toUpperCase()
                          .replace("_", " ")}
                    </td>
                    <td className="px-4 py-2 text-center">{item.competence}</td>
                    <td className="px-4 py-2 text-center">
                      <StatusOption
                        variant="outline"
                        color={getStatusColor(item.status)}
                        size="small"
                      >
                        {item.status.charAt(0).toUpperCase() +
                          item.status.slice(1).toUpperCase().replace("_", " ")}
                      </StatusOption>
                    </td>
                    {role === "reviewer" && (
                      <td className="px-4 py-2 text-center">
                        <IconButton
                          color="primary"
                          onClick={() =>
                            navigate("/revisar-questao", {
                              state: { questionId: item.id },
                            })
                          }
                        >
                          <OpenInNewIcon />
                        </IconButton>
                      </td>
                    )}
                  </tr>
                )
              )
            )
          ) : (
            <tr>
              <td
                colSpan={6}
                className="text-center p-20 text-lg text-gray-400"
              >
                Nenhuma questão encontrada
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CreatorPanelTable;
