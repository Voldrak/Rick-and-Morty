import style from "./Pagination.module.scss";

const Pagination = ({goToNextPage, goToPreviousPage, changePage}) => {


    const nums = Array.from({length: 42}, (_, i) => i + 1);
    

    return(
        <div className={style.Pagination}>
            <a onClick={goToPreviousPage} className={style.pagPrevNext}>Prev</a>
            <div className={style.Pagination_Num}>
            {nums.map((index, i) =>
                <button key={i + 1} className={style.pagNum} onClick={changePage}>{index}</button>
            )}
            </div>
            <a onClick={goToNextPage} className={style.pagPrevNext}>Next</a>
        </div>
    )
}

export default Pagination;