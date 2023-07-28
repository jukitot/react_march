function SimpsonComponents(props) {
    console.log(props);
    let classNameItem = 'card';
    return(
        <div className={classNameItem}>
            <h1>Bart</h1>
            <img src="https://upload.wikimedia.org/wikipedia/ru/2/29/Bart_Simpson.gif"/>
        </div>
    );
}
export default SimpsonComponents;