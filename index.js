/* function myLink(e) {
  window.location.href = '#bio';

  e.preventDefault();
  e.stopPropagation();
}

const projects = () => {
  const Btn = (props) => {
    return (
      <div className="col-12 col-sm-6 project-btn">
        <button className="project-div">
          <a href={props.url}>
            <h4>{props.site}</h4>
            <p>{props.desc}</p>
          </a>
        </button>
      </div>
    );
  };
};
 */

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus');
});
