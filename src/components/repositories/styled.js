import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const WrapperTabs = styled(Tabs)`
  font-size: 16px;
`;

export const WrapperTabList = styled(TabList)`
  list-style-type: none;
  padding: 8px;
  display: flex;
  width: 100vw;
  justify-content: center;
`;
WrapperTabList.tabsRole = "TabList";

export const WrapperTab = styled(Tab)`
  border-radius: 4px;
  padding: 10px;
  user-select: none;
  cursor: pointer;
  z-index: 99999;
  background-color: #225ed8;
  color: #ffffff;
  font-weight: bold;
  margin: 8px;

  &:hover {
    background-color: #2c5282;
    box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    outline: none;
  }

  &.is-selected {
    box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
  }

  @media(max-width: 700px){
    height: 37px;
  }
`;
WrapperTab.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)`
  padding: 16px;
  border: 1px solid "#ccc";
  display: none;
  margin-top: -5px;

  &.is-selected {
    display: block;
  }
`;
WrapperTabPanel.tabsRole = "TabPanel";

export const WrapperList = styled.div`
  width: 100vw;  
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media(max-width: 700px){
    width: 92vw;
    flex-direction: column;
  }

`;
