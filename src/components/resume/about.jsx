import React from 'react'

export const About = ({data}) => {
  return (
    <section>
      <h2 className="title">About</h2>
      <p className="dark:text-gray-100">{data.summary}</p>
    </section>
  );
}
