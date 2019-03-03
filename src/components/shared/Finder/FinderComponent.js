import React from 'react';
import * as actionTypes from '../../../store/actions/finder';
import {connect} from "react-redux";
import FinderResultsComponent from "./FinderResultsComponent";

class FinderComponent extends React.Component{

    render() {
        const {
            searchValue,
            isFinderOpen,
            onFinderInputChange,
            onCloseFinderBtnClick,
            drinksList
        } = this.props;

        const openFinder = isFinderOpen ? 'open' : '';

        const foundItems = drinksList.filter(drink => {
            const typedValue = `^${searchValue.toLocaleLowerCase()}`;
            const char = new RegExp(typedValue, "g");
            return !!drink.tags.some(tag => tag.toLocaleLowerCase().match(char));
        });

        return (
            <div className={`finder ${openFinder}`}>
                    <input type="search"
                            className="finder__input"
                            placeholder="What do you want to drink?"
                            value={searchValue}
                            onChange={(event) => onFinderInputChange(event.target.value)} />
                    {/*<button onClick={onCloseFinderBtnClick}>X</button>*/}
                { searchValue !== "" && <FinderResultsComponent foundItems={foundItems} />}
            </div>
        );

    }
}

const mapStateToProps = state => {
    return {
        isFinderOpen: state.finder.isFinderOpen,
        searchValue: state.finder.searchValue
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFinderInputChange: (value) => dispatch({ type: actionTypes.TYPE_SEARCH_VALUE, payload: {value}}),
        onCloseFinderBtnClick: () => dispatch({type: actionTypes.CLOSE_FINDER})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FinderComponent);
