import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import BarChartIcon from '@mui/icons-material/BarChart';
import InventoryIcon from '@mui/icons-material/Inventory';
import { useNavigate } from 'react-router-dom';

export const SidePanelMenuItems = () => {
    const navigate = useNavigate(); // Using useNavigate within a functional component

    const handleButtonClick = (path: string) => {
        navigate(path);
    };

    return (
        <React.Fragment>
            <ListItemButton onClick={() => handleButtonClick('/')}>
                <ListItemIcon>
                    <BarChartIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItemButton>
            <ListItemButton onClick={() => handleButtonClick('/testInventory')}>
                <ListItemIcon>
                    <InventoryIcon />
                </ListItemIcon>
                <ListItemText primary="Test Inventory" />
            </ListItemButton>
        </React.Fragment>
    );
};