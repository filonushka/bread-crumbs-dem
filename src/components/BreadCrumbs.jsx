import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { useLocation, useNavigate } from "react-router-dom";

const BreadCrumbs = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const pathnames = pathname.split("/").filter((x) => x);
  return (
    <div className="breadcrumbs">
      <Breadcrumbs aria-label="breadcrumb" separator="›">
        {pathnames.length > 0 ? (
          <Link underline="hover" color="inherit" onClick={() => navigate("/")}>
            Home
          </Link>
        ) : (
          <Typography>Home</Typography>
        )}
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          console.log(name.charAt(0).toUpperCase() + name.slice(1));
          return isLast ? (
            <Typography key={name}>
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </Typography>
          ) : (
            <Link
              underline="hover"
              color="inherit"
              key={name}
              onClick={() => navigate(routeTo)}
            >
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </Link>
          );
        })}
      </Breadcrumbs>
    </div>
  );
};

export default BreadCrumbs;
