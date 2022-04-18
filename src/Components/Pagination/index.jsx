import style from "./Pagination.module.scss";

const Pagination = ({goToNextPage, goToPreviousPage, changePage}) => {


    const nums = Array.from({length: 42}, (_, i) => i + 1);
    

    return(
        <div className={style.Pagination}>
            <button onClick={goToPreviousPage} className={style.pagPrevNext}>Prev</button>
            <div className={style.Pagination_Num}>
            {nums.map((index, i) =>
                <button key={i + 1} className={style.pagNum} onClick={changePage}>{index}</button>
            )}
            </div>
            <button onClick={goToNextPage} className={style.pagPrevNext}>Next</button>
        </div>
    )
}

export default Pagination;