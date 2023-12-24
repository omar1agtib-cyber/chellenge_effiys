import './Topnav.scss';

const Topnav = () => {
  return <div className='topnav'>
    <div className="top">
        <div className="topContent">
            <div className='dashboard'>Dashboard</div>
            <div className="profile">
              <div className="notification">
                <div className="button">
                <i className="fa-solid fa-bell"></i>
                </div>
                <div className="badge">1</div>
              
              </div>
              <div className="frame">
                <div className="group">
                  <div className="anima">Anima Agrawal</div>
                  <div className='company'>Company LLC</div>
                </div>
                <div className="avatar">
                <i className="fa-solid fa-layer-group"></i>
                </div>
              </div>
            </div>
        </div>
    </div>
    <div className="bottom">
      <div className="bottomContent">
        <div className="icon">
          <div className="home">
          <i className="fa-solid fa-house"></i>
          </div>
        </div>
        <ul>
          <li>Page</li>
          <li>Page</li>
          <li>Page</li>
          <li>Page</li>
        </ul>
      </div>
    </div>
  </div>;
};

export default Topnav;
