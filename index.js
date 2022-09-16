const Arrow = () => {
    /* const btn = () => {
      window.scroll({
        bottom: document.body.scrollHeight, // or document.scrollingElement || document.body
        left: 0,
        behavior: 'smooth',
      });
    }; */
  
    function mylinkfunction(e) {
      window.location.href = '#bio';
  
      e.preventDefault();
      e.stopPropagation();
    }

    const Projects = () => {
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