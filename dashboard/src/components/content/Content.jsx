import './Content.scss';

const Content = () => {
  return (
    <div className="contents">
      <div className="frame">
        <div className="card">
          <div className="smContainer">
            <div className="smHead">
              <div className="icon">
                <i className="fa-solid fa-chart-pie"></i>
              </div>
              <div className="filter">
                <div className="week">This week</div>
                <div className="dwon">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
            </div>
            <div className="smHBottom">
              <div className="left">
                <div className="customers">Sales</div>
                <div className="frame12">
                  <div className="Nframe">₦0.00</div>
                  <div className="frame0">+0.00%</div>
                </div>
              </div>
              <div className="right">
                <div className="customers">Volume</div>
                <div className="frame12">
                  <div className="Nframe">0</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="smContainer">
            <div className="smHead">
              <div className="icon">
                <i className="fa-solid fa-users"></i>
              </div>
              <div className="filter">
                <div className="week">This week</div>
                <div className="dwon">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
            </div>
            <div className="smHBottom">
              <div className="left">
                <div className="customers">Customers</div>
                <div className="frame12">
                  <div className="Nframe">0</div>
                  <div className="frame0">+0.00%</div>
                </div>
              </div>
              <div className="right">
                <div className="customers">Active</div>
                <div className="frame12">
                  <div className="Nframe">0</div>
                  <div className="frame0">+0.00%</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="smContainer">
            <div className="smHead">
              <div className="icon">
                <i className="fa-solid fa-bag-shopping"></i>
              </div>
              <div className="filter">
                <div className="week">This week</div>
                <div className="dwon">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
            </div>
            <div className="smHBottomEnd">
              <div className="leftEnd">
                <div className="customers">All Orders</div>
                <div className="frame12">
                  <div className="Nframe">0</div>
                </div>
              </div>
              <div className="midleEnd">
                <div className="customers">Pending</div>
                <div className="frame12">
                  <div className="Nframe">0</div>
                </div>
              </div>
              <div className="rightEnd">
                <div className="customers">Completed</div>
                <div className="frame12">
                  <div className="Nframe">0</div>
                  <div className="frame0">+0.00%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main">
        <div className="mainLeft">
          <div className="top">
            <div className="barChart">
              <div className="content">
                <div className="topContent">
                  <div className="frame34">
                    <div className="mark">Marketting</div>
                    <div className="filter">
                      <div className="week">This week</div>
                      <div className="dwon">
                        <i className="fa-solid fa-chevron-down"></i>
                      </div>
                    </div>
                  </div>
                  <div className="keyContainer">
                    <div className="key">
                      <div className="rectangle1"></div>
                      <div className="title">Acquisition</div>
                    </div>
                    <div className="key">
                      <div className="rectangle2"></div>
                      <div className="title">Purchase</div>
                    </div>
                    <div className="key">
                      <div className="rectangle1"></div>
                      <div className="title">Retention</div>
                    </div>
                  </div>
                </div>
                <div className="group">
                  <div className="ellipse">
                    <i className="fa-regular fa-circle"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="rights">
              <div className="card">
                <div className="smContainer">
                  <div className="smHead">
                    <div className="icon">
                      <i className="fa-solid fa-folder-minus"></i>
                    </div>
                    <div className="filter">
                      <div className="week">This week</div>
                      <div className="dwon">
                        <i className="fa-solid fa-chevron-down"></i>
                      </div>
                    </div>
                  </div>
                  <div className="smHBottom">
                    <div className="left">
                      <div className="customers">All Products</div>
                      <div className="frame12">
                        <div className="Nframe">0</div>
                        <div className="frame0">+0.00%</div>
                      </div>
                    </div>
                    <div className="right">
                      <div className="customers">Active</div>
                      <div className="frame12">
                        <div className="Nframe">0</div>
                        <div className="frame0">+0.00%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="smContainer">
                  <div className="smHead">
                    <div className="icon">
                      <i className="fa-solid fa-cart-shopping"></i>
                    </div>
                    <div className="filter">
                      <div className="week">This week</div>
                      <div className="dwon">
                        <i className="fa-solid fa-chevron-down"></i>
                      </div>
                    </div>
                  </div>
                  <div className="smHBottom">
                    <div className="left">
                      <div className="customers">Abandoned Cart</div>
                      <div className="frame12">
                        <div className="Nframe">0</div>
                        <div className="frame0">+0.00%</div>
                      </div>
                    </div>
                    <div className="right">
                      <div className="customers">Customers</div>
                      <div className="frame12">
                        <div className="Nframe">0</div>
                        <div className="frame0">+0.00%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="chart">
              <div className="heading">
                <div className="frame20">
                  <div className="sum">Summary</div>
                  <div className="icons">
                    <div className="frame19">
                      <div className="sales">Sales</div>
                      <div className="ico">
                        <i className="fa-solid fa-chevron-down"></i>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="filter">
                  <div className="week">Last 7 Days</div>
                  <div className="dwon">
                    <i className="fa-solid fa-chevron-down"></i>
                  </div>
                </div>
              </div>

              <div className="graphBar">
                <div className="x-axis">
                  <div className="nums">100k</div>
                  <div className="nums">80k</div>
                  <div className="nums">60k</div>
                  <div className="nums">40k</div>
                  <div className="nums">20k</div>
                </div>
                <div className="bar">
                  <div className="pipe"></div>
                  <div className="step">step 10</div>
                </div>
                <div className="bar">
                  <div className="pipe"></div>
                  <div className="step">step 11</div>
                </div>
                <div className="bar">
                  <div className="pipe"></div>
                  <div className="step">step 12</div>
                </div>
                <div className="bar">
                  <div className="pipe"></div>
                  <div className="step">step 13</div>
                </div>
                <div className="bar">
                  <div className="pipe"></div>
                  <div className="step">step 14</div>
                </div>
                <div className="bar">
                  <div className="pipe"></div>
                  <div className="step">step 15</div>
                </div>
                <div className="bar">
                  <div className="pipe"></div>
                  <div className="step">step 16</div>
                </div>
                <div className="bar">
                  <div className="pipe"></div>
                  <div className="step">step 17</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="order">
          <div className="frame31">
            <div className="recent">Recent Orders</div>
            <div className="emptyState">
              <div className="iconContainer">
                <div className="icon">
                  <i className="fa-solid fa-bag-shopping"></i>
                </div>
              </div>

              <div className="emptyStateContent">
                <div className="desc">
                  <div className="noOrder">No Orders Yet?</div>
                  <div className="add">
                    Add products to your store and start selling to see orders
                    here.
                  </div>
                </div>

                <div className="buttons">
                  <div className="labelContainer">
                    <div className="icon">
                    <i className="fa-regular fa-heart"></i>
                    </div>
                    <div className="label">New Product</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
