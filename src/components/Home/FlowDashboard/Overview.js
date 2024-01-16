import React from "react";
import { Card, CardContent, Typography, Grid, Box } from "@mui/material";
import CommitIcon from "@mui/icons-material/Commit";
import DashboardTwoToneIcon from "@mui/icons-material/DashboardTwoTone";
import SchemaTwoToneIcon from "@mui/icons-material/SchemaTwoTone";
import HubTwoToneIcon from "@mui/icons-material/HubTwoTone";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const FlowOverviewCard = ({ name, description, status, icon }) => (
  <Card
    sx={{
      boxShadow: 3,
      borderRadius: 2,
      m: 1,
      justifyContent: "center",
      display: "flex",
      flexDirection: "column",
      height: "100%",
    }}
  >
    <CardContent>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box display="flex" flexDirection="column">
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          <Typography color="inherit" variant="subtitle2">
            {description}
          </Typography>
          <Chip label={status} color="success" sx={{ mt: 1 }}></Chip>
        </Box>

        <Box
          sx={{
            bgcolor: "#BFD7ED",
            p: 1.5,
            borderRadius: "25%",
            width: 50,
            height: 50,
            alignItems: "center",
          }}
        >
          {icon}
        </Box>
      </Box>
    </CardContent>
  </Card>
);

const DashboardCard = ({ title, value, icon, trend, trendIcon }) => (
  <Card
    sx={{
      boxShadow: 3,
      borderRadius: 2,
      m: 1,
      justifyContent: "center",
      display: "flex",
      flexDirection: "column",
      height: "100%",
    }}
  >
    <CardContent>
      <Typography color="text.secondary" gutterBottom>
        {title}
      </Typography>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h5" component="div">
          {value}
        </Typography>
        <Box display="flex" alignItems="center" color="success.main">
          {trendIcon}
          <Typography color="inherit" variant="subtitle2">
            {trend}
          </Typography>
        </Box>
        <Box
          sx={{
            bgcolor: "#BFD7ED",
            p: 1.5,
            borderRadius: "25%",
            width: 50,
            height: 50,
            alignItems: "center",
            flexDirection: "row-reverse",
          }}
        >
          {icon}
        </Box>
      </Box>
    </CardContent>
  </Card>
);

const FlowOverview = ({
  flowName,
  flowDescription,
  edgeCount,
  core,
  dashboard,
}) => {
  const CoreChips = ({ core }) => {
    return (
      <Stack direction="row" spacing={1}>
        <Chip
          label="MQTT"
          color="primary"
          variant={core.mqttUrl ? "default" : "outlined"}
        />
        <Chip
          label="TSDB"
          color="primary"
          variant={core.tsdbUrl ? "default" : "outlined"}
        />
        <Chip
          label="S3"
          color="primary"
          variant={core.s3Url ? "default" : "outlined"}
        />
      </Stack>
    );
  };
  const DashboardChips = ({ dashboard }) => {
    return (
      <Stack direction="row" spacing={1}>
        <Chip
          label="Grafana"
          color="primary"
          variant={dashboard.grafanaUrl ? "default" : "outlined"}
        />
        <Chip
          label="OODM"
          color="primary"
          variant={dashboard.odmUrl ? "default" : "outlined"}
        />
        <Chip
          label="BI"
          color="primary"
          variant={dashboard.biUrl ? "default" : "outlined"}
        />
      </Stack>
    );
  };
  return (
    <Box sx={{ flexGrow: 1, m: 2 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={2}>
          <FlowOverviewCard
            name={flowName}
            description={flowDescription}
            status="running"
            icon={<SchemaTwoToneIcon />}
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <DashboardCard title="EDGE" value={edgeCount} icon={<CommitIcon />} />
        </Grid>
        <Grid item xs={12} md={4}>
          <DashboardCard
            title="CORE"
            value={<CoreChips core={core} />}
            icon={<HubTwoToneIcon />}
            trendIcon={<></>}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <DashboardCard
            title="DASHBOARD"
            value={<DashboardChips dashboard={dashboard} />}
            icon={<DashboardTwoToneIcon />}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default FlowOverview;
