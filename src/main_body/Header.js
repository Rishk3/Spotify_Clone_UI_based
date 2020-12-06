import React from 'react'
import "../css/Header.css"
import SearchIcon from "@material-ui/icons/Search"
import {Avatar} from "@material-ui/core"
import { useDataLayerValue } from '../context_api/DataLayer';
function Header({spotify}) {
    const [{ user }, dispatch] = useDataLayerValue();

    return (

        <div className="header">
            <div className="header__left">
<SearchIcon/>
<input placeholder="Search for artist,Songs podcasts"
type="text"/>
            </div>
            <div className="header__right">
            <Avatar src={user?.images[0].url} alt="RSS"/>
    <p className="username">{user?.display_name}</p>
            </div>
        </div>
    )
}

export default Header
