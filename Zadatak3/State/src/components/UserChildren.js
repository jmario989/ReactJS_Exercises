function UserChildren(props){

    return (
        <div>
            <p>Pozdrav, moje ime je {props.name} i imama {props.years} godina.</p>
            <p>{props.children}</p>
        </div>
    );

}

export default UserChildren;