import { Form } from "./form";
import * as S from "./style";


function Dashboard() {

    return (
        <>
            <S.Wrap>
                <Form title="Create" baseUrl="http://127.0.0.1:3005/video/create"/>
                <Form title="Update" baseUrl="http://127.0.0.1:3005/video/update"/>
                <Form title="Delete" baseUrl="http://127.0.0.1:3005/video/delete"/>
                <Form title="Get" baseUrl="http://127.0.0.1:3005/video/get"/>
                <Form title="GetAll" baseUrl="http://127.0.0.1:3005/video/all"/>
                <S.Doc>© 2022-2023 by choi138.tk, Inc.</S.Doc>
            </S.Wrap>

        </>
    )
};

export default Dashboard;