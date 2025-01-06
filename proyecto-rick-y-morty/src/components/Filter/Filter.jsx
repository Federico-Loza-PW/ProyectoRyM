import './Filter.css';

export default function Filter({title,filtar}){

    return(
        <div className='chek  p-2 pt-0  c-form d-flex justify-content-between filter-2  form-check form-switch bg col-2 '>
            <input className='form-check-input' id={title} type='checkbox' onClick={(event)=>filtar(event.target)} value={title}/>
            <label className='form-check-label' htmlFor={title}>{title}</label>
        </div>
    )
}

