import * as React from "react";
import { PlayerCard } from "./PlayerCard";

const players = [
  { name: "Kevon Cooper", imageSrc: "https://via.placeholder.com/150" },
  { name: "Venkatesh Iyer", imageSrc: "https://via.placeholder.com/150" },
  { name: "Manish Pandey", imageSrc: "https://via.placeholder.com/150" },
  { name: "Deepak Chahar", imageSrc: "https://via.placeholder.com/150" },
  { name: "Irfan Pathan", imageSrc: "https://via.placeholder.com/150" },
];

export function WallOfFame() {
  return (
    <div className="flex overflow-hidden flex-col">
      <div className="flex relative  w-full min-h-[1077px] ">
        <img
          loading="lazy"
          src="/wall.png"
          alt=""
          className="object-cover absolute inset-0 size-full"
        />
          <svg
            width="1920"
            height="70"
            viewBox="0 0 1920 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0  z-10"
          >
            <path
              d="M2.16829 64.9954C8.19418 62.5367 13.7896 66.1223 19.8155 65.5076C22.3981 65.5076 26.2718 64.4832 28.8544 65.4052C31.8673 66.3272 33.1586 62.7416 35.7411 64.0734C41.3366 64.1758 48.2233 61.8196 54.2492 63.6636C58.123 59.9756 61.9968 63.9709 65.4401 63.6636C72.3269 65.7125 73.1877 65.4052 78.7832 62.5367C81.7961 65.3027 85.2395 61.922 89.1133 62.2294C93.8479 61.3074 91.6958 63.6636 94.7087 62.7416C101.165 58.6438 107.191 61.8196 113.647 63.2538C117.521 62.4343 119.243 64.0734 123.977 64.0734C129.573 68.1712 135.599 66.1223 141.194 64.5856C146.79 63.5612 157.55 63.8685 162.715 64.4832C163.146 63.2538 162.285 63.2538 165.298 63.0489C169.172 62.9465 175.628 63.8685 179.932 63.0489C186.819 60.2829 188.971 61.7171 190.262 60.7951C201.883 58.6438 210.922 58.4389 222.113 58.3364C226.417 56.7998 232.443 58.7462 236.748 58.4389C244.065 58.234 250.091 59.156 256.117 57.5169C260.421 60.3854 266.877 55.468 270.32 55.5704C273.764 54.4435 271.612 55.1606 277.207 54.1362C285.816 52.9068 296.146 53.6239 304.754 55.1606C308.628 56.1851 312.502 54.7508 316.375 55.1606C328.858 57.6193 335.314 56.0826 344.353 57.4144C352.1 57.0047 360.278 61.2049 368.456 61.3074C375.773 63.6636 386.964 63.9709 396.864 63.9709C402.46 63.1514 408.485 63.5612 414.511 63.9709C424.841 62.7416 435.602 64.7905 445.932 63.9709C455.832 66.6345 463.579 62.1269 473.049 63.7661C476.922 64.6881 481.657 64.2783 485.961 64.893C488.544 66.5321 492.848 63.4587 494.57 64.0734C497.152 63.1514 499.304 62.6392 501.456 63.1514C504.9 64.1758 505.33 63.1514 509.634 62.3318C514.799 62.4343 517.382 64.0734 523.408 61.5123C527.282 64.3807 531.155 62.3318 535.46 61.5123C540.194 62.5367 549.663 61.7171 553.968 61.5123C556.981 61.3074 557.841 60.2829 560.854 60.4878C563.006 62.2294 567.741 58.3364 570.324 60.5902C585.819 61.2049 603.036 62.0245 618.961 61.3074C626.709 60.7951 633.596 59.9756 642.204 60.8976C651.243 60.1805 655.977 67.0443 664.586 62.7416C672.764 61.7171 680.511 63.5612 688.259 65.2003C696.007 66.0199 704.185 68.7859 712.793 67.3516C727.858 66.9419 738.618 65.815 752.392 66.737C754.544 64.4832 760.139 64.0734 762.722 65.6101C770.039 62.844 772.621 66.3272 777.356 67.4541C784.673 68.4785 798.877 67.9663 807.485 67.7614C815.233 70.1177 822.981 68.6834 831.159 67.7614C841.058 67.0443 850.958 65.815 860.858 67.7614C869.466 66.4296 876.783 68.9908 884.961 67.2492C894 69.4006 904.761 68.7859 913.799 67.2492C920.256 69.2981 919.395 69.1957 922.838 65.7125C930.155 61.8196 943.498 66.1223 951.676 64.9954C961.146 65.815 970.615 64.3807 977.071 61.7171C986.11 60.078 998.592 60.2829 1010.64 60.7951C1019.25 57.9267 1018.82 59.2585 1024.42 59.2585C1028.72 57.6193 1035.18 59.0536 1040.77 57.6193C1043.36 57.5169 1045.94 56.7998 1048.52 57.312C1049.81 58.6438 1051.96 57.0047 1053.69 56.6973C1061.86 56.39 1076.07 57.0046 1084.68 56.5949C1094.58 57.6193 1104.91 55.8777 1114.81 56.4924C1124.71 55.2631 1135.04 55.5704 1144.94 56.4924C1156.56 55.6729 1165.6 57.6193 1176.79 58.4389C1181.52 60.5902 1186.69 59.5658 1191.42 58.7462C1195.29 57.2095 1196.59 56.4924 1200.89 59.8731C1206.49 60.2829 1210.36 59.4633 1216.82 60.3854C1223.27 61.922 1232.74 62.4343 1240.49 62.1269C1245.65 60.078 1259.43 62.1269 1265.45 63.3563C1271.05 63.1514 1277.94 64.0734 1283.53 64.893C1288.7 64.4832 1294.72 64.893 1299.89 64.9954C1308.5 65.4052 1316.24 63.8685 1324.85 65.4052C1333.89 65.7125 1344.22 64.1758 1352.4 65.6101C1366.17 66.5321 1379.08 69.6055 1393.29 66.3272C1400.61 66.9419 1406.63 65.0978 1414.38 64.9954C1422.13 63.9709 1422.56 63.2538 1427.72 63.0489C1431.6 62.7416 1435.9 62.4343 1441.06 61.7171C1449.67 61.6147 1458.71 61 1467.32 61.3074C1474.21 61.2049 1477.65 63.1514 1483.68 60.6927C1493.15 59.8731 1500.46 60.2829 1510.36 59.8731C1516.82 59.7707 1520.69 58.3364 1526.29 58.8487C1529.73 58.234 1526.29 58.8487 1532.31 58.4389C1536.19 56.2875 1540.49 58.3364 1544.37 58.234C1548.67 58.9511 1551.68 56.1851 1554.7 57.312C1555.56 56.0826 1555.56 55.6729 1556.42 56.6973C1558.57 55.7753 1565.89 57.8242 1568.47 56.5949C1574.5 56.4924 1580.09 56.4924 1586.12 56.5949C1596.02 54.8533 1604.62 55.9802 1614.52 56.1851C1626.58 55.9802 1638.63 56.7998 1650.68 56.1851C1658.86 55.6729 1667.04 55.6729 1675.21 56.1851C1682.1 56.7998 1683.39 53.9313 1689.42 57.0047C1698.46 57.4144 1711.8 58.0291 1720.84 57.1071C1726.43 56.39 1731.6 56.5949 1737.19 57.1071C1748.39 57.8242 1753.55 60.2829 1762.16 59.8731C1772.92 64.1758 1788.41 60.5902 1801.76 60.7951C1808.21 58.9511 1818.11 60.4878 1823.71 60.8976C1827.58 62.9465 1833.18 62.9465 1835.76 62.7416C1841.79 62.0245 1843.51 64.0734 1853.41 64.4832C1862.02 63.6636 1871.06 65.0978 1879.66 64.4832C1894.3 64.9954 1908.93 64.6881 1924 64.4832C1927.87 64.0734 1931.74 64.0734 1935.19 64.4832C1938.63 65.5076 1956.28 64.4832 1958 63.5612C1958 61.1025 1958 60.8976 1958 53.6239C1958 49.4237 1958 38.5644 1958 31.803C1958 23.6074 1958 15.924 1958 9.98214C1958 4.0403 1958 0.0449219 1958 0.0449219H-37C-37 0.0449219 -34.4175 4.0403 -30.9741 10.0846C-27.1003 16.6411 -22.3657 22.8903 -17.6311 32.2128C-12.466 40.1011 -7.73139 47.4772 -3.8576 54.9557C-0.414238 61.8196 2.16829 65.0978 2.16829 64.9954Z"
              fill="white"
            />
          </svg>
        <div className="relative self-center mt-8 ml-7 w-full max-w-[1523px] max-md:max-w-full">


          <div className="flex gap-5 justify-center max-md:flex-col">
            <div className="flex flex-col  max-md:ml-0 max-md:w-full">
              <div className="flex relative flex-col self-stretch my-auto font-bold max-md:mt-10 max-md:max-w-full">
                <svg
                  width="56"
                  height="55"
                  viewBox="0 0 56 55"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute bottom-20    z-10"
                >
                  <rect
                    x="0.953125"
                    y="11.7148"
                    width="44"
                    height="44"
                    rx="22"
                    transform="rotate(-15.3854 0.953125 11.7148)"
                    fill="white"
                  />
                  <g clip-path="url(#clip0_2637_5354)">
                    <path
                      d="M22.6724 37.8891L23.6365 37.6237L20.1875 25.0896L19.2233 25.3549C18.7119 25.4957 18.2773 25.8338 18.0152 26.2949C17.7531 26.7561 17.6849 27.3025 17.8256 27.8139L20.2134 36.4914C20.3541 37.0028 20.6923 37.4374 21.1534 37.6995C21.6146 37.9616 22.1609 38.0298 22.6724 37.8891ZM34.6499 21.11L27.9008 22.9671L28.089 19.4222C28.1058 19.1058 28.0472 18.79 27.918 18.5007C27.7888 18.2114 27.5927 17.9569 27.3459 17.7583C27.0991 17.5596 26.8086 17.4224 26.4984 17.358C26.1882 17.2936 25.8672 17.3038 25.5617 17.3878L25.3448 17.4475L21.9667 24.0171L25.5648 37.0931L36.1706 34.1747L37.6618 24.8489L37.6395 24.436L37.1089 22.5077C36.9681 21.9962 36.63 21.5617 36.1689 21.2996C35.7077 21.0374 35.1613 20.9692 34.6499 21.11Z"
                      fill="#FAA432"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2637_5354">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(13.2461 18.7031) rotate(-15.3854)"
                      />
                    </clipPath>
                  </defs>
                </svg>

                <div className="mr-7 text-7xl text-white leading-[101px] max-md:mr-2.5 max-md:max-w-full max-md:text-4xl max-md:leading-[62px]">
                  The <span className="tracking-tighter">Dnine</span>
                  <br />
                  Wall of <br />
                  Fame
                </div>
                <svg
                  width="46"
                  height="46"
                  viewBox="0 0 46 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-96 -right-16     z-10"
                >
                  <rect
                    x="1.74219"
                    y="0.0898438"
                    width="44"
                    height="44"
                    rx="22"
                    transform="rotate(2.27023 1.74219 0.0898438)"
                    fill="white"
                  />
                  <path
                    d="M19.4336 15.8026C16.5764 15.6893 14.0559 17.7305 13.9459 20.5055C13.87 22.4202 14.7023 24.0673 15.8375 25.4494C16.9697 26.8274 18.4537 28.0051 19.7969 28.9951L22.1163 30.7032C22.2404 30.7944 22.3889 30.8464 22.5427 30.8525C22.6966 30.8586 22.8488 30.8185 22.9796 30.7374L25.427 29.2183C26.8454 28.3378 28.4169 27.2812 29.6537 25.9972C30.8957 24.7092 31.8558 23.1332 31.9317 21.2185C32.0418 18.4435 29.6907 16.2092 26.8335 16.096C25.3597 16.0375 24.0363 16.6768 23.0707 17.5341C22.1761 16.6031 20.9064 15.861 19.4336 15.8026Z"
                    fill="#F5434F"
                  />
                </svg>

                <PlayerCard
                  name={players[0].name}
                  imageSrc={players[0].imageSrc}
                />
              </div>
            </div>
            <div className="flex flex-col ml-5  max-md:ml-0 max-md:w-full">
              <div className="flex relative flex-col  grow  pt-24 text-3xl font-bold leading-snug text-center text-neutral-900 max-md:mt-10 max-md:max-w-full">
                <PlayerCard
                  name={players[1].name}
                  imageSrc={players[1].imageSrc}
                />

                <div className="mt-12 max-md:mt-10">
                  <PlayerCard
                    name={players[2].name}
                    imageSrc={players[2].imageSrc}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col ml-5  max-md:ml-0 max-md:w-full">
              <div className="flex relative flex-wrap gap-3 max-md:mt-10">
                <div className="flex flex-col grow shrink-0 justify-center pb-24 basis-0 w-fit max-md:max-w-full">
                  <PlayerCard
                    name={players[3].name}
                    imageSrc={players[3].imageSrc}
                  />

                  <div className="mt-12 max-md:mt-10">
                    <PlayerCard
                      name={players[4].name}
                      imageSrc={players[4].imageSrc}
                    />
                    <svg
                      width="55"
                      height="55"
                      viewBox="0 0 55 55"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute bottom-0 right-80  z-10"
                    >
                      <rect
                        y="11.7637"
                        width="44"
                        height="44"
                        rx="22"
                        transform="rotate(-15.3854 0 11.7637)"
                        fill="white"
                      />
                      <g clip-path="url(#clip0_2637_5355)">
                        <path
                          d="M21.7192 37.9379L22.6834 37.6726L19.2344 25.1385L18.2702 25.4038C17.7588 25.5445 17.3242 25.8826 17.0621 26.3438C16.8 26.8049 16.7318 27.3513 16.8725 27.8627L19.2603 36.5402C19.401 37.0516 19.7391 37.4862 20.2003 37.7483C20.6614 38.0104 21.2078 38.0786 21.7192 37.9379ZM33.6968 21.1588L26.9477 23.016L27.1359 19.471C27.1527 19.1546 27.094 18.8388 26.9648 18.5495C26.8356 18.2602 26.6396 18.0058 26.3928 17.8071C26.146 17.6085 25.8555 17.4713 25.5453 17.4068C25.2351 17.3424 24.9141 17.3526 24.6086 17.4366L24.3916 17.4963L21.0136 24.066L24.6117 37.142L35.2175 34.2235L36.7087 24.8977L36.6864 24.4848L36.1557 22.5565C36.015 22.0451 35.6769 21.6105 35.2157 21.3484C34.7546 21.0863 34.2082 21.0181 33.6968 21.1588Z"
                          fill="#FAA432"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2637_5355">
                          <rect
                            width="24"
                            height="24"
                            fill="white"
                            transform="translate(12.293 18.752) rotate(-15.3854)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <svg
                      width="46"
                      height="46  "
                      viewBox="0 0 52 52"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute top-0 right-96   z-10"
                    >
                      <rect
                        x="0.421875"
                        y="8.68213"
                        width="44"
                        height="44"
                        rx="22"
                        transform="rotate(-10.7011 0.421875 8.68213)"
                        fill="white"
                      />
                      <path
                        d="M21.1855 20.0237C18.3758 20.5547 16.3777 23.1095 16.8934 25.8384C17.2492 27.7213 18.43 29.1395 19.8465 30.2316C21.2591 31.3202 22.9696 32.1348 24.5008 32.798L27.1444 33.9419C27.2857 34.003 27.4421 34.0203 27.5934 33.9917C27.7447 33.9631 27.884 33.8899 27.9934 33.7815L30.0373 31.7518C31.2218 30.5754 32.5161 29.193 33.4331 27.6641C34.3543 26.1303 34.9362 24.379 34.5804 22.4961C34.0647 19.7672 31.2721 18.1176 28.4624 18.6486C27.0131 18.9225 25.867 19.8425 25.1185 20.8946C24.0376 20.1882 22.6338 19.75 21.1855 20.0237Z"
                        fill="#F5434F"
                      />
                    </svg>
                    <svg
                      width="57"
                      height="58"
                      viewBox="0 0 57 58"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute top-96 -right-16     z-10"
                    >
                      <rect
                        x="15.5508"
                        y="0.820312"
                        width="44"
                        height="44"
                        rx="22"
                        transform="rotate(19.6825 15.5508 0.820312)"
                        fill="white"
                      />
                      <path
                        d="M27.7259 21.1064C25.0336 20.1433 22.0177 21.3367 21.0823 23.9516C20.4369 25.7558 20.7382 27.5765 21.4078 29.235C22.0758 30.8886 23.1394 32.4565 24.1248 33.8031L25.8268 36.127C25.9178 36.2511 26.044 36.3452 26.189 36.397C26.3339 36.4489 26.4911 36.4562 26.6403 36.418L29.4301 35.7008C31.047 35.2851 32.8627 34.7472 34.427 33.8921C35.9975 33.0349 37.3853 31.8184 38.0307 30.0141C38.966 27.3992 37.3913 24.5638 34.699 23.6007C33.3102 23.1039 31.8561 23.3179 30.6782 23.8469C30.1032 22.6908 29.1138 21.6028 27.7259 21.1064Z"
                        fill="#F5434F"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <svg
          width="1920"
          height="36"
          viewBox="0 0 1920 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0   z-10"
        >
          <path
            d="M2.16829 4.09444C8.19418 6.55313 13.7896 2.96754 19.8155 3.58221C22.3981 3.58221 26.2718 4.60667 28.8544 3.68466C31.8673 2.76265 33.1586 6.34824 35.7411 5.01645C41.3366 4.914 48.2233 7.27025 54.2492 5.42624C58.123 9.11427 61.9968 5.1189 65.4401 5.42624C72.3269 3.37732 73.1877 3.68465 78.7832 6.55313C81.7961 3.7871 85.2395 7.16781 89.1133 6.86047C93.8479 7.78248 91.6958 5.42624 94.7087 6.34824C101.165 10.4461 107.191 7.27026 113.647 5.83602C117.521 6.65558 119.243 5.01645 123.977 5.01645C129.573 0.918625 135.599 2.96754 141.194 4.50422C146.79 5.52868 157.55 5.22134 162.715 4.60667C163.146 5.83602 162.285 5.83601 165.298 6.0409C169.172 6.14335 175.628 5.22134 179.932 6.0409C186.819 8.80693 188.971 7.3727 190.262 8.29471C201.883 10.4461 210.922 10.651 222.113 10.7534C226.417 12.2901 232.443 10.3436 236.748 10.651C244.065 10.8558 250.091 9.93384 256.117 11.573C260.421 8.70449 266.877 13.6219 270.32 13.5194C273.764 14.6463 271.612 13.9292 277.207 14.9537C285.816 16.183 296.146 15.4659 304.754 13.9292C308.628 12.9048 312.502 14.339 316.375 13.9292C328.858 11.4705 335.314 13.0072 344.353 11.6754C352.1 12.0852 360.278 7.88493 368.456 7.78248C375.773 5.42623 386.964 5.1189 396.864 5.1189C402.46 5.93846 408.485 5.52868 414.511 5.1189C424.841 6.34824 435.602 4.29933 445.932 5.1189C455.832 2.45531 463.579 6.96292 473.049 5.32379C476.922 4.40178 481.657 4.81156 485.961 4.19688C488.544 2.55775 492.848 5.63112 494.57 5.01645C497.152 5.93846 499.304 6.45069 501.456 5.93846C504.9 4.91401 505.33 5.93846 509.634 6.75803C514.799 6.65558 517.382 5.01645 523.408 7.57759C527.282 4.70911 531.155 6.75803 535.46 7.57759C540.194 6.55313 549.663 7.3727 553.968 7.57759C556.981 7.78248 557.841 8.80693 560.854 8.60204C563.006 6.86047 567.741 10.7534 570.324 8.4996C585.819 7.88493 603.036 7.06536 618.961 7.78248C626.709 8.29471 633.596 9.11427 642.204 8.19226C651.243 8.90938 655.977 2.04553 664.586 6.34824C672.764 7.3727 680.511 5.52868 688.259 3.88955C696.007 3.06998 704.185 0.303955 712.793 1.7382C727.858 2.14798 738.618 3.27488 752.392 2.35287C754.544 4.60667 760.139 5.01645 762.722 3.47977C770.039 6.2458 772.621 2.76265 777.356 1.63575C784.673 0.611298 798.877 1.12352 807.485 1.32841C815.233 -1.02784 822.981 0.406403 831.159 1.32841C841.058 2.04553 850.958 3.27488 860.858 1.32841C869.466 2.6602 876.783 0.0990677 884.961 1.84064C894 -0.310715 904.761 0.303955 913.799 1.84064C920.256 -0.208275 919.395 -0.105827 922.838 3.37732C930.155 7.27025 943.498 2.96754 951.676 4.09444C961.146 3.27488 970.615 4.70911 977.071 7.3727C986.11 9.01183 998.592 8.80694 1010.64 8.29471C1019.25 11.1632 1018.82 9.83139 1024.42 9.83139C1028.72 11.4705 1035.18 10.0363 1040.77 11.4705C1043.36 11.573 1045.94 12.2901 1048.52 11.7779C1049.81 10.4461 1051.96 12.0852 1053.69 12.3925C1061.86 12.6999 1076.07 12.0852 1084.68 12.495C1094.58 11.4705 1104.91 13.2121 1114.81 12.5974C1124.71 13.8268 1135.04 13.5194 1144.94 12.5974C1156.56 13.417 1165.6 11.4705 1176.79 10.651C1181.52 8.4996 1186.69 9.52406 1191.42 10.3436C1195.29 11.8803 1196.59 12.5974 1200.89 9.21672C1206.49 8.80694 1210.36 9.6265 1216.82 8.70449C1223.27 7.16781 1232.74 6.65558 1240.49 6.96292C1245.65 9.01183 1259.43 6.96292 1265.45 5.73357C1271.05 5.93846 1277.94 5.01645 1283.53 4.19688C1288.7 4.60667 1294.72 4.19689 1299.89 4.09444C1308.5 3.68466 1316.24 5.22134 1324.85 3.68466C1333.89 3.37732 1344.22 4.914 1352.4 3.47977C1366.17 2.55775 1379.08 -0.51561 1393.29 2.76265C1400.61 2.14798 1406.63 3.992 1414.38 4.09444C1422.13 5.1189 1422.56 5.83601 1427.72 6.0409C1431.6 6.34824 1435.9 6.65558 1441.06 7.3727C1449.67 7.47515 1458.71 8.08982 1467.32 7.78248C1474.21 7.88493 1477.65 5.93846 1483.68 8.39716C1493.15 9.21672 1500.46 8.80694 1510.36 9.21672C1516.82 9.31916 1520.69 10.7534 1526.29 10.2412C1529.73 10.8559 1526.29 10.2412 1532.31 10.651C1536.19 12.8023 1540.49 10.7534 1544.37 10.8558C1548.67 10.1387 1551.68 12.9048 1554.7 11.7779C1555.56 13.0072 1555.56 13.417 1556.42 12.3925C1558.57 13.3145 1565.89 11.2656 1568.47 12.495C1574.5 12.5974 1580.09 12.5974 1586.12 12.495C1596.02 14.2366 1604.62 13.1096 1614.52 12.9048C1626.58 13.1096 1638.63 12.2901 1650.68 12.9048C1658.86 13.417 1667.04 13.417 1675.21 12.9048C1682.1 12.2901 1683.39 15.1586 1689.42 12.0852C1698.46 11.6754 1711.8 11.0607 1720.84 11.9827C1726.43 12.6999 1731.6 12.495 1737.19 11.9827C1748.39 11.2656 1753.55 8.80694 1762.16 9.21672C1772.92 4.91401 1788.41 8.4996 1801.76 8.29471C1808.21 10.1387 1818.11 8.60205 1823.71 8.19226C1827.58 6.14335 1833.18 6.14335 1835.76 6.34824C1841.79 7.06536 1843.51 5.01645 1853.41 4.60667C1862.02 5.42624 1871.06 3.992 1879.66 4.60667C1894.3 4.09444 1908.93 4.40178 1924 4.60667C1927.87 5.01645 1931.74 5.01645 1935.19 4.60667C1938.63 3.58221 1956.28 4.60667 1958 5.52868C1958 7.98737 1958 8.19226 1958 15.4659C1958 19.6662 1958 30.5254 1958 37.2868C1958 45.4824 1958 53.1659 1958 59.1077C1958 65.0495 1958 69.0449 1958 69.0449H-37C-37 69.0449 -34.4175 65.0495 -30.9741 59.0053C-27.1003 52.4487 -22.3657 46.1996 -17.6311 36.877C-12.466 28.9887 -7.73139 21.6126 -3.8576 14.1341C-0.414238 7.27025 2.16829 3.992 2.16829 4.09444Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
}