import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  // Default code - not needed. John wrote this and doesn't want to redesign the home page
  //{
  //  title: 'Easy to Use',
  //  Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
  //  description: (
  //    <>
  //      This community documentation framework was designed from the ground up to be easy to edit.
  //    </>
  //  ),
  //},
  //{
  //  title: 'Focus on What Matters',
  //  Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
  //  description: (
  //    <>
  //      GitHub lets you focus on your contributions, and it lets 🤖🤖🤖 do the chores.
  //    </>
  //  ),
  //},
  //{
  //  title: 'Powered by Science',
  //  Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
  //  description: (
  //    <>
  //      Extend our website layout by reusing React and simple markdown.
  //    </>
  //  ),
  //},
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
