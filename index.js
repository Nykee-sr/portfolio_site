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
function openPopup() {
  document.getElementById('boxPopup').style.display = 'block';
}

function closePopup() {
  document.getElementById('boxPopup').style.display = 'none';
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  var modal = document.getElementById('boxPopup');
  if (event.target == modal) {
    closePopup();
  }
};
