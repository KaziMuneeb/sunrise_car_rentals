"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import { styled } from "@mui/material/styles";
import Link from "next/link";

const Label = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}));
export default function ImageGallery() {
  return (
    <div className=" py-10 sm:py-20 bg-bg-grey grid gap-y-8">
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
      <div className="justify-self-center ">
        <button className="bg-vivid-orange font-bold sm:text-xl p-2 rounded w-48 ">
          <Link href={"/gallery"}>View more...</Link>
        </button>
      </div>
    </div>
  );
}

const itemData = [
  {
    img: "/images/etios.jpg",
    title: "Breakfast",
  },
  {
    img: "/images/1.jpg",
    title: "Burger",
  },
  {
    img: "/images/car-02.jpg",
    title: "Camera",
  },
  {
    img: "/images/car-03.jpg",
    title: "Coffee",
  },
  {
    img: "/images/car-04.jpg",
    title: "Hats",
  },
  {
    img: "/images/car-05.jpg",
    title: "Honey",
  },
  {
    img: "/images/2.jpg",
    title: "Basketball",
  },
  {
    img: "/images/foreign.jpg",
    title: "Fern",
  },
  {
    img: "/images/van.jpg",
    title: "Mushrooms",
  },
  {
    img: "/images/cresta-new.jpg",
    title: "Tomato basil",
  },
  {
    img: "/images/BMW.jpg",
    title: "Sea star",
  },
  {
    img: "/images/Bike.jpg",
    title: "Bike",
  },
];
