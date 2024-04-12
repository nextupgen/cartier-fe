import { useEffect, useState } from "react";
import CATEGORIES from "./CATEGORIES_DATA.json";
import Grid from "@mui/material/Grid";
import { MenuItem } from "../../../modal/MenuItem";
import SubCategoriesTooltip from "./SubCategoriesTooltip";
const CategoriesTooltip = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<Array<MenuItem>>([]);
  const [childrenData, setChildrenData] = useState<Array<MenuItem>>([]);
  const onMouseOver = (children: Array<MenuItem>) => {
    setChildrenData(children);
  };
  const onMouseOut = () => {
    setChildrenData([]);
  };
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res: Array<MenuItem> = CATEGORIES; //TODO: Set up API later
        setData(res);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div id="Header" onMouseOut={() => onMouseOut()}>
      {!loading && (
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
                  onMouseEnter={() => onMouseOver(item.children || [])}
                >
                  {item.title}
                </a>
              </Grid>
            ))}
          {childrenData && <SubCategoriesTooltip data={childrenData} />}
        </Grid>
      )}
    </div>
  );
};

export default CategoriesTooltip;
