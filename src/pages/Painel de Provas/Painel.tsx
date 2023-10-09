import { AiOutlineCalendar, AiFillAlert } from "react-icons/ai";
import Button from "../../components/Button";
import TestCard from "../../components/TestCard";
import ListCard from "../../components/ListCard";
import { useEffect, useState } from "react";
import instance from "../../axios";
import { Link } from "react-router-dom";

type TestCard = {
    id: string;
    name: string;
    description: string;
    dateStart: string;
}

function Painel() {
    const id = "014f79e8-b891-4329-85a5-bb54ba5692ea"
    const [tests, setTests] = useState<TestCard[]>([]);
    
    useEffect(() => {
      return () => {
        instance.get(`/users/${id}/tests`)
        .then(
            res => {
                console.log(res.data);
                setTests(res.data);
            }
        )
        .catch((err) => {
            console.log(err);
        })
      }
    }, [id])
    return (
        <>
            <ListCard>
                {
                    tests.map(test => (
                        <Link to={`details/${test.id}`}>
                            <TestCard handleClick={console.log}
                            title={test.name}
                            subText={test.dateStart} 
                            description={test.description}
                            icon={AiOutlineCalendar} />
                        </Link>
                    ))
                }
            </ListCard>
            <Button variant="solid" color="warning">
                <AiFillAlert />
                ATENÇÃO
            </Button>
        </>
    );
}

export default Painel;