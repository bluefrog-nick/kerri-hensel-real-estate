import React from 'react';
import _ from 'lodash';

import {safePrefix, markdownify, Link} from '../utils';

export default class ContentBlock extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'section.section_id')} className="block text-block outer">
              <div className="inner">
                <div className="block-inside">
                  <h2 className="block-title">{_.get(this.props, 'section.title')}</h2>
                  <div className="block-content">
                    <div className="block-text">
                      {markdownify(_.get(this.props, 'section.contentTwo'))}
                    </div>
                  </div>
                  <div className="block-content">
                    <div className="block-text">
                      {markdownify(_.get(this.props, 'section.content'))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
        );
    }
}
