function Tempo() {
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toUTCString();

    return (
        <div>
            {dynamicDateString} (dinamico)
        </div>
    )
}

export default Tempo;