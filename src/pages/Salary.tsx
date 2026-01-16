import { useEffect, useRef, useState } from "react";
import {
  ArrowsIcon,
  CheckBoxsICon,
  CheckIcon,
  CoinIcon,
  RefreshIcon,
  StarsIcon,
  StoreIcon,
  WarnigIcon,
  XIcon,
} from "../components/Icons";
import styles from "./styles.module.css";
import { Title } from "../components/Title";
import { Paragraph } from "../components/Paragraph";

import emptyImg from "../assets/image.png";
export const Salary = () => {
  const [empty, setEmpty] = useState(true);
  const [loading, setLoading] = useState(false);

  const valueRef = useRef(null);
  const [refValue, setRefValue] = useState(() => valueRef.current ?? null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true);
      try {
        const v = valueRef.current;
        if (!cancelled) setRefValue(v?.clientWidth);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  console.log("clientWidth", refValue);

  return (
    <>
      <div className={styles.fixButtons}>
        <div
          className={[styles.refreshBtn, !empty ? styles.active : ""].join(" ")}
          onClick={() => setEmpty(false)}
        >
          Design 1
        </div>
        <div
          className={[styles.refreshBtn, empty ? styles.active : ""].join(" ")}
          onClick={() => setEmpty(true)}
        >
          Design 2
        </div>
      </div>
      <div className={styles.salary}>
        <div className={styles.main}>
          {/* header */}
          <div className={styles.salaryHeader}>
            <CoinIcon />
            <div>
              <Title title="Salary Offer" blockTitle />
              <Paragraph
                text="AI-driven compensation analysis for Senior Frontend Developer."
                blockText
              />
            </div>
            <span className={styles.exit}>
              <XIcon />
            </span>
          </div>

          {empty ? (
            <div className={styles.emptySection}>
              <div className={styles.emptyImage}>
                <img src={emptyImg} alt="Empty data" />
              </div>
              <Title title="No salary data yet" blockTitle />
              <Paragraph
                text="We couldn’t generate a salary recommendation yet. Update or complete the key factors, then refresh to recalculate."
                blockText
                className={styles.p}
              />
              <div className={styles.refreshBtn}>
                <RefreshIcon />
                Refresh
              </div>
            </div>
          ) : (
            <>
              {/* select */}
              <div className={styles.selectSection}>
                <div className={styles.select}>
                  <div className={styles.left}>
                    <Title title="Ivan Petrov" />
                    <Paragraph text="Middle Frontend Developer" />
                  </div>
                  <div className={styles.right}>
                    <div className={styles.tag}>
                      <span>
                        <StarsIcon />
                      </span>
                      AI Fit: 94%
                    </div>
                    <div className={styles.btn}>
                      <ArrowsIcon />
                    </div>
                  </div>
                </div>
              </div>

              {/* price */}
              <div className={styles.price}>
                <Title
                  icon={<CoinIcon fill="#000" />}
                  title=" Recommended Base Salary"
                />

                <div className={styles.priceTitle}>15,000,000 UZS</div>
                <span className={styles.tag}>
                  <CheckIcon fill="#009966" /> Within Budget
                </span>
              </div>

              {/* range */}
              <div className={styles.range}>
                <Title icon={<StoreIcon />} title=" Market Comparison" />

                <div className={styles.rangeSlider}>
                  <div className={styles.rangeActive}>
                    <span className={styles.center}></span>
                    <span
                      className={styles.indicator}
                      style={{
                        left: "80%",
                        transform: "translateX(80% - 12px)",
                      }}
                    >
                      {loading ? (
                        ""
                      ) : (
                        <p
                          className={styles.indicatorValue}
                          ref={valueRef}
                          style={{
                            left: "-21px",
                          }}
                        >
                          15M UZS
                        </p>
                      )}
                    </span>
                  </div>
                </div>

                <div className={styles.items}>
                  <span>12M</span>
                  <span>AVG</span>
                  <span>17M</span>
                </div>

                <Paragraph
                  icon={<WarnigIcon />}
                  text="Based on 120 similar roles in your region"
                />
              </div>

              {/* Key factors */}

              <div className={styles.factors}>
                <Title icon={<CheckBoxsICon />} title="Key factors" />
                <ul className={styles.infos}>
                  <li className={styles.info}>
                    <CheckIcon fill="#0EA9AA" />6 years experience confirmed
                  </li>
                  <li className={styles.info}>
                    <CheckIcon fill="#0EA9AA" />
                    Strong match for React
                  </li>
                  <li className={styles.info}>
                    <CheckIcon fill="#0EA9AA" />
                    High demand in current quarter
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
