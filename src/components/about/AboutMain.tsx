import aboutShape from "../../../public/assets/img/home-14/about/about-shape.png";
import { ArrowEightteen } from "@/svg/ArrowIcons";
import { ArrowFour, ArrowTwo } from "@/svg";
import { ScrollToPlugin } from "gsap/all";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import gsap from "gsap";

gsap.registerPlugin(ScrollToPlugin);

const AboutMain = () => {
  return (
    <div
      className="pp-about-area pp-about-ptb p-relative z-index-3 pt-160 pb-160"
      style={{ backgroundColor: "#ffff" }}
    >
      <div className="pp-about-shape">
        <Image data-speed=".8" src={aboutShape} alt="about shape" />
      </div>
      <div className="container container-1430">
        <div className="row">
          <div className="col-lg-3">
            <div className="pp-about-left">
              <span className="tp-section-subtitle-clash clash-subtitle-pos body-ff">
                About Me{" "}
                <i>
                  {" "}
                  <ArrowTwo />
                </i>
              </span>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="pp-about-heading pb-55">
              <h3 className="tp-section-title-teko fs-80 tp_fade_anim">
                Chúng tôi là những
                <span> nhà phát triển phần mềm</span> đầy nhiệt huyết <br /> ứng
                dụng công nghệ để nâng tầm thương mại điện tử Việt Nam,
                <br /> luôn mang đến giải pháp đột phá cho mọi thử thách và
                trang bị cho bạn những <br /> công cụ mạnh mẽ nhất
              </h3>
            </div>
            <div className="pp-about-wrap">
              <div className="pp-about-bottom-btn smooth">
                <Link
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    gsap.to(window, { duration: 1, scrollTo: "#down" });
                  }}
                >
                  <span>
                    <ArrowEightteen />
                  </span>
                </Link>
              </div>
              <div className="pp-about-content tp_text_anim">
                <p>
                  Sứ mệnh của chúng tôi là đối mặt với những thách thức này{" "}
                  <br />
                  bằng cách phát triển các công cụ mạnh mẽ
                  <br />
                  nâng tầm hiệu quả cho TikTok Shop và thương mại điện tử.
                </p>
                <div className="pp-about-btn">
                  <div
                    className="tp-btn-red-circle-box tp-pp-btn-style tp_fade_anim"
                    data-delay=".7"
                    data-fade-from="top"
                    data-ease="bounce"
                  >
                    <Link
                      className="tp-btn-red-circle-icon"
                      href="/assets/img/cv/mycv.docx"
                      download="My_Professional_CV.doc"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>
                        <ArrowFour strokeWidth={2} />
                      </span>
                    </Link>
                    <Link
                      className="tp-btn-red-circle-text"
                      href="/assets/img/cv/mycv.docx"
                      download="My_Professional_CV.doc"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download CV của chúng tôi{" "}
                    </Link>
                    <Link
                      className="tp-btn-red-circle-text"
                      href="/assets/img/cv/mycv.docx"
                      download="My_Professional_CV.doc"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>
                        <ArrowFour strokeWidth={2} />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMain;
