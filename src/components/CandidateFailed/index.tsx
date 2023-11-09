import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useState } from 'react';

function Result() {
    const [quests, setQuests] = useState(14);
    // requisiçao 

    return(
        <div className="flex justify-center mt-6 mb-6 items-center">
            <div className="border border-[#F63B42] w-4/5 flex justify-start rounded-lg">
                <div className="px-4 py-3 rounded-s-lg bg-[#F63B42] text-white mr-8 flex justify-center items-center">
                    <HighlightOffIcon />
                </div>
                <div>
                    <p className="text-[#F63B42] font-semibold text-lg">Você não atingiu a pontuação mínima.</p>
                    <p className='text-sm'>Você acertou {quests} de 40 questões, equivalente a 35% da prova.</p>
                </div>
            </div>
        </div>
    )
}

export default Result;