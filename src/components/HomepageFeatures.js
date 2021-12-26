import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Doughnut',
    Svg: require('../../static/img/chart_doughnut_fix.svg').default,
    description: (
      <>
       A doughnut chart created in Keynote, copied as PDF and converted to SVG.
      </>
    ),
  },
  {
    title: 'Stacked Column',
    Svg: require('../../static/img/chart_column_fix.svg').default,
    description: (
      <>
       A stacked column chart created in Keynote, copied as PDF and converted to SVG.
      </>
    ),
  },
  {
    title: 'Area',
    Svg: require('../../static/img/chart_area_fix.svg').default,
    description: (
      <>
        An area chart created in Keynote, copied as PDF and converted to SVG.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
