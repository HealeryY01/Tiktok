// src/app/page.tsx - TRANG CHỦ
import HomeMain from "@/pages/home/CryptoCurrencyMain"; // Đổi tên cho dễ hiểu
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Agntix - Trang chủ",
};

const HomePage = () => {
  return <HomeMain />;
};

export default HomePage;
