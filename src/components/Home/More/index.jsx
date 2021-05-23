import React from 'react';
import { SVGs } from './icons';
import useThemeContext from '@theme/hooks/useThemeContext';
const products = [
  {
    product: 'React Native Aria',
    link:
      'https://react-native-aria.geekyants.com/?utm_source=RnD&utm_medium=Landing_Page&utm_campaign=NativeBase_3',
  },
  {
    product: 'SyncState',
    link:
      'https://syncstate.github.io/?utm_source=RnD&utm_medium=Landing_Page&utm_campaign=NativeBase_3',
  },
  {
    product: 'Formst',
    link:
      'https://formst.geekyants.com/?utm_source=RnD&utm_medium=Landing_Page&utm_campaign=NativeBase_3',
  },
  {
    product: 'React Pluggable',
    link:
      'https://react-pluggable.github.io/?utm_source=RnD&utm_medium=Landing_Page&utm_campaign=NativeBase_3',
  },
  {
    product: 'Flutter Starter',
    link:
      'https://flutter-starter.geekyants.com/?utm_source=RnD&utm_medium=Landing_Page&utm_campaign=NativeBase_3',
  },
];

function Product({ product, link, productColor }) {
  return (
    <div className={'px-3'}>
      <a
        href={link}
        style={{ textDecorationLine: 'none' }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          className="max-h-sm justify-center flex align-center"
          style={{
            minHeight: '100px',
          }}
        >
          {SVGs[product]}
        </div>
        <div>
          <h3 className={`text-center ${productColor} text-sm`}>{product}</h3>
        </div>
      </a>
    </div>
  );
}
export function More() {
  const { isDarkTheme } = useThemeContext();
  const headingColor = !isDarkTheme ? 'text-gray-800' : 'text-gray-200';
  const subHeadingColor = !isDarkTheme ? 'text-gray-600' : 'text-gray-400';
  const productColor = !isDarkTheme ? 'text-gray-600' : 'text-white';
  return (
    <section>
      <div className="px-4 md:px-0">
        <div className="py-12  md:py-20">
          <div className="flex flex-col space-x-0 space-y-2 md:flex-row md:space-y-0 md:space-x-7 pb-12 md:pb-20">
            <div className="mt-1">{SVGs.Logo}</div>
            <div>
              <h2 className={`leading-snug text-4xl ${headingColor}`}>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-purple-700">
                  More from the Authors
                </span>
              </h2>
              <p className={`text-xl mt-7 leading-normal ${subHeadingColor}`}>
                Interested in knowing what else we've worked on? We're
                delighted! Take a look at our other projects.
              </p>
            </div>
          </div>
          <div className="max-w-sm mx-auto md:max-w-none">
            <div className="flex md:pl-16 flex-wrap gap-y-5 md:gap-y-0 gap-x-0.5">
              {products.map((props, idx) => {
                return (
                  <article className="" data-aos="zoom-y-out" key={idx}>
                    <Product productColor={productColor} {...props} />
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
