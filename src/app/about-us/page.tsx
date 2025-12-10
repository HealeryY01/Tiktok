// src/app/about-us/page.tsx - VỀ CHÚNG TÔI
import AboutUsMain from "@/pages/abouts/about-me/AboutMeMain"; // Đổi tên cho dễ hiểu
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Agntix - Về chúng tôi",
};

const AboutUsPage = () => {
  return <AboutUsMain />;
};

export default AboutUsPage;
