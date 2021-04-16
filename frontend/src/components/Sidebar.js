import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import PublicIcon from '@material-ui/icons/Public';
import EmailIcon from '@material-ui/icons/Email';


const SideBar = function () {
    return (
<SideNav 
    onSelect={(selected) => {
        // Add your code here
    }}
>
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="home" >
        <NavItem eventKey="home">
            <NavIcon>
                <PublicIcon/>
            </NavIcon>
            <NavText>
                Home
            </NavText>
        </NavItem>
        <NavItem eventKey="charts">
            <NavIcon>
                <EmailIcon/>
            </NavIcon>
            <NavText>
                Subscriptions
            </NavText>
        </NavItem>
    </SideNav.Nav>
</SideNav>
    );
};

export default SideBar;  