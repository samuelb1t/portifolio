
function Course({name,school,hours,date}:{name: string,school:string,hours:string,date:string}){
    return(
        <section className="bg-neutral-900 min-w-48 text-center p-2 box-border rounded-xl grid">
            <h3 className="text-2xl">{name}</h3>
            <span className="text-lg block">{school}</span>
            <span className="text-lg block">{hours}</span>
            <span className="text-lg block">{date}</span>
        </section>
    )
}

export default Course;
