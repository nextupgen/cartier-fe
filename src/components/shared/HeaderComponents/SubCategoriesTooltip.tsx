import { Box, Container, Grid, Typography } from "@mui/material";
import { MenuItem } from "../../../modal/MenuItem";
import { useState } from "react";
import react from "../../../assets/react.svg";
const SubCategoriesTooltip = ({ data }: SubCategoriesTooltipType) => {
  const [childrenData, setChildrenData] = useState<Array<MenuItem>>([]);
  const onMouseOver = (children: Array<MenuItem>) => {
    setChildrenData(children);
  };
  const onMouseLeave = () => {
    setChildrenData([]);
  };
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        {data &&
          data.map((item: MenuItem) => (
            <Grid item>
              <a
                href={item.url}
                onMouseOver={() => onMouseOver(item.children || [])}
              >
                {item.title}
              </a>
            </Grid>
          ))}
      </Grid>
      <Container onMouseLeave={() => onMouseLeave()}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          {childrenData.map((item: MenuItem) => (
            <Grid item sx={{ maxWidth: 120 }} alignItems="center">
              <Box sx={{ p: 2 }} display="flex" alignItems="center">
                <img src={react} alt={item.title} height={20} width={20} />
              </Box>
              <Box>
                <Typography color="text.secondary" variant="body2">
                  {item.title}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

type SubCategoriesTooltipType = {
  data: MenuItem[];
};
export default SubCategoriesTooltip;
