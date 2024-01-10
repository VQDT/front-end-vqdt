import ListCard from "../../components/ListCard";
import TestCard from "../../components/TestCard";
import Main from "../../components/Main";
import useTest from "../../context/test/useTest";
import { AiOutlineCalendar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import isFuture from "../../utils/isFuture";
import useAuth from "../../context/auth/useAuth";
import { useEffect } from "react";

function NormalizeDate(date: string) {
  return date.split("T")[0].split("-").reverse().join("/");
}

function ApplicatorTestPainel() {

    const { checkRolePermission } = useAuth();
    const { tests } = useTest();
    const navigation = useNavigate();

    useEffect(() => {
        console.log("entrou")
        const check = checkRolePermission(2);
        if (!check){
            window.alert("Você não tem permissão para acessar essa página")
            navigation("/")
        }
    },[])

    function navigateApplicatorTest(id: string) {
        navigation("/application/" + id);
    }

    const listFutureTests = tests
    .filter(
        (test) => !isFuture(test.timeEnd)
    )
    .map((test) => {
        return (
            <TestCard
                key={test.id}
                title={test.name}
                description={test.description}
                textAux={NormalizeDate(test.dateStart)}
                icon={AiOutlineCalendar}
                handleClick={() => navigateApplicatorTest(test.id)}
            />
        )
    })

    const listPastTests = tests
    .filter(
        (test) => isFuture(test.timeEnd)
    )
    .map((test) => {
        return (
            <TestCard
                key={test.id}
                title={test.name}
                description={test.description}
                textAux={NormalizeDate(test.dateStart)}
                icon={AiOutlineCalendar}
                handleClick={() => navigateApplicatorTest(test.id)}
            />
        )
    })

    return (
        <Main>
            <h2 className="text-Blue text-lg font-bold uppercase">APLICAÇÕES AGENDADAS</h2>
            <ListCard>
            {
                listFutureTests.length > 0 ? (
                listFutureTests
                ) : (
                <div className="w-full h-44 text-Concrete text-lg font-medium flex items-center justify-center">
                    Não há provas agendadas
                </div>
                )
            }
            </ListCard>
            <h2 className="text-Blue text-lg font-bold uppercase">APLICAÇÕES REALIZADAS</h2>
            <ListCard>
            {
                listPastTests.length > 0 ? (
                listPastTests
                ) : (
                <div className="w-full h-44 text-Concrete text-lg font-medium flex items-center justify-center">
                    Não há provas finalizadas
                </div>
                )
            }
            </ListCard>
        </Main>
    );
}

export default ApplicatorTestPainel;
