
function Studies(){
    return(
        <section className="grid studies-columns gap-12">
            <h1 className="text-neutral-800 text-8xl leading-none">ES<br/>TU<br/>DO<br/>S</h1>
            <div> 
                <section className="text-neutral-200">
                    <h2 className="block text-6xl mb-4">Faculdade<span className="text-red-700 text-7xl leading-10">.</span></h2>
                    <div className="grid grid-cols-2 gap-8">
                        <div className="border-2 rounded-xl p-3 box-border">
                            <h3 className="text-2xl">Engenharia de Computação</h3>
                            <span className="text-xl block">UERGS</span>
                            <span className="text-xl">2023/2 - 2024/1</span>
                        </div>
                        <div className="border-2 rounded-xl p-3 box-border">
                            <h3 className="text-2xl">Engenharia de Softare</h3>
                            <span className="text-xl block">PUC-RS</span>
                            <span className="text-xl leading-none">2024/2 - hoje</span>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default Studies;