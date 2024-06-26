"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import { styled } from "@mui/material/styles";

const Label = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}));
export default function Gallery() {
  return (
    <div className=" py-10 sm:py-20 bg-bg-grey">
      <h1 className="text-center text-3xl font-bold sm:text-5xl sm:tracking-wider text-vivid-orange mb-5 sm:mb-10 ">
        Gallery
      </h1>
      <Box sx={{ width: 550 }} className=" mx-auto w-11/12 h-auto  sm:hidden">
        <Masonry columns={2} spacing={0}>
          {itemData.map((item, index) => (
            <div key={index}>
              {/* <Label>{index + 1}</Label> */}
              <img
                srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                src={`${item.img}?w=162&auto=format`}
                alt={item.title}
                loading="lazy"
                style={{
                  borderBottomLeftRadius: 4,
                  borderBottomRightRadius: 4,
                  display: "block",
                  width: "100%",
                }}
                className="p-1 rounded-2xl"
              />
            </div>
          ))}
        </Masonry>
      </Box>
      <Box
        sx={{ width: 500 }}
        className="w-full h-auto w-11/12 sm:w-11/12 mx-auto hidden sm:block"
      >
        <Masonry columns={4} spacing={2}>
          {itemData.map((item, index) => (
            <div key={index}>
              {/* <Label>{index + 1}</Label> */}
              <img
                srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                src={`${item.img}?w=162&auto=format`}
                alt={item.title}
                loading="lazy"
                style={{
                  borderBottomLeftRadius: 4,
                  borderBottomRightRadius: 4,
                  display: "block",
                  width: "100%",
                }}
              />
            </div>
          ))}
        </Masonry>
      </Box>
    </div>
  );
}

const itemData = [
  {
    img: "/images/etios.jpg",
    title: "Breakfast",
  },
  {
    img: "https://lh3.googleusercontent.com/p/AF1QipPpeZ49lE-Mozeqc7wAT4-1dKH7YN6RSbNp9gZO=s680-w680-h510",
    title: "Burger",
  },
  {
    img: "https://lh3.googleusercontent.com/p/AF1QipNuvnmKKoT_Cb_O_SHnSWw-ruFvr-imcE-CNAFk=s680-w680-h510",
    title: "Camera",
  },
  {
    img: "https://lh3.googleusercontent.com/p/AF1QipPyGzkmNnRqCoAFW7jHPa89XOsG5QDyBO38N_om=s680-w680-h510",
    title: "Coffee",
  },
  {
    img: "/images/8.jpg",
    title: "fleet",
  },
  {
    img: "https://lh3.googleusercontent.com/p/AF1QipN0Ze_j0R5geptenf-gVKrXutOcEMfhfps0bwp7=s680-w680-h510",
    title: "Hats",
  },
  {
    img: "/images/1.jpg",
    title: "fleet",
  },
  {
    img: "https://lh3.googleusercontent.com/p/AF1QipO4adsSsU1RPvnP50clhgbwFM6QdkA4vqwLY6Gc=s680-w680-h510",
    title: "Honey",
  },
  {
    img: "/images/7.jpg",
    title: "fleet",
  },
  {
    img: "https://lh3.googleusercontent.com/p/AF1QipNRL2fAioppR25J5ZRo7K-ktgSjZCbmVvEPnVe1=s680-w680-h510",
    title: "Basketball",
  },
  {
    img: "/images/6.jpg",
    title: "fleet",
  },
  {
    img: "https://lh3.googleusercontent.com/p/AF1QipPshCDhA_c0hk3ysrpLJgmnHkEef23C0oPFsZ_v=s680-w680-h510",
    title: "Fern",
  },
  {
    img: "/images/van.jpg",
    title: "Mushrooms",
  },
  {
    img: "/images/2.jpg",
    title: "fleet",
  },
  {
    img: "https://lh3.googleusercontent.com/p/AF1QipN0Ze_j0R5geptenf-gVKrXutOcEMfhfps0bwp7=s680-w680-h510",
    title: "Tomato basil",
  },
  {
    img: "/images/3.jpg",
    title: "fleet",
  },
  {
    img: "https://lh3.googleusercontent.com/p/AF1QipPHB9lMKP6ruTWQQ4sVJKPDaGutGZvJIgrLXHkl=s680-w680-h510",
    title: "Sea star",
  },
  {
    img: "/images/4.jpg",
    title: "fleet",
  },
  {
    img: "https://lh3.googleusercontent.com/p/AF1QipOcti92i87AdgH-wUgbCYWSV2rLqJbGqHGB-G2T=s680-w680-h510",
    title: "Bike",
  },
  {
    img: "/images/5.jpg",
    title: "fleet",
  },
  {
    img: "https://lh3.googleusercontent.com/p/AF1QipPshCDhA_c0hk3ysrpLJgmnHkEef23C0oPFsZ_v=s680-w680-h510",
    title: "Fern",
  },
  {
    img: "/images/1.jpg",
    title: "fleet",
  },
  {
    img: "https://lh3.googleusercontent.com/p/AF1QipN0Ze_j0R5geptenf-gVKrXutOcEMfhfps0bwp7=s680-w680-h510",
    title: "Tomato basil",
  },
  {
    img: "/images/3.jpg",
    title: "fleet",
  },
];
