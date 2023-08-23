import React from "react";


export default function Test() {
    const [dbTable, setDbTable] = React.useState([]);

    const dbSelect = () => {
        fetch("/test/testSelectList.json", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
        }).then((response) => response.json()).then((data) => {
            setDbTable(data);
        }).catch((error) => {
            console.log('dbSelect() /test/testSelectList.json error : ', error);
        });
    }
    React.useEffect(() => {
        dbSelect();
    }, [])

    return (
        <>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th >index</th>
                            <th >name</th>
                        </tr>
                    </thead>
                    {dbTable.map((item, index) => (
                        <tr key={index}>
                            <td>{item.index}</td>
                            <td>{item.user_name}</td>
                        </tr>
                    ))}

                </table>
            </div>
        </>
    );
}