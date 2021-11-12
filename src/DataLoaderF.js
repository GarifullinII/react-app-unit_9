import React from "react";

function DataLoaderF() {

    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data);
        });
    }, []);

    return (
        <div>
            <ul>
                {data.map(item => 
                    <li key={item.id}>
                        {item.name}
                    </li>
                )}
            </ul>
        </div>
    )
};

export default DataLoaderF;