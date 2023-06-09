import { AppBar, Container, Grid, Typography } from "@mui/material";


export const Header = () => {
  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          top: "0",
          background: "#20295B",
          height: "80px",
        }}
      >
        <Container maxWidth="xl" disableGutters sx={{ height: "100%" }}>
          <Grid
            container
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: { xs: "10px", sm: "15px", lg: "20px", xl: "0" },
              height: "100%",
            }}
          >
            <Grid item>
              <Typography variant="h5">Mr.Pourkhanlar</Typography>
            </Grid>
          </Grid>
        </Container>
      </AppBar>
    </div>
  );
};
