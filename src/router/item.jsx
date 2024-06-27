
const Itemcard = ({img, title, text,date,id,id1}) =>{
    return (
        <div className="col">
            <div className="card" style={{width:"18 rem"}}>
            <img src={img} className="card-img-top mr-2" style={{objectFit: 'cover', objectPosition: 'center'}} alt="..."height="180px"/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{text}</p>
                    <p className="card-text">batas Akhir {date}</p>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={id1}>
                       Selengkapnya
                    </button>
                </div>
            </div>
            <div className="modal fade" id={id} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel"> {title}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        <img src={img} width="400px" alt=""/>
                            <p className="text-start mt-3">{text}</p>
                            <p className="">{date}</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Itemcard