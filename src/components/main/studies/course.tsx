
function Course({title,school,hours,date}:{title: string,school:string,hours:string,date:string}){
    return(
        <section className="bg-neutral-900 min-w-80 max-w-96 max-h-48 text-center p-2 rounded-xl flex flex-col text-font gap-4" id="course">
            <h3 className="text-lg font-bold">{title}</h3>
            <span className="text-base block">{school}</span>
            <span className="text-base block">{hours}</span>
            <span className="text-base block">{date}</span>
        </section>
    )
}

export default Course;  
