import React, {useContext, useState} from 'react'
import { Button } from 'react-bootstrap'
import { FilterContext } from "./FilterContext";
import { Checkbox } from "semantic-ui-react";
import { LocationConfig} from "../config/LocationConfig";
import { FormControl } from "react-bootstrap";

const HeroSidebar = (props) => {

    const locationConfig = LocationConfig;

    const {
        setSearchContent,
        setSmokeVisible,
        setFlashVisible,
        setMolotovVisible,
        setGrenadeVisible,
        setCTVisible,
        setTVisible,
        setStratVisible,
        setAVisible,
        setMidVisible,
        setBVisible,
        setYardVisible,
        setRampVisible,
        setVentVisible,
        setValueOneVisible,
        setValueTwoVisible,
        setValueThreeVisible,
        setValueFourVisible,
        setValueFiveVisible
    } = useContext(FilterContext);

    const [searchContentValue, setSearchContentValue] = useState('');
    const [isSmokeChecked, setSmokeChecked] = useState(false);
    const [isFlashChecked, setFlashChecked] = useState(false);
    const [isMolotovChecked, setMolotovChecked] = useState(false);
    const [isGrenadeChecked, setGrenadeChecked] = useState(false);
    const [isStratChecked, setStratChecked] = useState(false);
    const [isCTChecked, setCTChecked] = useState(false);
    const [isTChecked, setTChecked] = useState(false);
    const [isAChecked, setAChecked] = useState(false);
    const [isMidChecked, setMidChecked] = useState(false);
    const [isBChecked, setBChecked] = useState(false);
    const [isYardChecked, setYardChecked] = useState(false);
    const [isRampChecked, setRampChecked] = useState(false);
    const [isVentChecked, setVentChecked] = useState(false);
    const [isValueOneChecked, setValueOneChecked] = useState(false);
    const [isValueTwoChecked, setValueTwoChecked] = useState(false);
    const [isValueThreeChecked, setValueThreeChecked] = useState(false);
    const [isValueFourChecked, setValueFourChecked] = useState(false);
    const [isValueFiveChecked, setValueFiveChecked] = useState(false);

    return (
        <div className="sideBar">
            <div className="searchBar">
                <FormControl
                    onChange={(event) => {
                        setSearchContent(event.target.value);
                        setSearchContentValue(event.target.value);
                    }}
                    value={searchContentValue}
                    type="text"
                    placeholder="Search Hero"
                    className="mr-sm-2"
                />
            </div>
            <table>
                <tbody>
                    <tr className="grid-container-filter-table">
                        <td><h3>Smoke</h3></td>
                        <td className="paddingLeft">
                            <Checkbox
                                toggle
                                checked={isSmokeChecked}
                                onChange={(formEvent, checkBoxProps) => {
                                    setSmokeChecked(checkBoxProps.checked);
                                    setSmokeVisible(checkBoxProps.checked);
                                }}
                            />
                        </td>
                    </tr>
                    <tr className="grid-container-filter-table">
                        <td><h3>Flash</h3></td>
                        <td className="paddingLeft">
                            <Checkbox
                                toggle
                                checked={isFlashChecked}
                                onChange={(formEvent, checkBoxProps) => {
                                    setFlashChecked(checkBoxProps.checked);
                                    setFlashVisible(checkBoxProps.checked);
                                }}
                            />
                        </td>
                    </tr>
                    <tr className="grid-container-filter-table">
                        <td><h3>Molotov</h3></td>
                        <td className="paddingLeft">
                            <Checkbox
                                toggle
                                checked={isMolotovChecked}
                                onChange={(formEvent, checkBoxProps) => {
                                    setMolotovChecked(checkBoxProps.checked);
                                    setMolotovVisible(checkBoxProps.checked);
                                }}
                            />
                        </td>
                    </tr>
                    <tr className="grid-container-filter-table">
                        <td><h3>Grenade</h3></td>
                        <td className="paddingLeft">
                            <Checkbox
                                toggle
                                checked={isGrenadeChecked}
                                onChange={(formEvent, checkBoxProps) => {
                                    setGrenadeChecked(checkBoxProps.checked);
                                    setGrenadeVisible(checkBoxProps.checked);
                                }}
                            />
                        </td>
                    </tr>
                    <tr className="grid-container-filter-table">
                        <td><h3>Strat</h3></td>
                        <td className="paddingLeft">
                            <Checkbox
                                toggle
                                checked={isStratChecked}
                                onChange={(formEvent, checkBoxProps) => {
                                    setStratChecked(checkBoxProps.checked);
                                    setStratVisible(checkBoxProps.checked);
                                }}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <br/><br/>
                        </td>
                    </tr>
                    <tr className="grid-container-filter-table">
                        <td><h3>CT</h3></td>
                        <td className="paddingLeft">
                            <Checkbox
                                toggle
                                checked={isCTChecked}
                                onChange={(formEvent, checkBoxProps) => {
                                    setCTChecked(checkBoxProps.checked);
                                    setCTVisible(checkBoxProps.checked);
                                }}
                            />
                        </td>
                    </tr>
                    <tr className="grid-container-filter-table">
                        <td><h3>T</h3></td>
                        <td className="paddingLeft">
                            <Checkbox
                                toggle
                                checked={isTChecked}
                                onChange={(formEvent, checkBoxProps) => {
                                    setTChecked(checkBoxProps.checked);
                                    setTVisible(checkBoxProps.checked);
                                }}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <br/><br/>
                        </td>
                    </tr>
                    <tr className="grid-container-filter-table">
                        <td></td>
                        <td><h3>A</h3></td>
                        <td className="paddingLeft">
                            <Checkbox
                                toggle
                                checked={isAChecked}
                                onChange={(formEvent, checkBoxProps) => {
                                    setAChecked(checkBoxProps.checked);
                                    setAVisible(checkBoxProps.checked);
                                }}
                            />
                        </td>
                    </tr>
                    {true &&
                        <tr className="grid-container-filter-table">
                            <td></td>
                            <td><h3>Mid</h3></td>
                            <td className="paddingLeft">
                                <Checkbox
                                    toggle
                                    checked={isMidChecked}
                                    onChange={(formEvent, checkBoxProps) => {
                                        setMidChecked(checkBoxProps.checked);
                                        setMidVisible(checkBoxProps.checked);
                                    }}
                                />
                            </td>
                        </tr>
                    }
                    {true &&
                        <tr className="grid-container-filter-table">
                            <td></td>
                            <td><h3>B</h3></td>
                            <td className="paddingLeft">
                                <Checkbox
                                    toggle
                                    checked={isBChecked}
                                    onChange={(formEvent, checkBoxProps) => {
                                        setBChecked(checkBoxProps.checked);
                                        setBVisible(checkBoxProps.checked);
                                    }}
                                />
                            </td>
                        </tr>
                    }
                    {true &&
                        <tr className="grid-container-filter-table">
                            <td></td>
                            <td><h3>Yard</h3></td>
                            <td className="paddingLeft">
                                <Checkbox
                                    toggle
                                    checked={isYardChecked}
                                    onChange={(formEvent, checkBoxProps) => {
                                        setYardChecked(checkBoxProps.checked);
                                        setYardVisible(checkBoxProps.checked);
                                    }}
                                />
                            </td>
                        </tr>
                    }
                    {true &&
                        <tr className="grid-container-filter-table">
                            <td></td>
                            <td><h3>Ramp</h3></td>
                            <td className="paddingLeft">
                                <Checkbox
                                    toggle
                                    checked={isRampChecked}
                                    onChange={(formEvent, checkBoxProps) => {
                                        setRampChecked(checkBoxProps.checked);
                                        setRampVisible(checkBoxProps.checked);
                                    }}
                                />
                            </td>
                        </tr>
                    }
                    {true &&
                        <tr className="grid-container-filter-table">
                            <td></td>
                            <td><h3>Vent</h3></td>
                            <td className="paddingLeft">
                                <Checkbox
                                    toggle
                                    checked={isVentChecked}
                                    onChange={(formEvent, checkBoxProps) => {
                                        setVentChecked(checkBoxProps.checked);
                                        setVentVisible(checkBoxProps.checked);
                                    }}
                                />
                            </td>
                        </tr>
                    }
                    <tr>
                        <td>
                            <br/><br/>
                        </td>
                    </tr>
                    <tr className="grid-container-filter-table">
                        <td></td>
                        <td><h2>Value</h2></td>
                        <td></td>
                    </tr>
                    <tr className="grid-container-filter-table">
                        <td></td>
                        <td className="grid-container-smoke-icons">
                        </td>
                        <td className="paddingLeft">
                            <Checkbox
                                toggle
                                checked={isValueFiveChecked}
                                onChange={(formEvent, checkBoxProps) => {
                                    setValueFiveChecked(checkBoxProps.checked);
                                    setValueFiveVisible(checkBoxProps.checked);
                                }}
                            />
                        </td>
                    </tr>
                    <tr className="grid-container-filter-table">
                        <td></td>
                        <td className="grid-container-smoke-icons">
                        </td>
                        <td className="paddingLeft">
                            <Checkbox
                                toggle
                                checked={isValueFourChecked}
                                onChange={(formEvent, checkBoxProps) => {
                                    setValueFourChecked(checkBoxProps.checked);
                                    setValueFourVisible(checkBoxProps.checked);
                                }}
                            />
                        </td>
                    </tr>
                    <tr className="grid-container-filter-table">
                        <td></td>
                        <td className="grid-container-smoke-icons">
                        </td>
                        <td className="paddingLeft">
                            <Checkbox
                                toggle
                                checked={isValueThreeChecked}
                                onChange={(formEvent, checkBoxProps) => {
                                    setValueThreeChecked(checkBoxProps.checked);
                                    setValueThreeVisible(checkBoxProps.checked);
                                }}
                            />
                        </td>
                    </tr>
                    <tr className="grid-container-filter-table">
                        <td></td>
                        <td className="grid-container-smoke-icons">
                        </td>
                        <td className="paddingLeft">
                            <Checkbox
                                toggle
                                checked={isValueTwoChecked}
                                onChange={(formEvent, checkBoxProps) => {
                                    setValueTwoChecked(checkBoxProps.checked);
                                    setValueTwoVisible(checkBoxProps.checked);
                                }}
                            />
                        </td>
                    </tr>
                    <tr className="grid-container-filter-table">
                        <td></td>
                        <td className="grid-container-smoke-icons">
                        </td>
                        <td className="paddingLeft">
                            <Checkbox
                                toggle
                                checked={isValueOneChecked}
                                onChange={(formEvent, checkBoxProps) => {
                                    setValueOneChecked(checkBoxProps.checked);
                                    setValueOneVisible(checkBoxProps.checked);
                                }}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="clearButton">
                <Button
                    variant="primary"
                    onClick={() => {
                        setSearchContent('');
                        setSearchContentValue('')
                        setSmokeChecked(false);
                        setSmokeVisible(false);
                        setFlashChecked(false);
                        setFlashVisible(false);
                        setMolotovChecked(false);
                        setMolotovVisible(false);
                        setGrenadeChecked(false);
                        setGrenadeVisible(false);
                        setStratChecked(false);
                        setStratVisible(false);
                        setCTChecked(false);
                        setCTVisible(false);
                        setTChecked(false);
                        setTVisible(false);
                        setAChecked(false);
                        setAVisible(false);
                        setMidChecked(false);
                        setMidVisible(false);
                        setBChecked(false);
                        setBVisible(false);
                        setYardChecked(false);
                        setYardVisible(false);
                        setRampChecked(false);
                        setRampVisible(false);
                        setVentChecked(false);
                        setVentVisible(false);
                        setValueOneChecked(false);
                        setValueOneVisible(false);
                        setValueTwoChecked(false);
                        setValueTwoVisible(false);
                        setValueThreeChecked(false);
                        setValueThreeVisible(false);
                        setValueFourChecked(false);
                        setValueFourVisible(false);
                        setValueFiveChecked(false);
                        setValueFiveVisible(false);
                    }}>

                    Clear filter
                </Button>
            </div>
        </div>
    )
}

export default HeroSidebar
