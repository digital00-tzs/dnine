import React from "react";

export default function Banner() {
  return (
    <section>
<div className="flex justify-center items-center ">
  <div className="flex h-screen w-[40%] pr-2 pb-4">
    <img src="https://via.placeholder.com/300x400" alt="Shoe 1" className="shoe-image w-full h-auto"/>
  </div>
  <div className="flex h-screen w-[60%] pl-2 pb-4 ">
    <img src="https://via.placeholder.com/300x400" alt="Shoe 2" className="shoe-image w-full h-auto"/>
  </div>
</div>

<div className="flex h-screen  ">
    <img src="https://via.placeholder.com/300x400" alt="Shoe 2" className="shoe-image w-full h-auto"/>
  </div>

      <section>
        <div className="flex items-center justify-between   bg-[#181818E8] text-white py-2 px-52    mx-auto sm:gap-4 sm:py-12  ">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-lg sm:text-2xl">
              <svg
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-4 w-5 h-5 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16"
              >
                <path
                  d="M34.3209 1.47532C34.847 1.93553 35.3349 2.42552 35.8197 2.92828C35.9094 3.02032 35.999 3.11237 36.0914 3.2072C36.2682 3.38959 36.4435 3.57352 36.6169 3.7592C37.617 4.7932 38.5089 5.20973 39.9597 5.23524C40.232 5.2367 40.5043 5.23553 40.7766 5.23363C43.2486 5.229 45.3492 5.60323 47.1961 7.37075C48.4943 8.79504 49.1649 10.4475 49.1721 12.3766C49.1745 12.5648 49.1771 12.753 49.1798 12.9412C49.1835 13.2344 49.1864 13.5275 49.1865 13.8208C49.189 15.4865 49.4166 16.548 50.6251 17.7622C50.8877 18.0183 51.154 18.2702 51.4214 18.5213C53.2517 20.2455 54.4032 21.9198 54.5088 24.511C54.494 26.2538 53.9542 27.844 52.8081 29.1661C52.7161 29.2723 52.624 29.3784 52.5292 29.4878C51.0928 31.1096 51.0928 31.1096 50.3773 31.6377C49.8674 32.0804 49.541 32.6243 49.2986 33.2517C49.2773 33.7749 49.5341 34.1157 49.8063 34.5415C49.9283 34.7402 50.0499 34.939 50.1714 35.138C50.2384 35.2469 50.3054 35.3558 50.3745 35.468C50.7735 36.1256 51.1531 36.7945 51.5356 37.4617C52.1738 38.5704 52.8151 39.6771 53.4606 40.7816C54.6595 42.8336 55.853 44.889 57.0252 46.9564C57.0715 47.0375 57.1179 47.1186 57.1656 47.2021C57.8414 48.4011 57.9763 49.6133 57.6824 50.9599C57.2694 52.0995 56.5199 52.906 55.4423 53.4457C53.9147 54.1207 52.3049 53.7768 50.7036 53.5717C50.5021 53.5464 50.3005 53.5213 50.099 53.4962C49.6098 53.4352 49.1207 53.3732 48.6317 53.3106C48.5805 53.435 48.5292 53.5593 48.4764 53.6874C48.2836 54.1542 48.0891 54.6203 47.8941 55.0862C47.8104 55.2869 47.7271 55.4878 47.6443 55.6888C46.3244 58.8909 46.3244 58.8909 44.5563 59.7098C43.3876 60.1558 42.2028 60.0697 41.0621 59.5752C39.6314 58.768 38.9273 57.335 38.1715 55.9448C37.6982 55.0776 37.1964 54.2273 36.6964 53.3753C36.2717 52.6508 35.8501 51.9248 35.4338 51.1954C35.3444 51.0391 35.2549 50.8828 35.1655 50.7264C34.9937 50.4262 34.8228 50.1255 34.6522 49.8246C34.5745 49.6888 34.4968 49.553 34.4167 49.4132C34.3142 49.2329 34.3142 49.2329 34.2097 49.049C34.0347 48.7744 33.8636 48.5683 33.623 48.3512C33.5235 48.3953 33.4241 48.4394 33.3217 48.4848C31.326 49.3469 29.4718 49.5513 27.3584 48.8733C27.1546 48.781 26.9529 48.6837 26.7548 48.5796C26.6095 48.5042 26.4641 48.4289 26.3143 48.3512C25.8419 48.5087 25.8174 48.6027 25.5868 49.0272C25.5223 49.1441 25.4578 49.2609 25.3914 49.3813C25.3218 49.5097 25.2522 49.6382 25.1805 49.7705C25.0279 50.0465 24.875 50.3223 24.7217 50.5979C24.6007 50.8157 24.6007 50.8157 24.4772 51.0378C23.9758 51.9279 23.4493 52.8031 22.9259 53.6803C22.4876 54.4156 22.0527 55.1524 21.6267 55.8949C21.5451 56.0365 21.4636 56.1782 21.3796 56.3242C21.2267 56.5906 21.0745 56.8574 20.9231 57.1247C20.3392 58.1399 19.8206 58.988 18.7284 59.4936C18.5962 59.5565 18.4639 59.6194 18.3277 59.6843C17.2884 60.1156 16.2101 60.0766 15.149 59.7184C13.4248 58.9457 12.7619 57.334 12.0877 55.6842C11.9732 55.4038 11.8567 55.1243 11.7399 54.8449C11.6661 54.6668 11.5923 54.4886 11.5187 54.3104C11.484 54.2269 11.4494 54.1434 11.4137 54.0575C11.1751 53.4717 11.1751 53.4717 11.1751 53.1801C11.0203 53.2054 10.8655 53.2306 10.706 53.2566C9.65959 53.4256 8.61286 53.5907 7.56154 53.7266C7.32256 53.7577 7.32256 53.7577 7.07875 53.7894C5.70416 53.9157 4.54446 53.7739 3.45095 52.8748C2.58204 52.0806 2.10919 51.3525 2.00258 50.159C1.95942 48.6159 2.46128 47.5725 3.24651 46.2712C3.41196 45.9924 3.5773 45.7135 3.74256 45.4346C3.82779 45.2914 3.91302 45.1482 4.00084 45.0007C4.41613 44.2993 4.82231 43.5927 5.22865 42.8861C5.39296 42.6009 5.55729 42.3158 5.72164 42.0306C5.844 41.8182 5.844 41.8182 5.96883 41.6015C6.37706 40.893 6.78578 40.1847 7.19447 39.4765C7.65664 38.6755 8.11877 37.8745 8.58052 37.0733C8.76035 36.7613 8.94023 36.4493 9.12012 36.1373C9.24681 35.9175 9.37345 35.6976 9.50008 35.4778C9.57705 35.3443 9.65402 35.2108 9.73332 35.0732C9.80083 34.9561 9.86833 34.839 9.93788 34.7183C10.07 34.4912 10.21 34.2687 10.3563 34.0505C10.544 33.6931 10.5644 33.5826 10.4471 33.2033C10.0929 32.291 9.29542 31.657 8.59747 31.0014C6.91739 29.408 5.37373 27.7329 5.25822 25.29C5.21195 22.7328 5.89979 20.9654 7.66656 19.1122C8.32668 18.43 8.99098 17.7508 9.68744 17.1056C10.2694 16.4771 10.44 15.926 10.4496 15.078C10.4513 14.9931 10.453 14.9081 10.4548 14.8205C10.4601 14.5505 10.463 14.2806 10.4654 14.0105C10.495 11.4921 10.7552 9.33438 12.4802 7.37075C14.3823 5.54646 16.5277 5.22916 19.0558 5.21585C20.5723 5.20435 21.6129 5.11809 22.7253 4.01825C22.7985 3.94839 22.8718 3.87853 22.9472 3.80655C23.3455 3.42474 23.7339 3.03374 24.1201 2.63972C26.8597 -0.111248 31.0723 -1.05437 34.3209 1.47532ZM26.7956 6.09827C25.001 7.98165 23.1666 9.41085 20.4831 9.49328C19.932 9.50547 19.3809 9.51369 18.8296 9.51848C18.5547 9.52132 18.2799 9.52646 18.005 9.53183C17.7622 9.53446 17.7622 9.53446 17.5144 9.53715C16.7174 9.6265 16.0614 9.93923 15.4819 10.503C14.9039 11.3185 14.815 12.0357 14.8064 13.0154C14.8034 13.2018 14.8002 13.3882 14.797 13.5746C14.7925 13.8643 14.7886 14.154 14.7868 14.4438C14.7648 17.4603 13.5589 19.3627 11.4667 21.4329C11.3895 21.5086 11.3123 21.5842 11.2327 21.6622C11.1563 21.7373 11.08 21.8123 11.0013 21.8897C10.8548 22.0328 10.7073 22.1749 10.5586 22.3157C10.027 22.8318 9.66823 23.314 9.54775 24.067C9.5464 24.1938 9.54506 24.3207 9.54367 24.4514C9.53963 24.5776 9.5356 24.7037 9.53144 24.8337C9.74971 26.0084 10.7068 26.7698 11.534 27.5592C12.8886 28.8855 14.0822 30.1507 14.5683 32.0373C14.5918 32.1263 14.6152 32.2152 14.6393 32.3068C14.9 33.4171 14.8362 34.5142 14.7962 35.6468C14.7765 36.7121 14.8331 37.7285 15.58 38.5547C16.264 39.1886 16.8901 39.3771 17.8214 39.3816C17.999 39.3838 18.1765 39.3862 18.3541 39.3886C18.446 39.3895 18.5378 39.3904 18.6325 39.3914C21.4481 39.4264 23.6955 39.7704 25.7545 41.8726C25.9559 42.0816 26.1557 42.2919 26.3551 42.5027C26.5579 42.7154 26.7611 42.9275 26.9656 43.1384C27.1497 43.3285 27.3319 43.5202 27.5141 43.7121C28.1814 44.3173 28.8408 44.6603 29.7403 44.7295C31.2578 44.6284 32.1019 43.6262 33.1004 42.5924C34.7994 40.8407 36.3813 39.5579 38.9224 39.458C39.0859 39.4565 39.2495 39.455 39.418 39.4535C39.6006 39.4505 39.7832 39.4474 39.9658 39.4441C40.249 39.4395 40.5321 39.4357 40.8153 39.4339C42.5213 39.438 42.5213 39.438 43.941 38.5583C44.0004 38.471 44.0598 38.3837 44.1209 38.2937C44.1827 38.2061 44.2444 38.1184 44.308 38.0281C44.5883 37.5559 44.606 37.1524 44.618 36.6149C44.6241 36.3834 44.6241 36.3834 44.6304 36.1472C44.6345 35.9834 44.6387 35.8196 44.643 35.6509C44.7576 32.0826 45.5305 29.9393 48.1505 27.4287C48.4067 27.1829 48.6616 26.9358 48.9157 26.6879C49.0831 26.5273 49.0831 26.5273 49.2539 26.3635C49.7638 25.7867 49.994 25.2516 50.0021 24.484C50.0061 24.3578 50.0102 24.2317 50.0143 24.1017C49.7631 22.7493 48.5089 21.8408 47.5662 20.9378C45.235 18.6665 44.7392 16.4663 44.6593 13.309C44.6573 13.1485 44.6554 12.988 44.6533 12.8226C44.6501 12.6695 44.6468 12.5165 44.6435 12.3587C44.6417 12.2214 44.64 12.084 44.6382 11.9425C44.5336 11.1517 44.1406 10.6172 43.5418 10.1115C42.5668 9.46664 41.5799 9.51512 40.4503 9.51602C37.662 9.51116 35.5896 8.95163 33.5824 6.9376C33.4724 6.82533 33.3625 6.71305 33.2493 6.59737C33.1351 6.48096 33.0209 6.36455 32.9033 6.24461C32.6741 6.00912 32.4465 5.77199 32.2208 5.53311C31.4566 4.74396 30.8371 4.25596 29.7076 4.18139C28.4161 4.24819 27.6264 5.22326 26.7956 6.09827ZM48.1097 40.5206C47.9576 40.7143 47.8087 40.9106 47.6611 41.1079C46.5036 42.5639 45.0107 43.5209 43.1503 43.7833C42.3583 43.8279 41.5656 43.836 40.7725 43.8429C38.9502 43.8367 38.9502 43.8367 37.4078 44.7214C37.2773 44.8437 37.1468 44.9661 37.0163 45.0884C37.5179 46.1202 38.0545 47.1199 38.6395 48.1065C38.8005 48.3802 38.9614 48.654 39.1223 48.9278C39.2049 49.0684 39.2876 49.2089 39.3728 49.3537C39.7984 50.0804 40.218 50.8106 40.6379 51.5406C41.381 52.831 42.1307 54.1174 42.8892 55.3988C43.3032 55.056 43.4472 54.6618 43.6433 54.1687C43.6762 54.0871 43.7092 54.0055 43.7432 53.9214C43.8483 53.6611 43.9521 53.4003 44.0557 53.1393C44.1588 52.8798 44.2623 52.6205 44.3668 52.3615C44.4621 52.1255 44.5561 51.8891 44.6501 51.6526C45.1227 50.6198 45.8489 49.7251 46.9188 49.2811C48.3502 48.8583 49.74 49.0793 51.193 49.2566C51.4134 49.2825 51.6338 49.3083 51.8542 49.3339C52.3899 49.3964 52.9253 49.4606 53.4606 49.5258C52.347 47.473 51.1924 45.4433 50.0184 43.4244C49.9091 43.236 49.9091 43.236 49.7977 43.0438C49.0517 41.7615 49.0517 41.7615 48.2402 40.5206C48.1971 40.5206 48.1541 40.5206 48.1097 40.5206ZM11.5666 40.6511C11.3849 40.8995 11.3849 40.8995 11.2056 41.2261C11.1334 41.3514 11.0612 41.4766 10.9868 41.6056C10.909 41.7428 10.8311 41.88 10.7509 42.0214C10.5849 42.3102 10.4189 42.5989 10.2528 42.8876C10.1677 43.0364 10.0825 43.1852 9.99479 43.3385C9.60091 44.0247 9.20098 44.7073 8.80139 45.3903C8.02322 46.7234 7.24896 48.0588 6.47666 49.3953C6.96854 49.5672 7.37491 49.4953 7.88424 49.4198C8.06038 49.3949 8.23652 49.3701 8.41266 49.3453C8.68732 49.3055 8.96188 49.2652 9.23635 49.2241C11.0603 48.954 12.6315 48.8737 14.185 50.0071C14.9761 50.7466 15.3282 51.8114 15.7429 52.7886C15.8517 53.04 15.9607 53.2913 16.0697 53.5426C16.3555 54.2035 16.6377 54.8659 16.9175 55.5293C17.2152 55.1495 17.4583 54.7609 17.6919 54.3389C17.7651 54.2075 17.8382 54.0761 17.9135 53.9407C17.9913 53.8001 18.0691 53.6595 18.1492 53.5146C18.3147 53.2173 18.4802 52.9201 18.6458 52.6229C18.7285 52.4744 18.8113 52.3259 18.8965 52.1729C19.2363 51.5657 19.5812 50.9614 19.9275 50.3578C20.5701 49.237 21.207 48.1129 21.8411 46.9872C21.9083 46.868 21.9755 46.7488 22.0447 46.626C22.1333 46.4687 22.1333 46.4687 22.2237 46.3082C22.3506 46.0866 22.4837 45.8686 22.6205 45.6531C22.8247 45.3673 22.8247 45.3673 22.7334 45.0884C22.2268 44.4399 21.7458 44.1352 20.9634 43.9138C20.6413 43.8891 20.3182 43.8767 19.9953 43.8736C19.8081 43.8703 19.6209 43.867 19.4337 43.8636C19.1431 43.8599 18.8525 43.8568 18.5619 43.8543C16.2507 43.8309 14.3431 43.3532 12.6188 41.7201C12.3026 41.3841 12.0686 41.0427 11.8276 40.6511C11.7415 40.6511 11.6553 40.6511 11.5666 40.6511Z"
                  fill="white"
                />
                <path
                  d="M38.4539 17.8041C39.0399 18.1767 39.3002 18.5695 39.4954 19.2469C39.5933 19.9586 39.471 20.4588 39.1039 21.0741C38.8109 21.4208 38.4918 21.7383 38.1692 22.0574C38.0745 22.1525 37.9798 22.2477 37.8822 22.3457C37.5701 22.659 37.2565 22.9708 36.9428 23.2826C36.7251 23.5002 36.5075 23.7179 36.2899 23.9357C35.8342 24.3914 35.3779 24.8463 34.921 25.3008C34.3352 25.8837 33.7508 26.468 33.1669 27.0528C32.7178 27.5023 32.2682 27.9511 31.8183 28.3997C31.6025 28.6149 31.3869 28.8304 31.1715 29.046C30.8707 29.3468 30.5691 29.6469 30.2672 29.9466C30.1781 30.036 30.0891 30.1254 29.9973 30.2174C29.9148 30.299 29.8323 30.3806 29.7473 30.4647C29.6761 30.5356 29.6049 30.6065 29.5316 30.6796C29.0525 31.085 28.6474 31.1645 28.0268 31.1724C27.8952 31.1761 27.7636 31.1798 27.6281 31.1836C26.6639 31.0388 25.9853 30.1843 25.3253 29.5262C25.2201 29.4219 25.115 29.3176 25.0067 29.2102C24.7853 28.9901 24.5643 28.7698 24.3436 28.549C24.0065 28.2125 23.6674 27.8781 23.3281 27.5438C23.1128 27.3292 22.8975 27.1145 22.6824 26.8996C22.5307 26.7507 22.5307 26.7507 22.3759 26.5988C21.7591 25.9767 21.3302 25.4518 21.1719 24.5688C21.1808 23.8697 21.301 23.3495 21.802 22.8431C22.3036 22.4064 22.6959 22.2296 23.3528 22.216C23.4974 22.211 23.4974 22.211 23.645 22.2058C24.4401 22.3124 24.9713 22.8087 25.5093 23.3636C25.5777 23.4326 25.6462 23.5016 25.7166 23.5726C25.933 23.7911 26.1479 24.0109 26.3627 24.2308C26.51 24.38 26.6573 24.5291 26.8048 24.6782C27.1642 25.0419 27.5224 25.4068 27.8799 25.7725C28.4057 25.563 28.7528 25.1912 29.1395 24.7931C29.2118 24.7199 29.284 24.6467 29.3584 24.5712C29.5149 24.4124 29.6712 24.2533 29.8271 24.0939C30.0745 23.8414 30.3229 23.5899 30.5715 23.3386C31.2783 22.6243 31.9839 21.9087 32.6874 21.1911C33.1182 20.7519 33.5506 20.3143 33.984 19.8777C34.1484 19.7114 34.3122 19.5446 34.4753 19.3771C34.7042 19.1422 34.9351 18.9094 35.1665 18.677C35.2327 18.608 35.2989 18.539 35.3671 18.468C36.2186 17.6234 37.3306 17.2783 38.4539 17.8041Z"
                  fill="white"
                />
              </svg>
            </span>
            <div>
              <h3 className="font-basier text-[9px] text-xs sm:text-sm md:text-lg font-bold">
                High Quality
              </h3>
              <p className="text-[6px] sm:text-xs md:text-sm  font-medium text-[#898989]">
                Crafted from top materials
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-lg sm:text-2xl">
              <svg
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-4 w-5 h-5 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16"
              >
                <g clip-path="url(#clip0_3127_4450)">
                  <path
                    d="M56.786 21.2612C55.9943 18.8097 56.3318 15.1296 54.274 12.2882C52.2 9.42438 48.5929 8.61039 46.556 7.1207C44.5406 5.64672 42.6656 2.43918 39.2755 1.33293C35.981 0.257852 32.6121 1.71672 30 1.71672C27.3882 1.71672 24.0196 0.2575 20.7245 1.33281C17.335 2.43883 15.4584 5.64707 13.4443 7.12035C11.4097 8.60828 7.79988 9.42449 5.72625 12.2879C3.6702 15.127 4.0043 18.8154 3.21398 21.2611C2.46187 23.5888 0 26.3825 0 30.0003C0 33.6203 2.45906 36.4032 3.21398 38.7393C4.0057 41.1909 3.6682 44.8709 5.72602 47.7123C7.79988 50.5763 11.4069 51.3902 13.444 52.88C15.459 54.3537 17.3344 57.5615 20.7245 58.6676C24.0168 59.742 27.3909 58.2838 30 58.2838C32.6054 58.2838 35.9875 59.7405 39.2755 58.6677C42.6652 57.5617 44.5405 54.3542 46.5557 52.8802C48.5903 51.3923 52.2001 50.5761 54.2738 47.7127C56.3299 44.8735 55.9956 41.1854 56.786 38.7394C57.5381 36.4116 60 33.618 60 30.0003C60 26.3805 57.5415 23.5984 56.786 21.2612ZM52.3257 37.298C51.4029 40.1545 51.6446 43.3512 50.4775 44.963C49.2946 46.5962 46.1869 47.3423 43.7889 49.0963C41.4171 50.8308 39.7548 53.5804 37.8214 54.2112C35.9924 54.8082 33.0116 53.5961 30.0001 53.5961C26.9666 53.5961 24.0165 54.8107 22.1787 54.2112C20.2455 53.5804 18.5856 50.8327 16.2113 49.0962C13.8274 47.3528 10.702 46.5914 9.52254 44.9628C8.3591 43.3564 8.59172 40.1375 7.67449 37.2981C6.77543 34.5162 4.6875 32.1074 4.6875 30.0003C4.6875 27.891 6.77355 25.4905 7.67426 22.7025C8.59711 19.8462 8.35535 16.6492 9.52254 15.0375C10.7047 13.4054 13.8148 12.6569 16.2113 10.9042C18.5905 9.1641 20.2424 6.42109 22.1784 5.78934C24.006 5.19309 26.9965 6.40445 29.9999 6.40445C33.0389 6.40445 35.9816 5.18898 37.8213 5.78934C39.7542 6.42004 41.4156 9.16879 43.7889 10.9043C46.1723 12.6477 49.298 13.4091 50.4775 15.0377C51.6411 16.6444 51.4072 19.86 52.3255 22.7023V22.7024C53.2246 25.4843 55.3125 27.8931 55.3125 30.0003C55.3125 32.1095 53.2264 34.51 52.3257 37.298ZM40.798 22.4774C41.7134 23.3928 41.7134 24.8767 40.798 25.792L29.0668 37.5231C28.1515 38.4385 26.6674 38.4384 25.7522 37.5231L19.2021 30.973C18.2868 30.0577 18.2866 28.5737 19.202 27.6585C20.1173 26.7433 21.6015 26.7432 22.5165 27.6585L27.4095 32.5513L37.4832 22.4775C38.3986 21.5622 39.8827 21.5622 40.798 22.4774Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3127_4450">
                    <rect width="60" height="60" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <div>
              <h3 className="font-basier text-[9px] text-xs sm:text-sm md:text-lg font-bold">
                Warranty Protection
              </h3>
              <p className="text-[6px] sm:text-xs md:text-sm font-medium text-[#898989]">
                Over 2 years
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-lg sm:text-2xl">
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-4 w-5 h-5 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16"
              >
                <g clip-path="url(#clip0_3127_196)">
                  <path
                    d="M55.3479 31.1019V3.77964C55.3479 2.80489 54.5577 2.01465 53.5829 2.01465H6.29511C5.32036 2.01465 4.53012 2.80489 4.53012 3.77964V33.28C3.67869 33.404 2.84632 33.7346 2.10997 34.2812C-0.211348 35.9273 -0.760378 39.6109 1.18405 41.8827L9.13392 51.5204C14.0549 57.2798 19.2825 57.9854 27.0539 57.9854C33.7228 57.9854 36.7043 58.0148 42.5165 56.6905L48.176 55.3369C49.0936 56.6184 50.5505 57.4485 52.1883 57.4485H54.9762C57.7463 57.4485 60 55.0744 60 52.1561V36.3784C60.0001 33.592 57.9449 31.3031 55.3479 31.1019ZM47.4147 34.7326L45.063 33.5382C41.1964 31.5865 36.7259 31.5142 32.7982 33.3403C31.7266 33.7618 29.3894 35.1759 28.1771 35.1286H20.0167C17.3099 35.1286 15.1077 37.3307 15.1077 40.0376V41.3247C15.0925 41.3087 15.0766 41.2936 15.0617 41.2773L9.23429 34.9519C8.88164 34.5692 8.48546 34.2489 8.06022 33.9919V16.481H22.5041V22.951C22.5041 23.9257 23.2943 24.7159 24.2691 24.7159H35.4063C36.381 24.7159 37.1712 23.9257 37.1712 22.951V16.481H51.8181V31.1018C49.7559 31.2611 48.0363 32.7364 47.4147 34.7326ZM26.0339 16.481H33.6412V21.186H26.0339V16.481ZM51.818 12.951H37.1712V5.54463H51.8181V12.951H51.818ZM33.6413 5.54463V12.9511H26.034V5.54463H33.6413ZM22.504 5.54463V12.9511H8.0601V5.54463H22.504ZM41.6973 53.2568C36.3282 54.4865 33.0946 54.4367 27.1172 54.4367C19.8219 54.4367 16.297 54.3188 11.8572 49.274L3.90731 39.6363C2.5245 37.8357 5.02914 35.7101 6.63811 37.3435L12.4655 43.669C14.0056 45.2941 15.9437 46.1885 18.3325 46.2411H34.4889C35.4637 46.2411 36.2539 45.4508 36.2539 44.4761C36.2539 43.5013 35.4637 42.7111 34.4889 42.7111H18.6376V40.0373C18.6376 39.277 19.2561 38.6583 20.0166 38.6583H28.177C30.0154 38.79 32.6689 37.2549 34.2863 36.541C37.228 35.1733 40.5763 35.2274 43.4684 36.6872L47.1647 38.5646V51.9489L41.6973 53.2568ZM56.4701 52.156C56.4701 53.1278 55.8 53.9184 54.9763 53.9184H52.1884C51.3647 53.9184 50.6947 53.1278 50.6947 52.156V36.3784C50.6947 35.4066 51.3648 34.6159 52.1884 34.6159H54.9763C55.8 34.6159 56.4701 35.4065 56.4701 36.3784V52.156Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3127_196">
                    <rect width="60" height="60" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <div>
              <h3 className="font-basier text-[9px] text-xs sm:text-sm md:text-lg font-bold">
                Free Shipping
              </h3>
              <p className="text-[6px] sm:text-xs md:text-sm font-medium text-[#898989]">
                Order over ₹1500
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-lg sm:text-2xl">
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-4 w-5 h-5 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16"
              >
                <path
                  d="M54.6955 23.9628C54.3011 10.6825 43.3761 0 30.0018 0C16.6276 0 5.70254 10.6825 5.30807 23.9628L3.53125 25.7396V37.7898L5.29596 39.5545V47.7647C5.29596 52.5652 9.20137 56.4706 14.0018 56.4706H16.1877C16.9162 58.5246 18.8777 60 21.1783 60H24.7077C27.0098 60 28.9724 58.5225 29.6997 56.4664C29.8005 56.4681 29.9016 56.4706 30.0018 56.4706C38.524 56.4706 45.6545 50.3981 47.2941 42.3529H51.9093L56.4724 37.7898V25.7396L54.6955 23.9628ZM30.0018 3.52941C40.4761 3.52941 49.1973 11.174 50.8825 21.1765H47.2941C45.6545 13.1313 38.524 7.05882 30.0018 7.05882C21.4797 7.05882 14.3491 13.1313 12.7096 21.1765H9.12113C10.8064 11.174 19.5276 3.52941 30.0018 3.52941ZM43.6728 21.1765C37.9682 21.1594 33.9388 21.5068 30.6167 16.6506L29.0035 14.2926L27.6171 16.7907C25.5971 20.4306 22.8768 21.1765 19.4136 21.1765H16.3309C17.9021 15.0944 23.4356 10.5882 30.0018 10.5882C36.5681 10.5882 42.1016 15.0944 43.6728 21.1765ZM12.3548 38.8235H9.55631L7.06066 36.3279V27.2015L9.55631 24.7059H12.3548V38.8235ZM8.82537 47.7647V42.3529H12.7062C13.3705 45.6441 14.9601 48.6652 17.3149 51.0916C16.8212 51.6191 16.4341 52.2467 16.1877 52.9412H14.0018C11.1475 52.9412 8.82537 50.6191 8.82537 47.7647ZM24.7077 56.4706H21.1783C20.2051 56.4706 19.4136 55.6791 19.4136 54.7059C19.4136 53.7328 20.2051 52.9412 21.1783 52.9412H24.7077C25.6808 52.9412 26.4724 53.7328 26.4724 54.7059C26.4724 55.6791 25.6808 56.4706 24.7077 56.4706ZM44.1195 38.8235C44.1195 46.608 37.7863 52.9412 30.0018 52.9412C29.9007 52.9412 29.7987 52.9392 29.6968 52.9368C28.9671 50.8851 27.0067 49.4118 24.7077 49.4118C21.0842 49.4198 21.142 49.3936 20.6903 49.4352C17.6265 46.7498 15.8842 42.9248 15.8842 38.8235V24.7059H19.4136C22.5368 24.7059 26.3403 24.1909 29.2845 20.6076C33.1693 24.6786 37.9165 24.7059 42.1781 24.7059H44.1195V38.8235ZM52.943 36.3279L50.4474 38.8235H47.6489V24.7059H50.4474L52.943 27.2015V36.3279Z"
                  fill="white"
                />
              </svg>
            </span>
            <div>
              <h3 className="font-basier text-[9px] text-xs sm:text-sm md:text-lg font-bold">
                24/7 Support
              </h3>
              <p className="text-[6px] sm:text-xs md:text-sm font-medium text-[#898989]">
                Dedicated Support
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
