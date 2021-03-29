import React from 'react'

export default class SummaryContent extends React.Component {
    render() {
        function ListItem({ item }) {
            let children = null;
            if (item.values && item.values.length) {
                children = (
                    <ul>
                        {item.values.map(subitem => (
                            <ListItem item={subitem} />
                        ))}
                    </ul>
                );
            }

            return (
                <li>
                    {item.name}
                    {children}
                </li>
            );
        }

        return (
            <div>
                <div className="summary-entry left">
                    <div className="summary-entry-content">
                        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                            <div className="flex-grow-1 text-left">
                                <div className="company mb-0">{this.props.company}</div>
                                <div className="company mb-0">{this.props.company1}</div>
                                <div className="company mb-0">{this.props.company2}</div>
                                <div className="company mb-0">{this.props.company3}</div>
                                <div className="company mb-0">{this.props.company4}</div>
                                <div className="company mb-0">{this.props.company5}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
