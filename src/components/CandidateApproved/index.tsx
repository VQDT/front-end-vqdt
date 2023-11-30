import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { AiOutlineCloseCircle } from 'react-icons/ai';

type StatusCard = {
    maxScore: number,
    score: number,
    status: boolean,
}

function Result({maxScore, score, status}:StatusCard) {
    return(
        <div className="flex justify-center mt-6 mb-6 items-center">
            <div className={`border ${status ? 'border-[#309F35]' : 'border-[#9f3030]'} w-4/5 flex justify-start rounded-lg`}>
                {
                    status ? <div className="px-4 py-3 rounded-s-lg bg-[#309F35] text-white mr-8 flex justify-center items-center">
                                <CheckCircleOutlineIcon />
                            </div> : <div className="px-4 py-3 rounded-s-lg bg-[#9f3030] text-white mr-8 flex justify-center items-center">
                                <AiOutlineCloseCircle />
                            </div>
                }
                <div>
                    {
                        status ?  <p className="text-[#309F35] font-semibold text-lg">Parabéns, você foi aprovado!</p> : 
                        <p className="text-[#9f3030] font-semibold text-lg">Não foi dessa vez, você não passou na prova</p>
                    }
                    <p className='text-sm'>Você acertou {score} de {maxScore} questões, equivalente a {Math.round((score*100)/maxScore)}% da prova.</p>
                </div>
            </div>
        </div>
    )
}

export default Result;