import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { ApiForm } from "./form";
import * as S from "./style";


function Dashboard() {
    // try {
    //     let res = await axios(
    //         {
    //             method: 'post',
    //             url: 'http://127.0.0.1:3005/videos/creat',
    //             // data를 숫자형식으로 변환
    //             data: JSON.stringify(Object.fromEntries(new FormData((e.target as HTMLFormElement)))),
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'dataType': 'json'
    //             }
    //         }
    //     );
    //     let data = res.data;
    //     setApiData(data);
    //     console.log(data);
    // } catch (err) {
    //     const data = Object.fromEntries(new FormData((e.target as HTMLFormElement)));
    //     console.log(data, 'data');
    //     console.log(e, 'e');
    //     console.log(e.target, 'e.target');
    //     console.log(err);
    // }

    return (
        <>
            <S.Wrap>
                <ApiForm title="Create" />
                <S.Doc>© 2022-2023 by choi138.tk, Inc.</S.Doc>
            </S.Wrap>

        </>
    )
};

export default Dashboard;