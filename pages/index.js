import Link from 'next/link';
import Script from 'next/script';
import { useState } from 'react';

function Home() {
    return (
        <div>


            <h1>Home new</h1>

            <Link href='/sobre'>
                <a> Acessar página sobre</a>
            </Link>

            <Contador />

            <Script async data-uid="3a8681ecee" src="https://awesome-producer-2056.ck.page/3a8681ecee/index.js" />

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
            <a href="https://google.com" class="btn btn-primary">Go to Google</a>
        </div>
    )
}

export default Home