import { Button } from "@mui/material";
import { Description, EmptyList, Info, ListItem, ListStyled, Name, Pic, Value } from "./List.style";
import { Professor } from '../../@types/professor'
import { serviceFormatter } from "../../services/serviceFormatter";

interface ListProps {
    professores: Professor[],
    onSelect: (teacher : Professor) => void
}


const List = (props: ListProps) => {

    return (
        <div>
            {props.professores.length > 0 ? (<ListStyled>
                {props.professores.map(professor => (<ListItem key={professor.id}>
                    <Pic src={professor.pic}></Pic>
                    <Info>
                        <Name>{professor.name}</Name>
                        <Value>{serviceFormatter.currencyValue(professor.value_per_hour)}</Value>
                        <Description>{serviceFormatter.textLimit(professor.description, 200)}</Description>
                        <Button onClick={()=> props.onSelect(professor)} sx={{ width: '70%' }}>Marcar aula com {professor.name}</Button>
                    </Info>
                </ListItem>))}
            </ListStyled>)
                : (
                    <EmptyList></EmptyList>
                )}
        </div>
    )
}

export default List;