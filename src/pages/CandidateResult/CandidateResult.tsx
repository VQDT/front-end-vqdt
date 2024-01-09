import CandidateApproved from "../../components/CandidateApproved";
import useTest from '../../context/test/useTest';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Button from '../../components/Button';
import { AiOutlineArrowLeft } from 'react-icons/ai';

function CandidateResult() {

    const { test, getTest, getTestAttendance, testAttendance, questions, getQuestions } = useTest();
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate()

    useEffect(() => {
        if (id) {
            getTest(id)
            getQuestions(id)
            getTestAttendance(id)
        }
    }, [])

    const approved = (testAttendance && test) && (
        <CandidateApproved
            maxScore={questions.length}
            score={testAttendance.score}
            status={testAttendance.approved}
        />
    )

    return (
        <div className="">
            <div className="">
                {approved}
            </div>
            {
                testAttendance?.approved ?
                    <div className="card w-4/5 border border-[#C5C5C5] rounded-md m-auto p-3">
                        <div className="flex items-center justify-center text-Blue font-bold text-2xl pt-6 px-6">
                            <p className="text-center">COMPROVANTE DE PARTICIPAÇÃO</p>
                        </div>
                        <div className="text-[#2C3E50] text-base p-6">
                            <p className="pt-10">Aenean at mollis est, feugiat pulvinar lacus. Nam non ante non felis gravida viverra. Fusce a lorem sit amet felis consectetur vulputate eu ac odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis massa mi, convallis nec luctus viverra, ultricies eget orci. Suspendisse sed dictum turpis.</p>
                            <p className="pt-7">Donec facilisis augue elit. Aliquam venenatis eros enim, vitae lobortis leo ullamcorper in. Nunc nec justo enim. Vestibulum scelerisque urna erat, sed scelerisque ipsum pulvinar eu. Donec rhoncus ante sed arcu finibus sagittis. Mauris at placerat massa. Praesent mollis sapien ut metus tincidunt, non auctor leo commodo. Cras sagittis quam quis dignissim cursus. Morbi aliquam, libero et mollis efficitur, turpis dui consequat dolor, id dapibus odio massa fringilla diam. Cras accumsan a tellus vitae consequat. Nullam feugiat diam nec sem pretium, sed laoreet sapien aliquet. Nulla sollicitudin fringilla turpis, at laoreet nisl lobortis quis. Cras et suscipit tortor.</p>
                        </div>
                        <div className="pt-14 mb-5 flex justify-center">
                            <button className="border border-Blue px-5 py-3 rounded-md bg-Blue text-white hover:opacity-80">BAIXAR COMPROVANTE EM PDF</button>
                        </div>
                    </div> :
                    <div className="card w-4/5 border border-[#C5C5C5] rounded-md m-auto p-4">
                        <div className="flex items-center justify-center text-Blue font-bold text-2xl">
                            <p>Você ainda pode tentar novamente</p>
                        </div>
                        <div className="text-[#2C3E50] text-base p-6">
                            <p className="pt-10">Aenean at mollis est, feugiat pulvinar lacus. Nam non ante non felis gravida viverra. Fusce a lorem sit amet felis consectetur vulputate eu ac odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis massa mi, convallis nec luctus viverra, ultricies eget orci. Suspendisse sed dictum turpis.</p>
                            <p className="pt-7">Donec facilisis augue elit. Aliquam venenatis eros enim, vitae lobortis leo ullamcorper in. Nunc nec justo enim. Vestibulum scelerisque urna erat, sed scelerisque ipsum pulvinar eu. Donec rhoncus ante sed arcu finibus sagittis. Mauris at placerat massa. Praesent mollis sapien ut metus tincidunt, non auctor leo commodo. Cras sagittis quam quis dignissim cursus. Morbi aliquam, libero et mollis efficitur, turpis dui consequat dolor, id dapibus odio massa fringilla diam. Cras accumsan a tellus vitae consequat. Nullam feugiat diam nec sem pretium, sed laoreet sapien aliquet. Nulla sollicitudin fringilla turpis, at laoreet nisl lobortis quis. Cras et suscipit tortor.</p>
                        </div>
                    </div>
            }


            <div className="mt-6 flex justify-center">
                <Button
                    variant="outline"
                    onClick={() => {
                        navigate("/");
                    }}
                >
                    <AiOutlineArrowLeft />
                    VOLTAR
                </Button>
            </div>
        </div>
    );
}

export default CandidateResult;