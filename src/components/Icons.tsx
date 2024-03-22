import { motion } from "framer-motion";
import { LucideProps } from "lucide-react";
import type { Transition } from "framer-motion";

const transition: Transition = {
  duration: 5,
  yoyo: Infinity,
  ease: "easeInOut",
  repeat: Infinity,
  repeatDelay: 2
};

export const Icons = {
  flag: (props: LucideProps) => (
    <svg
      width="50"
      height="57"
      viewBox="0 0 50 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.5 15.5V57M8.5 13H14.5M15.5 16.5H22M22 20.5H26M26 23.5H35.5M35.5 20.5H50M44.5 22V25M41.5 25V29.5M38.5 29.5V36.5M35.5 37.5H29.5M29.5 41.5H18M18 37.5H7.5M6.5 0V4.5M8.5 6H12M6.5 8V12M5 6H0"
        stroke="#C51327"
        strokeWidth="4"
      />
    </svg>
  ),
  arrow: (props: LucideProps) => (
    <svg
      width="198"
      height="18"
      viewBox="0 0 198 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={transition}
        d="M197.5 8.5H0"
        stroke="#C51327"
        strokeWidth="2"
        strokeDasharray="4 4"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={transition}
        d="M37 16.5L45.5 8.5L37 1M107.5 16.5L117 8.5L107.5 1M179.5 16.5L188.5 8.5L179.5 1"
        stroke="#C51327"
        strokeWidth="2"
      />
    </svg>
  ),
  graph: (props: LucideProps) => (
    <svg
      width="198"
      height="51"
      viewBox="0 0 198 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={transition}
        d="M1 38.5V49.5H11.5M11.5 2H1V14M196.5 38.5V49.5H185M196.5 14V2H185"
        stroke="#C51327"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={transition}
        d="M1.5 47.5C13.3994 42.8054 17.5452 37.5306 21 24C24.6579 7.86231 28.3916 1.63793 39 1C51.604 1.07447 53.5796 9.86398 58 24C62.6165 39.4792 66.8845 44.1818 78.5 48.5C81.8416 49.8103 83.9076 49.86 88 48.5"
        stroke="#C51327"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={transition}
        d="M188.358 24.7622C184.302 40.0814 180.552 44.7354 170.347 49.0089C167.411 50.3057 165.596 50.3549 162 49.0089"
        stroke="#C51327"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={transition}
        d="M86.5 49C98.3994 44.3054 101.045 37.5306 104.5 24C108.158 7.86231 111.892 1.63793 122.5 1C135.104 1.07447 137.08 9.86398 141.5 24C146.116 39.4792 151.885 45.1818 163.5 49.5"
        stroke="#C51327"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={transition}
        d="M188 26C190.217 17.6202 192.09 13.4829 197 7.5"
        stroke="#C51327"
      />
    </svg>
  ),
  emptyGraph: (props: LucideProps) => (
    <svg
      width="446"
      height="304"
      viewBox="0 0 446 304"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M1 0.5V303H445.5" stroke="#C51327" strokeWidth="2" />
    </svg>
  ),
  trident: (props: LucideProps) => (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_11_2)">
        <path
          d="M7 1C3.54223 3.28611 2.27457 4.85433 2 8.5C2.68049 13.4767 5.40236 14.1047 10.5 15C16.0576 14.9894 18.1058 13.6625 19.5 8.5C18.157 3.02698 15.8652 1.76148 10.5 1V20.5M10.5 39V58.5M20 40L1 58.5M20 58.5L1 39M20 49H1"
          stroke="#C51327"
        />
      </g>
      <defs>
        <clipPath id="clip0_11_2">
          <rect width="21" height="59" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  star: (props: LucideProps) => (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_11_2)">
        <path
          d="M7 -37C3.54223 -34.7139 2.27457 -33.1457 2 -29.5C2.68049 -24.5233 5.40236 -23.8953 10.5 -23C16.0576 -23.0106 18.1058 -24.3375 19.5 -29.5C18.157 -34.973 15.8652 -36.2385 10.5 -37V-17.5M10.5 1V20.5M20 2L1 20.5M20 20.5L1 1M20 11H1"
          stroke="#C51327"
        />
      </g>
      <defs>
        <clipPath id="clip0_11_2">
          <rect
            width="21"
            height="59"
            fill="white"
            transform="translate(0 -38)"
          />
        </clipPath>
      </defs>
    </svg>
  ),
  square: (props: LucideProps) => (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 6.5V0.5H6.5M14 0.5H20V6.5M20 13.5V19.5H14M6.5 19.5H1V13.5M11 3.5L3.5 10.5L11 17.5L17.5 10.5L11 3.5Z"
        stroke="#C51327"
      />
    </svg>
  ),
  leftArrow: (props: LucideProps) => (
    <svg
      width="22"
      height="18"
      viewBox="0 0 22 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10 1L1 9L10 17.5M15.5 1L7 9L15.5 17.5M21 1L13 9L20 16.5"
        stroke="#C51327"
      />
    </svg>
  ),
  question: (props: LucideProps) => (
    <svg
      width="1600"
      height="775"
      viewBox="0 0 1600 775"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="1600" height="775" fill="#fff" />
      <path
        d="M1255.23 648.05C1255.23 648.75 1255.19 649.275 1255.13 649.625C1255.06 649.958 1254.91 650.3 1254.68 650.65C1254.44 650.983 1254.03 651.45 1253.45 652.05L1252.13 653.4V655.8H1250V652.775L1251.45 651.25C1251.98 650.683 1252.36 650.258 1252.58 649.975C1252.79 649.692 1252.93 649.442 1253 649.225C1253.07 648.992 1253.1 648.675 1253.1 648.275V647.025C1253.1 646.508 1252.95 646.108 1252.65 645.825C1252.35 645.542 1251.89 645.4 1251.28 645.4H1248.15V643.5H1251.03C1253.83 643.5 1255.23 644.75 1255.23 647.25V648.05ZM1252.33 658.5V661H1249.83V658.5H1252.33Z"
        fill="#C51327"
      />
    </svg>
  ),
};
