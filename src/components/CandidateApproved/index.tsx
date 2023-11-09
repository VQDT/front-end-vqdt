import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useState } from 'react';

function Result() {
    const [quests, setQuests] = useState(38);
    // requisiçao 

    return(
        <div className="flex justify-center mt-6 mb-6 items-center">
            <div className="border border-[#309F35] w-4/5 flex justify-start rounded-lg">
                <div className="px-4 py-3 rounded-s-lg bg-[#309F35] text-white mr-8 flex justify-center items-center">
                    <CheckCircleOutlineIcon />
                </div>
                <div>
                    <p className="text-[#309F35] font-semibold text-lg">Parabéns, você foi aprovado!</p>
                    <p className='text-sm'>Você acertou {quests} de 40 questões, equivalente a 98% da prova.</p>
                </div>
            </div>
        </div>
    )
}

export default Result;