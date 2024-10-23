
function Course({name,school,hours,date}:{name: string,school:string,hours:string,date:string}){
    return(
        <section className="bg-neutral-900 min-w-56 max-h-48 text-center p-2 box-border rounded-xl grid text-font overflow-auto" id="course">
            <h3 className="text-xl font-bold">{name}</h3>
            <span className="text-lg block">{school}</span>
            <span className="text-lg block">{hours}</span>
            <span className="text-lg block">{date}</span>
        </section>
    )
}

export default Course;
