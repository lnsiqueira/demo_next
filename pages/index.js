import Link from 'next/link';
import { useState } from 'react';


function Home() {
    return (
        <div>
            <h1>Home new</h1>

            <Link href='/sobre'>
                <a> Acessar página sobre</a>
            </Link>

            <Contador />
        </div>


    )
}

function Contador() {

    const [contador, setcontador] = useState(1);

    function addContador() {
        setcontador(contador + 1);

    }
    return (
        <div>
            <div>{contador}</div>
            <button onClick={addContador}>Adicionar</button>
        </div>
    )
}

export default Home