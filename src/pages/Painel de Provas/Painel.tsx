import { AiOutlineCalendar, AiFillAlert } from "react-icons/ai";
import Button from "../../components/Button";
import TestCard from "../../components/TestCard";
import ListCard from "../../components/ListCard";
import { useEffect, useState } from "react";
import instance from "../../axios";

function Painel() {
    const id = "6be4ae08-4659-41c3-90a6-e774277c653f"
    const [tests, setTests] = useState([]);
    
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
                        <TestCard handleClick={console.log}
                        title={test.test.name}
                        subText={test.test.dateStart} 
                        description={test.test.description}
                        icon={AiOutlineCalendar} />
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