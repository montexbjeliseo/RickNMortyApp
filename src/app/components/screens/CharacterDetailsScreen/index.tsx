import { useParams } from "react-router-dom";

function CharacterDetailsScreen(){
    const params = useParams();
    return (
        <h1>Detail works! id: {params.id}</h1>
    );
}
export default CharacterDetailsScreen;