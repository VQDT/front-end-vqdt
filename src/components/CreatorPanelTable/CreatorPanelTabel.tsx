import React from 'react';
import StatusOption from '../StatusOption/StatusOption';

const data = [
  {
    id: 1,
    criacao: '2023-01-01',
    ultimaAlteracao: '2023-01-05',
    areaDeConhecimento: 'Matemática',
    competencia: 'Lógica',
    status: 'APROVADO'
  },
  {
    id: 2,
    criacao: '2023-02-01',
    ultimaAlteracao: '2023-02-05',
    areaDeConhecimento: 'Física',
    competencia: 'Mecânica',
    status: 'EM ANÁLISE'
  },
  {
    id: 3,
    criacao: '2023-03-01',
    ultimaAlteracao: '2023-03-05',
    areaDeConhecimento: 'Química',
    competencia: 'Orgânica',
    status: 'RASCUNHO'
  },
  {
    id: 4,
    criacao: '2023-04-01',
    ultimaAlteracao: '2023-04-05',
    areaDeConhecimento: 'Biologia',
    competencia: 'Genética',
    status: 'REJEITADO'
  }
];

const CreatorPanelTable: React.FC = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'APROVADO':
        return 'approved';
      case 'REJEITADO':
        return 'rejected';
      case 'EM ANÁLISE':
        return 'under_review';
      case 'RASCUNHO':
        return 'draft';
      default:
        return 'default';
    }
  };

  return (
    <div className="overflow-x-auto mt-4 border border-gray-300 rounded-lg">
      <table className="min-w-full bg-white  ">
        <thead>
          <tr className="border-b border-gray-300">
            <th className="px-4 py-2 text-center text-sky-400">ID</th>
            <th className="px-4 py-2 text-center text-sky-400">Criação</th>
            <th className="px-4 py-2 text-center text-sky-400">Última Alteração</th>
            <th className="px-4 py-2 text-center text-sky-400">Área de Conhecimento</th>
            <th className="px-4 py-2 text-center text-sky-400">Competência</th>
            <th className="px-4 py-2 text-center text-sky-400">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td className="px-4 py-2 text-center">{item.id}</td>
              <td className="px-4 py-2 text-center">{item.criacao}</td>
              <td className="px-4 py-2 text-center">{item.ultimaAlteracao}</td>
              <td className="px-4 py-2 text-center">{item.areaDeConhecimento}</td>
              <td className="px-4 py-2 text-center">{item.competencia}</td>
              <td className="px-4 py-2 text-center">
                <StatusOption
                  variant="outline"
                  color={getStatusColor(item.status)}
                  size="small"
                >
                  {item.status.charAt(0).toUpperCase() + item.status.slice(1).toUpperCase().replace('_', ' ')}
                </StatusOption>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CreatorPanelTable;
