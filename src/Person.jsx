const Person = ({image, name, age}) => {

    return (
        <div className="person">
            <img src={image}/>
            <p>{name} / {age}</p>
        </div>
    )
}

export default Person;