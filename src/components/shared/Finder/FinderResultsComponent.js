import React from 'react';

export default function FinderResultsComponent(props) {
    const displayClass = () => {
        if (props.foundItems !== []) {
            return 'display-results';
        }
        else {
            return '';
        }
    };

    const finderResult = props.foundItems.map(item => {
        return (
            <div key={item.id} className="finder__result">
                <p className="finder__result-name">
                    {item.name}
                </p>
            </div>
        )
    });

    return (
        <div className={`finder__results ${displayClass()}`}>
            {finderResult}
        </div>
    )
}

