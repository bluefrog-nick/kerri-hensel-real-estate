import React from 'react';
import _ from 'lodash';

import {Link, safePrefix} from '../utils';
import Menu from './Menu';

export default class Header extends React.Component {
    render() {
        let menu = _.get(this.props, 'pageContext.menus.main');
        return (
          <React.Fragment>
            <div class="header-top"><div class="inner"><i class="fa fa-map-marker"></i> 4535 W Dublin Granville Rd, Dublin, OH  43017 <a href="tel:614-937-3490"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1408 1408"><path d="M1408 1112q0 27-10 70.5t-21 68.5q-21 50-122 106q-94 51-186 51q-27 0-53-3.5t-57.5-12.5t-47-14.5T856 1357t-49-18q-98-35-175-83q-127-79-264-216T152 776q-48-77-83-175q-3-9-18-49t-20.5-55.5t-14.5-47T3.5 392T0 339q0-92 51-186Q107 52 157 31q25-11 68.5-21T296 0q14 0 21 3q18 6 53 76q11 19 30 54t35 63.5t31 53.5q3 4 17.5 25t21.5 35.5t7 28.5q0 20-28.5 50t-62 55t-62 53t-28.5 46q0 9 5 22.5t8.5 20.5t14 24t11.5 19q76 137 174 235t235 174q2 1 19 11.5t24 14t20.5 8.5t22.5 5q18 0 46-28.5t53-62t55-62t50-28.5q14 0 28.5 7t35.5 21.5t25 17.5q25 15 53.5 31t63.5 35t54 30q70 35 76 53q3 7 3 21z" fill="#ffffff"/></svg> 614-937-3490</a></div></div>
            <header id="masthead" className="site-header outer">
              <div className="inner">
                <div className="site-header-inside">
                  <div className="site-branding">
                    {_.get(this.props, 'pageContext.site.data.header.logo_img') && 
                    <p className="site-logo">
                      <Link to={safePrefix(_.get(this.props, 'pageContext.site.data.header.url') || '/')}>
                        <img src={safePrefix(_.get(this.props, 'pageContext.site.data.header.logo_img'))} alt="Logo" />
                      </Link>
                    </p>
                    }
                    {(_.get(this.props, 'pageContext.frontmatter.template') === 'home') ? 
                    <h1 className="site-title"><Link to={safePrefix(_.get(this.props, 'pageContext.site.data.header.url') || '/')}>{_.get(this.props, 'pageContext.site.data.header.title')}</Link></h1>
                     : 
                    <p className="site-title"><Link to={safePrefix(_.get(this.props, 'pageContext.site.data.header.url') || '/')}>{_.get(this.props, 'pageContext.site.data.header.title')}</Link></p>
                    }
                  </div>
                  {(_.get(this.props, 'pageContext.menus.main') && _.get(this.props, 'pageContext.site.data.header.has_nav')) && <React.Fragment>
                  <nav id="main-navigation" className="site-navigation" aria-label="Main Navigation">
                    <div className="site-nav-inside">
                      <button id="menu-close" className="menu-toggle"><span className="screen-reader-text">Open Menu</span><span className="icon-close" aria-hidden="true" /></button>
                      <Menu {...this.props} menu={menu} menu_class={'menu'} page={this.props.pageContext} />
                    </div>
                  </nav>
                  <button id="menu-open" className="menu-toggle"><span className="screen-reader-text">Close Menu</span><span className="icon-menu" aria-hidden="true" /></button>
                  </React.Fragment>}
                </div>
              </div>
            </header>
          </React.Fragment>
        );
    }
}
