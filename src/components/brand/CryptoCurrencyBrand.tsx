import featureThumb1 from "../../../public/assets/img/home-13/feature/feature-thumb-1.png";
import featureThumb2 from "../../../public/assets/img/home-13/feature/feature-thumb-2.png";
import featureThumb3 from "../../../public/assets/img/home-13/feature/feature-thumb-3.png";
import featureIcon1 from "../../../public/assets/img/home-13/feature/feature-icon-1.png";
import featureIcon2 from "../../../public/assets/img/home-13/feature/feature-icon-2.png";
import featureIcon3 from "../../../public/assets/img/home-13/feature/feature-icon-3.png";
import brandBottom from "../../../public/assets/img/home-13/brand/brand-bottom.png";
import brandSubImg from "../../../public/assets/img/home-13/brand/brand-sub.png";
import brand1 from "../../../public/assets/img/home-13/brand/brand-1.png";
import brand2 from "../../../public/assets/img/home-13/brand/brand-2.png";
import brand3 from "../../../public/assets/img/home-13/brand/brand-3.png";
import brand4 from "../../../public/assets/img/home-13/brand/brand-4.png";
import brand5 from "../../../public/assets/img/home-13/brand/brand-5.png";
import Image from "next/image";
import React from "react";

// Import Swiper components and modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

const CryptoCurrencyBrand = () => {
  // Brand data array
  const brands = [
    { id: 1, image: brand1, alt: "Brand 1" },
    { id: 2, image: brand2, alt: "Brand 2" },
    { id: 3, image: brand3, alt: "Brand 3" },
    { id: 4, image: brand4, alt: "Brand 4" },
    { id: 5, image: brand5, alt: "Brand 5" },
    { id: 6, image: brand1, alt: "Brand 1" },
    { id: 7, image: brand2, alt: "Brand 2" },
    { id: 8, image: brand3, alt: "Brand 3" },
    { id: 9, image: brand4, alt: "Brand 4" },
  ];

  // Feature data array
  const features = [
    {
      id: 1,
      icon: featureIcon1,
      title: "Quản lý tài chính, dòng tiền",
      description:
        "Sử dụng TikCRM để quản lý tiền về, dòng tiền đang hold từ TikTok chính xác đến từng con số",
      thumb: featureThumb1,
      colClass: "col-md-6",
    },
    {
      id: 2,
      icon: featureIcon2,
      title: "Quản lý chat hàng nghìn shop",
      description:
        "Quản lý chat không giới hạn shop tại một màn hình duy nhất, tiết kiệm thời gian vào từng shop kiểm tra tin nhắn",
      thumb: featureThumb2,
      colClass: "col-md-6",
    },
    {
      id: 3,
      icon: featureIcon3,
      title: "Đồng bộ đơn hàng thời gian thực & Auto Fulfill",
      description:
        "TikCRM đồng bộ đơn hàng realtime từ TikTok, kết hợp với tính năng Auto Fulfill kết hợp hàng chục đơn vị fulfill uy tín giúp bạn có thể tự lựa chọn các đơn vị phù hợp cho từng đơn.",
      thumb: featureThumb3,
      colClass: "col-lg-12",
      isBig: true,
    },
  ];

  return (
    <div className="cr-brand-area cr-brand-ptb fix cr-multi-border-bottom">
      <div className="container container-1230">
        <div className="cr-multi-border pt-100">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="cr-brand-heading text-center mb-60">
                <div className="ca-brand-sub mb-30">
                  <Image className="mb-20" src={brandSubImg} alt="brand-sub" />{" "}
                  <br />
                  <span>Về TikCRM</span>
                </div>
                <div className="tp_text_anim">
                  <p>
                    TikCRM ra đời với sứ mệnh giúp các nhà bán hàng TikTok Shop
                    vận hành dễ dàng, <br /> quản trị hiệu quả, tăng trưởng bền
                    vững. <br />
                    Chúng tôi không chỉ là một công cụ quản lý bán hàng mà còn
                    là người bạn đồng <br /> hành đáng tin cậy, <br />
                    giúp seller Việt tự tin mở rộng ra thị trường quốc tế, đặc
                    biệt là thị trường Mỹ thông <br /> qua mô hình POD và
                    Dropshipping.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="cr-brand-wrapper pb-80">
                <Swiper
                  className="app-brand-active fix slider-transtion"
                  modules={[Autoplay, FreeMode]}
                  loop={true}
                  freeMode={true}
                  spaceBetween={0}
                  centeredSlides={true}
                  allowTouchMove={false}
                  speed={3000}
                  // autoplay={{
                  //     delay: 1,
                  //     disableOnInteraction: true,
                  // }}
                  breakpoints={{
                    "1600": { slidesPerView: 4 },
                    "1400": { slidesPerView: 4 },
                    "1200": { slidesPerView: 4 },
                    "992": { slidesPerView: 4 },
                    "768": { slidesPerView: 3 },
                    "576": { slidesPerView: 3 },
                    "0": { slidesPerView: 2 },
                  }}
                >
                  {brands.map((brand) => (
                    <SwiperSlide key={brand.id}>
                      <div className="app-brand-item">
                        <Image src={brand.image} alt={brand.alt} />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="cr-brand-bottom">
                <Image
                  style={{ width: "100%", height: "auto" }}
                  src={brandBottom}
                  alt="brand bottom"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="cr-feature-heading text-center pt-100 pb-100">
                <div
                  className="tp-section-subtitle-gradient ct mb-20 tp_fade_anim"
                  data-delay=".3"
                >
                  Tính năng nổi bật
                </div>
                <h4 className="tp-section-title-onest fs-72 tp-text-revel-anim">
                  Các tính năng nổi bật <br />
                  được khách hàng tin dùng
                </h4>
                <div className="tp_text_anim">
                  <p>
                    Giải phóng thời gian của bạn để tập trung vào những điều
                    quan trọng nhất!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="cr-feature-item-box">
            <div className="row gx-0">
              {features.map((feature) => (
                <div className={feature.colClass} key={feature.id}>
                  <div
                    className={`cr-feature-item mb-15 ${
                      feature.isBig ? "hight" : ""
                    }`}
                  >
                    <div className="cr-feature-item-content">
                      <div
                        className={`cr-feature-item-icon ${
                          feature.isBig ? "" : "d-flex"
                        }`}
                      >
                        <span
                          className={
                            feature.isBig ? "mb-25 d-inline-block" : ""
                          }
                        >
                          <Image src={feature.icon} alt="feature" />
                        </span>
                        <h5 className="cr-feature-item-icon-title">
                          {feature.title}
                        </h5>
                      </div>
                      <p>{feature.description}</p>
                    </div>
                    <div
                      className={`cr-feature-thumb ${
                        feature.isBig ? "big" : ""
                      } anim-zoomin-wrap text-center`}
                    >
                      <Image
                        style={{ width: "100%", height: "auto" }}
                        className="anim-zoomin"
                        src={feature.thumb}
                        alt="thumb"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoCurrencyBrand;
