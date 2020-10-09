import styled from "styled-components";
import { Drawer, Card } from "antd";

export const BDrawer = styled(Drawer)`
  .ant-drawer-title {
    text-align: center;
  }
  .ant-drawer-body {
    padding: 0;
  }
`;

export const BCard = styled(Card)`
  .ant-card > .ant-card-head {
    padding: "16px";
  }
  .ant-card {
    .ant-card-body {
      padding: "16px";
      border: 0;
    }
  }
`;